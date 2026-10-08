'use strict';
const translations={
en:{app:'Movements & Paths',tagline:'Operator movement · Spaghetti diagram',portal:'App portal',workstation:'Workstation / process',observer:'Observer',date:'Date',stationPlaceholder:'e.g. Assembly cell 4',distance:'Walking distance',steps:'Steps',moves:'Movements',cycles:'Completed cycles',average:'Distance per cycle',movesNote:'Recorded trips between positions',averageNote:'Average of completed cycles',diagram:'SPAGHETTI DIAGRAM',mapTitle:'Layout & walking path',add:'+ Add position',move:'Move position',background:'Layout image',calibrate:'Set scale',bend:'Add route bend',pause:'Pause',nextCycle:'Next cycle',stop:'Finish',undo:'Undo last',positions:'Process positions',positionName:'Position name',saveName:'Save name',delete:'Delete',positionHelp:'Add positions on the layout. During observation, tap each position in the order the operator visits it.',example:'Load example layout',scale:'Scale & dimensions',scaleHelp:'On a blank layout, enter the real width and height. For an image, calibrate using a known reference distance.',width:'Width (m)',height:'Height (m)',applyScale:'Apply dimensions',referenceTitle:'Calibrate a layout image',referenceHelp:'Enter a known distance, then tap its two endpoints on the layout.',referenceLength:'Reference distance (m)',referenceButton:'Select two endpoints',removeImage:'Remove layout image',measurement:'Measurement',stride:'Step length (m)',strideHelp:'Used to estimate steps. Default: 0.75 m per step. You can enter counted steps per trip in the log.',how:'How it works',howText:'1. Add positions. 2. Set scale. 3. Start and tap the first position. 4. Tap each next position. Use route bends to follow aisles around obstacles. 5. Tap Next cycle when a work cycle is complete, or Finish. Observation time includes work and walking; it is not walking time.',clearRoute:'Clear observation',reset:'Reset everything',pdf:'Print / Save PDF',csv:'Excel / CSV',svg:'Save diagram (SVG)',saveProject:'Save project',loadProject:'Open project',routeLog:'Movement log',logHelp:'Actual distances and counted steps can replace estimates per trip. Leave a field empty to use the layout distance or estimated steps.',footer:'Dometic · Process observations · Movements & Paths',distanceMethod:'Distance follows the drawn path. Add bends for aisles and obstacles. Straight lines between positions do not account for obstacles.',estimated:'Estimated from step length',counted:'Counted steps',mixed:'Counted + estimated steps',scaled:'Calculated from layout',manualDistance:'Actual distances entered',mixedDistance:'Layout + actual distances',unscaled:'Set scale for distance and step estimates',running:'Observation in progress',paused:'Paused',done:'Finished',idle:'Ready to set up',start:'Start observation',resume:'Resume',newObservation:'New observation',cycle:'Cycle',activeCycle:'Current cycle',metres:'m',noPositions:'No positions yet. Tap Add position and then the layout.',noMoves:'No movements recorded yet.',defaultPosition:'Position',waypoint:'Route bend',from:'From',to:'To',actual:'Actual distance (m)',countedSteps:'Counted steps',duration:'Observation time',seq:'No.',visits:'Visits',scaleReady:'Calibrated',scaleMissing:'Not set',hintAdd:'Tap an empty area of the layout to place a position.',hintMove:'Select a position, then tap its new location. You can also drag it.',hintIdle:'Place positions and set the scale. Start observation to record the walking path.',hintRunning:'Tap the operator’s current position, then each next position in walking order.',hintPaused:'Observation paused. Resume to add movements.',hintDone:'Observation finished. Export the result or start a new observation.',hintBend:'Tap the layout to add a bend in the current walking path. Then tap the next process position.',hintReference:'Tap the first and second endpoints of the known reference distance.',needPositions:'Add at least two process positions before starting.',needStation:'Enter the workstation or process name.',needSelection:'Select a position first.',locked:'The layout is locked while movements exist. Clear the observation to edit positions or scale.',scaleNumbers:'Enter positive dimensions up to 1,000 m.',invalidStride:'Enter a step length between 0.1 and 2 m.',invalidReference:'Enter a positive reference distance up to 1,000 m.',referenceSame:'Choose two different endpoints.',scaledMessage:'Scale applied.',imageTooLarge:'Choose a PNG, JPG or WebP file under 15 MB.',imageError:'Could not read the image.',clearConfirm:'Clear the observation? Positions and scale will be kept.',resetConfirm:'Reset the entire project, including positions and observations?',demoConfirm:'Replace this project with the example layout?',newConfirm:'Start a new observation? Save the current result first if needed.',deleteConfirm:'Delete this position?',badNumber:'Enter a non-negative number. Counted steps must be whole numbers.',saveOk:'Saved on this device',saveFailed:'Device storage is full or unavailable. Export the project to save it.',importError:'Could not open this project. Choose a valid Movements & Paths JSON file.',importConfirm:'Replace the current project with the imported project?',firstPosition:'Select the first position before adding a route bend.',noLegs:'Record at least one movement before completing a cycle.',routeCleared:'Observation cleared.',nameRequired:'Enter a position name.',noData:'No movements to export yet.',observed:'Recorded',demoStation:'Example assembly cell',demoNames:['Material','Assembly','Tool rack','Inspection','Packing'],unitSteps:'steps',cycleProgress:'completed',printScale:'Scale',printStride:'Step length',optional:'Optional',waiting:'Awaiting first position',finishPath:'Tap the next process position to complete the path before finishing the cycle.',fileSaved:'Project file downloaded. Keep it as a backup.',imported:'Project opened.'},
sv:{app:'Rörelser & Gångvägar',tagline:'Operatörens förflyttning · Spagettidiagram',portal:'Appportalen',workstation:'Arbetsstation / process',observer:'Observatör',date:'Datum',stationPlaceholder:'t.ex. Monteringscell 4',distance:'Gångsträcka',steps:'Steg',moves:'Förflyttningar',cycles:'Avslutade cykler',average:'Sträcka per cykel',movesNote:'Registrerade förflyttningar mellan positioner',averageNote:'Medel för avslutade cykler',diagram:'SPAGETTIDIAGRAM',mapTitle:'Layout & gångväg',add:'+ Lägg till position',move:'Flytta position',background:'Layoutbild',calibrate:'Ange skala',bend:'Lägg till böjpunkt',pause:'Pausa',nextCycle:'Nästa cykel',stop:'Avsluta',undo:'Ångra senaste',positions:'Positioner i processen',positionName:'Positionsnamn',saveName:'Spara namn',delete:'Ta bort',positionHelp:'Placera positioner på layouten. Under observationen klickar du på dem i den ordning operatören besöker dem.',example:'Ladda exempellayout',scale:'Skala & mått',scaleHelp:'På en tom layout anger du verklig bredd och höjd. För en bild kalibrerar du mot ett känt referensmått.',width:'Bredd (m)',height:'Höjd (m)',applyScale:'Använd måtten',referenceTitle:'Kalibrera en layoutbild',referenceHelp:'Ange ett känt avstånd och klicka sedan på avståndets två ändpunkter i layouten.',referenceLength:'Referensavstånd (m)',referenceButton:'Välj två ändpunkter',removeImage:'Ta bort layoutbild',measurement:'Mätning',stride:'Steglängd (m)',strideHelp:'Används för att uppskatta steg. Förvalt: 0,75 m per steg. Räknade steg kan anges per förflyttning i loggen.',how:'Så fungerar det',howText:'1. Placera positioner. 2. Ange skala. 3. Starta och klicka på första positionen. 4. Klicka på varje nästa position. Använd böjpunkter för att följa gångvägar runt hinder. 5. Välj Nästa cykel när arbetscykeln är klar, eller Avsluta. Observationstiden omfattar både arbete och gång; den är inte gångtid.',clearRoute:'Rensa observation',reset:'Rensa allt',pdf:'Skriv ut / Spara PDF',csv:'Excel / CSV',svg:'Spara diagram (SVG)',saveProject:'Spara projekt',loadProject:'Öppna projekt',routeLog:'Förflyttningslogg',logHelp:'Verkligt avstånd och räknade steg kan ersätta uppskattningen per förflyttning. Lämna tomt för att använda layoutens avstånd eller uppskattade steg.',footer:'Dometic · Processobservationer · Rörelser & Gångvägar',distanceMethod:'Sträckan följer den ritade gångvägen. Lägg till böjpunkter för gångar och hinder. Raka streck mellan positioner tar inte hänsyn till hinder.',estimated:'Uppskattat utifrån steglängd',counted:'Räknade steg',mixed:'Räknade + uppskattade steg',scaled:'Beräknat från layouten',manualDistance:'Verkliga avstånd angivna',mixedDistance:'Layout + verkliga avstånd',unscaled:'Ange skala för sträcka och steguppskattning',running:'Observation pågår',paused:'Pausad',done:'Avslutad',idle:'Redo att förbereda',start:'Starta observation',resume:'Fortsätt',newObservation:'Ny observation',cycle:'Cykel',activeCycle:'Pågående cykel',metres:'m',noPositions:'Inga positioner ännu. Välj Lägg till position och klicka sedan på layouten.',noMoves:'Inga förflyttningar registrerade ännu.',defaultPosition:'Position',waypoint:'Böjpunkt',from:'Från',to:'Till',actual:'Verkligt avstånd (m)',countedSteps:'Räknade steg',duration:'Observationstid',seq:'Nr',visits:'Besök',scaleReady:'Kalibrerad',scaleMissing:'Ej angiven',hintAdd:'Klicka på en tom yta i layouten för att placera en position.',hintMove:'Välj en position och klicka på dess nya plats. Du kan även dra den.',hintIdle:'Placera positioner och ange skala. Starta observationen för att registrera gångvägen.',hintRunning:'Klicka på operatörens nuvarande position och sedan varje nästa position i gångordning.',hintPaused:'Observationen är pausad. Fortsätt för att registrera förflyttningar.',hintDone:'Observationen är avslutad. Exportera resultatet eller starta en ny observation.',hintBend:'Klicka i layouten för att lägga till en böjpunkt på gångvägen. Klicka därefter på nästa processposition.',hintReference:'Klicka på första och andra ändpunkten för det kända referensavståndet.',needPositions:'Lägg till minst två processpositioner före start.',needStation:'Ange arbetsstationens eller processens namn.',needSelection:'Välj en position först.',locked:'Layouten är låst när förflyttningar finns. Rensa observationen för att ändra positioner eller skala.',scaleNumbers:'Ange positiva mått upp till 1 000 m.',invalidStride:'Ange en steglängd mellan 0,1 och 2 m.',invalidReference:'Ange ett positivt referensavstånd upp till 1 000 m.',referenceSame:'Välj två olika ändpunkter.',scaledMessage:'Skalan är inställd.',imageTooLarge:'Välj en PNG-, JPG- eller WebP-bild under 15 MB.',imageError:'Kunde inte läsa bilden.',clearConfirm:'Rensa observationen? Positioner och skala behålls.',resetConfirm:'Rensa hela projektet, inklusive positioner och observationer?',demoConfirm:'Ersätt projektet med exempellayouten?',newConfirm:'Starta en ny observation? Spara nuvarande resultat först om det behövs.',deleteConfirm:'Ta bort positionen?',badNumber:'Ange ett tal som är noll eller större. Räknade steg ska vara heltal.',saveOk:'Sparat på denna enhet',saveFailed:'Enhetens lagring är full eller otillgänglig. Exportera projektet för att spara.',importError:'Kunde inte öppna projektet. Välj en giltig JSON-fil från Rörelser & Gångvägar.',importConfirm:'Ersätt nuvarande projekt med det importerade projektet?',firstPosition:'Välj första positionen innan du lägger till en böjpunkt.',noLegs:'Registrera minst en förflyttning innan du avslutar en cykel.',routeCleared:'Observationen är rensad.',nameRequired:'Ange ett positionsnamn.',noData:'Inga förflyttningar att exportera ännu.',observed:'Registrerat',demoStation:'Exempel monteringscell',demoNames:['Material','Montering','Verktyg','Kontroll','Packning'],unitSteps:'steg',cycleProgress:'avslutade',printScale:'Skala',printStride:'Steglängd',optional:'Valfritt',waiting:'Väntar på första positionen',finishPath:'Klicka på nästa processposition för att slutföra gångvägen innan cykeln avslutas.',fileSaved:'Projektfilen är nedladdad. Behåll den som säkerhetskopia.',imported:'Projektet har öppnats.'},
de:{app:'Bewegungen & Wege',tagline:'Bedienerbewegung · Spaghetti-Diagramm',portal:'App-Portal',workstation:'Arbeitsstation / Prozess',observer:'Beobachter',date:'Datum',stationPlaceholder:'z. B. Montagezelle 4',distance:'Gehstrecke',steps:'Schritte',moves:'Wege',cycles:'Abgeschlossene Zyklen',average:'Strecke pro Zyklus',movesNote:'Erfasste Wege zwischen Positionen',averageNote:'Durchschnitt abgeschlossener Zyklen',diagram:'SPAGHETTI-DIAGRAMM',mapTitle:'Layout & Gehweg',add:'+ Position hinzufügen',move:'Position verschieben',background:'Layoutbild',calibrate:'Maßstab festlegen',bend:'Wegpunkt hinzufügen',pause:'Pause',nextCycle:'Nächster Zyklus',stop:'Beenden',undo:'Letzten rückgängig',positions:'Prozesspositionen',positionName:'Positionsname',saveName:'Name speichern',delete:'Löschen',positionHelp:'Positionen im Layout platzieren. Während der Beobachtung in der Reihenfolge antippen, in der der Bediener sie besucht.',example:'Beispiellayout laden',scale:'Maßstab & Abmessungen',scaleHelp:'Bei einem leeren Layout die tatsächliche Breite und Höhe eingeben. Ein Bild anhand einer bekannten Referenzstrecke kalibrieren.',width:'Breite (m)',height:'Höhe (m)',applyScale:'Abmessungen anwenden',referenceTitle:'Layoutbild kalibrieren',referenceHelp:'Bekannte Strecke eingeben und dann ihre beiden Endpunkte im Layout antippen.',referenceLength:'Referenzstrecke (m)',referenceButton:'Zwei Endpunkte wählen',removeImage:'Layoutbild entfernen',measurement:'Messung',stride:'Schrittlänge (m)',strideHelp:'Zur Schätzung der Schritte. Vorgabe: 0,75 m je Schritt. Gezähltе Schritte können pro Weg im Protokoll eingegeben werden.',how:'So funktioniert es',howText:'1. Positionen platzieren. 2. Maßstab festlegen. 3. Starten und erste Position antippen. 4. Jede nächste Position antippen. Wegpunkte verwenden, um Gängen um Hindernisse zu folgen. 5. Nächster Zyklus wählen, wenn der Arbeitszyklus abgeschlossen ist, oder Beenden. Die Beobachtungszeit umfasst Arbeit und Gehen; sie ist keine reine Gehzeit.',clearRoute:'Beobachtung löschen',reset:'Alles zurücksetzen',pdf:'Drucken / PDF speichern',csv:'Excel / CSV',svg:'Diagramm speichern (SVG)',saveProject:'Projekt speichern',loadProject:'Projekt öffnen',routeLog:'Wegeprotokoll',logHelp:'Tatsächliche Strecken und gezählte Schritte können Schätzungen pro Weg ersetzen. Leer lassen, um die Layoutstrecke bzw. geschätzte Schritte zu verwenden.',footer:'Dometic · Prozessbeobachtungen · Bewegungen & Wege',distanceMethod:'Die Strecke folgt dem gezeichneten Weg. Wegpunkte für Gänge und Hindernisse hinzufügen. Gerade Linien zwischen Positionen berücksichtigen keine Hindernisse.',estimated:'Aus Schrittlänge geschätzt',counted:'Gezählte Schritte',mixed:'Gezählte + geschätzte Schritte',scaled:'Aus dem Layout berechnet',manualDistance:'Tatsächliche Strecken eingegeben',mixedDistance:'Layout + tatsächliche Strecken',unscaled:'Maßstab für Strecke und Schrittschätzung festlegen',running:'Beobachtung läuft',paused:'Pausiert',done:'Abgeschlossen',idle:'Bereit zur Einrichtung',start:'Beobachtung starten',resume:'Fortsetzen',newObservation:'Neue Beobachtung',cycle:'Zyklus',activeCycle:'Aktueller Zyklus',metres:'m',noPositions:'Noch keine Positionen. Position hinzufügen wählen und dann das Layout antippen.',noMoves:'Noch keine Wege erfasst.',defaultPosition:'Position',waypoint:'Wegpunkt',from:'Von',to:'Nach',actual:'Tatsächliche Strecke (m)',countedSteps:'Gezählte Schritte',duration:'Beobachtungszeit',seq:'Nr.',visits:'Besuche',scaleReady:'Kalibriert',scaleMissing:'Nicht festgelegt',hintAdd:'Eine freie Stelle im Layout antippen, um eine Position zu platzieren.',hintMove:'Position auswählen und dann den neuen Ort antippen. Sie kann auch gezogen werden.',hintIdle:'Positionen platzieren und Maßstab festlegen. Beobachtung starten, um den Gehweg zu erfassen.',hintRunning:'Aktuelle Position des Bedieners antippen, danach jede nächste Position in Gehfolge.',hintPaused:'Beobachtung pausiert. Zum Erfassen weiterer Wege fortsetzen.',hintDone:'Beobachtung abgeschlossen. Ergebnis exportieren oder neue Beobachtung starten.',hintBend:'Layout antippen, um einen Wegpunkt hinzuzufügen. Danach die nächste Prozessposition antippen.',hintReference:'Den ersten und zweiten Endpunkt der bekannten Referenzstrecke antippen.',needPositions:'Vor dem Start mindestens zwei Prozesspositionen hinzufügen.',needStation:'Name der Arbeitsstation oder des Prozesses eingeben.',needSelection:'Zuerst eine Position auswählen.',locked:'Das Layout ist gesperrt, solange Wege vorhanden sind. Beobachtung löschen, um Positionen oder Maßstab zu ändern.',scaleNumbers:'Positive Abmessungen bis 1.000 m eingeben.',invalidStride:'Schrittlänge zwischen 0,1 und 2 m eingeben.',invalidReference:'Positive Referenzstrecke bis 1.000 m eingeben.',referenceSame:'Zwei unterschiedliche Endpunkte wählen.',scaledMessage:'Maßstab festgelegt.',imageTooLarge:'PNG-, JPG- oder WebP-Datei unter 15 MB wählen.',imageError:'Bild konnte nicht gelesen werden.',clearConfirm:'Beobachtung löschen? Positionen und Maßstab bleiben erhalten.',resetConfirm:'Gesamtes Projekt einschließlich Positionen und Beobachtungen zurücksetzen?',demoConfirm:'Dieses Projekt durch das Beispiellayout ersetzen?',newConfirm:'Neue Beobachtung starten? Aktuelles Ergebnis bei Bedarf zuerst speichern.',deleteConfirm:'Diese Position löschen?',badNumber:'Eine Zahl ab null eingeben. Gezähltе Schritte müssen ganze Zahlen sein.',saveOk:'Auf diesem Gerät gespeichert',saveFailed:'Gerätespeicher voll oder nicht verfügbar. Projekt zum Speichern exportieren.',importError:'Projekt konnte nicht geöffnet werden. Eine gültige JSON-Datei aus Bewegungen & Wege wählen.',importConfirm:'Aktuelles Projekt durch das importierte Projekt ersetzen?',firstPosition:'Vor einem Wegpunkt die erste Position wählen.',noLegs:'Vor dem Abschließen eines Zyklus mindestens einen Weg erfassen.',routeCleared:'Beobachtung gelöscht.',nameRequired:'Positionsnamen eingeben.',noData:'Noch keine Wege zum Exportieren.',observed:'Erfasst',demoStation:'Beispiel Montagezelle',demoNames:['Material','Montage','Werkzeuge','Prüfung','Verpackung'],unitSteps:'Schritte',cycleProgress:'abgeschlossen',printScale:'Maßstab',printStride:'Schrittlänge',optional:'Optional',waiting:'Warten auf erste Position',finishPath:'Zum Vervollständigen des Wegs die nächste Prozessposition antippen, bevor der Zyklus abgeschlossen wird.',fileSaved:'Projektdatei heruntergeladen. Als Sicherung aufbewahren.',imported:'Projekt geöffnet.'}}
// Shared wording for setup, observation, results and report in all supported languages.
const wording={
 positionHelp:['Dra i handtaget för att placera eller flytta. Skriv direkt på raden för att döpa om. Du kan också dubbelklicka på en punkt.','Drag the handle to place or move a position. Type in the row to rename it, or double-click a point.','Am Griff ziehen, um eine Position zu platzieren oder zu verschieben. Namen direkt in der Zeile ändern oder Punkt doppelklicken.'],
 positionHelpRunning:['Tryck på positionerna i den ordning operatören besöker dem.','Tap positions in the order the operator visits them.','Positionen in der besuchten Reihenfolge antippen.'],
 noPositions:['Ladda en positionslista eller lägg till positioner. Dra sedan ut dem på layouten.','Load a position list or add positions, then drag them onto the layout.','Positionsliste laden oder Positionen hinzufügen, dann auf den Plan ziehen.'],
 hintIdle:['Dra punkterna fritt. Dubbelklicka på en punkt eller skriv i listan för att döpa om. Ange skala före start.','Drag points freely. Double-click a point or type in the list to rename. Set the scale before starting.','Punkte frei verschieben. Doppelklicken oder Namen in der Liste ändern. Maßstab vor dem Start festlegen.'],
 hintPlace:['Tryck på layouten där den valda positionen ska placeras.','Tap the layout to place the selected position.','Auf den Plan tippen, um die ausgewählte Position zu platzieren.'],
 hintRunning:['Tryck på varje position när operatören kommer fram. Ingen cykelmarkering behövs. Gångtid kan mätas med knappen Börjar gå.','Tap each position on arrival. No cycle marking needed. Optionally tap Start walking on departure to time the walk.','Bei Ankunft auf die Position tippen. Keine Zyklusmarkierung nötig. Gehzeit optional mit Gehen starten messen.'],
 hintWalking:['Gångtid mäts. Tryck på nästa position när operatören kommer fram.','Walking time is being measured. Tap the next position on arrival.','Gehzeit wird gemessen. Bei Ankunft auf die nächste Position tippen.'],
 howText:['1. Ladda eller lägg till positioner. 2. Dra ut dem och ange skala. 3. Starta analysen och tryck på första positionen. 4. Tryck på varje ny position när operatören kommer fram. 5. Avsluta när du är klar. Antal cykler kan anges i efterhand. För faktisk gångtid: tryck Börjar gå vid avfärd och nästa position vid ankomst. Annars uppskattas gångtiden från sträcka / gånghastighet.','1. Load or add positions. 2. Drag them onto the layout and set the scale. 3. Start and tap the first position. 4. Tap each new position on arrival. 5. Finish when ready. Optionally enter the number of cycles afterwards. For measured walking time, tap Start walking on departure and the next position on arrival; otherwise time is estimated from distance / walking speed.','1. Positionen laden oder hinzufügen. 2. Platzieren und Maßstab festlegen. 3. Starten und erste Position antippen. 4. Jede neue Position bei Ankunft antippen. 5. Bei Bedarf beenden. Zykluszahl optional danach eingeben. Für gemessene Gehzeit: Gehen starten bei Abfahrt und nächste Position bei Ankunft antippen. Sonst Schätzung aus Strecke / Gehgeschwindigkeit.'],
 needPositions:['Placera minst två positioner på layouten före start.','Place at least two positions on the layout before starting.','Vor dem Start mindestens zwei Positionen auf dem Plan platzieren.'],
 loadPositions:['Ladda lista','Load list','Liste laden'],savePositions:['Spara lista','Save list','Liste speichern'],
 placed:['placerade','placed','platziert'],source:['Källa','Source','Quelle'],
 dragPosition:['Dra till layouten','Drag onto the layout','Auf den Plan ziehen'],placeOnMap:['Placera på layouten','Place on layout','Auf Plan platzieren'],moveOnMap:['Flytta på layouten','Move on layout','Auf Plan verschieben'],
 tooManyPositions:['Högst 500 positioner kan användas.','Use no more than 500 positions.','Maximal 500 Positionen möglich.'],
 listError:['Kunde inte läsa positionslistan. Använd en Excel-fil med kolumnerna Steg och Moment.','Could not read the list. Use an Excel file with Step and Workstep columns.','Liste konnte nicht gelesen werden. Excel-Datei mit Schritt und Arbeitsschritt verwenden.'],
 listReplace:['Ersätt nuvarande positionslista? De nya positionerna placeras i listan.','Replace the current positions? New positions will appear in the list.','Aktuelle Positionen ersetzen? Neue Positionen erscheinen in der Liste.'],
 listLoaded:['Listan är inläst. Dra positionerna till layouten eller välj Placera på layouten.','List loaded. Drag positions onto the layout or choose Place on layout.','Liste geladen. Positionen auf den Plan ziehen oder Auf Plan platzieren wählen.'],
 libraryUnavailable:['Export/import kunde inte laddas. Kontrollera anslutningen och försök igen.','Import/export could not load. Check your connection and try again.','Import/Export konnte nicht geladen werden. Verbindung prüfen und erneut versuchen.'],
 listStep:['Steg','Step','Schritt'],listMoment:['Moment','Workstep','Arbeitsschritt'],
 durationNote:['Arbete + gång, pauser borträknade','Work + walking, pauses excluded','Arbeit + Gehen, ohne Pausen'],
 walkingSpeed:['Gånghastighet (m/s)','Walking speed (m/s)','Gehgeschwindigkeit (m/s)'],
 speedHelp:['För uppskattad gångtid: sträcka / hastighet. Anpassa till den aktuella operatören.','For estimated walking time: distance / speed. Adjust for the observed operator.','Für geschätzte Gehzeit: Strecke / Geschwindigkeit. An die beobachtete Person anpassen.'],
 targetMinutes:['Riktvärde för mättid (min, valfritt)','Observation target (min, optional)','Beobachtungsziel (Min., optional)'],
 targetHelp:['Exempel: 30 min. Timern fortsätter tills du avslutar.','Example: 30 min. The timer continues until you finish.','Beispiel: 30 Min. Der Timer läuft bis zum Beenden weiter.'],
 targetShort:['Riktvärde','Target','Ziel'],targetReached:['Tid uppnådd','Time reached','Zeit erreicht'],
 walkStart:['Börjar gå','Start walking','Gehen starten'],walkCancel:['Avbryt gångtid','Cancel walk timing','Gehzeit abbrechen'],walkingNow:['Gångtid','Walking','Gehzeit'],
 walkMeasured:['Gångtid · uppmätt','Walking time · measured','Gehzeit · gemessen'],walkMixed:['Gångtid · blandad','Walking time · mixed','Gehzeit · gemischt'],walkEstimated:['Gångtid · uppskattad','Walking time · estimated','Gehzeit · geschätzt'],
 walkMeasuredNote:['Mätt från avfärd till ankomst','Timed from departure to arrival','Von Aufbruch bis Ankunft gemessen'],tripsMeasured:['förflyttningar uppmätta','movements timed','Bewegungen gemessen'],basedOnSpeed:['Sträcka /','Distance /','Strecke /'],
 walkShareMeasured:['Gångandel · uppmätt','Walking share · measured','Gehanteil · gemessen'],walkShareEstimated:['Gångandel · uppskattad/blandad','Walking share · estimated/mixed','Gehanteil · geschätzt/gemischt'],
 shareNote:['Gångtid / observationstid','Walking time / observation time','Gehzeit / Beobachtungszeit'],checkSpeed:['Gångtiden överstiger mättiden. Kontrollera sträcka, gånghastighet och angiven gångtid.','Walking time exceeds observation time. Check distance, speed and entered walking times.','Gehzeit übersteigt Beobachtungszeit. Strecke, Geschwindigkeit und eingegebene Gehzeiten prüfen.'],
 results:['Resultat','Results','Ergebnisse'],completedAnalysis:['AVSLUTAD ANALYS','COMPLETED OBSERVATION','ABGESCHLOSSENE BEOBACHTUNG'],
 observedCycles:['Antal cykler (valfritt)','Number of cycles (optional)','Anzahl Zyklen (optional)'],
 cycleHelp:['Ange totalt antal efteråt, t.ex. 20, för värden per cykel.','Enter the total afterwards, e.g. 20, for per-cycle values.','Gesamtzahl danach eingeben, z. B. 20, für Werte pro Zyklus.'],
 averageNote:['Hela observationen / angivet antal cykler','Entire observation / entered cycle count','Gesamte Beobachtung / eingegebene Zykluszahl'],
 visitedPositions:['Besökta positioner','Positions visited','Besuchte Positionen'],meanDistance:['Sträcka / förflyttning','Distance / movement','Strecke / Bewegung'],meanSteps:['Steg / förflyttning','Steps / movement','Schritte / Bewegung'],
 longestMove:['Längsta förflyttning','Longest movement','Längste Bewegung'],stepsMinute:['Steg / observationsminut','Steps / observation minute','Schritte / Beobachtungsminute'],uniqueRoutes:['Olika färdvägar','Unique routes','Verschiedene Wege'],stepsCycle:['Steg / cykel','Steps / cycle','Schritte / Zyklus'],timeCycle:['Observationstid / cykel','Observation time / cycle','Beobachtungszeit / Zyklus'],
 topRoutes:['Vanligaste färdvägar','Most frequent routes','Häufigste Wege'],visitsByPosition:['Besök per position','Visits per position','Besuche je Position'],route:['Färdväg','Route','Weg'],
 walkTimeSeconds:['Gångtid (s)','Walking time (s)','Gehzeit (s)'],
 walkSeconds:['Uppmätt gångtid (s)','Measured walking time (s)','Gemessene Gehzeit (s)'],
 logHelp:['Uppmätt sträcka, räknade steg och faktisk gångtid kan anges per förflyttning. Tomma fält använder uppskattningar. Tiden mellan positionsklick räknas inte automatiskt som gångtid.','Enter measured distance, counted steps and actual walking time per movement. Empty fields use estimates. Time between position taps is not automatically treated as walking time.','Gemessene Strecke, gezählte Schritte und tatsächliche Gehzeit je Bewegung eingeben. Leere Felder verwenden Schätzungen. Zeit zwischen Positionstipps gilt nicht automatisch als Gehzeit.'],
 finishPath:['Tryck på ankomstpositionen eller avbryt gångtid/ångra en brytpunkt innan du avslutar.','Tap the arrival position or cancel walk timing/undo a bend before finishing.','Ankunftsposition antippen oder Gehzeit abbrechen/Knick rückgängig machen, bevor Sie beenden.'],
 pdf:['PDF-rapport','PDF report','PDF-Bericht'],reportTitle:['RÖRELSER & FÄRDVÄGAR','MOVEMENTS & PATHS','BEWEGUNGEN & WEGE'],
 reportNotes:['MÄTMETOD','MEASUREMENT METHOD','MESSMETHODE'],reportDetails:['Detaljer per förflyttning','Movement details','Details je Bewegung'],page:['Sida','Page','Seite'],
 pdfError:['PDF-rapporten kunde inte skapas. Försök igen.','Could not create the PDF report. Please try again.','PDF-Bericht konnte nicht erstellt werden. Bitte erneut versuchen.'],
 reportNoCycles:['Ingen cykelmarkering krävs.','No cycle marking required.','Keine Zyklusmarkierung erforderlich.'],
 reportTimeNote:['Observationstid innehåller arbete och gång. Gångtid märks som uppmätt, uppskattad eller blandad.','Observation time includes work and walking. Walking time is labelled measured, estimated or mixed.','Beobachtungszeit enthält Arbeit und Gehen. Gehzeit wird als gemessen, geschätzt oder gemischt gekennzeichnet.'],
 pdfWorking:['Skapar PDF…','Creating PDF…','PDF wird erstellt…']
};
for(const [key,values] of Object.entries(wording))['sv','en','de'].forEach((l,i)=>translations[l][key]=values[i]);


