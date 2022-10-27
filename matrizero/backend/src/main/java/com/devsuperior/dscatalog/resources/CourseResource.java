package com.devsuperior.dscatalog.resources;

import com.devsuperior.dscatalog.dto.CourseDTO;
import com.devsuperior.dscatalog.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/courses")
public class CourseResource {

	@Autowired
	private CourseService service;
	
	@GetMapping
	public ResponseEntity<Page<CourseDTO>> findAll(
			@RequestParam(value = "typeId", defaultValue = "0") Long typeId,
			@RequestParam(value = "name", defaultValue = "") String name,
			Pageable pageable) {
		
		Page<CourseDTO> list = service.findAllPaged(typeId, name.trim(), pageable);
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<CourseDTO> findById(@PathVariable Long id) {
		CourseDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<CourseDTO> insert(@Valid @RequestBody CourseDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<CourseDTO> update(@PathVariable Long id, @Valid @RequestBody CourseDTO dto) {
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
} 
