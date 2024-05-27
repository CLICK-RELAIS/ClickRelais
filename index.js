// const communesParWilaya = {
//     select: [''],
//     wilaya0: ['- Choisir une commune -'],
//     wilaya1: ['ADRAR', 'TAMEST', 'CHAROUINE', 'REGGANE', 'INZGHMIR', 'TIT', 'KSAR KADDOUR', 'TSABIT', 'TIMIMOUN', 'OULED SAÏD', 'ZAOUET KOUNTA', 'AOULEF', 'TAMOKTEN', 'TAMANTIT', 'FENOUGHIL', 'TINERKOUK', 'DELDOUL', 'SALI', 'AKABLI', 'METARFA', 'OULED AHMED TAMMI', 'BOUDA', 'AOUGROUT', 'TALMINE', 'BORDJ BADJI MOKHTAR', 'SEBAA', 'OULED AISSA', 'TIMIAOUINE'],
//     wilaya2: ['ABOU EL HASSAN', 'AÏN MERANE', 'BÉNAIRIA', 'BENI BOUATEB', 'BENI HAOUA', 'BENI RACHED', 'BOUKADIR', 'BOUZEGHAIA', 'BREIRA', 'CHETTIA', 'CHLEF', 'DAHRA', 'EL HADJADJ', 'EL KARIMIA', 'EL MARSA', 'HARCHOUN', 'HARENFA', 'LABIOD MEDJADJA', 'MOUSSADEK', 'OUED FODDA', 'OUED GOUSSINE', 'OUED SLY', 'OULED ABBES', 'OULED BEN ABDELKADER', 'OULED FARES', 'OUM DROU', 'SENDJAS', 'SIDI ABDERRAHMANE', 'SIDI AKKACHA', 'SOBHA', 'TADJENA', 'TALASSA', 'TAOUGRITE', 'TÉNÈS', 'ZEBOUDJA'],
//     wilaya3: ['AFLOU', 'AÏN MADHI', 'AÏN SIDI ALI', 'BEIDHA', 'BENNASSER BENCHOHRA', 'BRIDA', 'EL ASSAFIA', 'EL GHICHA', 'EL HOUAITA', 'GUELTAT SIDI SAAD', 'HADJ MECHRI', 'HASSI DELAA', 'HASSI R’MEL', 'KHENEG', 'KSAR EL HIRANE', 'LAGHOUAT', 'OUED M’ZI', 'OUED MORRA', 'SEBGAG', 'SIDI BOUZID', 'SIDI MAKHLOUF', 'TADJEMOUT', 'TADJROUNA', 'TAOUIALA'],
//     wilaya4: ['OUM EL BOUAGHI', 'AÏN BABOUCHE', 'AÏN BEIDA', 'AÏN DISS', 'AÏN FAKROUN', 'AÏN KERCHA', 'AÏN MLILA', 'AÏN ZITOUN', 'BEHIR CHERGUI', 'BERRICHE', 'BIR CHOUHADA', 'DHALA', 'EL AMIRIA', 'EL BELALA', 'EL DJAZIA', 'EL FEDJOUZ BOUGHARA SAOUDI', 'EL HARMILIA', 'FKIRINA', 'HANCHIR TOUMGHANI', 'KSAR SBAHI', 'MESKIANA', 'OUED NINI', 'OULED GACEM', 'OULED HAMLA', 'OULED ZAOUI', 'RAHIA', 'SIGUS', 'SOUK NAAMANE', 'ZORG'],
//     wilaya5: ['BATNA', 'GHASSIRA', 'MAAFA', 'MEROUANA', 'SERIANA', 'MENAA', 'EL MADHER', 'TAZOULT', 'N`GAOUS', 'GUIGBA', 'INOUGISSEN', 'OUYOUN EL ASSAFIR', 'DJERMA', 'BITAM', 'ABDELKADER AZIL', 'ARRIS', 'KIMMEL', 'TILATOU', 'AÏN DJASSER', 'OULED SELLAM', 'TIGHERGHAR', 'AÏN YAGOUT', 'SEFIANE', 'FESDIS', 'RAHBAT', 'TIGHANIMINE', 'LEMSANE', 'KSAR BELLEZMA', 'SEGGANA', 'ICHMOUL', 'FOUM TOUB', 'BEN FOUDHALA EL HAKANIA', 'OUED EL MA', 'TALKHAMT', 'BOUZINA', 'CHEMORA', 'OUED CHAABA', 'TAXLENT', 'GOSBAT', 'OULED AOUF', 'BOUMAGUER', 'BARIKA', 'DJEZAR', 'T`KOUT', 'AÏN TOUTA', 'HIDOUSSA', 'TENIET EL ABED', 'OUED TAGA', 'OULED FADEL', 'TIMGAD', 'RAS EL AIOUN', 'CHIR', 'OULED SI SLIMANE', 'ZANAT EL BEIDA', 'MDOUKEL', 'OULED AMMAR', 'EL HASSI', 'LAZROU', 'BOUMIA', 'BOULHILAT', 'LARBAÂ'],
//     wilaya6: ['BÉJAÏA', 'AMIZOUR', 'FERRAOUN', 'TAOURIRT IGHL', 'CHELLATA', 'TAMOKRA', 'TIMEZRIT', 'SOUK EL TÉNINE', 'M`CISNA', 'TINABDHER', 'TICHY', 'SEMAOUNE', 'KENDIRA', 'TIFRA', 'IGHRAM', 'AMALOU', 'IGHIL ALI', 'FENAÏA ILMATEN', 'TOUDJA', 'DARGUINA', 'SIDI-AYAD', 'AOKAS', 'BENI DJELLIL', 'ADEKAR', 'AKBOU', 'SEDDOUK', 'TAZMALT', 'AÏT-R`ZINE', 'CHEMINI', 'SOUK-OUFELLA', 'TASKRIOUT', 'TIBANE', 'TALA HAMZA', 'BARBACHA', 'BENI KSILA', 'OUZELLAGUEN', 'BOUHAMZA', 'BENI MELLIKECHE', 'SIDI-AÏCH', 'EL KSEUR', 'MELBOU', 'AKFADOU', 'LEFLAYE', 'KHERRATA', 'DRAÂ EL-KAÏD', 'TAMRIDJET', 'AÏT-SMAIL', 'BOUKHELIFA', 'TIZI N`BERBER', 'BENI MAOUCHE', 'OUED GHIR', 'BOUDJELLIL'],
//     wilaya7: ['AÏN NAGA', 'AÏN ZAATOUT', 'BISKRA', 'BORDJ BEN AZZOUZ', 'BOUCHAGROUNE', 'BRANIS', 'CHETMA', 'DJEMORAH', 'DOUCEN', 'EL FEIDH', 'EL GHROUS', 'EL HADJEB', 'EL HAOUCH', 'EL KANTARA', 'EL MIZARAA', 'EL OUTAYA', 'FOUGHALA', 'KHENGUET SIDI NADJI', 'LICHANA', 'LIOUA', 'M`CHOUNECHE', 'MEKHADMA', 'M`LILI', 'OULED DJELLAL', 'OULED HARKAT', 'OULED RAHMA', 'OULED SASSI', 'OUMACHE', 'OURLAL', 'SIDI KHALED', 'SIDI OKBA', 'TOLGA', 'ZERIBET EL OUED'],
//     wilaya8: ['BÉCHAR', 'ERG FERRADJ', 'OULED KHOUDIR', 'MERIDJA', 'TIMOUDI', 'LAHMAR', 'BÉNI ABBÈS', 'BENI IKHLEF', 'MECHRAA HOUARI BOUMEDIENNE', 'KENADSA', 'IGLI', 'TABELBALA', 'TAGHIT', 'EL OUATA', 'BOUKAIS', 'MOUGHEUL', 'ABADLA', 'KERZAZ', 'KSABI', 'TAMTERT', 'BENI OUNIF'],
//     wilaya9: ['BLIDA', 'CHEBLI', 'BOUINAN', 'OUED ALLEUG', 'OULED YAÏCH', 'CHRÉA', 'EL AFFROUN', 'CHIFFA', 'HAMMAM MELOUANE', 'BENKHELIL', 'SOUMAA', 'MOUZAIA', 'SOUHANE', 'MEFTAH', 'OULED SLAMA', 'BOUFARIK', 'LARBAÂ', 'OUED DJER', 'BENI TAMOU', 'BOUARFA', 'BENI MERED', 'BOUGARA', 'GUEROUAOU', 'AÏN ROMANA', 'DJEBABRA'],
//     wilaya10: ['AÏN BESSEM', 'HANIF', 'AGHBALOU', 'AÏN EL HADJAR', 'AHL EL KSAR', 'AÏN LALOUI', 'ATH MANSOUR', 'AOMAR', 'AÏN EL TURC', 'AÏT LAZIZ', 'BOUDERBALA', 'BECHLOUL', 'BIR GHBALOU', 'BOUKRAM', 'BORDJ OKHRISS', 'BOUIRA', 'CHORFA', 'DECHMIA', 'DIRRAH', 'DJEBAHIA', 'EL HAKIMIA', 'EL HACHIMIA', 'EL ADJIBA', 'EL KHABOUZIA', 'EL MOKRANI', 'EL ASNAM', 'GUERROUMA', 'HAIZER', 'HADJERA ZERGA', 'KADIRIA', 'LAKHDARIA', 'M`CHEDALLAH', 'MEZDOUR', 'MAALA', 'MAAMORA', 'OUED EL BERDI', 'OULED RACHED', 'RAOURAOUA', 'RIDANE', 'SAHARIDJ', 'SOUR EL GHOUZLANE', 'SOUK EL KHEMIS', 'TAGUEDIT', 'TAGHZOUT', 'ZBARBAR'],
//     wilaya11: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya12: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya13: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya14: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya15: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya16: ['ALGER-CENTRE', 'SIDI M`HAMED', 'EL MADANIA', 'BELOUIZDAD', 'BAB EL OUED', 'BOLOGHINE', 'CASBAH', 'OUED KORICHE', 'BIR MOURAD RAÏS', 'EL BIAR', 'BOUZAREAH', 'BIRKHADEM', 'EL HARRACH', 'BARAKI', 'OUED SMAR', 'BACHDJERRAH', 'HUSSEIN DEY', 'KOUBA', 'BOUROUBA', 'DAR EL BEÏDA', 'BAB EZZOUAR', 'BEN AKNOUN', 'DELY IBRAHIM', 'BAÏNEM', 'RAÏS HAMIDOU', 'DJASR KASENTINA', 'EL MOURADIA', 'HYDRA', 'MOHAMMADIA', 'BORDJ EL KIFFAN', 'EL MAGHARIA', 'BENI MESSOUS', 'LES EUCALYPTUS', 'BIRTOUZA', 'TESSALA EL MERDJA', 'OULED CHEBEL', 'SIDI MOUSSA', 'AÏN TAYA', 'BORDJ EL BAHRI', 'EL MARSA', 'H`RAOUA', 'ROUIBA', 'REGHAÏA', 'AÏN BENIAN', 'STAOUELI', 'ZERALDA', 'MAHELMA', 'RAHMANIA', 'SOUIDANIA', 'CHERAGA', 'OULED FAYET', 'EL ACHOUR', 'DRARIA', 'DOUERA', 'BABA HASSEN', 'KHRAICIA', 'SAOULA'],
//     wilaya17: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya18: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya19: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya20: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya21: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya22: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya23: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya24: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya25: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya26: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya27: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya28: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya29: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya30: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya31: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya32: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya33: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya34: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya35: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya36: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya37: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya38: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya39: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya40: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya41: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya42: ['AGHBAL', 'AHMAR EL AÏN', 'AÏN TAGOURAIT', 'ATTATBA', 'BENI MILLEUK', 'BOU ISMAÏL', 'BOUHAROUN', 'BOURKIKA', 'CHAIBA', 'CHERCHELL', 'DAMOUS', 'DOUAOUDA', 'FOUKA', 'GOURAYA', 'HADJERET ENNOUS', 'HADJOUT', 'KHEMISTI', 'KOLÉA', 'LARHAT', 'MENACEUR', 'MERAD', 'MESSELMOUN', 'NADOR', 'SIDI AMAR', 'SIDI GHILES', 'SIDI RACHED', 'SIDI SEMIANE', 'TIPAZA'],
//     wilaya43: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya44: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya45: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya46: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya47: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya48: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya49: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya50: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya51: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya52: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya53: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya54: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya55: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya56: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya57: ['Commune A', 'Commune B', 'Commune C'],
//     wilaya58: ['Commune A', 'Commune B', 'Commune C'],
//   };



      // Données des pays
    const paysData = ['01-ADRAR', '02-CHLEF', '03-LAGHOUAT', '04-OUM EL BOUAGHI', '05-BATNA', '06-BEJAIA', '07-BISKRA', '08-BECHAR', '09-BLIDA', '10-BOUIRA', '11-TAMANRASSET', '12-TEBESSA', '13-TLEMCEN', '14-TIARET', '15-TIZI Ouzou', '16-ALGER', '17-DJELFA', '18-JIJEL', '19-SETIF', '20-SAÏDA', '21-SKIKDA', '22-SIDI BEL ABBES', '23-ANNABA', '24-GUELMA', '25-CONSTANTINE', '26-MEDEA', '27-MOSTAGANEM', '28-MSILA', '29-MASCARA', '30-OUARGLA', '31-ORAN', '32-EL BAYADH', '33-ILLIZI', '34-BORDJ BOU ARRERIDJ', '35-BOUMERDES', '36-EL TARF', '37-TINDOUF', '38-TISSEMSILT', '39-EL OUED', '40-KHENCHELA', '41-SOUK AHRAS', '42-TIPAZA', '43-MILA', '44-AÏN DEFLA', '45-NAAMA', '46-AÏN TEMOUCHENT', '47-GHARDAIA', '48-RELIZANE', '49-TIMIMOUN', '50-BORDJ BADJI MOKHTAR', '51-OULED DJELLAL', '52-BÉNI ABBÈS', '53-IN SALAH', '54-IN GUEZZAM', '55-TOUGGOURT', '56-DJANET', '57-EL M`GHAIER', '58-EL MENIAA'];

    // Données des wilayas par pays
    const wilayasData = {
      // "Algérie": ["Alger", "Oran", "Constantine"],
      // "Maroc": ["Casablanca", "Rabat", "Marrakech"],
      // "Tunisie": ["Tunis", "Sfax", "Sousse"],
      // "Sénégal": ["Dakar", "Thiès", "Saint-Louis"],
      // "Nigeria": ["Lagos", "Abuja", "Kano"],
      '01-ADRAR': ['ADRAR', 'TAMEST', 'CHAROUINE', 'REGGANE', 'INZGHMIR', 'TIT', 'KSAR KADDOUR', 'TSABIT', 'TIMIMOUN', 'OULED SAÏD', 'ZAOUET KOUNTA', 'AOULEF', 'TAMOKTEN', 'TAMANTIT', 'FENOUGHIL', 'TINERKOUK', 'DELDOUL', 'SALI', 'AKABLI', 'METARFA', 'OULED AHMED TAMMI', 'BOUDA', 'AOUGROUT', 'TALMINE', 'BORDJ BADJI MOKHTAR', 'SEBAA', 'OULED AISSA', 'TIMIAOUINE'],
      '02-CHLEF': ['ABOU EL HASSAN', 'AÏN MERANE', 'BÉNAIRIA', 'BENI BOUATEB', 'BENI HAOUA', 'BENI RACHED', 'BOUKADIR', 'BOUZEGHAIA', 'BREIRA', 'CHETTIA', 'CHLEF', 'DAHRA', 'EL HADJADJ', 'EL KARIMIA', 'EL MARSA', 'HARCHOUN', 'HARENFA', 'LABIOD MEDJADJA', 'MOUSSADEK', 'OUED FODDA', 'OUED GOUSSINE', 'OUED SLY', 'OULED ABBES', 'OULED BEN ABDELKADER', 'OULED FARES', 'OUM DROU', 'SENDJAS', 'SIDI ABDERRAHMANE', 'SIDI AKKACHA', 'SOBHA', 'TADJENA', 'TALASSA', 'TAOUGRITE', 'TÉNÈS', 'ZEBOUDJA'],
      '03-LAGHOUAT': ['AFLOU', 'AÏN MADHI', 'AÏN SIDI ALI', 'BEIDHA', 'BENNASSER BENCHOHRA', 'BRIDA', 'EL ASSAFIA', 'EL GHICHA', 'EL HOUAITA', 'GUELTAT SIDI SAAD', 'HADJ MECHRI', 'HASSI DELAA', 'HASSI R’MEL', 'KHENEG', 'KSAR EL HIRANE', 'LAGHOUAT', 'OUED M’ZI', 'OUED MORRA', 'SEBGAG', 'SIDI BOUZID', 'SIDI MAKHLOUF', 'TADJEMOUT', 'TADJROUNA', 'TAOUIALA'],
      '04-OUM EL BOUAGHI': ['OUM EL BOUAGHI', 'AÏN BABOUCHE', 'AÏN BEIDA', 'AÏN DISS', 'AÏN FAKROUN', 'AÏN KERCHA', 'AÏN MLILA', 'AÏN ZITOUN', 'BEHIR CHERGUI', 'BERRICHE', 'BIR CHOUHADA', 'DHALA', 'EL AMIRIA', 'EL BELALA', 'EL DJAZIA', 'EL FEDJOUZ BOUGHARA SAOUDI', 'EL HARMILIA', 'FKIRINA', 'HANCHIR TOUMGHANI', 'KSAR SBAHI', 'MESKIANA', 'OUED NINI', 'OULED GACEM', 'OULED HAMLA', 'OULED ZAOUI', 'RAHIA', 'SIGUS', 'SOUK NAAMANE', 'ZORG'],
      '05-BATNA': ['BATNA', 'GHASSIRA', 'MAAFA', 'MEROUANA', 'SERIANA', 'MENAA', 'EL MADHER', 'TAZOULT', 'N`GAOUS', 'GUIGBA', 'INOUGISSEN', 'OUYOUN EL ASSAFIR', 'DJERMA', 'BITAM', 'ABDELKADER AZIL', 'ARRIS', 'KIMMEL', 'TILATOU', 'AÏN DJASSER', 'OULED SELLAM', 'TIGHERGHAR', 'AÏN YAGOUT', 'SEFIANE', 'FESDIS', 'RAHBAT', 'TIGHANIMINE', 'LEMSANE', 'KSAR BELLEZMA', 'SEGGANA', 'ICHMOUL', 'FOUM TOUB', 'BEN FOUDHALA EL HAKANIA', 'OUED EL MA', 'TALKHAMT', 'BOUZINA', 'CHEMORA', 'OUED CHAABA', 'TAXLENT', 'GOSBAT', 'OULED AOUF', 'BOUMAGUER', 'BARIKA', 'DJEZAR', 'T`KOUT', 'AÏN TOUTA', 'HIDOUSSA', 'TENIET EL ABED', 'OUED TAGA', 'OULED FADEL', 'TIMGAD', 'RAS EL AIOUN', 'CHIR', 'OULED SI SLIMANE', 'ZANAT EL BEIDA', 'MDOUKEL', 'OULED AMMAR', 'EL HASSI', 'LAZROU', 'BOUMIA', 'BOULHILAT', 'LARBAÂ'],
      '06-BEJAIA': ['BÉJAÏA', 'AMIZOUR', 'FERRAOUN', 'TAOURIRT IGHL', 'CHELLATA', 'TAMOKRA', 'TIMEZRIT', 'SOUK EL TÉNINE', 'M`CISNA', 'TINABDHER', 'TICHY', 'SEMAOUNE', 'KENDIRA', 'TIFRA', 'IGHRAM', 'AMALOU', 'IGHIL ALI', 'FENAÏA ILMATEN', 'TOUDJA', 'DARGUINA', 'SIDI-AYAD', 'AOKAS', 'BENI DJELLIL', 'ADEKAR', 'AKBOU', 'SEDDOUK', 'TAZMALT', 'AÏT-R`ZINE', 'CHEMINI', 'SOUK-OUFELLA', 'TASKRIOUT', 'TIBANE', 'TALA HAMZA', 'BARBACHA', 'BENI KSILA', 'OUZELLAGUEN', 'BOUHAMZA', 'BENI MELLIKECHE', 'SIDI-AÏCH', 'EL KSEUR', 'MELBOU', 'AKFADOU', 'LEFLAYE', 'KHERRATA', 'DRAÂ EL-KAÏD', 'TAMRIDJET', 'AÏT-SMAIL', 'BOUKHELIFA', 'TIZI N`BERBER', 'BENI MAOUCHE', 'OUED GHIR', 'BOUDJELLIL'],
      '07-BISKRA': ['AÏN NAGA', 'AÏN ZAATOUT', 'BISKRA', 'BORDJ BEN AZZOUZ', 'BOUCHAGROUNE', 'BRANIS', 'CHETMA', 'DJEMORAH', 'DOUCEN', 'EL FEIDH', 'EL GHROUS', 'EL HADJEB', 'EL HAOUCH', 'EL KANTARA', 'EL MIZARAA', 'EL OUTAYA', 'FOUGHALA', 'KHENGUET SIDI NADJI', 'LICHANA', 'LIOUA', 'M`CHOUNECHE', 'MEKHADMA', 'M`LILI', 'OULED DJELLAL', 'OULED HARKAT', 'OULED RAHMA', 'OULED SASSI', 'OUMACHE', 'OURLAL', 'SIDI KHALED', 'SIDI OKBA', 'TOLGA', 'ZERIBET EL OUED'],
      '08-BECHAR': ['BÉCHAR', 'ERG FERRADJ', 'OULED KHOUDIR', 'MERIDJA', 'TIMOUDI', 'LAHMAR', 'BÉNI ABBÈS', 'BENI IKHLEF', 'MECHRAA HOUARI BOUMEDIENNE', 'KENADSA', 'IGLI', 'TABELBALA', 'TAGHIT', 'EL OUATA', 'BOUKAIS', 'MOUGHEUL', 'ABADLA', 'KERZAZ', 'KSABI', 'TAMTERT', 'BENI OUNIF'],
      '09-BLIDA': ['BLIDA', 'CHEBLI', 'BOUINAN', 'OUED ALLEUG', 'OULED YAÏCH', 'CHRÉA', 'EL AFFROUN', 'CHIFFA', 'HAMMAM MELOUANE', 'BENKHELIL', 'SOUMAA', 'MOUZAIA', 'SOUHANE', 'MEFTAH', 'OULED SLAMA', 'BOUFARIK', 'LARBAÂ', 'OUED DJER', 'BENI TAMOU', 'BOUARFA', 'BENI MERED', 'BOUGARA', 'GUEROUAOU', 'AÏN ROMANA', 'DJEBABRA'],
      '10-BOUIRA': ['AÏN BESSEM', 'HANIF', 'AGHBALOU', 'AÏN EL HADJAR', 'AHL EL KSAR', 'AÏN LALOUI', 'ATH MANSOUR', 'AOMAR', 'AÏN EL TURC', 'AÏT LAZIZ', 'BOUDERBALA', 'BECHLOUL', 'BIR GHBALOU', 'BOUKRAM', 'BORDJ OKHRISS', 'BOUIRA', 'CHORFA', 'DECHMIA', 'DIRRAH', 'DJEBAHIA', 'EL HAKIMIA', 'EL HACHIMIA', 'EL ADJIBA', 'EL KHABOUZIA', 'EL MOKRANI', 'EL ASNAM', 'GUERROUMA', 'HAIZER', 'HADJERA ZERGA', 'KADIRIA', 'LAKHDARIA', 'M`CHEDALLAH', 'MEZDOUR', 'MAALA', 'MAAMORA', 'OUED EL BERDI', 'OULED RACHED', 'RAOURAOUA', 'RIDANE', 'SAHARIDJ', 'SOUR EL GHOUZLANE', 'SOUK EL KHEMIS', 'TAGUEDIT', 'TAGHZOUT', 'ZBARBAR'],
      '11-TAMANRASSET': ['Commune A', 'Commune B', 'Commune C'],
      '12-TEBESSA': ['Commune A', 'Commune B', 'Commune C'],
      '13-TLEMCEN': ['Commune A', 'Commune B', 'Commune C'],
      '14-TIARET': ['Commune A', 'Commune B', 'Commune C'],
      '15-TIZI Ouzou': ['Commune A', 'Commune B', 'Commune C'],
      '16-ALGER': ['ALGER-CENTRE', 'SIDI M`HAMED', 'EL MADANIA', 'BELOUIZDAD', 'BAB EL OUED', 'BOLOGHINE', 'CASBAH', 'OUED KORICHE', 'BIR MOURAD RAÏS', 'EL BIAR', 'BOUZAREAH', 'BIRKHADEM', 'EL HARRACH', 'BARAKI', 'OUED SMAR', 'BACHDJERRAH', 'HUSSEIN DEY', 'KOUBA', 'BOUROUBA', 'DAR EL BEÏDA', 'BAB EZZOUAR', 'BEN AKNOUN', 'DELY IBRAHIM', 'BAÏNEM', 'RAÏS HAMIDOU', 'DJASR KASENTINA', 'EL MOURADIA', 'HYDRA', 'MOHAMMADIA', 'BORDJ EL KIFFAN', 'EL MAGHARIA', 'BENI MESSOUS', 'LES EUCALYPTUS', 'BIRTOUZA', 'TESSALA EL MERDJA', 'OULED CHEBEL', 'SIDI MOUSSA', 'AÏN TAYA', 'BORDJ EL BAHRI', 'EL MARSA', 'H`RAOUA', 'ROUIBA', 'REGHAÏA', 'AÏN BENIAN', 'STAOUELI', 'ZERALDA', 'MAHELMA', 'RAHMANIA', 'SOUIDANIA', 'CHERAGA', 'OULED FAYET', 'EL ACHOUR', 'DRARIA', 'DOUERA', 'BABA HASSEN', 'KHRAICIA', 'SAOULA'],
      '17-DJELFA': ['Commune A', 'Commune B', 'Commune C'],
      '18-JIJEL': ['Commune A', 'Commune B', 'Commune C'],
      '19-SETIF': ['Commune A', 'Commune B', 'Commune C'],
      '20-SAÏDA': ['Commune A', 'Commune B', 'Commune C'],
      '21-SKIKDA': ['Commune A', 'Commune B', 'Commune C'],
      '22-SIDI BEL ABBES': ['Commune A', 'Commune B', 'Commune C'],
      '23-ANNABA': ['Commune A', 'Commune B', 'Commune C'],
      '24-GUELMA': ['Commune A', 'Commune B', 'Commune C'],
      '25-CONSTANTINE': ['Commune A', 'Commune B', 'Commune C'],
      '26-MEDEA': ['Commune A', 'Commune B', 'Commune C'],
      '27-MOSTAGANEM': ['Commune A', 'Commune B', 'Commune C'],
      '28-MSILA': ['Commune A', 'Commune B', 'Commune C'],
      '29-MASCARA': ['Commune A', 'Commune B', 'Commune C'],
      '30-OUARGLA': ['Commune A', 'Commune B', 'Commune C'],
      '31-ORAN': ['Commune A', 'Commune B', 'Commune C'],
      '32-EL BAYADH': ['Commune A', 'Commune B', 'Commune C'],
      '33-ILLIZI': ['Commune A', 'Commune B', 'Commune C'],
      '34-BORDJ BOU ARRERIDJ': ['Commune A', 'Commune B', 'Commune C'],
      '35-BOUMERDES': ['Commune A', 'Commune B', 'Commune C'],
      '36-EL TARF': ['Commune A', 'Commune B', 'Commune C'],
      '37-TINDOUF': ['Commune A', 'Commune B', 'Commune C'],
      '38-TISSEMSILT': ['Commune A', 'Commune B', 'Commune C'],
      '39-EL OUED': ['Commune A', 'Commune B', 'Commune C'],
      '40-KHENCHELA': ['Commune A', 'Commune B', 'Commune C'],
      '41-SOUK AHRAS': ['Commune A', 'Commune B', 'Commune C'],
      '42-TIPAZA': ['AGHBAL', 'AHMAR EL AÏN', 'AÏN TAGOURAIT', 'ATTATBA', 'BENI MILLEUK', 'BOU ISMAÏL', 'BOUHAROUN', 'BOURKIKA', 'CHAIBA', 'CHERCHELL', 'DAMOUS', 'DOUAOUDA', 'FOUKA', 'GOURAYA', 'HADJERET ENNOUS', 'HADJOUT', 'KHEMISTI', 'KOLÉA', 'LARHAT', 'MENACEUR', 'MERAD', 'MESSELMOUN', 'NADOR', 'SIDI AMAR', 'SIDI GHILES', 'SIDI RACHED', 'SIDI SEMIANE', 'TIPAZA'],
      '43-MILA': ['Commune A', 'Commune B', 'Commune C'],
      '44-AÏN DEFLA': ['Commune A', 'Commune B', 'Commune C'],
      '45-NAAMA': ['Commune A', 'Commune B', 'Commune C'],
      '46-AÏN TEMOUCHENT': ['Commune A', 'Commune B', 'Commune C'],
      '47-GHARDAIA': ['Commune A', 'Commune B', 'Commune C'],
      '48-RELIZANE': ['Commune A', 'Commune B', 'Commune C'],
      '49-TIMIMOUN': ['Commune A', 'Commune B', 'Commune C'],
      '50-BORDJ BADJI MOKHTAR': ['Commune A', 'Commune B', 'Commune C'],
      '51-OULED DJELLAL': ['Commune A', 'Commune B', 'Commune C'],
      '52-BÉNI ABBÈS': ['Commune A', 'Commune B', 'Commune C'],
      '53-IN SALAH': ['Commune A', 'Commune B', 'Commune C'],
      '54-IN GUEZZAM': ['Commune A', 'Commune B', 'Commune C'],
      '55-TOUGGOURT': ['Commune A', 'Commune B', 'Commune C'],
      '56-DJANET': ['Commune A', 'Commune B', 'Commune C'],
      '57-EL M`GHAIER': ['Commune A', 'Commune B', 'Commune C'],
      '58-EL MENIAA': ['Commune A', 'Commune B', 'Commune C'],
    };

    // Données des communes par wilaya
    const communesData = {
      'CHETTIA': ["01 متاجر عمران Omran Stores", "02 Pizzeria Aquarium ", "03 Coiffure BZ"],
      'KOLÉA': ["01 CasaNova", "02 Meubles de confiance - أثاث الثقة", "03 Boutique élégance kolea"],
      // ... Ajouter des données pour les autres wilayas
    };

    // Fonction pour charger les options des wilayas en fonction du pays sélectionné
    function chargerWilayas() {
      const paysSelect = document.getElementById("pays");
      const wilayasSelect = document.getElementById("wilayas");

      const selectedPays = paysSelect.value;
      const wilayas = wilayasData[selectedPays] || [];

      // Réinitialiser les options des wilayas
      wilayasSelect.innerHTML = "<option value=''>Sélectionnez une commune</option>";

      // Ajouter les nouvelles options
      for (const wilaya of wilayas) {
        const option = document.createElement("option");
        option.value = wilaya;
        option.text = wilaya;
        wilayasSelect.appendChild(option);
      }

      // Réinitialiser les options des communes
      document.getElementById("communes").innerHTML = "<option value=''>Sélectionnez une point de relais</option>";
    }

    // Fonction pour charger les options des communes en fonction de la wilaya sélectionnée
    function chargerCommunes() {
      const wilayasSelect = document.getElementById("wilayas");
      const communesSelect = document.getElementById("communes");

      const selectedWilaya = wilayasSelect.value;
      const communes = communesData[selectedWilaya] || [];

      // Réinitialiser les options des communes
      communesSelect.innerHTML = "<option value=''>Sélectionnez une point de relais</option>";

      // Ajouter les nouvelles options
      for (const commune of communes) {
        const option = document.createElement("option");
        option.value = commune;
        option.text = commune;
        communesSelect.appendChild(option);
      }
    }

    // Charger les options des pays initiales
    const paysSelect = document.getElementById("pays");
    for (const pays of paysData) {
      const option = document.createElement("option");
      option.value = pays;
      option.text = pays;
      paysSelect.appendChild(option);
    }


