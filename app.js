angular.module('qq', ['ngMaterial']).controller('quickQuranController', [
	'$scope', '$sce', '$mdToast',
	function($scope, $sce, $mdToast) {
		'use strict';
		var getSurahIndex;

		angular.extend($scope, {
			reciters: [{
				name: "Tawfeeq",
				link: "tawfeeq_bin_saeed-as-sawaaigh"
			}, {
				name: "Ajamy",
				link: "ahmed_ibn_3ali_al-3ajamy"
			}, {
				name: "Shatri",
				link: "abu_bakr_ash-shaatree"
			}, {
				name: "Afasy",
				link: "mishaari_raashid_al_3afaasee"
			}, {
				name: "Afasy English",
				link: "mishaari_w_ibrahim_walk_si"
			}],
			surahs: ["Al-Fatiha", "Al-Baqarah", "Ale Imran", "An-Nisa",
				"Al-Maidah", "Al-Anam", "Al-Araf", "Al-Anfal", "At-Tawbah", "Yunus",
				"Hud", "Yusuf", "Ar-Rad", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra",
				"Al-Kahf", "Maryam", "Taha", "Al-Anbya", "Al-Haj", "Al-Muminun",
				"An-Nur",
				"Al-Furqan", "Ash-Shuara", "An-Naml", "Al-Qasas", "Al-Ankabut",
				"Ar-Rum",
				"Luqman", "As-Sajdah", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin",
				"As-Saffat",
				"Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shuraa", "Az-Zukhruf",
				"Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath",
				"Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar",
				"Ar-Rahman", "Al-Waqiah", "Al-Hadid", "Al-Mujadila", "Al-Hashr",
				"Al-Mumtahanah", "As-Saf", "Al-Jumuah", "Al-Munafiqun", "At-Taghabun",
				"At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah",
				"Al-Maarij",
				"Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah",
				"Al-Insan", "Al-Mursalat", "An-Naba", "An-Naziat", "Abasa",
				"At-Takwir",
				"Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq",
				"Al-Ala", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams",
				"Al-Layl",
				"Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah",
				"Az-Zalzalah", "Al-Adiyat", "Al-Qariah", "At-Takathur", "Al-Asr",
				"Al-Humazah", "Al-Fil", "Quraysh", "Al-Maun", "Al-Kawthar",
				"Al-Kafirun",
				"An-Nasr", "Al-Masad", "Al-Ikhlas",
				"Al-Falaq", "An-Nas"
			]
		});

		// angular.extend($scope, reciters);
		// angular.extend($scope, surahs);

		getSurahIndex = function(surah) {
			var surahIndex = $scope.surahIndex = $scope.surahs.indexOf(surah) + 1;
			return (surahIndex <= 9) ? "00" + surahIndex : (surahIndex >= 10 &&
				surahIndex <= 99) ? "0" + surahIndex : surahIndex;
		};

		$scope.context = {
			selectedReciter: $scope.reciters[0],
			selectedSurah: $scope.surahs[0],
			isPlaying: false
		};

		$scope.updateSurah = function() {
			var audioUrl, surahUrl;

			audioUrl = "http://download.quranicaudio.com/quran/" + $scope.context
				.selectedReciter
				.link + "/" + getSurahIndex($scope.context.selectedSurah) + ".mp3";

			surahUrl = "http://quran.com/" + getSurahIndex($scope.context.selectedSurah);

			// used when interpolating for src in audio or iframe tags
			$scope.audioSrc = $sce.trustAsResourceUrl(audioUrl);
			$scope.surahSrc = $sce.trustAsResourceUrl(surahUrl);

			$mdToast.show(
				$mdToast.simple()
				.content('Selected reciter: ' + $scope.context.selectedReciter.name +
					' & Surah: ' + $scope.context.selectedSurah)
				.position('bottom left')
				.hideDelay(3000)
			);
		};

// initialize autoplay text
		$scope.isAutoplay = 'OFF';

// 		$scope.toggleAutoplay = function(){
// 		//	$scope.isAutoplay = !$scope.isAutoplay;
// // use http://www.ng-newsletter.com/posts/beginner2expert-services.html to build autoplay functionality, service handles listeners and trigger next surah after "ended" event is emitted.
// 			console.log('autoplay' + $scope.isAutoplay);
//
// 		}

		$scope.updateSurah();

	}
]);