const automaticWording={
 hintRunning:['Tryck på positionen operatören kommer fram till. Sträcka, steg och uppskattad gångtid räknas automatiskt.','Tap the position the operator arrives at. Distance, steps and estimated walking time are calculated automatically.','Die erreichte Position antippen. Strecke, Schritte und geschätzte Gehzeit werden automatisch berechnet.'],
 howText:['1. Ladda eller lägg till positioner. 2. Placera dem och kalibrera layouten. 3. Starta och tryck på första positionen. 4. Tryck på varje position vid ankomst. 5. Avsluta när du är klar. Gångtiden uppskattas automatiskt från kalibrerad sträcka / angiven gånghastighet. Antal cykler kan anges efteråt.','1. Load or add positions. 2. Place them and calibrate the layout. 3. Start and tap the first position. 4. Tap each position on arrival. 5. Finish when ready. Walking time is estimated automatically from calibrated distance / configured walking speed. Enter cycles afterwards if needed.','1. Positionen laden oder hinzufügen. 2. Platzieren und Plan kalibrieren. 3. Starten und erste Position antippen. 4. Positionen bei Ankunft antippen. 5. Beenden. Gehzeit wird automatisch aus kalibrierter Strecke / Gehgeschwindigkeit geschätzt. Zykluszahl bei Bedarf danach eingeben.'],
 logHelp:['Sträcka, steg och gångtid räknas automatiskt från layouten. Uppmätt sträcka och räknade steg kan anges efteråt. Gångtiden uppskattas alltid från sträcka / gånghastighet.','Distance, steps and walking time are calculated automatically from the layout. Measured distance and counted steps can be entered afterwards. Walking time is always estimated from distance / walking speed.','Strecke, Schritte und Gehzeit werden automatisch aus dem Plan berechnet. Gemessene Strecke und gezählte Schritte können danach eingegeben werden. Gehzeit wird stets aus Strecke / Gehgeschwindigkeit geschätzt.'],
 walkingSpeed:['Gånghastighet för uppskattning (m/s)','Walking speed for estimates (m/s)','Gehgeschwindigkeit für Schätzungen (m/s)'],
 speedHelp:['Förvalt antagande: 1,2 m/s, cirka 0,83 s per meter. Anpassa före analysen. Kalibrerad sträcka / hastighet ger uppskattad gångtid.','Default assumption: 1.2 m/s, about 0.83 s per metre. Adjust before observation. Calibrated distance / speed gives estimated walking time.','Standardannahme: 1,2 m/s, etwa 0,83 s pro Meter. Vor der Beobachtung anpassen. Kalibrierte Strecke / Geschwindigkeit ergibt geschätzte Gehzeit.'],
 walkShareEstimated:['Gångandel · uppskattad','Walking share · estimated','Gehanteil · geschätzt'],
 walkEstimateShort:['uppskattad','estimated','geschätzt'],
 needScale:['Kalibrera layouten innan analysen: ange verkliga mått eller välj ett känt referensavstånd.','Calibrate the layout before observation: enter real dimensions or select a known reference distance.','Plan vor der Beobachtung kalibrieren: reale Maße eingeben oder bekannte Referenzstrecke wählen.'],
 finishPath:['Tryck på ankomstpositionen eller ångra sista böjpunkten innan du avslutar.','Tap the arrival position or undo the last route bend before finishing.','Ankunftsposition antippen oder letzten Wegpunkt rückgängig machen, bevor Sie beenden.'],
 reportTimeNote:['Observationstid innehåller arbete och gång. Gångtid är en uppskattning från kalibrerad sträcka / angiven gånghastighet.','Observation time includes work and walking. Walking time is estimated from calibrated distance / configured walking speed.','Beobachtungszeit enthält Arbeit und Gehen. Gehzeit wird aus kalibrierter Strecke / Gehgeschwindigkeit geschätzt.']
};
for(const [key,values] of Object.entries(automaticWording))['sv','en','de'].forEach((l,i)=>translations[l][key]=values[i]);
const layoutWording={
 drawLayout:['Rita layout','Draw layout','Layout zeichnen'],rectangle:['Rektangel','Rectangle','Rechteck'],line:['Sammanhängande linje','Connected line','Verbundene Linie'],label:['Områdesnamn','Area name','Bereichsname'],magnet:['Magnet','Snap','Magnet'],finishLine:['Avsluta linje','Finish line','Linie beenden'],undoDrawing:['Ångra ritning','Undo drawing','Zeichnung rückgängig'],layoutObjects:['Områden & linjer','Areas & lines','Bereiche & Linien'],layoutName:['Namn (valfritt)','Name (optional)','Name (optional)'],layoutHelp:['Klicka på två hörn för en rektangel. Linjer fortsätter från varje klick. Magnet fäster vid hörn, linjeändar och raka vinklar. Dubbelklicka på ett objekt för att döpa det. Namn sparas direkt.','Click two corners for a rectangle. Lines continue from each click. Snap joins corners, endpoints and right angles. Double-click an object to name it. Names save immediately.','Zwei Ecken für ein Rechteck anklicken. Linien werden mit jedem Klick fortgesetzt. Magnet verbindet Ecken, Endpunkte und rechte Winkel. Objekt zum Benennen doppelklicken. Namen werden sofort gespeichert.'],hintRectangle:['Klicka på rektangelns första och motsatta hörn.','Click the first and opposite corners of the rectangle.','Erste und gegenüberliegende Ecke anklicken.'],hintLine:['Klicka för varje nästa linjeände. Avsluta med knappen eller Enter. Escape avslutar ritningen.','Click each next endpoint. Finish with the button or Enter. Escape ends drawing.','Jeden nächsten Endpunkt anklicken. Mit der Schaltfläche oder Enter beenden. Escape beendet das Zeichnen.'],hintLabel:['Klicka där områdets namn ska stå och skriv namnet i listan.','Click where the area name belongs, then type its name in the list.','Position des Bereichsnamens anklicken und Namen in der Liste eingeben.']};
