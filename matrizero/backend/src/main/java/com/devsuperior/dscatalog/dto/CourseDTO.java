package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.entities.Type;
import com.devsuperior.dscatalog.entities.Course;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class CourseDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@Size(min = 5, max = 60, message = "Deve ter entre 5 e 60 caracteres")
	@NotBlank(message = "Campo requerido")
	private String name;

	@NotBlank(message = "Campo requerido")
	private String description;

	@Positive(message = "Preço deve ser um valor positivo")
	private Double price;

	private String imgUrl;

	@PastOrPresent(message = "A data do produto não pode ser futura")
	private Instant date;

	@NotEmpty(message = "Produto sem categoria não é permitido")
	private List<TypeDTO> types = new ArrayList<>();

	public CourseDTO() {
	}

	public CourseDTO(Long id, String name, String description, Double price, String imgUrl, Instant date) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgUrl = imgUrl;
		this.date = date;
	}

	public CourseDTO(Course entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.description = entity.getDescription();
		this.price = entity.getPrice();
		this.imgUrl = entity.getImgUrl();
		this.date = entity.getDate();
	}

	public CourseDTO(Course entity, Set<Type> types) {
		this(entity);
		types.forEach(cat -> this.types.add(new TypeDTO(cat)));
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}

	public List<TypeDTO> getTypes() {
		return types;
	}

	public void setTypes(List<TypeDTO> types) {
		this.types = types;
	}
}
