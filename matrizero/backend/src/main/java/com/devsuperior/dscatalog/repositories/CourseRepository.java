package com.devsuperior.dscatalog.repositories;

import com.devsuperior.dscatalog.entities.Course;
import com.devsuperior.dscatalog.entities.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

	@Query("SELECT DISTINCT obj FROM Course obj INNER JOIN obj.types cats WHERE "
			+ "(COALESCE(:types) IS NULL OR cats IN :types) AND "
			+ "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%'))) ")
    Page<Course> find(List<Type> types, String name, Pageable pageable);

	@Query("SELECT obj FROM Course obj JOIN FETCH obj.types WHERE obj IN :courses")
	List<Course> findCoursesWithTypes(List<Course> courses);
}