for(const [key,values] of Object.entries(layoutWording))['sv','en','de'].forEach((l,i)=>translations[l][key]=values[i]);
translations.en.app='Analyze Movements';translations.en.reportTitle='ANALYZE MOVEMENTS';translations.en.footer='Dometic · Process observations · Analyze Movements';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const flags={sv:'<svg class="flag" viewBox="0 0 32 22"><rect width="32" height="22" fill="#006aa7"/><path d="M10 0h4v22h-4zM0 9h32v4H0z" fill="#fecc00"/></svg>',en:'<svg class="flag" viewBox="0 0 32 22"><rect width="32" height="22" fill="#173875"/><path d="M0 0l32 22M32 0L0 22" stroke="#fff" stroke-width="5"/><path d="M0 0l32 22M32 0L0 22" stroke="#c8102e" stroke-width="2"/><path d="M16 0v22M0 11h32" stroke="#fff" stroke-width="8"/><path d="M16 0v22M0 11h32" stroke="#c8102e" stroke-width="4"/></svg>',de:'<svg class="flag" viewBox="0 0 32 22"><path fill="#151515" d="M0 0h32v8H0z"/><path fill="#d00" d="M0 7h32v8H0z"/><path fill="#ffce00" d="M0 15h32v7H0z"/></svg>'};
const langNames={sv:'Svenska',en:'English',de:'Deutsch'},colors=['#2563eb','#e05c22','#0b9569','#a855f7','#d32674','#008ba3','#9a6a06'];
let lang='en',mode='select',selected=null,reference=[],drag=null,saveFailed=false,lastLogSignature='';
try{const q=new URLSearchParams(location.search).get('lang');lang=Object.hasOwn(translations,q)?q:Object.hasOwn(translations,localStorage.getItem('movements-language'))?localStorage.getItem('movements-language'):'en'}catch{}
const text=k=>translations[lang][k]??translations.en[k]??k,number=(n,d=2)=>n==null?'—':Number(n).toLocaleString({sv:'sv-SE',en:'en-GB',de:'de-DE'}[lang],{maximumFractionDigits:d}),parse=s=>/^\d+(?:[.,]\d+)?$/.test(String(s).trim())?Number(String(s).trim().replace(',','.')):NaN;
const today=()=>{let d=new Date();return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10)},fresh=()=>({format:'dometic-movements',version:2,walkingSpeed:1.2,targetMinutes:null,observedCycles:null,walkStart:null,positionSource:'',workstation:'',observer:'',date:today(),height:600,metresPerUnit:null,stride:.75,image:null,layout:[],positions:[],visits:[],completed:[],cycle:1,session:{status:'idle',elapsed:0,start:null}});
let project=fresh();
function validate(p){if(!p||p.format!=='dometic-movements'||![1,2].includes(p.version)||!Array.isArray(p.positions)||!Array.isArray(p.visits)||!Array.isArray(p.completed))throw Error('format');if(p.positions.length>500||p.visits.length>50000||!Number.isFinite(p.height)||p.height<100||p.height>3000||!Number.isFinite(p.stride)||p.stride<.1||p.stride>2||(p.metresPerUnit!==null&&(!Number.isFinite(p.metresPerUnit)||p.metresPerUnit<=0||p.metresPerUnit>10)))throw Error('bounds');if(!['idle','running','paused','done'].includes(p.session?.status)||!Number.isFinite(p.session.elapsed)||p.session.elapsed<0||(p.session.status==='running'&&(!Number.isFinite(p.session.start)||p.session.start<=0||p.session.start>Date.now()+60000)))throw Error('session');if(!Number.isInteger(p.cycle)||p.cycle<1||p.cycle>50000||p.completed.some(c=>!Number.isInteger(c)||c<1||c>p.cycle)||new Set(p.completed).size!==p.completed.length)throw Error('cycles');const ids=new Set();for(const pos of p.positions){if(typeof pos.id!=='string'||ids.has(pos.id)||typeof pos.name!=='string'||pos.name.length>120||!(pos.x===null&&pos.y===null)&&![pos.x,pos.y].every(n=>Number.isFinite(n)&&n>=0&&n<=1))throw Error('position');ids.add(pos.id)}for(const v of p.visits){if(typeof v.id!=='string'||!Number.isInteger(v.cycle)||v.cycle<1||v.cycle>p.cycle||![v.x,v.y].every(n=>Number.isFinite(n)&&n>=0&&n<=1)||(v.position&&!ids.has(v.position))||!Number.isFinite(v.time)||v.time<0)throw Error('visit');for(const k of ['actual','steps'])if(v[k]!=null&&(!Number.isFinite(v[k])||v[k]<0||v[k]>1000000||(k==='steps'&&!Number.isInteger(v[k]))))throw Error('value')}for(const v of p.visits){if(v.walkMs!=null&&(!Number.isFinite(v.walkMs)||v.walkMs<0||v.walkMs>1e12))throw Error('walk');if(v.position&&p.positions.find(x=>x.id===v.position).x===null)throw Error('unplaced visit')}
if(p.version===1){p.walkingSpeed=1.2;p.observedCycles=p.completed.length||null;p.targetMinutes=null;p.walkStart=null;p.positionSource='';p.version=2}
if(!Number.isFinite(p.walkingSpeed)||p.walkingSpeed<.1||p.walkingSpeed>5)throw Error('speed');
if(p.targetMinutes!=null&&(!Number.isFinite(p.targetMinutes)||p.targetMinutes<=0||p.targetMinutes>1440))throw Error('target');
if(p.observedCycles!=null&&(!Number.isInteger(p.observedCycles)||p.observedCycles<1||p.observedCycles>1000000))throw Error('cycle count');
const activeElapsed=p.session.elapsed+(p.session.status==='running'?Math.max(0,Date.now()-p.session.start):0);
if(p.walkStart!=null&&(!Number.isFinite(p.walkStart)||p.walkStart<0||p.walkStart>activeElapsed||!['running','paused'].includes(p.session.status)))throw Error('walk start');
if(typeof p.positionSource!=='string'||p.positionSource.length>200)throw Error('source');
p.walkStart=null;
p.layout??=[];
if(!Array.isArray(p.layout)||p.layout.length>500)throw Error('layout');
const layoutIds=new Set();for(const a of p.layout){if(!a||typeof a.id!=='string'||layoutIds.has(a.id)||!['rect','line','label'].includes(a.type)||typeof a.name!=='string'||a.name.length>120||!Array.isArray(a.points)||a.points.length<1||a.points.length>500||a.type==='rect'&&a.points.length!==2||a.type==='label'&&a.points.length!==1||a.type==='line'&&a.points.length<2||a.points.some(q=>!q||![q.x,q.y].every(n=>Number.isFinite(n)&&n>=0&&n<=1)))throw Error('layout object');layoutIds.add(a.id)}
if(p.image!==null&&(typeof p.image!=='string'||p.image.length>7000000||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(p.image)))throw Error('image');for(const k of ['workstation','observer','date'])if(typeof p[k]!=='string'||p[k].length>200)throw Error('text');return p}
try{let saved=localStorage.getItem('dometic-movements');if(saved)project=validate(JSON.parse(saved))}catch{}
const uid=()=>crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2),elapsed=()=>project.session.elapsed+(project.session.status==='running'?Math.max(0,Date.now()-project.session.start):0),locked=()=>project.visits.length>0||project.session.status==='running'||project.session.status==='paused';
function message(key,error=false){$('message').textContent=text(key);$('message').className='message'+(error?' error':'');$('message').hidden=false}
function save(){try{localStorage.setItem('dometic-movements',JSON.stringify(project));saveFailed=false}catch{saveFailed=true} $('saveStatus').textContent=text(saveFailed?'saveFailed':'saveOk')}
function chooseLanguage(l){if(!['sv','en','de'].includes(l))return;lang=l;document.querySelector('main').inert=false;try{localStorage.setItem('movements-language',l)}catch{}$('languageScreen').hidden=true;lastLogSignature='';render()}
$('languages').innerHTML=Object.entries(langNames).map(([l,n])=>`<button data-language="${l}" title="${n}">${flags[l]}<strong>${n}</strong></button>`).join('');document.querySelectorAll('[data-language]').forEach(b=>b.onclick=()=>chooseLanguage(b.dataset.language));function openLanguagePicker(){document.querySelector('main').inert=true;$('languageScreen').hidden=false;$('languages').querySelector(`[data-language="${lang}"]`).focus()}
$('languageButton').onclick=openLanguagePicker;
function segments(){let out=[];for(let i=1;i<project.visits.length;i++){const a=project.visits[i-1],b=project.visits[i];if(a.cycle!==b.cycle||b.anchor)continue;out.push({a,b,index:i})}return out}
function legs(){let out=[],start=null,path=[];for(const v of project.visits){if(!start||v.anchor||v.cycle!==start.cycle){start=v;path=[v];continue}path.push(v);if(v.position){let units=0;for(let i=1;i<path.length;i++)units+=Math.hypot((path[i].x-path[i-1].x)*1000,(path[i].y-path[i-1].y)*project.height);const layout=project.metresPerUnit==null?null:units*project.metresPerUnit,distance=v.actual??layout;out.push({a:start,b:v,path:[...path],layout,distance,steps:v.steps??(distance==null?null:distance/project.stride)});start=v;path=[v]}}return out}
function totals(rows){return {distance:rows.every(r=>r.distance!=null)?rows.reduce((n,r)=>n+r.distance,0):null,steps:rows.every(r=>r.steps!=null)?rows.reduce((n,r)=>n+r.steps,0):null}}
function visitName(v){const p=project.positions.find(p=>p.id===v.position);return p?p.name:`${text('waypoint')} ${v.bend||''}`.trim()}
function timerText(ms){let s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor(s%3600/60);return (h?String(h).padStart(2,'0')+':':'')+String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function placed(p){return Number.isFinite(p.x)&&Number.isFinite(p.y)}
function summary(){
 const rows=legs(),sum=rows.length?totals(rows):{distance:project.metresPerUnit?0:null,steps:project.metresPerUnit?0:null};

 const walkValues=rows.map(r=>r.distance==null?null:r.distance/project.walkingSpeed*1000);
 const walkTime=rows.length?(walkValues.every(v=>v!=null)?walkValues.reduce((a,b)=>a+b,0):null):0;
 const duration=elapsed(),share=walkTime==null||duration===0?null:100*walkTime/duration;
 const visits=project.positions.map(p=>({p,count:project.visits.filter(v=>v.position===p.id&&!v.anchor).length}));
 const routes=new Map();
 for(const r of rows){const key=JSON.stringify([r.a.position,r.b.position]);if(!routes.has(key))routes.set(key,{from:visitName(r.a),to:visitName(r.b),count:0,distance:0});const route=routes.get(key);route.count++;route.distance=route.distance==null||r.distance==null?null:route.distance+r.distance}
 return {...sum,rows,duration,walkTime,share,walkKind:'estimated',visits,routes:[...routes.values()].sort((a,b)=>b.count-a.count||((b.distance||0)-(a.distance||0)))};
}
function walkingLabel(){return text('walkEstimated')}
function walkingNote(){return `${text('basedOnSpeed')} ${number(project.walkingSpeed)} m/s (${number(1/project.walkingSpeed,2)} s/m)`}
function secondaryCards(s){
 const cells=[
  ['visitedPositions',number(s.visits.filter(v=>v.count).length,0)],
  ['meanDistance',s.distance!=null&&s.rows.length?number(s.distance/s.rows.length)+' m':'—'],
  ['meanSteps',s.steps!=null&&s.rows.length?number(s.steps/s.rows.length,1):'—'],
  ['longestMove',s.rows.length&&s.rows.every(r=>r.distance!=null)?number(Math.max(...s.rows.map(r=>r.distance)))+' m':'—'],
  ['stepsMinute',s.steps!=null&&s.duration?number(s.steps/(s.duration/60000),1):'—'],
  ['uniqueRoutes',number(s.routes.length,0)]
 ];
 if(project.observedCycles)cells.push(['cycles',number(project.observedCycles,0)],['average',s.distance==null?'—':number(s.distance/project.observedCycles)+' m'],['stepsCycle',s.steps==null?'—':number(s.steps/project.observedCycles,1)],['timeCycle',timerText(s.duration/project.observedCycles)]);
 return cells;
}
function updateStats(){
 const s=summary(),rows=s.rows,manual=rows.filter(r=>r.b.actual!=null).length,counted=rows.filter(r=>r.b.steps!=null).length;
 $('totalDistance').textContent=s.distance==null?'—':number(s.distance)+' m';
 $('distanceNote').textContent=text(s.distance==null?'unscaled':manual===rows.length&&manual?'manualDistance':manual?'mixedDistance':'scaled');
 $('totalSteps').textContent=s.steps==null?'—':number(Math.round(s.steps),0);
 $('stepNote').textContent=text(s.steps==null?'unscaled':counted===rows.length&&counted?'counted':counted?'mixed':'estimated');
 $('totalMoves').textContent=number(rows.length,0);
 $('timer').textContent=$('totalDuration').textContent=timerText(s.duration);
 $('durationNote').textContent=text('durationNote');
 $('walkTimeLabel').textContent=walkingLabel(s);
 $('totalWalkTime').textContent=s.walkTime==null?'—':timerText(s.walkTime);
 $('walkTimeNote').textContent=walkingNote(s);
 $('walkShareLabel').textContent=text('walkShareEstimated');
 $('walkShare').textContent=s.share==null||s.share>100?'—':number(s.share,1)+' %';
 if(s.share>100)$('walkTimeNote').textContent=text('checkSpeed');
 $('status').textContent=text(project.session.status);
 $('targetStatus').textContent=project.targetMinutes?`${text('targetShort')} ${number(project.targetMinutes)} min${s.duration>=project.targetMinutes*60000?' · '+text('targetReached'):''}`:'';
 $('targetStatus').classList.toggle('target-reached',!!project.targetMinutes&&s.duration>=project.targetMinutes*60000);
 $('scaleBadge').textContent=text(project.metresPerUnit?'scaleReady':'scaleMissing');
 $('printDate').textContent=/^\d{4}-\d{2}-\d{2}$/.test(project.date)?new Intl.DateTimeFormat({sv:'sv-SE',en:'en-GB',de:'de-DE'}[lang]).format(new Date(project.date+'T12:00:00')):project.date;
 $('printInfo').textContent=`${text('duration')}: ${timerText(s.duration)} · ${text('printStride')}: ${number(project.stride)} m · ${walkingNote(s)}`;
 $('results').hidden=project.session.status!=='done';
 if(project.session.status==='done'){
  $('resultStats').innerHTML=secondaryCards(s).map(([k,v])=>`<div class="stat"><span>${text(k)}</span><strong>${v}</strong></div>`).join('');
  $('routeSummary').innerHTML=s.routes.length?`<table><thead><tr><th>${text('route')}</th><th>${text('moves')}</th><th>${text('distance')}</th></tr></thead><tbody>${s.routes.slice(0,8).map(r=>`<tr><td>${esc(r.from)} → ${esc(r.to)}</td><td>${r.count}</td><td>${r.distance==null?'—':number(r.distance)+' m'}</td></tr>`).join('')}</tbody></table>`:`<p class="muted">${text('noMoves')}</p>`;
  $('positionSummary').innerHTML=s.visits.filter(v=>v.count).sort((a,b)=>b.count-a.count).slice(0,8).map(v=>`<div class="visit-summary"><span>${esc(v.p.name)}</span><strong>${v.count}</strong></div>`).join('');
 }
}
// Layout geometry uses the same normalized coordinates as process positions.
let drawingDraft=null,drawingHover=null,layoutSelected=null;
const isDrawing=()=>['rect','line','label'].includes(mode);
function snapPoint(p,previous){
 if(!$('snapLayout').checked)return p;
 const box=$('board').getBoundingClientRect(),scale=Math.min(box.width/1000,box.height/project.height),limit=12/scale;
 const candidates=project.layout.flatMap(a=>a.type==='rect'?[a.points[0],a.points[1],{x:a.points[0].x,y:a.points[1].y},{x:a.points[1].x,y:a.points[0].y}]:a.points).concat(drawingDraft?.points||[]);
 let best=null,d=limit;
 for(const q of candidates){const n=Math.hypot((p.x-q.x)*1000,(p.y-q.y)*project.height);if(n<d){d=n;best=q}}
 if(best)return {...best};
 if(previous){p={...p};if(Math.abs(p.x-previous.x)*1000<limit)p.x=previous.x;if(Math.abs(p.y-previous.y)*project.height<limit)p.y=previous.y}
 return p;
}
function objectSvg(a,preview=false){
 const H=project.height,pts=a.points,x=pts[0].x*1000,y=pts[0].y*H,selected=layoutSelected===a.id;
 let shape='',cx=x,cy=y;
 const stroke=preview?'#2563eb':selected?'#2563eb':'#64748b';
 if(a.type==='rect'&&pts[1]){const b=pts[1];let w=Math.abs(b.x*1000-x),h=Math.abs(b.y*H-y);cx=(x+b.x*1000)/2;cy=(y+b.y*H)/2;shape=`<rect x="${Math.min(x,b.x*1000)}" y="${Math.min(y,b.y*H)}" width="${w}" height="${h}" fill="#dbeafe" fill-opacity=".3" stroke="${stroke}" stroke-width="3"/>`}
 if(a.type==='line'){shape=`<polyline points="${pts.map(p=>`${p.x*1000},${p.y*H}`).join(' ')}" fill="none" stroke="${stroke}" stroke-width="4" stroke-linejoin="round"/>`;const last=pts.at(-1);cx=(x+last.x*1000)/2;cy=(y+last.y*H)/2-10}
 if(a.name||a.type==='label')shape+=`<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" fill="#334155" stroke="#edf2f7" stroke-width="4" paint-order="stroke" font-size="18" font-weight="600">${esc(a.name||text('label'))}</text>`;
 if(preview)shape+=`<circle cx="${pts.at(-1).x*1000}" cy="${pts.at(-1).y*H}" r="6" fill="#2563eb"/>`;
 return `<g ${preview?'pointer-events="none"':`data-layout="${esc(a.id)}"`} ${locked()?'pointer-events="none"':''}>${shape}</g>`;
}
function layoutSvg(){return project.layout.map(a=>objectSvg(a)).join('')+'<g id="layoutPreview" pointer-events="none"></g>'}
function previewDrawing(){const g=$('layoutPreview');if(!g)return;if(!drawingDraft){g.innerHTML='';return}const points=[...drawingDraft.points];if(drawingHover)points.push(drawingHover);g.innerHTML=objectSvg({...drawingDraft,points},true)}
function focusLayoutName(id){const input=[...$('layoutObjects').querySelectorAll('input')].find(e=>e.dataset.layoutName===id);input?.focus();input?.select()}
function renderLayout(){
 for(const [id,m] of [['drawRectangle','rect'],['drawLine','line'],['drawLabel','label']]){$(id).disabled=locked();$(id).classList.toggle('active',mode===m)}
 $('board').classList.toggle('drawing',isDrawing());$('finishLine').disabled=mode!=='line'||!drawingDraft;$('undoDrawing').disabled=locked()||!project.layout.length&&!drawingDraft;
 if(isDrawing())$('hint').textContent=text(mode==='rect'?'hintRectangle':mode==='line'?'hintLine':'hintLabel');
 const list=$('layoutObjects');list.innerHTML=project.layout.map(a=>`<div class="layout-row ${layoutSelected===a.id?'selected':''}"><span>${a.type==='rect'?'▭':a.type==='line'?'╱':'T'}</span><input data-layout-name="${esc(a.id)}" aria-label="${esc(text('layoutName'))}" placeholder="${esc(text('layoutName'))}" maxlength="120" value="${esc(a.name)}" ${locked()?'disabled':''}><button data-layout-delete="${esc(a.id)}" aria-label="${esc(text('delete'))}" ${locked()?'disabled':''}>×</button></div>`).join('');
 list.querySelectorAll('input').forEach(e=>{e.onfocus=()=>{layoutSelected=e.dataset.layoutName;draw()};e.oninput=()=>{const a=project.layout.find(a=>a.id===e.dataset.layoutName);if(a&&!locked()){a.name=e.value;save();draw()}}});
 list.querySelectorAll('button').forEach(e=>e.onclick=()=>{if(locked())return;project.layout=project.layout.filter(a=>a.id!==e.dataset.layoutDelete);if(drawingDraft?.id===e.dataset.layoutDelete)drawingDraft=null;save();render()});
}
function finishDrawing(redraw=true){drawingDraft=null;drawingHover=null;if(redraw){mode='select';render()}}
function addLayoutObject(a){if(project.layout.length>=500)return false;project.layout.push(a);layoutSelected=a.id;save();return true}
function drawingClick(p){
 if(locked())return;p=snapPoint(p,drawingDraft?.points.at(-1));
 if(mode==='label'){const a={id:uid(),type:'label',name:'',points:[p]};if(addLayoutObject(a)){finishDrawing();focusLayoutName(a.id)}return}
 if(!drawingDraft){drawingDraft={id:uid(),type:mode,name:'',points:[p]};drawingHover=null;render();previewDrawing();return}
 const prev=drawingDraft.points.at(-1);if(Math.hypot((p.x-prev.x)*1000,(p.y-prev.y)*project.height)<1)return;
 if(mode==='rect'){if(Math.abs(p.x-prev.x)*1000<1||Math.abs(p.y-prev.y)*project.height<1)return;const a={...drawingDraft,points:[prev,p]};if(addLayoutObject(a)){finishDrawing();focusLayoutName(a.id)}}
 else if(drawingDraft.points.length<500){drawingDraft.points.push(p);if(drawingDraft.points.length===2){if(!addLayoutObject(drawingDraft)){finishDrawing();return}}else save();drawingHover=null;render();previewDrawing()}
}
for(const [id,m] of [['drawRectangle','rect'],['drawLine','line'],['drawLabel','label']])$(id).onclick=()=>{if(unlocked())setMode(m)};
$('finishLine').onclick=()=>finishDrawing();
$('undoDrawing').onclick=()=>{if(locked())return;if(drawingDraft){if(drawingDraft.type==='line'&&drawingDraft.points.length>2)drawingDraft.points.pop();else{project.layout=project.layout.filter(a=>a.id!==drawingDraft.id);drawingDraft=null}}else project.layout.pop();save();render();previewDrawing()};
$('board').addEventListener('click',e=>{if(isDrawing()){e.stopImmediatePropagation();if(Date.now()>=suppressClickUntil)drawingClick(coordinate(e))}},true);
$('board').addEventListener('pointermove',e=>{if(isDrawing()&&drawingDraft){drawingHover=snapPoint(coordinate(e),drawingDraft.points.at(-1));previewDrawing()}});
$('board').addEventListener('pointerleave',()=>{drawingHover=null;previewDrawing()});
$('board').addEventListener('dblclick',e=>{const a=e.target.closest('[data-layout]');if(!locked()&&a&&!isDrawing()){layoutSelected=a.dataset.layout;focusLayoutName(layoutSelected);e.stopPropagation()}});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&mode==='line'&&!e.target.closest('input,textarea,button')){e.preventDefault();finishDrawing()}});

