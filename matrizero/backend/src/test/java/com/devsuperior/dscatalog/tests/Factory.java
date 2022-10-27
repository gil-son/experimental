package com.devsuperior.dscatalog.tests;

import java.time.Instant;

import com.devsuperior.dscatalog.dto.NetworkDTO;
import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Network;

public class Factory {
	
	public static Network createProduct() {
		Network network = new Network(1L, "Phone", "Good Phone", 800.0, "https://img.com/img.png", Instant.parse("2020-10-20T03:00:00Z"));
		network.getCategories().add(new Category(1L, "GitHub"));
		return network;
	}
	
	public static NetworkDTO createProductDTO() {
		Network network = createProduct();
		return new NetworkDTO(network, network.getCategories());
	}
}
