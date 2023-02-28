## TenMedia Case Study

## Inhalt
- [Beschreibung](#beschreibung)
- [Aufgabe 1](#aufgabe-1)
- [Optionale Aufgaben](#optionale-aufgaben)
- [Hinweise](#hinweise)



## Beschreibung
Dieses Projekt ist eine browserbasierte Anwendung, die mithilfe von Laravel und Sanctum das Backend sowie mit Typescript und React das Frontend programmiert wurde.
Mit dieser Anwendung lassen sich Stellenanzeigen anzeigen und verwalten.

### Aufgabe 1
- Welche Seiten hat die Anwendung?  
    - Dashboard
    - Login
    - Manage-View
    - Details-View
 
- Welche Modelle gibt es und welche Attribute/Datenbankspalten haben diese?
###
| jobs          | users         | companies            |
| :------------ | :-----------  | :------------------------- |
| `jobID`       | `userID`      | `companyID`
| `companyID`   | `companyID`   | `name` |
| `title`       | `firstname`   | `address` |
| `salary`      | `surname`     | `phoneNumber`|
| `description` | `email`       | `email` |
| `location`    | `password`    | 
|                | `created`    |

####



- Welche Beziehung haben die Modelle zueinander

![ERM Modell](https://user-images.githubusercontent.com/117258295/221420873-a54e805b-25ed-4ee2-8f0d-291db9b875b2.png)

## Optionale Aufgaben

Als optionale Aufgaben habe ich eine Tokenbasierte-Authentifizierung benutzt und zusätzlich noch Unit-Tests hinzufgefügt.


## Hinweise
- Bitte wundern Sie sich nicht dass alle Commits & Pushes (außer README) von einem Profil namens "HIDE1" kommen. Da das mein **privater Github-Account** ist und VS-Code trotz meiner Abmeldungsversuche, die Commits von meinem privaten Account aus hochgeladen hat.

- Der PUT-Request wird in den Unit-Tests für die Controller **User und Job** nicht funktionieren, da eine Abfrage überprüft, ob eine Company existiert. Da in der Test-Datenbank nie eine Company existiert, wird es nicht funktionieren. Diese Abfragen muss man auskommentieren

User: https://github.com/VoidusXV/TenMedia_Task/blob/3a6ef7c38a4d5c1a209228cd1756f5939b8bf3a7/app/Http/Controllers/UserController.php#L26
Job: https://github.com/VoidusXV/TenMedia_Task/blob/3a6ef7c38a4d5c1a209228cd1756f5939b8bf3a7/app/Http/Controllers/JobController.php#L28

