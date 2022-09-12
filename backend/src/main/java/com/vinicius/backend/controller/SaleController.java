package com.vinicius.backend.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.vinicius.backend.models.Sales;
import com.vinicius.backend.service.SaleService;
import com.vinicius.backend.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
    @Autowired
    public SaleService service;

    @Autowired
    public SmsService smsService;

    @GetMapping
    public Page<Sales> findSales(
            @RequestParam(value = "minDate", defaultValue = "") String minDate,
            @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
            Pageable pageable) {

        return service.findSales(minDate, maxDate, pageable);
    }

    @GetMapping("/{id}/notification")
    public void notifySms(@PathVariable Long id) {
        smsService.sendSms(id);
    }
}
