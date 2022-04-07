package com.b205.gambyeol.stars.dto;

import com.b205.gambyeol.stars.domain.Emotions;
import com.b205.gambyeol.stars.domain.Star;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class StarResponseDto {

    private Long starId;
    private String content;
    private LocalDateTime date;
    private String imageName; // 이미지 url
    private double latitude; // 위도
    private double longitude; // 경도
    private String addr; // 주소
    private Emotions mood; // 기분(HAPPY, NORMAL, SAD, ANGRY)
    private String writer; // 작성자
    private Long userId;   // 작성자 id

    public StarResponseDto(Star entity) {
        this.starId = entity.getStarId();
        this.content = entity.getContent();
        this.date = entity.getDate();
        this.imageName = entity.getImageName();
        this.latitude = entity.getLatitude();
        this.longitude = entity.getLongitude();
        this.addr = entity.getAddr();
        this.mood = entity.getMood();
        this.writer = entity.getUser().getNickname();
        this.userId = entity.getUser().getUserId();
    }
}