function draw(){const H=project.height,mobile=window.matchMedia?.('(max-width:720px)').matches,b=$('board');b.setAttribute('viewBox',`0 0 1000 ${H}`);b.setAttribute('aria-label',text('diagram'));let s=`<defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="#c8d4e2" stroke-width="1"/></pattern>${colors.map((c,i)=>`<marker id="arrow${i}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join('')}</defs><rect width="1000" height="${H}" fill="#edf2f7"/><rect width="1000" height="${H}" fill="url(#grid)"/>`;if(project.image)s+=`<image href="${project.image}" width="1000" height="${H}" preserveAspectRatio="none" opacity=".8"/>`;s+=layoutSvg();const rows=segments(),occ=new Map();for(const r of rows){const ax=r.a.x*1000,ay=r.a.y*H,bx=r.b.x*1000,by=r.b.y*H,dx=bx-ax,dy=by-ay,len=Math.hypot(dx,dy);let key=[r.a.position||r.a.id,r.b.position||r.b.id].sort().join('|'),n=occ.get(key)||0;occ.set(key,n+1);let offset=(n===0?0:(n%2?1:-1)*Math.ceil(n/2)*6),direction=dx<0||dx===0&&dy<0?-1:1,mx=(ax+bx)/2-dy/(len||1)*offset*direction,my=(ay+by)/2+dx/(len||1)*offset*direction,c=(r.b.cycle-1)%colors.length;s+=`<path d="M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}" fill="none" stroke="${colors[c]}" stroke-width="3" opacity=".78" marker-end="url(#arrow${c})" pointer-events="none"><title>${esc(visitName(r.a))} → ${esc(visitName(r.b))} · ${project.metresPerUnit?number(Math.hypot(dx,dy)*project.metresPerUnit)+' m':'—'}</title></path>`}for(const v of project.visits.filter(v=>!v.position&&!v.anchor))s+=`<circle cx="${v.x*1000}" cy="${v.y*H}" r="5" fill="${colors[(v.cycle-1)%colors.length]}" stroke="#fff" stroke-width="2"/>`;const last=project.visits.at(-1);project.positions.forEach((p,i)=>{if(!placed(p))return;let active=last?.position===p.id,sel=selected===p.id;s+=`<g class="node" data-position="${esc(p.id)}" tabindex="0" role="button" aria-label="${esc(p.name)}"><circle cx="${p.x*1000}" cy="${p.y*H}" r="${mobile?42:active?23:19}" fill="${active?'#0b9569':sel?'#1d4ed8':'#173e69'}" stroke="${active?'#6ee7b7':'#fff'}" stroke-width="3"/><text x="${p.x*1000}" y="${p.y*H+5}" text-anchor="middle" fill="#fff" font-size="${mobile?26:14}" font-weight="700">${i+1}</text><text x="${p.x*1000}" y="${p.y*H+(mobile?66:39)}" text-anchor="${p.x<.15?'start':p.x>.85?'end':'middle'}" fill="#172a43" stroke="#edf2f7" stroke-width="4" paint-order="stroke" font-size="${mobile?24:13}" font-weight="650">${esc(p.name)}</text></g>`});reference.forEach(p=>s+=`<circle cx="${p.x*1000}" cy="${p.y*H}" r="10" fill="#ef4444" stroke="#fff" stroke-width="3"/>`);b.innerHTML=s;b.querySelectorAll('[data-position]').forEach(g=>{
 g.onclick=e=>{e.stopPropagation();if(Date.now()<suppressClickUntil)return;if(!locked()&&mode!=='reference'){selected=g.dataset.position;return}hitPosition(g.dataset.position)};
 g.ondblclick=e=>{e.preventDefault();e.stopPropagation();if(!locked())focusName(g.dataset.position)};
 g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();if(locked())hitPosition(g.dataset.position);else focusName(g.dataset.position)}};
})}

