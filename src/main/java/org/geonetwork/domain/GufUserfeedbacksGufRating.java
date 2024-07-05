package org.geonetwork.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "guf_userfeedbacks_guf_rating")
public class GufUserfeedbacksGufRating {
    @Id
    @NotNull
    @SequenceGenerator(name = "guf_userfeedbacks_guf_rating_id_gen", sequenceName = "csw_server_capabilities_info_id_seq", allocationSize = 1)
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    private GufRating detailedratinglist;

    @Size(max = 255)
    @Column(name = "guf_userfeedback_uuid")
    private String gufUserfeedbackUuid;

}
