# Back end CTD - Proyecto

## Clinica odontologica

###Endpoints 
#### PACIENTES

* [POST] http://localhost:8080/pacientes

{
    "nombre": "Laura",
    "apellido": "Silva",
    "dni": "23.399.000-11",
    "domicilio": {
        "calle": "Calle heitor",
        "numero": "20A",
        "localidad": "centro",
        "provincia": "CABA"
    }
}

* [GET] http://localhost:8080/pacientes
* [PATCH] http://localhost:8080/pacientes/{ID}
{
    "nombre": "Laureana",
    "domicilio": {
        "id": 1,
        "calle": "Calle de la bota"
    }
}
* [GET] http://localhost:8080/pacientes/{ID}
* [DEL] http://localhost:8080/pacientes/{ID}

#### ODONTOLOGOS

* [POST] http://localhost:8080/odontologos
{
    "nombre": "Renan",
    "apellido": "Pereira",
    "matricula": 245
}
* [GET] http://localhost:8080/odontologos
* [PATCH] http://localhost:8080/odontologos/{ID}
{
    "apellido": "Pereira da Silva"
}
* [GET] http://localhost:8080/odontologos/{ID}
* [DEL] http://localhost:8080/odontologos/{ID}

#### TURNOS

* [POST] http://localhost:8080/turnos
{
    "paciente": {
        "id": 1
    },
    "odontologo": {
        "id": 1
    },
    "date": "01/10/2021 01:20"
}
* [GET] http://localhost:8080/turnos
* [PUT] http://localhost:8080/turnos/{ID}
{
    "paciente": {
        "id": 1
    },
    "odontologo": {
        "id": 1
    },
    "date": "01/11/2021 13:50"
}
* [DEL] http://localhost:8080/turnos/{ID}


# Front end CTD - Proyecto

Subir React con "npm start", desde localhost:3000 