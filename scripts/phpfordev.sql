/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     11/23/2021 2:25:04 PM                        */
/*==============================================================*/


drop index RELATIONSHIP_3_FK;

drop index COMENTARIO_PK;

drop table COMENTARIO;

drop index CURSO_PK;

drop table CURSO;

drop index FORO_PK;

drop table FORO;

drop index RELATIONSHIP_2_FK;

drop index RECURSOS_PK;

drop table RECURSOS;

drop index RELATIONSHIP_4_FK;

drop index RESPUESTA_PK;

drop table RESPUESTA;

drop index RELATIONSHIP_1_FK;

drop index VIDEO_PK;

drop table VIDEO;

/*==============================================================*/
/* Table: COMENTARIO                                            */
/*==============================================================*/
create table COMENTARIO (
   ID_COMENT            SERIAL               not null,
   COD                  INT4                 null,
   USUARIO              VARCHAR(150)         not null,
   OPINION              VARCHAR(250)         not null,
   MEGUSTA              INT4                 not null,
   NOMEGUSTA            INT4                 not null,
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
/* Table: CURSO                                                 */
/*==============================================================*/
create table CURSO (
   ID_CURSO             SERIAL               not null,
   CONTENIDO            VARCHAR(250)         not null,
   TIEMPO               TIME                 not null,
   ESTRELLAS            FLOAT8               not null,
   constraint PK_CURSO primary key (ID_CURSO)
);

/*==============================================================*/
/* Index: CURSO_PK                                              */
/*==============================================================*/
create unique index CURSO_PK on CURSO (
ID_CURSO
);

/*==============================================================*/
/* Table: FORO                                                  */
/*==============================================================*/
create table FORO (
   ID_FORO              SERIAL               not null,
   DESCRIPCION          VARCHAR(250)         not null,
   TITFORO              VARCHAR(150)         not null,
   USER_FORO            VARCHAR(150)         not null,
   constraint PK_FORO primary key (ID_FORO)
);

/*==============================================================*/
/* Index: FORO_PK                                               */
/*==============================================================*/
create unique index FORO_PK on FORO (
ID_FORO
);

/*==============================================================*/
/* Table: RECURSOS                                              */
/*==============================================================*/
create table RECURSOS (
   IDRECURSO            SERIAL               not null,
   COD                  INT4                 null,
   TIPO                 VARCHAR(150)         not null,
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
   DESCRIPCION_RES      VARCHAR(250)         not null,
   AYUDA                INT4                 not null,
   NOAYUDA              INT4                 not null,
   USUARIO_RES          VARCHAR(150)         null,
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
/* Table: VIDEO                                                 */
/*==============================================================*/
create table VIDEO (
   COD                  SERIAL               not null,
   ID_CURSO             INT4                 null,
   TITULO               VARCHAR(150)         not null,
   URL                  VARCHAR(150)         not null,
   LIKES                INT4                 not null,
   DISLIKES             INT4                 not null,
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

alter table COMENTARIO
   add constraint FK_COMENTAR_RELATIONS_VIDEO foreign key (COD)
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

alter table VIDEO
   add constraint FK_VIDEO_RELATIONS_CURSO foreign key (ID_CURSO)
      references CURSO (ID_CURSO)
      on delete restrict on update restrict;

