package org.geonetwork.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Embeddable
public class UsersearchGroupId implements Serializable {
    private static final long serialVersionUID = -8651910760872647896L;
    @NotNull
    @Column(name = "usersearch_id", nullable = false)
    private Integer usersearchId;

    @NotNull
    @Column(name = "group_id", nullable = false)
    private Integer groupId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        UsersearchGroupId entity = (UsersearchGroupId) o;
        return Objects.equals(this.groupId, entity.groupId) &&
            Objects.equals(this.usersearchId, entity.usersearchId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(groupId, usersearchId);
    }

}
