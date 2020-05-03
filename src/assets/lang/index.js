const fr = {
	homeCategory: {
		groupeType: {
			adgroups: 'Groupe d\'annonces',
			campaigns: 'Campagnes',
			ads: 'Annonces',
			keywords: 'Mots clés',
		},
		title: ' : vue d\'ensemble',
		dateButton: 'Changer la période',
		cards: {
			click: 'Clics',
			clickTips: 'Nombre total de clic généré par vos annonces',
			impressions: 'Impressions',
			impressionsTips: 'Fréquence de diffusion de vos annonces grâce à vos annonces',
			ctr: 'Taux de clics (CTR)',
			ctrTips: 'La proportion d\'utilisateurs qui voient votre annonce grâce à vos annonces et cliquent dessus',
			cpc: 'Coût par clic (CPC)',
			cpcTips: 'Montant que vous payez pour un clic sur votre annonce',
		},
		table: {
			click: 'Clics',
			impressions: 'Impressions',
			ctr: 'CTR',
			cpc: 'CPC',
			cost: 'Coût',
			conversions: 'Conversions',
			costPerConversions: 'Coût par conversions',
			budget: 'Budget',
		},
	},
	campaigns: {
		groupeType: 'Campagnes',
		title: ' : vue d\'ensemble',
		dateButton: 'Changer la période',
		cards: {
			click: 'Clics',
			clickTips: 'Nombre total de clic généré par vos campagnes',
			impressions: 'Impressions',
			impressionsTips: 'Fréquence de diffusion de vos annonces grâce à vos campagnes',
			ctr: 'Taux de clics (CTR)',
			ctrTips: 'La proportion d\'utilisateurs qui voient votre annonce grâce à vos campagnes et cliquent dessus',
			cpc: 'Coût par clic (CPC)',
			cpcTips: 'Montant que vous payez pour un clic sur votre annonce',
		},

		table: [
			'Clics',
			'Impressions',
			'CTR',
			'Coût ($)',
			'Conversions',
			'Coût par clic ($)',
			'Coût par conversion ($)',
		],
	},
	adgroups: {
		groupeType: 'Groupe d\'annonces',
		title: ' : vue d\'ensemble',
		dateButton: 'Changer la période',
		cards: {
			click: 'Clics',
			clickTips: 'Nombre total de clic généré par vos groupes d\'annonces',
			impressions: 'Impressions',
			impressionsTips: 'Fréquence de diffusion de vos annonces grâce à vos groupes d\'annonces',
			ctr: 'Taux de clics (CTR)',
			ctrTips: 'La proportion d\'utilisateurs qui voient votre annonce grâce à vos groupes d\'annonces et cliquent dessus',
			cpc: 'Coût par clic (CPC)',
			cpcTips: 'Montant que vous payez pour un clic sur votre annonce',
		},
		// table: {
		//   click: 'Clics',
		//   impressions: 'Impressions',
		//   ctr: 'CTR',
		//   cost: 'Coût',
		//   conversions: 'Conversions',
		//   costPerConversions: 'Coût par conversions',
		// },
		table: [
			'Clics',
			'Impressions',
			'CTR',
			'Coût ($)',
			'Conversions',
			'Coût par clic ($)',
		],
	},
	keywords: {
		groupeType: 'Mots clés',
		title: ' : vue d\'ensemble',
		dateButton: 'Changer la période',
		cards: {
			click: 'Clics',
			clickTips: 'Nombre total de clic généré par les vos clés',
			impressions: 'Impressions',
			impressionsTips: 'Fréquence de diffusion de vos annonces grâce à vos mots clés',
			ctr: 'Taux de clics (CTR)',
			ctrTips: 'La proportion d\'utilisateurs qui voient votre annonce grâce à vos mots clés et cliquent dessus',
			cpc: 'Coût par clic (CPC)',
			cpcTips: 'Montant que vous payez pour un clic sur votre annonce',
		},

		table: [
			'Clics',
			'Impressions',
			'CTR',
			'Coût ($)',
			'Conversions',
			'Coût par clic ($)',
			'Coût par conversion ($)',
		],
	},
	ads: {
		groupeType: 'Annonces',
		title: ' : vue d\'ensemble',
		dateButton: 'Changer la période',
		cards: {
			click: 'Clics',
			clickTips: 'Nombre total de clic généré par vos annonces',
			impressions: 'Impressions',
			impressionsTips: 'Fréquence de diffusion de vos annonces grâce à vos annonces',
			ctr: 'Taux de clics (CTR)',
			ctrTips: 'La proportion d\'utilisateurs qui voient votre annonce grâce à vos annonces et cliquent dessus',
			cpc: 'Coût par clic (CPC)',
			cpcTips: 'Montant que vous payez pour un clic sur votre annonce',
		},
		table: [
			'Groupe d\'annonces',
			'Clics',
			'Impressions',
			'CTR',
			'Coût ($)',
			'Conversions',
			'Coût par clic ($)',
			'Coût par conversion ($)',
		],
	},
	details: {
		title: 'Details : vue d\'ensemble',
	},
	home: {
		title: 'Données : vue d\'ensemble',
		detailTitle: 'Top 5 des clics par catégorie',
		dateButton: 'Changer la période',
		textCampaigns: {
			title: 'Campagnes: chiffres clés',
			groupeType: ' campagnes',
			clicks: ' clics',
			average: 'Nombre moyen de clics: ',
			bestName: 'Meilleure campagne: ',
			worst: 'Moins bonne campagne: ',
			content: 'Vue d\'ensemble des indicateurs de performances clés pour mesurer les résultats de vos campagnes',
			tooltip: 'Ensemble de groupes d\'annonces qui partagent un budget et un ciblage géographique.',
			tooltip2: 'Les campagnes sont utilisées pour organiser les produits ou services que vous proposez.',
		},
		textAdgroups: {
			title: 'Groupe d\'annonces: chiffres clés',
			groupeType: ' groupe d\'annonces',
			clicks: ' clics',
			average: 'Nombre moyen de clics: ',
			bestName: 'Meilleur groupe d\'annonces: ',
			bestClicks: ' clics',
			worst: 'Moins bon groupe d\'annonces: ',
			content: 'Vue d\'ensemble des indicateurs de performances clés pour mesurer les résultats de vos groupes d\'annonces',
			tooltip: 'Un groupe d\'annonces contient une ou plusieurs annonces ciblant un ensemble partagé de mots clés.',
		},
		textAds: {
			title: 'Annonces: chiffres clés',
			groupeType: ' annonces',
			clicks: ' clics',
			average: 'Nombre moyen de clics: ',
			bestName: 'Meilleure annonce: ',
			bestClicks: ' clics',
			worst: 'Moins bonne annonce: ',
			content: 'Vue d\'ensemble des indicateurs de performances clés pour mesurer les résultats de vos annonces',
			tooltip: 'Les annonces textuelles s\'affichent dans des résultats de recherche Google.',
			tooltip2: 'Il s\'agit du type d\'annonces en ligne le plus simple offert par AdWords.',

		},
		textKeywords: {
			title: 'Mots clés: chiffres clés',
			groupeType: ' mots clés',
			clicks: ' clics',
			average: 'Nombre moyen de clics: ',
			bestName: 'Meilleur mot clé: ',
			bestClicks: ' clics',
			worst: 'Moins bon mot clé: ',
			content: 'Vue d\'ensemble des indicateurs de performances clés pour mesurer les résultats de vos mots clés',
			tooltip: 'Les mots clés que vous choisissez permettent de diffuser vos annonces auprès d\'internautes intéressés,',
			tooltip2: 'afin de ne toucher que les internautes qui sont le plus prédisposés à devenir vos clients.',
		},
	},
	top: {
		title: 'Top : vue d\'ensemble',
		date: 'Période de comparaison',
		content: {
			backBtn: ' Retour vers',
			title: ' : top 5 par ',
		},
		informations: {
			title: 'Chiffres clés',
			by: 'par ',
			clicks: 'clics',
			average: 'Moyenne :',
			best: 'Meilleure : ',
			worst: 'Moins bonne : ',
		},
	},
	header: {
		overview: 'Vue d\'ensemble',
		campaigns: 'Campagnes',
		adgroups: 'Groupes d\'annonces',
		ads: 'Annonces',
		keywords: 'Mots clés',
	},
	categorySidebar: {
		top: 'Top 5 ',
		clicks: ' par clics',
		impressions: ' par impressions',
		cpc: ' par CTR',
		cost: ' par coût',
		conversions: ' par conversions',
	},
};


