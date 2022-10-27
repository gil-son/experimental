package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.entities.Type;

import java.io.Serializable;

public class TypeDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	
	public TypeDTO() {
	}

	public TypeDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public TypeDTO(Type entity) {
		this.id = entity.getId();
		this.name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
