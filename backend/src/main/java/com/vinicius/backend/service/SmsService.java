package com.vinicius.backend.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.vinicius.backend.models.Sales;
import com.vinicius.backend.repositories.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SmsService {

    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    @Autowired
    private SaleRepository repository;

    public void sendSms(Long saleId) {
        Sales sale = repository.findById(saleId).get();

        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

        String msg = "Seller " + sale.getSellerName() + "was featured in " + date
                +" with a total of R$" + String.format("%.2f", sale.getAmount()) + " billed";

        Twilio.init(twilioSid, twilioKey);

        PhoneNumber to = new PhoneNumber(twilioPhoneTo);
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        Message message = Message.creator(to, from, msg).create();

        System.out.println(message.getSid());
    }
}
