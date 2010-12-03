// Array of Quran Surah names to populate UI list
var arrayOfQuranSurahs = ["Al-Fatihah", "Al-Baqarah", "Ale Imran", "An-Nisa", "Al-Maidah", "Al-Anam", "Al-Araf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Rad", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Taha", "Al-Anbya", "Al-Haj", "Al-Muminun", "An-Nur", "Al-Furqan", "Ash-Shuara", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajdah", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shuraa", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqiah", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahanah", "As-Saf", "Al-Jumuah", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah", "Al-Maarij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Naziat", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq", "Al-Ala", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Layl", "Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah", "Az-Zalzalah", "Al-Adiyat", "Al-Qariah", "At-Takathur", "Al-Asr", "Al-Humazah", "Al-Fil", "Quraysh", "Al-Maun", "Al-Kawthar", "Al-Kafirun", "An-Nasr", "Al-Masad", "Al-Ikhlas", "Al-Falaq", "An-Nas"]; 

/*Function iterates from 001 - 114  
* creates links for each audio file page from http://quranicaudio.com
* creates links for each surah page from http://quran.com
*/
function showQuranLinksTawfeeq(){	
for (i = 1; i <= 114; i++){
	if (i <= 9){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh/00" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 10) && (i <= 99)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh/0" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 100) && (i<=114)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh/" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		}
	}
}
function showQuranLinksShatri(){	
for (i = 1; i <= 114; i++){
	if (i <= 9){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/abu_bakr_ash-shaatree/00" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 10) && (i <= 99)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/abu_bakr_ash-shaatree/0" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 100) && (i<=114)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/abu_bakr_ash-shaatree/" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		}
	}
}
function showQuranLinksAfasy(){	
for (i = 1; i <= 114; i++){
	if (i <= 9){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/00" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 10) && (i <= 99)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/0" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 100) && (i<=114)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		}
	}
}
function showQuranLinksAfasyEng(){	
for (i = 1; i <= 114; i++){
	if (i <= 9){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/mishaari_w_ibrahim_walk_si/00" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 10) && (i <= 99)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/mishaari_w_ibrahim_walk_si/0" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 100) && (i<=114)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/mishaari_w_ibrahim_walk_si/" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		}
	}
}
function showQuranLinksAjamy(){	
for (i = 1; i <= 114; i++){
	if (i <= 9){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/00" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 10) && (i <= 99)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/0" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 100) && (i<=114)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		}
	}
}
function showQuranLinksSaad(){	
for (i = 1; i <= 114; i++){
	if (i <= 9){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/00" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 10) && (i <= 99)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/0" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		} if ((i >= 100) && (i<=114)){
		document.write("<li><a target='_blank' href=http://download.quranicaudio.com/quran/sa3d_al-ghaamidi/complete/" + i + ".mp3>" + i + " " + arrayOfQuranSurahs[i - 1] + "</a><div class='surahTextLink'><a target='_blank' href=http://quran.com/" + i + ">read</a></div></li>");
		}
	}
}