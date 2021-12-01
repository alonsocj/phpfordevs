/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     12/1/2021 2:41:56 PM                         */
/*==============================================================*/


drop index RELATIONSHIP_12_FK;

drop index RELATIONSHIP_11_FK;

drop index APOYO_RES_PK;

drop table APOYO_RES;

drop index RELATIONSHIP_7_FK;

drop index RELATIONSHIP_3_FK;

drop index COMENTARIO_PK;

drop table COMENTARIO;

drop index CURSO_PK;

drop table CURSO;

drop index RELATIONSHIP_5_FK;

drop index EJEMPLO_PK;

drop table EJEMPLO;

drop index RELATIONSHIP_6_FK;

drop index FORO_PK;

drop table FORO;

drop index RELATIONSHIP_10_FK;

drop index RELATIONSHIP_9_FK2;

drop index LIKES_COMENTS_PK;

drop table LIKES_COMENTS;

drop index RELATIONSHIP_14_FK;

drop index RELATIONSHIP_13_FK;

drop index LIKE_VID_PK;

drop table LIKE_VID;

drop index RELATIONSHIP_2_FK;

drop index RECURSOS_PK;

drop table RECURSOS;

drop index RELATIONSHIP_9_FK;

drop index RELATIONSHIP_4_FK;

drop index RESPUESTA_PK;

drop table RESPUESTA;

drop index USUARIO_PK;

drop table USUARIO;

drop index RELATIONSHIP_1_FK;

drop index VIDEO_PK;

drop table VIDEO;

/*==============================================================*/
/* Table: APOYO_RES                                             */
/*==============================================================*/
create table APOYO_RES (
   ID_APRES             SERIAL               not null,
   ID_USER              INT4                 null,
   ID_RESPUESTA         INT4                 null,
   constraint PK_APOYO_RES primary key (ID_APRES)
);

/*==============================================================*/
/* Index: APOYO_RES_PK                                          */
/*==============================================================*/
create unique index APOYO_RES_PK on APOYO_RES (
ID_APRES
);

/*==============================================================*/
/* Index: RELATIONSHIP_11_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_11_FK on APOYO_RES (
ID_USER
);

/*==============================================================*/
/* Index: RELATIONSHIP_12_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_12_FK on APOYO_RES (
ID_RESPUESTA
);

/*==============================================================*/
/* Table: COMENTARIO                                            */
/*==============================================================*/
create table COMENTARIO (
   ID_COMENT            SERIAL               not null,
   COD                  INT4                 null,
   ID_USER              INT4                 null,
   OPINION              VARCHAR(250)         not null,
   MEGUSTA              INT4                 not null,
   DATE_COMMENT         VARCHAR(50)          not null,
   constraint PK_COMENTARIO primary key (ID_COMENT)
);

