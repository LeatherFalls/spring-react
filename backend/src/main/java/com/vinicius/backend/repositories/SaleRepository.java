package com.vinicius.backend.repositories;

import com.vinicius.backend.models.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sales, Long> {
}
