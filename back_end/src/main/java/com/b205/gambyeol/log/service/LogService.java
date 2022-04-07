package com.b205.gambyeol.log.service;

import com.b205.gambyeol.log.domain.LoginUserInfoRepository;
import com.b205.gambyeol.log.domain.LoginUserInformation;
import com.b205.gambyeol.log.dto.LoginUserInfoResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class LogService {

    @Autowired
    private final LoginUserInfoRepository loginLogRepository;

    public List<LoginUserInfoResponseDto> findAll() {

        Sort sort = Sort.by(Sort.Direction.DESC, "loginUserDatetime");
        List<LoginUserInformation> list = loginLogRepository.findAll(sort);
        return list.stream().map(LoginUserInfoResponseDto::new).collect(Collectors.toList());
    }


}
