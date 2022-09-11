package com.vinicius.backend.service;

import com.vinicius.backend.models.Sales;
import com.vinicius.backend.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {
    @Autowired
    private SaleRepository repository;

    public List<Sales> findSales() {
        return repository.findAll();
    }
}
