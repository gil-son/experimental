package com.devsuperior.dscatalog.services;

import com.devsuperior.dscatalog.dto.TypeDTO;
import com.devsuperior.dscatalog.dto.CourseDTO;
import com.devsuperior.dscatalog.entities.Type;
import com.devsuperior.dscatalog.entities.Course;
import com.devsuperior.dscatalog.repositories.TypeRepository;
import com.devsuperior.dscatalog.repositories.CourseRepository;
import com.devsuperior.dscatalog.services.exceptions.DatabaseException;
import com.devsuperior.dscatalog.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

	@Autowired
	private CourseRepository repository;
	
	@Autowired
	private TypeRepository typeRepository;
	
	@Transactional(readOnly = true)
	public Page<CourseDTO> findAllPaged(Long categoryId, String name, Pageable pageable) {
		List<Type> categories = (categoryId == 0) ? null : Arrays.asList(typeRepository.getOne(categoryId));
		Page<Course> page = repository.find(categories, name, pageable);
		repository.findCoursesWithTypes(page.getContent());
		return page.map(x -> new CourseDTO(x, x.getTypes()));
	}

	@Transactional(readOnly = true)
	public CourseDTO findById(Long id) {
		Optional<Course> obj = repository.findById(id);
		Course entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new CourseDTO(entity, entity.getTypes());
	}

	@Transactional
	public CourseDTO insert(CourseDTO dto) {
		Course entity = new Course();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new CourseDTO(entity);
	}

	@Transactional
	public CourseDTO update(Long id, CourseDTO dto) {
		try {
			Course entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);
			return new CourseDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}		
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}
	
	private void copyDtoToEntity(CourseDTO dto, Course entity) {

		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		entity.setDate(dto.getDate());
		entity.setImgUrl(dto.getImgUrl());
		entity.setPrice(dto.getPrice());
		
		entity.getTypes().clear();
		for (TypeDTO typeDto : dto.getTypes()) {
			Type category = typeRepository.getOne(typeDto.getId());
			entity.getTypes().add(category);			
		}
	}	
}
