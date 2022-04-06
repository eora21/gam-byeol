package com.b205.gambyeol.comments.service;

import com.b205.gambyeol.comments.domain.Comment;
import com.b205.gambyeol.comments.domain.CommentRepository;
import com.b205.gambyeol.comments.dto.CommentRequestDto;
import com.b205.gambyeol.comments.dto.CommentResponseDto;
import com.b205.gambyeol.stars.domain.Star;
import com.b205.gambyeol.stars.domain.StarRepository;
import com.b205.gambyeol.stars.dto.StarResponseDto;
import com.b205.gambyeol.users.domain.Users;
import com.b205.gambyeol.users.domain.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final StarRepository starRepository;
    private final CommentRepository commentRepository;
    private final UsersRepository usersRepository;

    @Transactional
    public List<CommentResponseDto> findAllByStarId(final Long starId) {
        Star findstar = starRepository.findByStarId(starId);
        Sort sort = Sort.by(Sort.Direction.DESC, "date");
        List<Comment> list = commentRepository.findAllByStarStarId(findstar.getStarId(), sort);
        return list.stream().map(CommentResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public Long save(@NotNull CommentRequestDto params, final long userId, final long starId) {
        // 작성자 등록
        Users finduser = usersRepository.findByUserId(userId);
        params.setUser(finduser);

        Star findstar = starRepository.findByStarId(starId);
        params.setStar(findstar);

        Comment entity = commentRepository.save(params.toEntity());
        return entity.getCommentId();
    }

    @Transactional
    public Boolean delete(final long userId, final long commentId) {
        Comment entity = commentRepository.findByCommentId(commentId);
        if (entity.getUser().getUserId().equals(userId)){
            commentRepository.delete(entity);
            return true;
        }
        return false;
    }
}
