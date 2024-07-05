package org.geonetwork.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
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
public class UsersavedselectionId implements Serializable {
    private static final long serialVersionUID = 7858674761294568936L;
    @Size(max = 255)
    @NotNull
    @Column(name = "metadatauuid", nullable = false)
    private String metadatauuid;

    @NotNull
    @Column(name = "selectionid", nullable = false)
    private Integer selectionid;

    @NotNull
    @Column(name = "userid", nullable = false)
    private Integer userid;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        UsersavedselectionId entity = (UsersavedselectionId) o;
        return Objects.equals(this.selectionid, entity.selectionid) &&
            Objects.equals(this.userid, entity.userid) &&
            Objects.equals(this.metadatauuid, entity.metadatauuid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(selectionid, userid, metadatauuid);
    }

}
