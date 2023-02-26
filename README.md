## TenMedia Case Study

## Inhalt
- [Beschreibung](#beschreibung)
- [Aufgabe 1](#aufgabe-1)
- [Optionale Aufgaben](#optionale-aufgaben)
- [Mögliche Bugs](#mögliche-bugs)
- [Hinweis](#hinweis)



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

Als optionale Aufgaben habe ich eine Tokenbasierte-Authentifizierung (SPA) benutzt und zusätzlich noch Unit-Tests hinzufgefügt.

## Mögliche Bugs
  
Die Unit-Test Response bei den Controllern **User und Jobs** für die Requests POST, PUT, DELETE geben 422 zurück (erwartet 200).
Wenn **'use RefreshDatabase'** auskommentiert wird, funktioniert alles außer POST und das **nur** für User & Jobs.

## Hinweis
Bitte wundern Sie sich nicht dass alle Commits & Pushes (außer README) von einem Profil names "HIDE1" kommen. Da das mein **privater Github-Account** ist und VS-Code es nicht hinbekommen hat, mich abzumelden.


