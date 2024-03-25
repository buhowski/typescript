import { TextLink } from '../../PageStructure/IdeaElements';

// Games Industry Page text
export const gamesTextData = [
	// ############## rusian ##############
	{
		section: [
			{
				titleType: [{ key: `Тип:`, value: `Відеогра` }],
				titleBig: [{ key: `Назва:`, value: `Січ / Козаки РПГ` }],
				subtitleBig: [
					{ key: `Платформа:`, value: `PC, PS5` },
					{ key: `Жанр:`, value: `Нелінійна action/RPG з відкритим світом` },
					{
						key: `Сеттінг:`,
						value: `Україна XVI – XVIII століття, Запорозька Січ`,
					},
				],
				title: `Опис`,
				text: [
					`Концепт моєї ідеї полягає в поєднанні реальних історичних подій Українського Козацтва зі Слов'янськими міфами та містикою літературної творчості Миколи Гоголя (ідеї, теми та атмосфера). Для того щоб уявити моє бачення картини гри, потрібно взяти Запорозьких Козаків (картинки 03 – 08) і поєднати у графічний супровід з відео 01 - 02, але з власною тематикою, текстурами і нововведеннями.`,

					`Получиться гра, яка оживляє історію Українських Козаків та Запорозької Січі. Маю на меті популяризацію нового бачення того періоду, та показати образи різних Козаків у новому стилі. Відверто зображуючи всю суть тієї епохи – криваві бої, жорстокість, зраду, нерозказані легенди та відверті сцени. Також показати славнозвісний бойовий танець гопак, гумор і безкраї краєвиди.`,
				],
				subtitle: `Натхнення:`,
				list: [
					<>Ігри The Witcher 3: Wild Hunt та Ghost of Tsushima.</>,

					<>
						Творчість{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Nikolai_Gogol'
							text={`Миколи Гоголя`}
						/>{' '}
						(
						<TextLink
							href='https://en.wikipedia.org/wiki/Dead_Souls'
							text={`Мертві душі`}
						/>
						,{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Evenings_on_a_Farm_Near_Dikanka'
							text={`Вечори на хуторі біля Диканьки`}
						/>
						, <TextLink href='https://en.wikipedia.org/wiki/Viy_(story)' text={`Вій`} />
						,{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Taras_Bulba'
							text={`Тарас Бульба`}
						/>
						).
					</>,

					<>Запорозькі Козаки, Слов'янська міфологія, Українська демонологія.</>,
				],
			},
			{
				title: `Особливості`,
				subtitle: `Автентичне зображення козацької культури та історії:`,
				list: [
					`Реальні події та історичні особистості.`,

					`Культурну спадщину, Український фольклор та Слов’янську міфологію.`,

					`Таємниці козацького життя та їхню боротьбу за свободу.`,

					`Передати багату палітру людських емоцій, від тріумфу до трагедії.`,
				],
				subtitle2: `Середовище відкритого світу:`,
				list2: [
					`Безкраї простори Запорозької Січі та пейзажі Україна XVI – XVIII століття.`,

					`Приховані поселення, величні руїни та інші цікаві місця.`,

					`Захоплюючі квести, які проведуть незабутню екскурсію Українськими лабіринтами і розкриють таємниці історії.`,
				],
			},
			{
				title: `Висновок`,
				text: [
					`Поєднати реальні факти та події з містикою та гумором, залучити творчий колектив талановитих розробників і все це стане запорукою створення сильної ігрової серії нового покоління про козаків.`,

					`Моє бачення дозволяє робити красоту з нерозказаними історіями. Нові ідеї, які можна перетворювати на шедеври світового масштабу, як у поляків The Witcher, як гра про японську історію Ghost of Tsushima, та інші.`,

					`Тому я шукаю підтримки у цьому проекті, який допоможе розкрити козацтво з нового ракурсу та дасть великий поштовх на подібні проекти недоторканої історії, яка прагне вивільнитися, як і моє бажання та бачення цілої картини. Потрібні лише згуртована команда та ресурси для реалізації. І тоді слова перетворяться на дійсність!`,
				],
			},
		],

		// Last words
		lastWords: `Для всех желающих сотрудничать,
		свяжитесь со мной!
		Спасибо за внимание.`,
	},

	// ############## English ##############
	{
		section: [
			{
				titleType: [{ key: `Type:`, value: `Video Game` }],
				titleBig: [{ key: `Name:`, value: `The Sich / Cossacks RPG` }],
				subtitleBig: [
					{ key: `Platform:`, value: `PC, PS5` },
					{ key: `Genre:`, value: `Non-linear action/RPG with an open world` },
					{
						key: `Setting:`,
						value: `Ukraine, 16th – 18th centuries, Zaporozhian Sich`,
					},
				],
				title: `Description`,
				text: [
					`The concept of my idea is to combine real historical events of the Ukrainian Cossacks with Slavic myths and mysticism from the literary works of Nikolai Gogol (ideas, themes, and atmosphere). To imagine my vision of the game's visuals, you need to take the Zaporozhian Cossacks (images 03 – 08) and combine them with the graphic style of videos 01 - 02, but with its own theme, textures, and innovations.`,

					`The result will be a game that brings to life the history of the Ukrainian Cossacks and the Zaporozhian Sich. My goal is to popularize a new vision of that period and show the images of different Cossacks in a new style. Openly depicting the whole essence of that era – bloody battles, cruelty, betrayal, untold legends, and explicit scenes. It will also show the famous hopak dance, humor, and endless landscapes.`,
				],
				subtitle: `Inspiration:`,
				list: [
					<>Games The Witcher 3: Wild Hunt and Ghost of Tsushima.</>,
					<>
						The works of{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Nikolai_Gogol'
							text={`Nikolai Gogol`}
						/>{' '}
						(
						<TextLink
							href='https://en.wikipedia.org/wiki/Dead_Souls'
							text={`Dead Souls`}
						/>
						,{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Evenings_on_a_Farm_Near_Dikanka'
							text={`Evenings on a Farm Near Dikanka`}
						/>
						, <TextLink href='https://en.wikipedia.org/wiki/Viy_(story)' text={`Viy`} />
						,{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Taras_Bulba'
							text={`Taras
						Bulba`}
						/>
						).
					</>,
					<>Zaporozhian Cossacks, Slavic mythology, Ukrainian demonology.</>,
				],
			},
			{
				title: `Features`,
				subtitle: `Authentic depiction of Cossack culture and history:`,
				list: [
					`Real events and historical figures.`,

					`Cultural heritage, Ukrainian folklore, and Slavic mythology.`,

					`Secrets of Cossack life and their struggle for freedom.`,

					`Conveying a rich palette of human emotions, from triumph to tragedy.`,
				],
				subtitle2: `Open world environment:`,
				list2: [
					`Endless expanses of the Zaporozhian Sich and landscapes of Ukraine in the 16th – 18th centuries.`,

					`Hidden settlements, majestic ruins, and other interesting locations.`,

					`Exciting quests that will take you on an unforgettable journey through Ukrainian labyrinths and reveal the secrets of history.`,
				],
			},
			{
				title: `Conclusion`,
				text: [
					`Combining real facts and events with mysticism and humor, and involving a creative team of talented developers will all be the key to creating a strong new generation of Cossacks game series.`,

					`My vision allows me to create beauty from untold stories. New ideas that can be turned into world-class masterpieces, like The Witcher from the Poles, Ghost of Tsushima, a game about Japanese history, and others.`,

					`Therefore, I am looking for support for this project, which will help to reveal the Cossacks from a new perspective and give a big impetus to similar projects of untouched history that strives to be released, as well as my desire and vision of the whole picture. All we need is a close-knit team and resources for implementation. And then words will turn into reality!`,
				],
			},
		],

		// Last words
		lastWords: `For everyone who wants to cooperate,
			please contact me!
			Thank you for your attention.`,
	},

	// ############## Ukraine ##############
	{
		section: [
			{
				titleType: [{ key: `Тип:`, value: `Відеогра` }],
				titleBig: [{ key: `Назва:`, value: `Січ / Козаки РПГ` }],
				subtitleBig: [
					{ key: `Платформа:`, value: `PC, PS5` },
					{ key: `Жанр:`, value: `Нелінійна action/RPG з відкритим світом` },
					{
						key: `Сеттінг:`,
						value: `Україна XVI – XVIII століття, Запорозька Січ`,
					},
				],
				title: `Опис`,
				text: [
					`Концепт моєї ідеї полягає в поєднанні реальних історичних подій Українського Козацтва зі Слов'янськими міфами та містикою літературної творчості Миколи Гоголя (ідеї, теми та атмосфера). Для того щоб уявити моє бачення картини гри, потрібно взяти Запорозьких Козаків (картинки 03 – 08) і поєднати у графічний супровід з відео 01 - 02, але з власною тематикою, текстурами і нововведеннями.`,

					`Получиться гра, яка оживляє історію Українських Козаків та Запорозької Січі. Маю на меті популяризацію нового бачення того періоду, та показати образи різних Козаків у новому стилі. Відверто зображуючи всю суть тієї епохи – криваві бої, жорстокість, зраду, нерозказані легенди та відверті сцени. Також показати славнозвісний бойовий танець гопак, гумор і безкраї краєвиди.`,
				],
				subtitle: `Натхнення:`,
				list: [
					<>Ігри The Witcher 3: Wild Hunt та Ghost of Tsushima.</>,

					<>
						Творчість{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Nikolai_Gogol'
							text={`Миколи Гоголя`}
						/>{' '}
						(
						<TextLink
							href='https://en.wikipedia.org/wiki/Dead_Souls'
							text={`Мертві душі`}
						/>
						,{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Evenings_on_a_Farm_Near_Dikanka'
							text={`Вечори на хуторі біля Диканьки`}
						/>
						, <TextLink href='https://en.wikipedia.org/wiki/Viy_(story)' text={`Вій`} />
						,{' '}
						<TextLink
							href='https://en.wikipedia.org/wiki/Taras_Bulba'
							text={`Тарас Бульба`}
						/>
						).
					</>,

					<>Запорозькі Козаки, Слов'янська міфологія, Українська демонологія.</>,
				],
			},
			{
				title: `Особливості`,
				subtitle: `Автентичне зображення козацької культури та історії:`,
				list: [
					`Реальні події та історичні особистості.`,

					`Культурну спадщину, Український фольклор та Слов’янську міфологію.`,

					`Таємниці козацького життя та їхню боротьбу за свободу.`,

					`Передати багату палітру людських емоцій, від тріумфу до трагедії.`,
				],
				subtitle2: `Середовище відкритого світу:`,
				list2: [
					`Безкраї простори Запорозької Січі та пейзажі Україна XVI – XVIII століття.`,

					`Приховані поселення, величні руїни та інші цікаві місця.`,

					`Захоплюючі квести, які проведуть незабутню екскурсію Українськими лабіринтами і розкриють таємниці історії.`,
				],
			},
			{
				title: `Висновок`,
				text: [
					`Поєднати реальні факти та події з містикою та гумором, залучити творчий колектив талановитих розробників і все це стане запорукою створення сильної ігрової серії нового покоління про козаків.`,

					`Моє бачення дозволяє робити красоту з нерозказаними історіями. Нові ідеї, які можна перетворювати на шедеври світового масштабу, як у поляків The Witcher, як гра про японську історію Ghost of Tsushima, та інші.`,

					`Тому я шукаю підтримки у цьому проекті, який допоможе розкрити козацтво з нового ракурсу та дасть великий поштовх на подібні проекти недоторканої історії, яка прагне вивільнитися, як і моє бажання та бачення цілої картини. Потрібні лише згуртована команда та ресурси для реалізації. І тоді слова перетворяться на дійсність!`,
				],
			},
		],

		// Last words
		lastWords: `Для всіх бажаючих співпрацювати,
		зв'яжіться зі мною!
		Дякую за увагу.`,
	},
];
