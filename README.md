# Tip Calculator

Ein TypeScript-basierter Trinkgeld-Rechner für die Kommandozeile.

## Features

- ✅ Berechnung von Trinkgeld basierend auf Rechnungsbetrag und Prozentsatz
- ✅ Aufteilung der Rechnung auf mehrere Personen
- ✅ Eingabevalidierung mit Wiederholung bei ungültigen Eingaben
- ✅ TypeScript Interfaces für Type Safety
- ✅ Benutzerfreundliche Konsolen-Interface

## Installation

1. Dependencies installieren:
```bash
npm install
```

2. TypeScript kompilieren:
```bash
npm run build
```

3. Anwendung starten:
```bash
npm start
```

## Verwendung

Das Programm führt Sie durch folgende Schritte:

1. **Rechnungsbetrag eingeben** (z.B. 50.00)
2. **Trinkgeld-Prozentsatz eingeben** (z.B. 15 für 15%)
3. **Rechnung aufteilen?** (yes/no)
4. **Anzahl Personen** (falls aufgeteilt wird)

### Beispiel-Ausgabe

```
== Tip Calculator ==
How high is the check? (e.g., 50.00): 50.00
What percentage would you like to tip? (e.g., 15 for 15%): 18
Would you like to split the bill? (yes/no): yes
Enter the number of people to split the bill: 4

--- Tip Calculation Summary ---
Check Amount: $50.00
Tip Percentage: 18%
Tip Amount: $9.00
Total Bill: $59.00
Divide among people: yes
Split between how many people: 4
Each person pays: $14.75
---
```

## Entwicklung

### Verfügbare Scripts

- `npm run build` - TypeScript kompilieren
- `npm start` - Kompilierte Anwendung ausführen

### Projekt-Struktur

```
tip-calculator/
├── src/
│   └── app.ts          # Haupt-Anwendungscode
├── dist/               # Kompilierte JavaScript-Dateien
├── package.json        # NPM Konfiguration
├── tsconfig.json       # TypeScript Konfiguration
└── README.md          # Diese Datei
```

### TypeScript Interfaces

Das Projekt nutzt TypeScript Interfaces für bessere Type Safety:

- `Question` - Struktur für alle Benutzereingaben
- `AnswerYesNo` - Typsichere Yes/No Antworten

## Technologien

- **TypeScript** - Typsichere JavaScript-Entwicklung
- **Node.js** - JavaScript Runtime
- **Readline** - Konsolen-Input/Output

## Autor

Erstellt während des TypeScript Bootcamps.