/////////////////////////////////////////////
  
  const codeHTMLParCommune = {
    'CHETTIA': '<iframe src="https://my.atlist.com/map/58e858e8-06ff-411a-9a78-804a5e1d0b7b?share=true" allow="geolocation \'self\' https://my.atlist.com" width="100%" height="800px" loading="lazy" frameborder="0" scrolling="yes" allowfullscreen></iframe>',
    'BOU ISMAÏL':'<iframe src="https://my.atlist.com/map/5903ad61-e03d-482e-b643-ad67360ba215/?share=true" allow="geolocation \'self\' https://my.atlist.com" width="100%" height="500px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>',
    'KOLÉA' : '<iframe src="https://my.atlist.com/map/fce55735-aa54-475b-9d73-ea01cfe8860b/?share=true" allow="geolocation \'self\' https://my.atlist.com" width="100%" height="500px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>',

    'ADRAR' : '<h3>Cette commune ne dispose pas de point de relais</h3>',
  };


  // function chargerCommunes() {
  //   const wilayaSelect = document.getElementById('wilaya');
  //   const communeSelect = document.getElementById('commune');
  //   const wilayaValue = wilayaSelect.value;
  
  //   communeSelect.innerHTML = '';
  
  //   const communes = communesParWilaya[wilayaValue];
  
  //   if (communes) {
  //     communes.forEach(commune => {
  //       const option = document.createElement('option');
  //       option.value = commune;
  //       option.textContent = commune;
  //       communeSelect.appendChild(option);
  //     });
  //   }
  // }
  
  // chargerCommunes();
  
  // //////////////////////////////////////////////

  // function chargerPoints() {
   
  //   const communeSelect = document.getElementById('commune'); 
  //   const PointsSelect = document.getElementById('point');
  //   const communeValue = communeSelect.value;
  
  //   communeSelect.innerHTML = '';
  
  //   const communes = communesParWilaya[wilayaValue];
  
  //   if (communes) {
  //     communes.forEach(commune => {
  //       const option = document.createElement('option');
  //       option.value = commune;
  //       option.textContent = commune;
  //       communeSelect.appendChild(option);
  //     });
  //   }
  // }
  
  // chargerCommunes();

  /////////////////////////////////////////////////////////////


 
  document.getElementById('afficherIframeBtn').addEventListener('click', function() {
    const communeSelect = document.getElementById('wilayas');
    const communeValue = communeSelect.value;
  
    if (codeHTMLParCommune.hasOwnProperty(communeValue)) {
      const iframeContainer = document.getElementById('iframeContainer');
      iframeContainer.innerHTML = codeHTMLParCommune[communeValue];
    } else {
      console.error('Aucun code HTML n\'est défini pour la commune sélectionnée.');
    }
  });








const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
const test = document.getElementById("test");
menu.addEventListener("click",()=>{
    hundleMenu();

})

function hundleMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
test.classList.toggle("is-active");
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbzm6TB78yDQl0TO8HYS4KXMNhdxcJSZiEUsESz_9Sy4YnLt1KR6Vo8i2P8pbgMdMJzG/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => window.open('thankYouPage.html') )
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
}
)
// alert("Votre commande a été prise en compte et sera traitée dans les meilleurs délais, Vous recevrez un e-mail de confirmation de commande" )