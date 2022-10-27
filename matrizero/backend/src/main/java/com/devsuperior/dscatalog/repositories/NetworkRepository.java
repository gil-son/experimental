package com.devsuperior.dscatalog.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Network;

@Repository
public interface NetworkRepository extends JpaRepository<Network, Long> {

	@Query("SELECT DISTINCT obj FROM Network obj INNER JOIN obj.categories cats WHERE "
			+ "(COALESCE(:categories) IS NULL OR cats IN :categories) AND "
			+ "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%'))) ")
	Page<Network> find(List<Category> categories, String name, Pageable pageable);
	
	@Query("SELECT obj FROM Network obj JOIN FETCH obj.categories WHERE obj IN :networks")
	List<Network> findProductsWithCategories(List<Network> networks);
}