/*==============================================================*/
/* Index: COMENTARIO_PK                                         */
/*==============================================================*/
create unique index COMENTARIO_PK on COMENTARIO (
ID_COMENT
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_3_FK on COMENTARIO (
COD
);

/*==============================================================*/
/* Index: RELATIONSHIP_7_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_7_FK on COMENTARIO (
ID_USER
);

/*==============================================================*/
/* Table: CURSO                                                 */
/*==============================================================*/
create table CURSO (
   ID_CURSO             SERIAL               not null,
   CONTENIDO            VARCHAR(250)         not null,
   TIEMPO               TIME                 not null,
   TITULO_CURSO         VARCHAR(150)         not null,
   constraint PK_CURSO primary key (ID_CURSO)
);

/*==============================================================*/
/* Index: CURSO_PK                                              */
/*==============================================================*/
create unique index CURSO_PK on CURSO (
ID_CURSO
);

/*==============================================================*/
/* Table: EJEMPLO                                               */
/*==============================================================*/
create table EJEMPLO (
   ID_EJEMPLO           SERIAL               not null,
   COD                  INT4                 null,
   NOMBRE_EJEMPLO       VARCHAR(50)          not null,
   URL_IMAGEN           VARCHAR(5000)        not null,
   URL_POST             VARCHAR(250)         not null,
   URL_COMPILADOR       VARCHAR(250)         not null,
   constraint PK_EJEMPLO primary key (ID_EJEMPLO)
);

/*==============================================================*/
/* Index: EJEMPLO_PK                                            */
/*==============================================================*/
create unique index EJEMPLO_PK on EJEMPLO (
ID_EJEMPLO
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_5_FK on EJEMPLO (
COD
);

/*==============================================================*/
/* Table: FORO                                                  */
/*==============================================================*/
create table FORO (
   ID_FORO              SERIAL               not null,
   ID_USER              INT4                 null,
   DESCRIPCION          VARCHAR(250)         not null,
   TITFORO              VARCHAR(150)         not null,
   FECHA_PUB            VARCHAR(50)          not null,
   constraint PK_FORO primary key (ID_FORO)
);

/*==============================================================*/
/* Index: FORO_PK                                               */
/*==============================================================*/
create unique index FORO_PK on FORO (
ID_FORO
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_6_FK on FORO (
ID_USER
);

/*==============================================================*/
/* Table: LIKES_COMENTS                                         */
/*==============================================================*/
create table LIKES_COMENTS (
   ID_LIKECOMENT        SERIAL               not null,
   ID_USER              INT4                 null,
   ID_COMENT            INT4                 null,
   constraint PK_LIKES_COMENTS primary key (ID_LIKECOMENT)
);

/*==============================================================*/
/* Index: LIKES_COMENTS_PK                                      */
/*==============================================================*/
create unique index LIKES_COMENTS_PK on LIKES_COMENTS (
ID_LIKECOMENT
);

/*==============================================================*/
/* Index: RELATIONSHIP_9_FK2                                    */
/*==============================================================*/
create  index RELATIONSHIP_9_FK2 on LIKES_COMENTS (
ID_USER
);

/*==============================================================*/
/* Index: RELATIONSHIP_10_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_10_FK on LIKES_COMENTS (
ID_COMENT
);

/*==============================================================*/
/* Table: LIKE_VID                                              */
/*==============================================================*/
create table LIKE_VID (
   ID_LIKEVID           SERIAL               not null,
   ID_USER              INT4                 null,
   COD                  INT4                 null,
   constraint PK_LIKE_VID primary key (ID_LIKEVID)
);

/*==============================================================*/
/* Index: LIKE_VID_PK                                           */
/*==============================================================*/
create unique index LIKE_VID_PK on LIKE_VID (
ID_LIKEVID
);

/*==============================================================*/
/* Index: RELATIONSHIP_13_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_13_FK on LIKE_VID (
ID_USER
);

/*==============================================================*/
/* Index: RELATIONSHIP_14_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_14_FK on LIKE_VID (
COD
);

/*==============================================================*/
/* Table: RECURSOS                                              */
/*==============================================================*/
create table RECURSOS (
   IDRECURSO            SERIAL               not null,
   COD                  INT4                 null,
   URL_RECURSO          VARCHAR(150)         not null,
   NOMBRE_RECURSO       VARCHAR(150)         not null,
   constraint PK_RECURSOS primary key (IDRECURSO)
);

/*==============================================================*/
/* Index: RECURSOS_PK                                           */
/*==============================================================*/
create unique index RECURSOS_PK on RECURSOS (
IDRECURSO
);

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_2_FK on RECURSOS (
COD
);

/*==============================================================*/
/* Table: RESPUESTA                                             */
/*==============================================================*/
create table RESPUESTA (
   ID_RESPUESTA         SERIAL               not null,
   ID_FORO              INT4                 null,
   ID_USER              INT4                 null,
   DESCRIPCION_RES      VARCHAR(250)         not null,
   AYUDA                INT4                 not null,
   FECHA_COMENT         VARCHAR(50)          not null,
   constraint PK_RESPUESTA primary key (ID_RESPUESTA)
);

/*==============================================================*/
/* Index: RESPUESTA_PK                                          */
/*==============================================================*/
create unique index RESPUESTA_PK on RESPUESTA (
ID_RESPUESTA
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_4_FK on RESPUESTA (
ID_FORO
);

/*==============================================================*/
/* Index: RELATIONSHIP_9_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_9_FK on RESPUESTA (
ID_USER
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   ID_USER              SERIAL               not null,
   USERNAME             VARCHAR(255)         not null,
   PASSWORD             VARCHAR(255)         not null,
   constraint PK_USUARIO primary key (ID_USER)
);

/*==============================================================*/
/* Index: USUARIO_PK                                            */
/*==============================================================*/
create unique index USUARIO_PK on USUARIO (
ID_USER
);

/*==============================================================*/
/* Table: VIDEO                                                 */
/*==============================================================*/
create table VIDEO (
   COD                  SERIAL               not null,
   ID_CURSO             INT4                 null,
   TITULO               VARCHAR(150)         not null,
   URL                  VARCHAR(150)         not null,
   LIKES                INT4                 not null,
   DESCRIPCION_VIDEO    VARCHAR(150)         not null,
   constraint PK_VIDEO primary key (COD)
);

/*==============================================================*/
/* Index: VIDEO_PK                                              */
/*==============================================================*/
create unique index VIDEO_PK on VIDEO (
COD
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_1_FK on VIDEO (
ID_CURSO
);

alter table APOYO_RES
   add constraint FK_APOYO_RE_RELATIONS_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table APOYO_RES
   add constraint FK_APOYO_RE_RELATIONS_RESPUEST foreign key (ID_RESPUESTA)
      references RESPUESTA (ID_RESPUESTA)
      on delete restrict on update restrict;

alter table COMENTARIO
   add constraint FK_COMENTAR_RELATIONS_VIDEO foreign key (COD)
      references VIDEO (COD)
      on delete restrict on update restrict;

alter table COMENTARIO
   add constraint FK_COMENTAR_RELATIONS_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table EJEMPLO
   add constraint FK_EJEMPLO_RELATIONS_VIDEO foreign key (COD)
      references VIDEO (COD)
      on delete restrict on update restrict;

alter table FORO
   add constraint FK_FORO_RELATIONS_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table LIKES_COMENTS
   add constraint FK_LIKES_CO_RELATIONS_COMENTAR foreign key (ID_COMENT)
      references COMENTARIO (ID_COMENT)
      on delete restrict on update restrict;

alter table LIKES_COMENTS
   add constraint FK_LIKES_CO_RELATIONS_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table LIKE_VID
   add constraint FK_LIKE_VID_RELATIONS_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table LIKE_VID
   add constraint FK_LIKE_VID_RELATIONS_VIDEO foreign key (COD)
      references VIDEO (COD)
      on delete restrict on update restrict;

alter table RECURSOS
   add constraint FK_RECURSOS_RELATIONS_VIDEO foreign key (COD)
      references VIDEO (COD)
      on delete restrict on update restrict;

alter table RESPUESTA
   add constraint FK_RESPUEST_RELATIONS_FORO foreign key (ID_FORO)
      references FORO (ID_FORO)
      on delete restrict on update restrict;

alter table RESPUESTA
   add constraint FK_RESPUEST_RELATIONS_USUARIO foreign key (ID_USER)
      references USUARIO (ID_USER)
      on delete restrict on update restrict;

alter table VIDEO
   add constraint FK_VIDEO_RELATIONS_CURSO foreign key (ID_CURSO)
      references CURSO (ID_CURSO)
      on delete restrict on update restrict;

