
create sequence ogcapi_field_mapping_id_seq;

create sequence ogcapi_facet_config_id_seq;

create sequence ogcapi_filter_facet_id_seq;


create table ogcapi_property_mapping
(
  id                   varchar(255)       not null,
  default_bucket_count integer default 10 not null,
  update_sequence      bigint  default 1  not null
);

create table ogcapi_field_mapping
(
  id                     bigint  default nextval('ogcapi_field_mapping_id_seq'::regclass) not null,
  config_id              varchar(255)                                                     not null,
  sort_order             integer default 0                                                not null,
  ogc_property           varchar(255),
  elastic_property       varchar(255),
  index_record_property  varchar(255),
  type_override          varchar(50),
  sort_field_suffix      varchar(255),
  is_sortable            boolean default false,
  is_queryable           boolean default false,
  title                  varchar(255),
  description            text,
  add_property_to_output boolean default true
);


create table ogcapi_facet_config
(
  id                       bigint  default nextval('ogcapi_facet_config_id_seq'::regclass) not null,
  field_mapping_id         bigint                                                          not null,
  sort_order               integer default 0                                               not null,
  facet_name               varchar(255),
  facet_type               varchar(50),
  bucket_sorting           varchar(50),
  bucket_sorting_direction varchar(50),
  bucket_count             integer,
  minimum_document_count   integer default 1                                               not null,
  number_bucket_interval   double precision,
  calendar_interval_unit   varchar(50)
);

create table ogcapi_filter_facet
(
  id                  bigint  default nextval('ogcapi_filter_facet_id_seq'::regclass) not null,
  facet_config_id     bigint                                                          not null,
  sort_order          integer default 0                                               not null,
  filter_name         varchar(255),
  filter_equation_cql text
);