function focusName(id){
 const input=Array.from($('stations').querySelectorAll('[data-name]')).find(e=>e.dataset.name===id);
 if(input){input.focus();input.select();input.scrollIntoView?.({block:'nearest',behavior:'smooth'})}
}
function renderPositions(){
 const edit=!locked(),running=project.session.status==='running';
 $('positionCount').textContent=project.positions.filter(placed).length+'/'+project.positions.length+' '+text('placed');
 $('sourceInfo').textContent=project.positionSource?text('source')+': '+project.positionSource:'';
 $('positionHelp').textContent=text(edit?'positionHelp':'positionHelpRunning');
 $('stations').innerHTML=project.positions.length?project.positions.map((p,i)=>{
  const visits=project.visits.filter(v=>v.position===p.id&&!v.anchor).length;
  if(!edit)return `<button class="station ${selected===p.id?'active':''}" data-station="${esc(p.id)}" ${!placed(p)?'disabled':''}><span class="number">${i+1}</span><span class="name">${esc(p.name)}</span><small>${visits} ${text('visits').toLowerCase()}</small></button>`;
  return `<div class="station editable ${selected===p.id?'active':''} ${placed(p)?'':'unplaced'}" data-row="${esc(p.id)}"><button class="drag-handle" data-drag="${esc(p.id)}" aria-label="${esc(text('dragPosition')+' '+p.name)}" title="${text('dragPosition')}">⠿<span class="number">${i+1}</span></button><div class="station-content"><input data-name="${esc(p.id)}" aria-label="${text('positionName')} ${i+1}" value="${esc(p.name)}" maxlength="120"><button class="place-action" data-place="${esc(p.id)}">${text(placed(p)?'moveOnMap':'placeOnMap')}</button></div><button class="delete-position danger" data-delete="${esc(p.id)}" aria-label="${esc(text('delete')+' '+p.name)}" title="${text('delete')}">×</button></div>`;
 }).join(''):`<div class="empty">${text('noPositions')}</div>`;
 $('stations').querySelectorAll('[data-station]').forEach(b=>b.onclick=()=>hitPosition(b.dataset.station));
 $('stations').querySelectorAll('[data-name]').forEach(input=>{
  input.oninput=()=>{const p=project.positions.find(p=>p.id===input.dataset.name);p.name=input.value;save();draw()};
  input.onblur=()=>{const p=project.positions.find(p=>p.id===input.dataset.name);if(p){p.name=p.name.trim()||text('defaultPosition')+' '+(project.positions.indexOf(p)+1);input.value=p.name;save();draw()}};
  input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();input.blur()}};
 });
 $('stations').querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{if(!unlocked())return;project.positions=project.positions.filter(p=>p.id!==b.dataset.delete);if(selected===b.dataset.delete){selected=null;mode='select'}save();render()});
 $('stations').querySelectorAll('[data-place]').forEach(b=>b.onclick=()=>{if(!unlocked())return;selected=b.dataset.place;mode='place';render();$('board').scrollIntoView?.({behavior:'smooth',block:'center'})});
 for(const id of ['addPosition','addToList','loadPositions','loadImage','calibrate','removeImage','applyScale','referenceButton'])$(id).disabled=!edit;
 $('savePositions').disabled=!project.positions.length;
 $('removeImage').hidden=!project.image;
 $('demo').disabled=!edit;
 $('board').classList.toggle('editable-board',edit);
}
function renderLog(){let rows=legs();$('logCount').textContent=rows.length;$('logMetadata').textContent=project.workstation+' · '+project.date+' · '+project.observer;const sig=JSON.stringify([lang,rows.map(r=>[r.b.id,r.distance,r.steps,r.b.actual,r.b.steps,project.walkingSpeed,visitName(r.a),visitName(r.b)])]);if(sig===lastLogSignature)return;lastLogSignature=sig;$('log').innerHTML=rows.length?`<table><thead><tr>${['seq','from','to','distance','actual','steps','countedSteps','walkTimeSeconds'].map(k=>`<th>${text(k)}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(visitName(r.a))}</td><td>${esc(visitName(r.b))}</td><td>${r.distance==null?'—':number(r.distance)+' m'}${r.b.actual!=null?'<span class="hint-icon"> *</span>':''}</td><td><input data-value="actual" data-visit="${r.b.id}" inputmode="decimal" aria-label="${text('actual')} ${i+1}" value="${r.b.actual==null?'':number(r.b.actual)}" placeholder="${r.layout==null?'—':number(r.layout)}"><span class="print-only print-value">${r.b.actual==null?'—':number(r.b.actual)}</span></td><td>${r.steps==null?'—':number(Math.round(r.steps),0)}${r.b.steps!=null?'<span class="hint-icon"> *</span>':''}</td><td><input data-value="steps" data-visit="${r.b.id}" inputmode="numeric" aria-label="${text('countedSteps')} ${i+1}" value="${r.b.steps??''}" placeholder="${r.distance==null?'—':Math.round(r.distance/project.stride)}"><span class="print-only print-value">${r.b.steps??'—'}</span></td><td>${r.distance==null?'—':number(r.distance/project.walkingSpeed,2)+' s'} <small>${text('walkEstimateShort')}</small></td></tr>`).join('')}</tbody></table>`:`<div class="empty">${text('noMoves')}</div>`;$('log').querySelectorAll('input').forEach(e=>e.onchange=()=>{let val=e.value.trim()===''?null:parse(e.value);if(val!==null&&(!Number.isFinite(val)||val<0||val>1000000||e.dataset.value==='steps'&&!Number.isInteger(val))){e.setAttribute('aria-invalid','true');message('badNumber',true);return}const v=project.visits.find(v=>v.id===e.dataset.visit);v[e.dataset.value]=val;save();render()})}
function render(){document.documentElement.lang=lang;document.title=text('app')+' | Dometic';document.querySelectorAll('[data-t]').forEach(e=>e.textContent=text(e.dataset.t));document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=text(e.dataset.ph));$('languageButton').innerHTML=flags[lang]+' '+langNames[lang];['workstation','observer','date'].forEach(k=>{if(document.activeElement!==$(k))$(k).value=project[k]});if(document.activeElement!==$('stride'))$('stride').value=number(project.stride);if(project.metresPerUnit){if(document.activeElement!==$('width'))$('width').value=number(project.metresPerUnit*1000,4);if(document.activeElement!==$('height'))$('height').value=number(project.metresPerUnit*project.height,4)}$('saveStatus').textContent=text(saveFailed?'saveFailed':'saveOk');const st=project.session.status;$('start').textContent=text(st==='paused'?'resume':st==='done'?'newObservation':'start');$('start').disabled=st==='running';$('pause').disabled=st!=='running';$('stop').disabled=!['running','paused'].includes(st);$('undo').disabled=!project.visits.length||project.visits.at(-1).anchor;$('bend').disabled=st!=='running'||!project.visits.length;for(const [id,m] of [['addPosition','add'],['referenceButton','reference'],['bend','bend']])$(id).classList.toggle('active',mode===m);$('hint').textContent=text(mode==='add'?'hintAdd':mode==='place'?'hintPlace':mode==='reference'?'hintReference':mode==='bend'?'hintBend':st==='running'?'hintRunning':st==='paused'?'hintPaused':st==='done'?'hintDone':'hintIdle');for(const k of ['walkingSpeed','targetMinutes','observedCycles'])if(document.activeElement!==$(k))$(k).value=project[k]==null?'':number(project[k]);renderPositions();renderLayout();draw();updateStats();renderLog()}
function unlocked(){if(locked()){message('locked',true);return false}return true}
function setMode(m){finishDrawing(false);mode=mode===m?'select':m;reference=[];render()}
$('addPosition').onclick=()=>{if(unlocked())setMode('add')};$('calibrate').onclick=()=>{if(unlocked()){$('width').focus();$('width').scrollIntoView({behavior:'smooth',block:'center'})}};
function coordinate(e){const svg=$('board'),p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;const t=p.matrixTransform(svg.getScreenCTM().inverse());return {x:Math.max(0,Math.min(1,t.x/1000)),y:Math.max(0,Math.min(1,t.y/project.height))}}
function referenceClick(p){reference.push(p);if(reference.length===2){const refLength=parse($('referenceLength').value);if(!Number.isFinite(refLength)||refLength<=0||refLength>1000){reference=[];message('invalidReference',true);render();return}const len=Math.hypot((reference[1].x-reference[0].x)*1000,(reference[1].y-reference[0].y)*project.height);if(len<1){reference=[];message('referenceSame',true)}else{project.metresPerUnit=refLength/len;reference=[];mode='select';save();message('scaledMessage')}}render()}
function addPosition(p={x:null,y:null}){
 if(!unlocked())return;
 if(project.positions.length>=500){message('tooManyPositions',true);return}
 const pos={id:uid(),name:text('defaultPosition')+' '+(project.positions.length+1),...p};
 project.positions.push(pos);selected=pos.id;mode='select';save();render();focusName(pos.id);
}
$('addToList').onclick=()=>addPosition();
$('board').onclick=e=>{
 if(Date.now()<suppressClickUntil)return;
 const p=coordinate(e);
 if(mode==='reference'){referenceClick(p);return}
 if(mode==='add'&&unlocked())addPosition(p);
 else if(mode==='place'&&unlocked()){const pos=project.positions.find(p=>p.id===selected);if(pos){Object.assign(pos,p);mode='select';save();render()}}
 else if(mode==='bend'&&project.session.status==='running'){if(!project.visits.length){message('firstPosition',true);return}addVisit({...p,position:null,bend:project.visits.filter(v=>!v.position&&!v.anchor).length+1});render()}
};
let suppressClickUntil=0;
function boardContains(e){
 const svg=$('board'),point=svg.createSVGPoint();point.x=e.clientX;point.y=e.clientY;
 const p=point.matrixTransform(svg.getScreenCTM().inverse());
 return p.x>=0&&p.x<=1000&&p.y>=0&&p.y<=project.height;
}
function finishDrag(cancel=false){
 if(!drag)return;
 const state=drag,p=project.positions.find(p=>p.id===state.id);
 if(cancel||!state.overBoard){if(p)Object.assign(p,state.original)}
 if(state.moved){suppressClickUntil=Date.now()+350;save()}
 state.ghost?.remove();drag=null;document.body.classList.remove('dragging-position');
 if(state.moved)render();
}
document.addEventListener('pointerdown',e=>{
 const node=e.target.closest('[data-position]'),handle=e.target.closest('[data-drag]');
 if((!node&&!handle)||locked()||mode==='reference'||isDrawing()||e.button!==0||drag)return;
 const id=node?.dataset.position||handle.dataset.drag,p=project.positions.find(p=>p.id===id);
 drag={id,pointerId:e.pointerId,x:e.clientX,y:e.clientY,moved:false,overBoard:!!node,original:{x:p.x,y:p.y}};

});
document.addEventListener('pointermove',e=>{
 if(!drag||drag.pointerId!==e.pointerId||locked())return;
 if(!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<5)return;
 e.preventDefault();if(!drag.moved)$('board').setPointerCapture?.(e.pointerId);drag.moved=true;selected=drag.id;
 document.body.classList.add('dragging-position');
 if(!drag.ghost){drag.ghost=document.createElement('div');drag.ghost.className='drag-ghost';drag.ghost.textContent=project.positions.find(p=>p.id===drag.id).name;document.body.append(drag.ghost)}
 drag.ghost.style.left=(e.clientX+14)+'px';drag.ghost.style.top=(e.clientY-24)+'px';
 drag.overBoard=boardContains(e);drag.ghost.hidden=drag.overBoard;
 if(drag.overBoard){Object.assign(project.positions.find(p=>p.id===drag.id),coordinate(e));draw()}
 else if(e.clientY<75)window.scrollBy(0,-14);else if(e.clientY>innerHeight-75)window.scrollBy(0,14);
},{passive:false});
document.addEventListener('pointerup',e=>{if(drag?.pointerId===e.pointerId)finishDrag()});
document.addEventListener('pointercancel',e=>{if(drag?.pointerId===e.pointerId)finishDrag(true)});
window.addEventListener('blur',()=>finishDrag(true));
function hitPosition(id){const p=project.positions.find(p=>p.id===id);if(!p||!placed(p))return;if(mode==='reference'){referenceClick(p);return}selected=id;if(project.session.status==='running'){const last=project.visits.at(-1);if(last?.position!==id){addVisit({...p,position:id})}mode='select'}render()}
function addVisit(v){project.visits.push({id:uid(),position:v.position,x:v.x,y:v.y,bend:v.bend,cycle:project.cycle,time:elapsed(),actual:null,steps:null,walkMs:v.walkMs??null});save()}
for(const [id,min,max,integer] of [['walkingSpeed',.1,5,false],['targetMinutes',.001,1440,false],['observedCycles',1,1000000,true]]){
 $(id).oninput=()=>{
  const v=$(id).value.trim()===''&&id!=='walkingSpeed'?null:parse($(id).value);
  const valid=v===null||Number.isFinite(v)&&v>=min&&v<=max&&(!integer||Number.isInteger(v));
  $(id).setAttribute('aria-invalid',String(!valid));
  if(valid){project[id]=v;save();updateStats()}
 };
}
['workstation','observer','date'].forEach(k=>$(k).oninput=()=>{project[k]=$(k).value;$(k).removeAttribute('aria-invalid');save()});
$('applyScale').onclick=()=>{if(!unlocked())return;const w=parse($('width').value),h=parse($('height').value);if(!Number.isFinite(w)||!Number.isFinite(h)||w<=0||h<=0||w>1000||h>1000||1000*h/w<100||1000*h/w>3000){message('scaleNumbers',true);return}if(project.image){message('referenceHelp');$('referenceLength').focus();return}project.height=1000*h/w;project.metresPerUnit=w/1000;save();message('scaledMessage');render()};
$('referenceButton').onclick=()=>{if(!unlocked())return;const n=parse($('referenceLength').value);if(!Number.isFinite(n)||n<=0||n>1000){message('invalidReference',true);return}setMode('reference')};
$('stride').oninput=()=>{const v=parse($('stride').value);$('stride').setAttribute('aria-invalid',String(!Number.isFinite(v)||v<.1||v>2))};$('stride').onchange=()=>{const v=parse($('stride').value);if(!Number.isFinite(v)||v<.1||v>2){$('stride').setAttribute('aria-invalid','true');message('invalidStride',true);return}$('stride').removeAttribute('aria-invalid');project.stride=v;save();render()};
$('bend').onclick=()=>setMode('bend');
function clearObservation(){project.visits=[];project.completed=[];project.cycle=1;project.observedCycles=null;project.walkStart=null;project.session={status:'idle',elapsed:0,start:null};mode='select';reference=[];save();render()}
$('start').onclick=()=>{if(project.session.status==='running')return;if(project.session.status==='done'){if(!confirm(text('newConfirm')))return;clearObservation()}if(project.session.status!=='paused'&&!project.metresPerUnit){message('needScale',true);$('width').focus();return}if(project.positions.filter(placed).length<2){message('needPositions',true);return}if(!project.workstation.trim()){$('workstation').setAttribute('aria-invalid','true');$('workstation').focus();message('needStation',true);return}project.session.status='running';project.session.start=Date.now();mode='select';$('message').hidden=true;save();render()};
$('pause').onclick=()=>{project.session.elapsed=elapsed();project.session.start=null;project.session.status='paused';mode='select';save();render()};
$('stop').onclick=()=>{
 if(!['running','paused'].includes(project.session.status))return;
 if(project.visits.at(-1)&&!project.visits.at(-1).position){message('finishPath',true);return}
 project.session.elapsed=elapsed();project.session.start=null;project.session.status='done';mode='select';save();render();$('results').scrollIntoView?.({behavior:'smooth',block:'nearest'});
};
$('undo').onclick=()=>{if(!project.visits.length||project.visits.at(-1).anchor)return;project.completed=project.completed.filter(c=>c!==project.cycle);project.visits.pop();project.walkStart=null;save();render()};
$('clearRoute').onclick=()=>{if(confirm(text('clearConfirm'))){clearObservation();message('routeCleared')}};
$('reset').onclick=()=>{if(confirm(text('resetConfirm'))){project=fresh();selected=null;mode='select';save();render()}};
$('demo').onclick=()=>{if((project.positions.length||project.visits.length)&&!confirm(text('demoConfirm')))return;project=fresh();project.workstation=text('demoStation');project.metresPerUnit=.01;project.positions=[[.17,.24],[.48,.33],[.79,.2],[.75,.68],[.23,.76]].map((p,i)=>({id:uid(),x:p[0],y:p[1],name:text('demoNames')[i]}));mode='select';selected=null;save();render()};
$('loadImage').onclick=()=>{if(unlocked())$('imageFile').click()};
$('imageFile').onchange=async()=>{const file=$('imageFile').files[0];if(!file)return;if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>15*1024*1024){message('imageTooLarge',true);return}try{const bmp=await createImageBitmap(file);const ratio=bmp.height/bmp.width;if(ratio<.1||ratio>3)throw Error('ratio');const canvas=document.createElement('canvas');canvas.width=Math.min(bmp.width,1800);canvas.height=Math.round(canvas.width*ratio);canvas.getContext('2d').drawImage(bmp,0,0,canvas.width,canvas.height);const data=canvas.toDataURL('image/jpeg',.86);bmp.close();if(!unlocked())return;project.image=data;project.height=1000*ratio;project.metresPerUnit=null;save();mode='select';render();message('referenceHelp')}catch{message('imageError',true)}$('imageFile').value=''};
$('removeImage').onclick=()=>{if(unlocked()){project.image=null;save();render()}};
function download(content,mime,name){const u=URL.createObjectURL(new Blob([content],{type:mime})),a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function filename(ext){return 'Movements_'+(project.workstation||'analysis').replace(/[^\p{L}\p{N}_-]+/gu,'_').slice(0,60)+'_'+project.date+'.'+ext}
function validInputs(){const invalid=document.querySelector('input[aria-invalid="true"]');if(invalid){invalid.focus();message(invalid.id==='stride'?'invalidStride':'badNumber',true);return false}return true}
function exportProject(){if(!validInputs())return;const copy=JSON.parse(JSON.stringify(project));copy.session={status:project.session.status==='running'?'paused':project.session.status,elapsed:elapsed(),start:null};download(JSON.stringify(copy,null,2),'application/json',filename('json'));message('fileSaved')}
$('saveProject').onclick=exportProject;$('loadProject').onclick=()=>$('projectFile').click();$('projectFile').onchange=async()=>{const f=$('projectFile').files[0];if(!f)return;try{if(f.size>12*1024*1024)throw Error('size');const p=validate(JSON.parse(await f.text()));if(p.session.status==='running')p.session={status:'paused',elapsed:p.session.elapsed+Math.max(0,Date.now()-p.session.start),start:null};if(confirm(text('importConfirm'))){project=p;selected=null;mode='select';reference=[];lastLogSignature='';save();render();message('imported')}}catch{message('importError',true)}$('projectFile').value=''};
$('csv').onclick=()=>{
 if(!validInputs())return;
 const s=summary(),rows=s.rows;if(!rows.length){message('noData',true);return}
 const value=v=>'"'+String(v??'').replace(/"/g,'""')+'"',csvNumber=n=>n==null?'':Number(n.toFixed(4)).toString().replace('.',lang==='en'?'.':',');
 let records=[[text('app')],[text('workstation'),project.workstation],[text('observer'),project.observer],[text('date'),project.date],[text('duration'),timerText(s.duration)],[text('stride'),csvNumber(project.stride)],[text('walkingSpeed'),csvNumber(project.walkingSpeed)],[text('steps'),$('stepNote').textContent],[walkingLabel(s),s.walkTime==null?'':timerText(s.walkTime),walkingNote(s)],[text('observedCycles'),project.observedCycles??''],[text('seq'),text('from'),text('to'),text('distance')+' (m)',text('actual'),text('steps'),text('countedSteps'),text('walkTimeSeconds')+' · '+text('walkEstimateShort')]];
 rows.forEach((r,i)=>records.push([i+1,visitName(r.a),visitName(r.b),csvNumber(r.distance),csvNumber(r.b.actual),csvNumber(r.steps),r.b.steps??'',csvNumber(r.distance==null?null:r.distance/project.walkingSpeed)]));
 records.push([text('distance'),csvNumber(s.distance)],[text('steps'),csvNumber(s.steps)]);
 download('\ufeffsep=;\r\n'+records.map(r=>r.map(v=>value(typeof v==='string'&&/^[=+\-@\t\r]/.test(v)?"'"+v:v)).join(';')).join('\r\n'),'text/csv;charset=utf-8',filename('csv'));
};
$('svgExport').onclick=()=>{draw();const s=$('board').cloneNode(true);s.setAttribute('xmlns','http://www.w3.org/2000/svg');s.setAttribute('width','1000');s.setAttribute('height',String(project.height));s.setAttribute('font-family','system-ui,Arial,sans-serif');s.querySelectorAll('[tabindex]').forEach(e=>e.removeAttribute('tabindex'));s.querySelectorAll('.node').forEach(e=>e.removeAttribute('role'));download(new XMLSerializer().serializeToString(s),'image/svg+xml',filename('svg'))};
function positionRows(rows){
 const nonempty=rows.filter(r=>r.some(v=>String(v??'').trim()));
 if(!nonempty.length)throw Error('empty');
 const headers=nonempty[0].map(v=>String(v).trim().toLowerCase());
 const names=['moment','arbetssteg','processsteg','workstep','work step','task','arbeitsschritt','position','positionsnamn','position name','name','namn'];
 const nameIndex=headers.findIndex(v=>names.includes(v));
 const orderIndex=headers.findIndex(v=>['steg','step','schritt'].includes(v));
 let source=nonempty.slice(1),column=nameIndex;
 if(column<0){
  if(nonempty[0].length===1){column=0;source=nonempty}
  else throw Error('headers');
 }
 const entries=source.map((r,i)=>({name:String(r[column]??'').trim(),order:orderIndex<0?i:Number(String(r[orderIndex]).replace(',','.'))||i})).filter(r=>r.name);
 if(!entries.length||entries.length>500||entries.some(r=>r.name.length>120))throw Error('rows');
 return entries.sort((a,b)=>a.order-b.order).map(r=>({id:uid(),name:r.name,x:null,y:null}));
}
async function readPositions(file){
 if(!window.XLSX){message('libraryUnavailable',true);return}
 if(!file||!unlocked())return;
 try{
  if(file.size>15*1024*1024)throw Error('size');
  const workbook=XLSX.read(await file.arrayBuffer(),{type:'array'});
  const sheet=workbook.SheetNames.includes('Tabell1')?'Tabell1':workbook.SheetNames[0];
  if(!sheet)throw Error('sheet');
  const positions=positionRows(XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{header:1,defval:'',raw:false}));
  if(!unlocked())return;
  if(project.positions.length&&!confirm(text('listReplace')))return;
  project.positions=positions;project.positionSource=file.name.slice(0,200);
  if(!project.workstation)project.workstation=file.name.replace(/\.[^.]+$/,'').slice(0,120);
  selected=null;mode='select';save();render();message('listLoaded');
 }catch{message('listError',true)}
}
$('loadPositions').onclick=()=>{if(unlocked())$('positionsFile').click()};
$('positionsFile').onchange=async()=>{const file=$('positionsFile').files[0];await readPositions(file);$('positionsFile').value=''};
$('savePositions').onclick=()=>{
 if(!project.positions.length)return;
 if(!window.XLSX){message('libraryUnavailable',true);return}
 const rows=[[text('listStep'),text('listMoment')],...project.positions.map((p,i)=>[i+1,p.name])];
 const workbook=XLSX.utils.book_new(),sheet=XLSX.utils.aoa_to_sheet(rows);
 sheet['!cols']=[{wch:10},{wch:50}];XLSX.utils.book_append_sheet(workbook,sheet,'Tabell1');
 download(XLSX.write(workbook,{bookType:'xlsx',type:'array'}),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Positions_'+filename('xlsx'));
};

async function diagramPng(){
 draw();
 const svg=$('board').cloneNode(true);
 svg.setAttribute('xmlns','http://www.w3.org/2000/svg');svg.setAttribute('width','1800');svg.setAttribute('height',String(1800*project.height/1000));svg.setAttribute('font-family','Arial, sans-serif');
 const url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)],{type:'image/svg+xml'}));
 try{
  const img=new Image();await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;img.src=url});
  const canvas=document.createElement('canvas');canvas.width=1800;canvas.height=Math.round(1800*project.height/1000);
  canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
  return canvas.toDataURL('image/png');
 }finally{URL.revokeObjectURL(url)}
}
async function exportPdf(){
 if(!validInputs())return;
 if(!window.jspdf){message('libraryUnavailable',true);return}
 if(!project.visits.length){message('noData',true);return}
 const button=$('print');button.disabled=true;button.textContent=text('pdfWorking');
 try{
  updateStats();
  const s=summary(),image=await diagramPng(),pdf=new jspdf.jsPDF({orientation:'landscape',unit:'mm',format:'a4',compress:true});
  const W=297,H=210,M=9,navy=[23,32,51],blue=[37,99,235],muted=[100,116,139],line=[226,232,240];
  const clean=value=>String(value??'—').replace(/\u202f|\u00a0/g,' ').replace(/→/g,' > ').replace(/—/g,'-');
  const write=(value,x,y,opts={})=>pdf.text(Array.isArray(value)?value.map(clean):clean(value),x,y,opts);
  function fit(value,x,y,width,size=8,min=6){
   let current=size;pdf.setFontSize(current);while(current>min&&pdf.getTextWidth(clean(value))>width){current-=.25;pdf.setFontSize(current)}
   let result=clean(value);if(pdf.getTextWidth(result)>width){while(result.length&&pdf.getTextWidth(result+'...')>width)result=result.slice(0,-1);result+='...'}
   write(result,x,y);
  }
  function header(){
   pdf.setFillColor(...navy);pdf.roundedRect(M,M,W-2*M,20,3,3,'F');
   pdf.setFont('helvetica','bold');pdf.setTextColor(255,255,255);fit(text('reportTitle'),M+6,M+8,182,17,12);
   pdf.setFont('helvetica','normal');pdf.setTextColor(215,226,240);fit(`${project.workstation}  /  ${$('printDate').textContent}`,M+6,M+15,183,8.5);
   pdf.setFont('helvetica','bold');pdf.setTextColor(255,255,255);pdf.setFontSize(11);write('DOMETIC',W-M-6,M+8,{align:'right'});
   pdf.setFont('helvetica','normal');fit(`${text('observer')}: ${project.observer||'-'}`,W-M-78,M+15,72,8,6);
  }
  function card(x,y,width,height,label,value,note){
   pdf.setFillColor(244,247,251);pdf.setDrawColor(...line);pdf.roundedRect(x,y,width,height,2,2,'FD');pdf.setFillColor(...blue);pdf.rect(x,y,1.6,height,'F');
   pdf.setFont('helvetica','bold');pdf.setTextColor(...muted);fit(label,x+4,y+5,width-7,6.5,5.5);
   pdf.setTextColor(...navy);fit(value,x+4,y+(height>19?13:12),width-7,height>19?14:10,9);
   if(note){pdf.setFont('helvetica','normal');pdf.setTextColor(...muted);fit(note,x+4,y+18,width-7,5.5,5)}
  }
  header();
  const primary=[
   [text('duration'),timerText(s.duration),text('durationNote')],
   [text('distance'),s.distance==null?'—':number(s.distance)+' m',$('distanceNote').textContent],
   [text('steps'),s.steps==null?'—':number(Math.round(s.steps),0),$('stepNote').textContent],
   [text('moves'),number(s.rows.length,0),text('movesNote')],
   [walkingLabel(s),s.walkTime==null?'—':timerText(s.walkTime),walkingNote(s)],
   [$('walkShareLabel').textContent,$('walkShare').textContent,text('shareNote')]
  ];
  const gap=3,cw=(W-M*2-gap*5)/6;
  primary.forEach((c,i)=>card(M+i*(cw+gap),33,cw,21,...c));
  secondaryCards(s).slice(0,6).forEach(([k,v],i)=>card(M+i*(cw+gap),57,cw,16,text(k),v));
  const x=M,y=77,w=177,h=120;
  pdf.setDrawColor(...line);pdf.roundedRect(x,y,w,h,2,2,'S');pdf.setFont('helvetica','bold');pdf.setTextColor(...navy);pdf.setFontSize(10);write(text('diagram'),x+5,y+7);
  const ratio=project.height/1000,iw=Math.min(w-10,100/ratio),ih=iw*ratio;
  pdf.addImage(image,'PNG',x+(w-iw)/2,y+12+(100-ih)/2,iw,ih);
  pdf.setTextColor(...muted);pdf.setFont('helvetica','normal');pdf.setFontSize(6.3);write(text('distanceMethod'),x+5,y+h-4,{maxWidth:w-10});
  const rx=190,rw=98;
  pdf.setFillColor(...navy);pdf.roundedRect(rx,77,rw,9,2,2,'F');pdf.setFont('helvetica','bold');pdf.setFontSize(8);pdf.setTextColor(255,255,255);write(text('topRoutes'),rx+4,83);
  s.routes.slice(0,6).forEach((r,i)=>{
   const ry=87+i*8;
   if(i%2===0){pdf.setFillColor(247,249,252);pdf.rect(rx,ry-1,rw,8,'F')}
   pdf.setTextColor(...navy);pdf.setFont('helvetica','normal');fit(`${r.from} > ${r.to}`,rx+3,ry+2,69,7,6);
   pdf.setFont('helvetica','bold');pdf.setFontSize(8);write(String(r.count),rx+rw-4,ry+2,{align:'right'});
  });
  pdf.setTextColor(...navy);pdf.setFont('helvetica','bold');pdf.setFontSize(8);write(text('reportNotes'),rx,143);
  const notes=[text('reportTimeNote'),`${text('stride')}: ${number(project.stride)}. ${walkingNote(s)}.`,project.metresPerUnit?`${text('scale')}: ${number(project.metresPerUnit*1000)} × ${number(project.metresPerUnit*project.height)} m.`:text('unscaled')];
  if(s.share>100)notes.push(text('checkSpeed'));
  if(project.observedCycles)notes.push(`${text('cycles')}: ${number(project.observedCycles,0)}. ${text('average')}: ${s.distance==null?'-':number(s.distance/project.observedCycles)+' m'}. ${text('stepsCycle')}: ${s.steps==null?'-':number(s.steps/project.observedCycles,1)}. ${text('averageNote')}.`);
  else notes.push(text('reportNoCycles'));
  pdf.setTextColor(...muted);pdf.setFont('helvetica','normal');pdf.setFontSize(7);
  let ny=149;for(const note of notes){const lines=pdf.splitTextToSize(clean(note),rw);write(lines,rx,ny);ny+=lines.length*3.1+2}
  // Detailed rows continue on their own pages; long names wrap instead of being cut off.
  if(s.rows.length){
   const widths=[10,57,57,30,28,34,63],titles=['seq','from','to','distance','steps','walkTimeSeconds','source'];let dy=0;
   const tableHeader=()=>{
    pdf.addPage();header();pdf.setFont('helvetica','bold');pdf.setTextColor(...navy);pdf.setFontSize(11);write(text('reportDetails'),M,38);
    pdf.setFillColor(...navy);pdf.rect(M,43,279,10,'F');pdf.setTextColor(255,255,255);let tx=M;
    titles.forEach((k,i)=>{fit(text(k),tx+2,49,widths[i]-4,7,5.5);tx+=widths[i]});dy=53;
   };
   tableHeader();
   s.rows.forEach((r,i)=>{
    const walk=r.distance==null?null:r.distance/project.walkingSpeed*1000;
    const method=[r.b.steps!=null?text('counted'):text('estimated'),text('walkEstimated')].join(' / ');
    const values=[i+1,visitName(r.a),visitName(r.b),r.distance==null?'—':number(r.distance)+' m',r.steps==null?'—':number(Math.round(r.steps),0),walk==null?'—':number(walk/1000,2),method];
    pdf.setFont('helvetica','normal');pdf.setFontSize(7);
    const lines=values.map((v,j)=>pdf.splitTextToSize(clean(v),widths[j]-4));
    const height=Math.max(8,...lines.map(v=>v.length*3.2+3));if(dy+height>197)tableHeader();
    if(i%2===0){pdf.setFillColor(247,249,252);pdf.rect(M,dy,279,height,'F')}
    pdf.setTextColor(...navy);pdf.setFont('helvetica','normal');pdf.setFontSize(7);let tx=M;
    lines.forEach((v,j)=>{write(v,tx+2,dy+4);tx+=widths[j]});pdf.setDrawColor(...line);pdf.line(M,dy+height,288,dy+height);dy+=height;
   });
  }
  const pages=pdf.getNumberOfPages();for(let i=1;i<=pages;i++){pdf.setPage(i);pdf.setFont('helvetica','normal');pdf.setFontSize(6.5);pdf.setTextColor(...muted);write(`Dometic · ${text('app')} · ${project.date}`,M,H-5);write(`${text('page')} ${i} / ${pages}`,W-M,H-5,{align:'right'})}
  download(pdf.output('arraybuffer'),'application/pdf',filename('pdf'));
 }catch(error){console.error(error);message('pdfError',true)}finally{button.disabled=false;button.textContent=text('pdf')}
}

$('print').onclick=exportPdf;
window.addEventListener('beforeprint',()=>updateStats());
setInterval(()=>{if(project.session.status==='running')updateStats()},500);
window.addEventListener('pagehide',()=>save());window.addEventListener('resize',()=>draw());document.addEventListener('keydown',e=>{if(e.key==='Escape'){finishDrawing(false);mode='select';reference=[];render()}});render();openLanguagePicker();
