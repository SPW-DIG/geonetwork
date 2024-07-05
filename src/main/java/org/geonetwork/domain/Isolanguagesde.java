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
@Table(name = "isolanguagesdes")
public class Isolanguagesde {
    @SequenceGenerator(name = "isolanguagesdes_id_gen", sequenceName = "harvester_setting_id_seq", allocationSize = 1)
    @EmbeddedId
    private IsolanguagesdeId id;

    @MapsId("iddes")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "iddes", nullable = false)
    private Isolanguage iddes;

    @Size(max = 255)
    @NotNull
    @Column(name = "label", nullable = false)
    private String label;

}
