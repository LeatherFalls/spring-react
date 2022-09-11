package com.vinicius.backend.controller;

import com.vinicius.backend.models.Sales;
import com.vinicius.backend.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
    @Autowired
    public SaleService service;

    @GetMapping
    public List<Sales> findSales() {
        return service.findSales();
    }
}