const en = {
	homeCategory: {
		groupeType: {
			adgroups: 'Adgroups',
			campaigns: 'Campaigns',
			ads: 'Ads',
			keywords: 'Keywords',
		},
		title: ' Overview',
		dateButton: 'Change period',
		cards: {
			click: 'Clicks',
			clickTips: 'Number of clicks on your ad',
			impressions: 'Impressions',
			impressionsTips: 'How often your ad is shown',
			ctr: 'Click through rate (CTR)',
			ctrTips: 'A ratio showing how often people who see your ad end up clicking it',
			cpc: 'Cost by click (CPC)',
			cpcTips: 'Amount you pay for each click on your ads',
		},
		table: {
			click: 'Clicks',
			impressions: 'Impressions',
			ctr: 'CTR',
			cpc: 'CPC',
			cost: 'Cost',
			conversions: 'Conversions',
			costPerConversions: 'Cost per Conversions',
			budget: 'Budget',
		},
	},
	campaigns: {
		groupeType: 'Campaigns',
		title: ' Overview',
		dateButton: 'Change period',
		cards: {
			click: 'Clicks',
			clickTips: 'Number of clicks on your ad due to your campaigns',
			impressions: 'Impressions',
			impressionsTips: 'How often your ad is shown due to your campaigns',
			ctr: 'Click through rate (CTR)',
			ctrTips: 'A ratio showing how often people who see your ad end up clicking it due to your campaigns',
			cpc: 'Cost by click (CPC)',
			cpcTips: 'Amount you pay for each click on your ads',
		},
		// table: {
		//   click: 'Clicks',
		//   impressions: 'Impressions',
		//   ctr: 'CTR',
		//   cost: 'Cost',
		//   conversions: 'Conversions',
		//   costPerConversions: 'Cost per Conversions',
		// },
		table: [
			'Clicks',
			'Impressions',
			'CTR',
			'Cost ($)',
			'Conversions',
			'Cost per click ($)',
			'Cost per conversion ($)',
		],
	},
	adgroups: {
		groupeType: 'Adgroups',
		title: ' Overview',
		dateButton: 'Change period',
		cards: {
			click: 'Clicks',
			clickTips: 'Number of clicks on your ad due to your ad groups',
			impressions: 'Impressions',
			impressionsTips: 'How often your ad is shown due to your ad groups',
			ctr: 'Click through rate (CTR)',
			ctrTips: 'A ratio showing how often people who see your ad end up clicking it due to your ad groups',
			cpc: 'Cost by click (CPC)',
			cpcTips: 'Amount you pay for each click on your ads',
		},
		// table: {
		//   click: 'Clicks',
		//   impressions: 'Impressions',
		//   ctr: 'CTR',
		//   cost: 'Cost',
		//   conversions: 'Conversions',
		//   costPerConversions: 'Cost per Conversions',
		// },
		table: [
			'Clicks',
			'Impressions',
			'CTR',
			'Cost ($)',
			'Conversions',
			'Cost by click ($)',
		],
	},
	keywords: {
		groupeType: 'Keywords',
		title: ' Overview',
		dateButton: 'Change period',
		cards: {
			click: 'Clicks',
			clickTips: 'Number of clicks on your ad due to your keywords',
			impressions: 'Impressions',
			impressionsTips: 'How often your ad is shown due to your keywords',
			ctr: 'Click through rate (CTR)',
			ctrTips: 'A ratio showing how often people who see your ad end up clicking it due to your keywords',
			cpc: 'Cost by click (CPC)',
			cpcTips: 'Amount you pay for each click on your ads',
		},
		// table: {
		//   click: 'Clicks',
		//   impressions: 'Impressions',
		//   ctr: 'CTR',
		//   cost: 'Cost',
		//   conversions: 'Conversions',
		//   costPerConversions: 'Cost per Conversions',
		// },
		table: [
			'Clicks',
			'Impressions',
			'CTR',
			'Cost ($)',
			'Conversions',
			'Cost per click ($)',
			'Cost per conversion',
		],
	},
	ads: {
		groupeType: 'Ads',
		title: ' Overview',
		dateButton: 'Change period',
		cards: {
			click: 'Clicks',
			clickTips: 'Number of clicks on your ad',
			impressions: 'Impressions',
			impressionsTips: 'How often your ad is shown',
			ctr: 'Click through rate (CTR)',
			ctrTips: 'A ratio showing how often people who see your ad end up clicking it',
			cpc: 'Cost by click (CPC)',
			cpcTips: 'Amount you pay for each click on your ads',
		},
		table: [
			'Adgroup Name',
			'Clicks',
			'Impressions',
			'CTR',
			'Cost ($)',
			'Conversions',
			'Cost per click ($)',
			'Cost per conversion ($)',
		],
	},
	details: {
		title: 'Details Overview',
	},
	home: {
		title: 'Data Overview',
		detailTitle: 'Top 5 of clicks by category',
		dateButton: 'Change period',
		textCampaigns: {
			title: 'Campaigns: key numbers',
			groupeType: ' campaigns',
			clicks: ' clicks',
			average: 'Click average: ',
			bestName: 'Best campaign: ',
			worst: 'Worst campaign: ',
			content: 'Overview of the most important key performance indicators for your campaigns',
			tooltip: 'A set of ad groups (ads, keywords, and bids) that share a budget and targeting.',
			tooltip2: 'Campaigns are often used to organize categories of products or services that you offer.',
		},
		textAdgroups: {
			title: 'Adgroups: key numbers',
			groupeType: ' adgroups',
			clicks: ' clicks',
			average: 'Click average: ',
			bestName: 'Best adgroup: ',
			bestClicks: ' clics',
			worst: 'Worst adgroup: ',
			content: 'Overview of the most important key performance indicators for your ad groups',
			tooltip: 'An ad group contains one or more ads which target a shared set of keywords.',
		},
		textAds: {
			title: 'Ads: key numbers',
			groupeType: ' ads',
			clicks: ' clicks',
			average: 'Click average: ',
			bestName: 'Best ad: ',
			bestClicks: ' clics',
			worst: 'Worst ad: ',
			content: 'Overview of the most important key performance indicators for your ads',
			tooltip: 'Text ads on the Search Network show above and below Google search results.',
			tooltip2: 'A text ad on Google search is the simplest online ad that AdWords offers.',
		},
		textKeywords: {
			title: 'Keywords: key numbers',
			groupeType: ' keywords',
			clicks: ' clicks',
			average: 'Click average: ',
			bestName: 'Best keyword: ',
			bestClicks: ' clics',
			worst: 'Worst keyword: ',
			content: 'Overview of the most important key performance indicators for your keywords',
			tooltip: 'Words or phrases describing your product or service.',
			tooltip2: 'The keywords you choose are used to show your ads to people.',
		},
	},
	top: {
		title: 'Top Overview',
		date: 'Comparison period',
		content: {
			backBtn: ' Back to',
			title: ' : top 5 by ',
		},
		informations: {
			title: 'Key figures',
			by: 'by ',
			clicks: ' clicks',
			average: 'Average : ',
			best: 'Best : ',
			worst: 'Worst : ',
		},
	},
	header: {
		overview: 'Overview',
		campaigns: 'Campaigns',
		adgroups: 'Adgroups',
		ads: 'Ads',
		keywords: 'Keywords',
	},
	categorySidebar: {
		top: 'Top 5 ',
		clicks: ' by clics',
		impressions: ' by impressions',
		cpc: ' by CTR',
		cost: ' by cost',
		conversions: ' by conversions',
	},
};


export default {
	fr,
	en,
};
