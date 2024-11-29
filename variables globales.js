function default_variables() {

window.build = 0;
window.publication = false; // a special variable to differentiate behaviour on sineol and published versions.
window.global_multiplier = 6; // multiplication of most elements of the game, to raise the overall game speed.
if (publication == false) {global_multiplier = 1;}

// list of screens taking the whole page
window.LIST_main_screens = ["corps_intro", "main_frame", "corps_transition_human_world", "corps_end_screen"];

// LIST main menus.   0: is the menu available?    1: title ID    2: current skin
window.DICT_corps_screens = {"corps_god_world": [1, "title_god_world", 0],
							 "corps_fundamental_experience": [0, "title_fundamental_experience", 0],
							 "corps_human_world": [0, "title_human_world", 0],
							 "corps_prestige": [0, "title_prestige", 0],
							 "corps_god_of_extortion": [0, "title_god_of_extortion", 0],
							 "corps_statistics": [0, "title_statistics", 0],
							 "corps_encyclopedia": [0, "title_encyclopedia", 0],
							 "corps_settings": [1, "title_settings", 0],
							 };
						  
window.DICT_human_world_corps_screens = {"corps_Workers": [1, "title_Workers"],
										 "corps_Brothels_behind": [0, "title_Brothels"],
										 "corps_Factories": [0, "title_Factories"],
										 "corps_Temple": [0, "title_Temple"],
										 "corps_Laboratory": [0, "title_Laboratory"],
										 "corps_Schools": [0, "title_Schools"],
										 "corps_Lobby": [0, "title_Lobby"],
										 };
										  
window.fundamental_energy = 1; // amount of fundamental energy in stock
window.dollars = 0; // amount of dollars in stock
window.style_points = 0; // amount of style points in stock
window.influence_points = 1; // amount of influence points in stock. For the lobby.
window.golden_rings_total = 0; // total amount of golden rings bought, the premium currency. 1 ring = 1 dollar.
window.golden_rings_spent = 0; // total amount of golden rings spent.
window.last_ruin_points = 0; // amount of style points given by the last Ruin Everything
window.tutorial_step = 0; // initial tutorial step
window.tutorial_page = 1; // initial tutorial page
window.lobby_page = 0; // de 0 a 3 (la troisieme page est speciale, seulement du texte)
window.current_turn = 75; // compteur - tour actuel, exemple : *37* / 100
window.speeder = false; // Accelerator and Autoverheat. possible values: false, accelerator, autoverheat.
window.LIST_activities = []; // element 0, element 7, ... no need to specify if it's "construct" or "convert" since you can't do both for the same element.
window.restartor_activated = false;
window.semiauto_activated = true;
window.smartomaton_activated = false;
window.unstoppable_activated = false; // Unstoppable
window.tapping_activated = false; // Hourglass tapping
window.autotransfer_genitals = false; // for the temple
window.LIST_autotransfer_body_parts = [false, false, false, false, false, false, false, false, false, false]; // for the laboratory and the temple
window.tutorial_box_display = 1; // boolean, is the tutorial box displayed?
window.tutorial_box_size = 1; // big or small, big is default (1).
window.tutorial_box_top = 100;
window.tutorial_box_left = 90;
window.unlocked_buttons = false;
window.prostitutes_multiplicator = 1; // multiplies the number of prostitutes added to / removed from a task.
window.last_timestamp = 0; // save of the timestamp the last time time_runner() was activated
window.last_ruin_everything = 0; // used for deals that increase over time (Pretty old, Inflation) and #statistics
window.disagree = 0; // associated to the upgrade Green gauntlets.
window.scientist_dead = false;
window.scientist_resurrected = false;
window.scientist_timer = 0;
window.game_over = false;

// START - Not saved
window.initial_mute_button_activated = false;
window.beetlejuice_count = 0;
window.bully_god_power = 0.85;
window.activate_bullygod_authorized = true;
window.auto_turn_runner;
window.auto_turn_activated = 0; // boolean, is autoturn mode turned "on"?
window.buildings_that_ended = 0;
window.multiplier_style_points_to_funda = 0.1;
window.golden_rings_symbol = "&#x2B58;";
window.end_game_price = 1e+100;
window.total_upgrades_multiplicator_workers = 1; // used to save the total value of the multiplicator from upgrades. (See line below)
// Useful for CPU economy, avoid having to loop through all the upgrades every time_runner.
// END - Not saved


// valeurs statiques des elements constructibles du corps humain
// structure : 0:num_identifiant, 1:name, 2:cout, 3:construction time, 4:conversion time, 5:result
// 6:concentrated initial multiplicator 7:concentrated increment (in percent) 8: plural
window.energy_building_STALE = [
['&#x1F319;', 'Toenail', 1, 5, 10, 2, 6.2e+18, 1.1, 'Toenails'], // concentrated initial multiplicator = 5e9*16^7     '<img src="Images/test transparent done.PNG">'
['&#x1F485', 'Toe', 10, 10, 20, 20, 2e+16, 1.1, 'Toes'], // concentrated initial multiplicator = 5e8*16^6.
['&#x1F9B6;', 'Foot', 100, 15, 30, 200, 1e+14, 1.1, 'Feet'], // concentrated initial multiplicator = 5e7*16^5.
['&#x1f9b5;', 'Leg', 1000, 20, 40, 2000, 6e+11, 1.1, 'Legs'], // concentrated initial multiplicator = 5,000,000*16^4.
['&#x270B;', 'Hand', 10000, 25, 50, 20000, 1e+7, 1.1, 'Hands'], // concentrated initial multiplicator = 500,000*16^1.
['&#x1F4AA;', 'Arm', 100000, 30, 60, 200000, 50000, 1.1, 'Arms'], // concentrated initial multiplicator = 50,000*16^0.
['&#x1f930;', 'Belly', 1e+6, 35, 70, 2e+6, 3.2e+7, 1.1, 'Bellies'], // concentrated initial multiplicator = 5,000*16^3.
['&#x1F454;', 'Chest', 1.5e+7, 40, 80, 3e+7, 110000, 1.1, 'Chests'], // concentrated initial multiplicator = 333*16^2.
['&#x1F610;', 'Head', 2.50e+8, 45, 90, 5e+8, 4e+12, 1.1, 'Heads'], // concentrated initial multiplicator = 20*16^9
['&#9892;', 'Genitals', 5e+9, 50, 100, 1e+10, 1.1e+10, 1.1, 'Genitals'] // concentrated initial multiplicator = 1*16^8
];

// valeurs dynamiques personnalisees des elements du corps humain
// structure : 0:num_identifiant, 1:name, 2:barre de progression visible, 3:nom lisible, 4:pourcentage de completion
// 5:stock, 6:inactive, construct, convert, 7: inactive, autoconstruct, autoconvert, automaton 8: Twin count
window.energy_building_DYNAMIC = [
[0, 'Toenail', 1, 0, 0.0, 0, 'inactive', 'inactive', 0],
[1, 'Toe', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[2, 'Foot', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[3, 'Leg', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[4, 'Hand', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[5, 'Arm', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[6, 'Belly', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[7, 'Chest', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[8, 'Head', 0, 0, 0.0, 0, 'inactive', 'inactive', 0],
[9, 'Genitals', 0, 0, 0.0, 0, 'inactive', 'inactive', 0]
];

window.DICT_artwork = {'total_artworks': 0,
					'percentage_completion': 0.0,
					'activity': 0, // activity: 0=inactive, 1=active
					'auto_create': 0,
					'base_cost': 1e+11,
					'increment': 1.1
					};

// structure : NAME: 0: title menu, 1:price
window.DICT_dollars_buildings_STALE = {
	'Workers': ["title_Workers", 0],
	'Brothels': ["title_Brothels", 1000],
	'Factories': ["title_Factories", 1000000],
	'Temple': ["title_Temple", 1e+11],
	'Laboratory': ["title_Laboratory", 1e+21],
	'Schools': ["title_Schools", 1e+36],
	'Lobby': ["title_Lobby", 1e+55],
};

// structure : NAME: 0: locked/unlocked  1: ever unlocked
window.DICT_dollars_buildings_DYNAMIC = {
	'Workers': [1, 1],
	'Brothels': [0, 0],
	'Factories': [0, 0],
	'Temple': [0, 0],
	'Laboratory': [0, 0],
	'Schools': [0, 0],
	'Lobby': [0, 0],
};

// NOTE: Laboratories and Schools must me placed before brothels, brothels need them in order to be defined.

window.LIST_body_parts_stored = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // stored in the laboratory

// structure : dollars increment, body parts increment, time increment (OBSOLETE), multiplicator bonus to building
window.LIST_Laboratory = [10000, 10, 2, 0.5];

// structure : 0: current level, 1: level max, 2: number of components necessary (one list or one list per level?), 3: class type 4: initial cost in dollars 5: id tooltip 6: level max reached (for maximum memoriam)
window.DICT_Laboratory_upgrades = {
	"Fundamental physics": [0, 5, {0: 100000, 1: 100000, 2: 100000, 3: 100000}, 'energy_labo_window', 1e+21, 'tooltip_lab_physics', 0],
	"Biology": [0, 5, {4: 100000, 5: 100000}, 'workers_labo_window', 1e+21, 'tooltip_lab_biology', 0],
	"Management": [0, 5, {6: 100000}, 'brothel', 1e+21, 'tooltip_lab_management', 0],
	"Engineering": [0, 5, {8: 100000}, 'factory', 1e+21, 'tooltip_lab_engineering', 0],
	"Psychology": [0, 5, {7: 100000}, 'temple_labo_window', 1e+21,'tooltip_lab_psychology', 0],
}

window.DICT_Laboratory_descriptions = {
	"Fundamental physics": 
		["You know nothing, Godess. And neither do your prostitutes. They wander around cluelessly, and even though they occasionnally worry about it, most of the time they wallow into a peaceful ignorance.", // level 0
		 "Fundamental Energy is a thing.<br /> \
			That's basically all earthlings know. That's not much.", // level 1
		 "Fundamental Energy is everywhere. Gods don't create it, they just catalyze it.<br /> \
			Earthlings are trying to catalyze it too, but they are far from succeeding.", // level 2
		 "Some breakthroughs have been done, and a few people are clumsily exploiting Fundamental Energy, at a minor scale.", // level 3
		 "The power of Fundamental Energy is widely known, and its exploitation is commonplace. Your biggest temples have a room to exploit Fundamental Energy, and you don't hesitate to use it for yourself.", // level 4
		 "Fundamental physics has no secret anymore. Most of your temples have a special room to exploit Fundamental Energy, which gives you a great help in your own exploitation."], // level 5
	"Biology":
		["Prostitutes have no idea how biology works. Before the Godess of Beauty helps them, they didn't even have the correct amount of limbs, and didn't know about it.", // level 0
		 "People have basic ideas about biology, but overall, they still suck at it. They bravely try though, doing creepy experiments on animals and prescribing random remedies to cure diseases.", // level 1
		 "Some prostitutes have a decent knowledge in biology now, and are able to cure and prevent some diseases. They also have a vague understanding of hygiene and nutrition, which helps them with staying healthy.", // level 2
		 "Breakthroughs in medecine have highlighted the existence of sexually transmitted diseases. Your prostitutes now use condoms, which improves both their lifespan and the trust from customers. \
			And prevents pregnancy. Besides, breast implants, liposuction and more generally aesthetic surgery are debuting.", // level 3
		 "Sexually transmitted diseases either have a cure or a vaccin. HIV isn't a threat anymore, reducing the risks involved by prostitution, increasing the amount of customers. Also, almost all of your prostitutes have a breast implant or an enlarged penis.", // level 4
		 "The world has entered a both thrilling and terrifying era of transhumanism. Aging isn't a thing anymore, diseases are trivial, and genetically specialized humans are commonplace. Your prostitutes are genetically modified to become super attractive."], // level 5
	"Management":
		["Organization is not your thing. Planning is even more daunting than the Bully God. Your creations inherited your inability, that's why they act randomly, pretending they are passionate, while actually they can't work differently.", // level 0
		 "Things are getting better, but remain pretty bad. Your prostitutes are trying to plan and organize, but since they don't know how to do it, the end result is an awful mess.", // level 1
		 "That's not too bad. Planification is becoming efficient, minor advertising is starting, there are offers and discounts to attract and retain customers.", // level 2
		 "Things are getting better and better: data collection and study has started, there is tax optimization, and processes to manage providers and subcontractors are efficient.", // level 3
		 "A lot of processes have been improved and optimized. Storage management, accounting, marketing, human ressources management: those areas and the like are mastered.", // level 4
		 "The management practices of your prostitutes are widely recognized as the most efficient in the world. A lot of big companies try to imitate them, there has been a paradigm shift with a lot of new management standards."], // level 5
	"Engineering":
		["Physics is mysterious.<br ><br >\
			If someone were to ask your prostitutes whether fire is hot or cold, they would answer \"cold\", because they've never seen a customer ask for fire. And since they are definitely hot themselves, fire is probably not.", // level 0
		 "Maths, calculating, machines... That's for creepy nerds, not for mighty prostitutes. That's what they say when they try to hide their ignorance and their incompetence, but secretly some of them have studied the basics.<br /><br />\
			Fire is hot, definitely.", // level 1
		 "Your prostitutes have decent engineering knowledge: they can build rather complex items, and improve the efficiency of how they make simple ones.<br /><br />\
			Fire is hot, but not always the same \"hot\".", // level 2
		 "Your prostitutes are great engineers, they have advanced skills and are able to make pretty cool things, like real looking lightsabers. And they do useful things, too.<br /><br />\
			They know how to make the temperature of fire vary, so it's more or less hot, depending on how they want it.", // level 3
		 "Some of your prostitutes are among the most renowned engineers on Earth.<br /><br /> \
			Fire is neither hot or cold anymore, it has exactly the temperature they want.", // level 4
		 "Your prostitutes are technologically so far ahead that the rest of the world has given up on trying to catch up.<br /><br />\
			Fire? Such an obsolete technology..."], // level 5
	"Psychology": 
		["When it comes to comforting, your prostitutes are as soft as a cinder block. They don't know anything about the human mind, which they don't really see as a problem. Customers don't seem to care much either anyway.", // level 0
		 "Feelings are a thing, your prostitutes know that. They don't quite understand how such things work yet, and most still don't care much, but some start considering the business potential of mastering the human mind.", // level 1
		 "Basic principals of psychology are understood. Prostitutes are overall able to adapt to the habits of the area where they operate, making customers feel more comfortable and likely to ask for more.", // level 2
		 "Advanced tricks are being used. Humor and manipulation are commonplace among your workers, they know how to appear very nice and friendly. More and more customers hire them only for the conversation.", // level 3
		 "Most depressed people with enough money would rather afford a prostitute than a certified psychiatrist. Prostitutes have the reputation of deeply understanding the human mind, of being excellent problem solvers, and of having a great ability to think \"out of the box\".", // level 4
		 "World peace has been achieved: The incredible diplomacy skills of your prostitutes resulted in the signature of a plethora of agreements around the globe. \"Make love, not war\" is repeated everywhere, and conveniently, they have a lot of \"love\" to sell."], // level 5
}

window.DICT_Laboratory_descriptions_addition = {
	"Fundamental physics": "Conversions give <span id='tooltip_lab_physics'></span> % more Fundamental Energy.",
	"Biology": "Workers make <span id='tooltip_lab_biology'></span> % more dollars per date.",
	"Management": "Brothels make <span id='tooltip_lab_management'></span> % more dollars per hour.",
	"Engineering": "Factories are <span id='tooltip_lab_engineering'></span> % faster.",
	"Psychology": "Prayers are <span id='tooltip_lab_psychology'></span> % more efficient.",
}

// structure:  0:number of school, 1: experience gained (time passed in millisec*teachers) 2:bought or not, 3: how many completions?
// 4:price (dollars) 5:price (administrators), 6: conditions [type of building, building, position, level required], 7:initial time, 8: gain per completion
// 9: speed rate (seconds to complete with 1 prof/pupil) 10:time increment, 11:prof decrement, 12: other costs [factory, amount required], 13: ever unlocked?, 14: name used in time_runner, 15: decrementor
window.DICT_Schools = {
	"Basics school": [1, 0, 0, 0, 7777, 100, [], 3e+8, 1, 36000000, 0, 0, [], 0, "basics", 1337000],
	"Advanced school": [2, 0, 0, 0, 2e+45, 900, [], 36e+9, 0.0001, 600000, 0, 0, [["Common materials", 1e+10], ["Sophisticated items", 1e+7]], 0, "advanced", 2000000],
	"Elite school": [3, 0, 0, 0, 1e+62, 12000, [[DICT_dollars_buildings_DYNAMIC, "Lobby", 0, 1], [DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Psychology", 0, 5]], 8000e+9, 0.0001, 600000, 0, 0, [["Common materials", 1e+13], ["Futuristic items", 1e+5]], 0, "elite", 1000000],
} // DICT_Schools["Basics school"][3] = trained_prostitutes

window.DICT_Schools_descriptions = {
	"Basics school": "'But Miss, the word \"basic\" cannot take an \"s\" in \"Basic school\"! It's an adjective, and adjectives DO NOT take the plural ending!'<br /> \
		Well. You could be right, kid. It turns out, you're wrong. This school is not basic at all. It's cool and sophisticated. BUT you learn the basics in here. \
		This is, therefore, a Basics school.",
	"Advanced school": "The dumbest students have already been evicted. They are in the streets, working long hours and tricking lots of customers.<br />\
		The remaining students are here, learning advanced stuff to make more money: how to look good, how to be friendly, how to give better and quicker orgasms, etc.",
	"Elite school": "Only the most brilliant students are accepted here. Applicants to this prestigious school need to demonstrate exceptional talent, as well as a full loyalty to the Cause.<br />\
		The chosen ones will learn how to manipulate, control and dominate humans, in order to take over the world.",
}

// structure :  0:temps de completion, 1:temps completed
window.LIST_Workers = [3600000, 0]; // 3600 seconds

// structure : 0:name, 1: price, 2: multiplicator, 3: male, female, mixed, 4: comments
window.LIST_Workers_upgrades_STALE = [
	['Red felt pen lipstick', 1, 2, 'female', 'Creepy dolls from horror movies are jealous.'], // 1
	['Red paint nail polish', 9, 3, 'female', 'Sold by a house painter.'], // 2
	['Plastic sunglasses', 80, 2.5, 'male', 'They protect from sunlight, not from ridicule.'], // 3
	['Black felt pen mascara', 500, 2, 'female', 'The same pen kids use to ruin paper pretending they draw.'], // 4
	['Torn stockings', 3000, 2, 'female', 'Customers rip them anyway. You\'re just thinking ahead.'], // 5
	['Sweat pants', 16000, 3, 'mixed', 'Comfortables.'],
	['Sandals', 100000, 3, 'mixed', 'You wait eagerly for the wool socks in order to create an amazing fashion combo.'],
	['Wooden bra', 600000, 2, 'female', 'Approved by vikings.'],
	['Superman tee-shirt', 2200000, 3, 'male', 'Approved by Captain Sweatpants.'],
	['Father-in-law underpants', 15000000, 2, 'male', 'Approved by no one.'], // 10
	['Grandma panties', 90000000, 2, 'female', 'Seem to have been chewed by a wolf.'],
	['Clown eyeshadow', 500000000, 2.5, 'female', 'Unattractive, but amusing.'],
	['A lobster', 4e+9, 1.1, 'male', 'A lobster? What the hell? You get 1.1 for that, and frankly, that\'s generous...'],
	['Old jeans', 1.5e+10, 2, 'male', 'They try to make it appear "vintage", but they can\'t fool anybody, it\'s just old.'],
	['Wool socks', 2e+11, 10, 'mixed', 'You have the sandals already. C-C-C-C-COMBOOOOO!'], // 15
	['Super Cheap Extra Discount Lipstick', 2e+12, 2, 'female', 'It tastes funny.'],
	['Boringly regular red nail polish', 7e+12, 3, 'female', 'It\'s red. Meh.'],
	['Not-so-bad stockings', 5e+13, 2, 'female', 'Unlucky people have seen worse.'],
	['SquarePants', 4e+14, 2.5, 'male', 'For those who grow without growing up.'],
	['Long dress', 3e+15, 4, 'female', 'Like a princess, but uglier.'], // 20
	['Lace panties', 2.5e+16, 3.5, 'female', 'This cloth is actually sexy, surprisingly.'],
	['Sneakers', 1.3e+17, 2, 'mixed', 'The best to chase customers .'],
	['Plumber underpants', 4.3e+17, 2, 'male', 'Perfect to unclog pipes.'],
	['Regular bra', 1.2e+18, 2, 'female', 'White and clean.'],
	['Bigger lashes mascara', 5e+18, 2.5, 'female', 'You know what they say: "Big lashes, big money." Okay no one says that, but give it a try.'], // 25
	['Tight tee-shirt', 2.5e+19, 2.5, 'male', 'Better show the muscles than the brain.'],
	['Fishnet stockings', 1e+20, 3, 'female', 'It doesn\'t require much cloth. Convenient.'],
	['Average lipstick', 7e+20, 2, 'female', 'The very best, according to the seller.'],
	['Stylish sunglasses', 4e+21, 3, 'male', 'Look like a star, not a blind guy.'],
	['String', 3.3e+22, 4, 'female', 'That\'s sexy enough, no need for adjectives.'], // 30
	['Short skirt', 2e+23, 3.5, 'female', 'Not much left for imagination.'],
	['Suggestive boxer', 9e+23, 2, 'male', 'So tight, you can guess everything.'],
	['Green armor', 4e+24, 3, 'mixed', 'Why an armor? Hmmm... Cosplay?'],
	['Green helmet', 4e+25, 3, 'mixed', 'Yes this is serious, here we go for the full set.'],
	['Green gauntlets', 4e+26, 3, 'mixed', 'It\'s green! This is so cool. Disagree? The price is doubled for you.'], // 35 
	['Green Greaves', 4e+27, 3, 'mixed', 'GG. Like in "Git Gud", which means either "There are 3 frogs in the pond" or something else.'],
	['Green underwear', 4e+28, 3, 'mixed', 'Why green? Because prostitutes are careful about ecology. The full suit is recyclable.'],
	['Green shield', 4e+29, 3, 'mixed', 'A great protection against foes. There may be some sometimes, you never know.'],
	['Green sword', 4e+30, 10, 'mixed', 'THE FINAL ELEMENT! The set is complete! How GRANDIOSE!'],
	['Tight jeans', 1.6e+33, 3, 'male', 'Classic, but effective.'], // 40
	['High heels', 8e+34, 2, 'female', 'Uncomfortable, but gives a nice butt.'],
	['Silk white socks', 2e+36, 2, 'mixed', 'Smooth, elegant. A little boring, too.'],
	['Breast enhancing bra', 6e+37, 4, 'female', 'The bigger the better.'],
	['Muscles enhancing tee-shirt', 3e+39, 5, 'male', 'This seemingly magical tee-shirt makes muscles look bigger!'],
	['Tie', 1.2e+41, 6, 'male', 'To look like a manager, or Donkey Kong.'],	 // 45
	['Strawberries smelling panties', 9e+42, 6, 'female', 'Because why not.'],
	['Bodybuilder underpants', 4e+44, 3, 'male', 'Able to contain big things.'],
	['Short shorts', 1.5e+46, 6, 'male', 'Ha ha!'],
	['Luxury brand lipstick', 8e+47, 5, 'female', 'For fortunate customers only.'],
	['Luxury eyeshadow', 2e+49, 4, 'female', 'Maybe it shouldn\'t be worth that much, but prestige matters.'], // 50
	['Stolen luxury nail polish', 7e+50, 6, 'female', 'Why is it so expensive if it\'s stolen? Well, you are the Godess of Prostitution. Not of robbery. They got caught. Attorneys.'],
	['Emerald sunglasses', 1.8e+52, 5, 'male', 'Why emerald? Well, you know, so much money, not sure what to do with it...'],
	['Very short skirt', 6.5e+53, 6, 'female', 'Children blush, mothers frown, men drool.'],
	['Chewbacca lashes mascara', 1.4e+55, 5, 'female', 'The amazing technology in this mascara lets you extend your lashes FOR REAL!'],
	['Golden Wire Stockings', 8e+56, 4, 'female', 'Actually painted in yellow, don\'t tell.'], // 55
	['Cinderella high heels', 6e+57, 5, 'female', 'To catch prince charmings.'],
	['Elegant white shirt', 2.4e+59, 4, 'male', 'It looks great! But it lacks something...'],
	['Elegant suit', 1e+61, 12, 'male', 'Aha! There it is! A perfect symbiosis with the white shirt!'],
	['Bow tie', 5e+62, 3, 'male', 'Wearers furiously want to tell people that their name is "Bond".'],
	['Sexiest bra in the world', 2e+64, 4, 'female', 'According to a bribed jury.'], // 60
	['Richelieu shoes', 9e+65, 3, 'male', 'Usually only used for weddings, funerals, and job interviews.'],
	['Super Expensive For No Reason Lipstick', 4e+67, 4, 'female', 'Nobody knows why, yet everybody wants it.'],
	['No panties', 3.2e+69, 5, 'female', 'How is "NOTHING" so expensive? What a scam... Oh wait, indecent exposure fines.'],
	['Luxury watch', 3e+72, 6, 'male', 'Lure thieves. Capture them, make them denounce their gang, dismantle the gang, get rewarded. Badass.'],
];

window.LIST_Workers_upgrades_DYNAMIC = []; // 0: not bought. 1: bought.
for (var i in LIST_Workers_upgrades_STALE) {LIST_Workers_upgrades_DYNAMIC.push(0);}

// structure : 0: cout initial, 1: nombre de prostitutes d'entretien, 2: nombre de prostitutes d'exploitation maximum 3: gain / seconde / prostitute
// 4: multiplicator items consumption, 5: items consumption rate (every how many milliseconds are bulks of items consumed?),
// 6: items 1 required, 7: items 2 required, 8: items 3 required, 9: items 4 required, 10: items 5 required, 11: items 6 required
// 12: conditions [type of building, building, position of the level(in it's DICT), level required]
// 13: other costs [factory, amount required]
window.DICT_Brothels_STALE = {
							// 0	  1		  2		  3	       4      5         6        7  8      9  10    11
	"Minimalistic brothel": [0,      10,      10,     0.04,    0,     0,        0,       0, 0,     0, 0,     0,   [], []], // 1
	"Covered courtyard":    [5000,   22,      30,     0.16,    0,     0,        0,       0, 0,     0, 0,     0,   [], []],
	"A sort of hut":        [40000,  13,      70,     0.4,     0,     0,        0,       0, 0,     0, 0,     0,   [], []],
	"Old barn":             [7e+5,   20,      230,    1.8,     6,     600000,   1,       0, 0,     0, 0,     0,   [], []],
	"Brand new barn":       [4e+7,   20,      300,    8,       9,     600000,   2,       0, 0,     0, 0,     0,   [], []], // 5
	"Big house":            [3e+9,   10,      50,     35,      15,    120000,   1,       0, 0,     0, 0,     0,   [], []],
	"Small building":       [2e+12,  20,      280,    200,     25,    60000,    4,       0, 0,     0, 0,     0,   [], []],
	"Big building":         [8e+14,  70,      530,    5000,    30,    60000,    13,      0, 0,     0, 0,     0,   [], []],
	"Casinothel":           [3e+17,  50,      350,    40000,   40,    60000,    30,      0, 0,     0, 0,     0,   [], []],
	"Manor":                [8e+19,  150,     450,    850000,  50,    10000,    30,      0, 0,     0, 0,     0,   [], []], // 10
	"Zoo":                  [4e+21,  300,     1200,   1.7e+8,  1.3,   10000,    200,     0, 0,     0, 0,     0,   [[DICT_Laboratory_upgrades, "Biology", 0, 1]], [["Common materials", 100]]],
	"Skyscraper":           [6e+25,  500,     3000,   6e+9,    1.4,   8000,     500,     0, 0,     0, 0,     0,   [[DICT_Laboratory_upgrades, "Engineering", 0, 1]], [["Common materials", 5000]]],
	"Multicultural":        [9e+27,  1000,    4000,   3e+11,   2,     5000,     1000,    0, 0,     0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 1]], [["Common materials", 90000]]],
	"Pornthel":             [2e+31,  2000,    6000,   3e+12,   10,    300000,   80000,   0, 100,   0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 1], [DICT_Laboratory_upgrades, "Engineering", 0, 1]], [["Common materials", 500000]]],
	"Vintage":              [2e+34,  8000,    4000,   1.6e+11, 10000, 60000,    20000,   0, 60,    0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 2]], [["Common materials", 2e+6]]], // 15
	"Fan zone":             [6e+36,  10000,   10000,  9e+16,   1.2,   600000,   8e+10,   0, 1200,  0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 2], [DICT_Laboratory_upgrades, "Psychology", 0, 1]], [["Common materials", 5e+6]]],
	"Castle":               [3e+39,  15000,   17000,  4e+18,   2,     6000,     1.5e+9,  0, 20,    0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 3]], [["Common materials", 3e+7]]],
	"Theme Park":           [5e+43,  20000,   40000,  6e+19,   1.1,   240000,   5e+11,   0, 7000,  0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 2], [DICT_Laboratory_upgrades, "Engineering", 0, 2]], [["Common materials", 1.5e+9]]],
	"Island":               [7e+46,  5000,    60000,  7e+21,   0.6,   86400000, 4e+16,   0, 3e+7,  0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 4], [DICT_Laboratory_upgrades, "Biology", 0, 1]], [["Common materials", 6e+10], ["Rare metals", 90000]]],
	"PedoParadise":         [5e+50,  20000,   50000,  1e+22,   25,    600000,   1e+15,   0, 8e+5,  0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 4], [DICT_Laboratory_upgrades, "Psychology", 0, 1], [DICT_Laboratory_upgrades, "Engineering", 0, 1]], [["Common materials", 2e+11], ["Rare metals", 4e+5]]], // 20
	"Village":              [2e+53,  50,      150,    1.5e+24, 2000,  7200000,  8000,    0, 600,   0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 3], [DICT_Laboratory_upgrades, "Psychology", 0, 2], [DICT_Laboratory_upgrades, "Biology", 0, 2]], [["Common materials", 20000], ["Rare metals", 500]]],
	"Town":         		[1e+56,  50000,   200000, 4e+23,   8,     30000,    3e+14,   0, 8e+5,  0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 4], [DICT_Laboratory_upgrades, "Psychology", 0, 2], [DICT_Laboratory_upgrades, "Engineering", 0, 2]], [["Common materials", 3e+10], ["Rare metals", 7e+4]]],
	"Zoutopia":             [1.5e+56,100000,  500000, 1e+23,   10,    60000,    1e+17,   0, 4e+7,  0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Biology", 0, 5]], [["Common materials", 1e+10], ["Rare metals", 2.1e+5]]],
	"City":                 [2e+56,  200000,  500000, 8e+23,   20,    10000,    2e+17,   0, 5e+6,  0, 10,    0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Psychology", 0, 3], [DICT_Laboratory_upgrades, "Engineering", 0, 3]], [["Common materials", 3e+12], ["Rare metals", 2.1e+7]]],
	"Bankthel":             [3e+62,  30000,   400000, 5e+25,   0,     0,        0,       0, 0,     0, 0,     0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Psychology", 0, 5], [DICT_Laboratory_upgrades, "Biology", 0, 1]], [["Common materials", 2e+14], ["Rare metals", 3e+8]]], // 25
	"Brollywood":           [3e+62,  200000,  500000, 2e+25,   2,     120000,   4e+18,   0, 1e+8,  0, 5e+3,  0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Fundamental physics", 0, 3], [DICT_Laboratory_upgrades, "Engineering", 0, 4]], [["Common materials", 3e+14], ["Rare metals", 2e+9]]],
	"District":             [3e+62,  250000,  650000, 1e+25,   25,    10000,    8e+17,   0, 2e+7,  0, 3e+3,  0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Psychology", 0, 4], [DICT_Laboratory_upgrades, "Engineering", 0, 4]], [["Common materials", 1e+15], ["Rare metals", 1e+10]]],
	"Country":              [2e+71,  300000,  800000, 2e+27,   1,     2000,     5e+18,   0, 2e+7,  0, 7e+3,  0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Biology", 0, 5], [DICT_Laboratory_upgrades, "Engineering", 0, 5]], [["Common materials", 2e+16], ["Rare metals", 2e+10]]],
	"Virtual brothel":      [3e+71,  300000,  100000, 3e+25,   20,    90000,    1e+19,   0, 3e+7,  0, 8e+4,  0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Engineering", 0, 5], [DICT_Schools, "Elite school", 2, 1]], [["Common materials", 3e+15], ["Rare metals", 3e+10]]],
	"Androthel":            [4e+71,  1337000, 1,      5e+33,   15,    180000,   1e+21,   0, 4e+9,  0, 2e+6,  0,   [[DICT_Laboratory_upgrades, "Management", 0, 5], [DICT_Laboratory_upgrades, "Engineering", 0, 5], [DICT_Laboratory_upgrades, "Biology", 0, 4]], [["Common materials", 2e+15], ["Rare metals", 5e+11]]],
	"Space Station":        [5e+81,  700000,  600000, 5e+32,   100,   21600000, 3e+28,   0, 1e+14, 0, 3e+9, 1e+6,[[DICT_Laboratory_upgrades, "Fundamental physics", 0, 5], [DICT_Laboratory_upgrades, "Biology", 0, 5], [DICT_Laboratory_upgrades, "Engineering", 0, 5]], [["Common materials", 2e+18], ["Rare metals", 5e+12], ["Spaceships", 1]]], // 30
};

// structure : 0: locked/unlocked 1: FREE SPOT 2: stock of dollars, 3: items consumption activated (1) / deactivated (0) / milking (2)
// 4: milliseconds of items buff left, 5: ever unlocked since the last Ruin everything?
window.DICT_Brothels_DYNAMIC = {};
for (var i in DICT_Brothels_STALE) {DICT_Brothels_DYNAMIC[i] = [0, 0, 0, 0, 0, 0];}
DICT_Brothels_DYNAMIC["Minimalistic brothel"][0] = 1; // activate the first brothel

window.dice_casinothel = 1;
window.dice_dollars_cost = 3e+17; // not saved
window.zoutopia_activated = false;
window.brollywood_activated = false;
window.brollywood_multiplicator = 16; // not saved.
window.bankthel_time_spent = 0; // from 0 to 1000, the number of milliseconds spent
window.bankthel_period = 1000; // number of milliseconds necessary to activate the bonus. Not saved.
window.bankthel_bonus_per_tic = 0.00001; // every period, stock_of_dollars *= (1+bankthel_bonus_per_tic). Not saved.
window.holograms = false;

window.DICT_Brothels_DESCRIPTIONS = {
	"Minimalistic brothel": "4 poles in a field. There is no roof. There are no walls to support it anyway. This is just a random square of grass, and 10 awkward prostitutes \
		who, for some mysterious reason, decided that it was THEIR square of grass, planted poles to delimit it and started doing business there. When asked, they simply reply that \
		\"God works in mysterious ways\".",
	"Covered courtyard": "Frankly, this is hardly better than the Minimalistic brothel... It's so shaky that you need people to hold the pillars sustaining the roof. \
		As a consequence, customers can incredulously witness 4 prostitutes permanently holding the thing, shifting every 8 hours. Also, still no proper floor, nor walls. But, and that's actually pretty neat: thanks to the roof, no more rain! Yay!",
	"A sort of hut": "Things are getting serious. There are walls here! Of course, not so serious, since they are made of straw. The Big Bad Wolf could easily blow this brothel. And the prostitutes are worried that it might happen indeed, \
		since some of the customers look like pigs. So they have 3 sentries taking the shift, patrolling, crossbow in the hands, in case the Big Bad Wolf shows up.",
	"Old barn": "It doesn't smell very good, but there is a delicious atmosphere of countryside. You can frolic in the straw and the hay, and feel like an authentic peasant. \
		That's what the prostitutes are trying to convince the customers of... Most of them are not tricked though (I mean... Well, you know what I mean), and consider the place as what it is: a crappy old barn.",
	"Brand new barn": "Business is growing. Let's not take too much risk: the old barn was working, we should stick to operating in barns. But this one will be NEW! \
		It's bigger, with divider walls and curtains installed, since those whiny customers kept complaining about the lack of \"privacy\".",
	"Big house": "Wow. It took them 6 tries, but your prostitutes have finally found something decent to welcome customers! This house is cozy, and the cute waiting room with armchairs, cushions and soothing paintings on the walls is a nice touch. \
		Of course there are still improvements to make (cleaning the beds only once a day, for example, is really not enough), but this is the right direction. Keep going.",
	"Small building": "The countryside is nice, but that's not where the money is. The city and its wealthy customers is waiting for us! So let's buy a giant building and welcome them and shut up and take their money!<br /> \
		But first, a small and modest building, because that's all we can afford...",
	"Big building": "There it is! Our giant building! Who is laughing now, mister banker? \"Not enough funding\", you say? Now YOU shut up and take our money! Ha!",
	"Casinothel": "Some are ugly, some are sexy. Some are free, some are pricey. Sometimes you win, sometimes you lose. Do you feel lucky tonight? Place your bets and enjoy the ride!",
	"Manor": "After being done flattering their ego with their big building, now your prostitutes want to flatter their ego with a fancy house. And well, \"house\" is a term for losers, while \"manor\" on the other hand, oh my, THAT is fancy.<br /> \
		Swimming pool, private cinema room, beautiful garden: some customers feel so well that they take a subscription for unlimited access. Some even rent a room and downright live there.",
	"Zoo": "If you want to try something different, this is the place to be. Have you ever wondered what an elephant trump massaging your intimate parts would feel like? Now you can pay to know. \
		We also have sheeppendales, very popular in the countryside. If you like it big, our horses will take good care of you. Dolphins, monkeys, big cats... Even insects. Your fantasies are our mission.",
	"Skyscraper": "The manor and the zoo were fun, but actually, your prostitutes like the city better. They have new ambitions though: a big building is not enough anymore, they want the BIGGEST building.<br /> \
		You worry that their ambitions become out of control, but then you remember that you regularly delete them all in the flick of a finger, and you stop worrying.",
	"Multicultural": "White, asian, black, ... Anything you want. Have a taste of foreign cultures! Premium customers can even have dates with genetically modified prostitutes whose race is unknown in the human world.",
	"Pornthel": "Watch and be watched. Some need their ego to be flattered, so they pay prostitutes to watch them. The most important part comes at the end, when the spectators congratulate them regardless of their performance.<br /> \
		And of course, some other customers just like to watch, or have a video souvenir to immortalize the moment.",
	"Vintage": "You'd be surprised by how lucrative an old prostitute can be. Elderlies have money, and some prefer partners of their age. \
		They occasionally need a little help, but this fine institution has all the products and assistance it takes to make them feel like youngsters again.",
	"Fan zone": "As prostitution becomes more and more popular, fans appear all around the world. In this place, you can learn more about the history of prostitution, who are the most famous prostitutes, and buy a ton of goodies.",
	"Castle": "This place is HUGE! An absolutely gigantic castle, where rich people come from all over the world to buy the services of your prostitutes.",
	"Theme Park": "An adults only theme park, where customers can relax with the hosts and hostesses after getting rushes of adrenaline in the rollercoasters.",
	"Island": "A heavenly island, with everything you could expect from one: coconut trees, hot sand, clear water, peacefulness. Plus you have lovely prostitutes with leis and a big smile to sooth your soul.",
	"PedoParadise": "Thanks to the lab, your prostitutes can look very young and therefore attract pedophiles.<br /> \
		Unofficially though, this brothel is called the PedoTrap: your prostitutes don't really like pedophilia, and customers regularly find themselves being filmed and blackmailed afterwards. Very lucrative.",
	"Village": "It's time for your prostitutes to have a place for themselves. They start slow: a cosy village, where customers are welcome, life is easy, and people are nice. How cute.",
	"Town": "Like the village, but bigger. A lot of people transit by the Town, whether they are customers or goods providers.",
	"Zoutopia": "Formerly \"Zootopia\". Mean men with dresses have come to try to close your brothel, crying about copyrights. But it's okay. An \"O\" becomes an \"U\", problem solved.<br /> \
		Disturbing things happen here. Genetics have created super attractive new species, and customers push and shove to enter this one of a kind establishment.",
	"City": "Your prostitutes now litteraly own a full city. Built from scratch with the money of their hard work, it's a paradise on Earth: lots of green areas, not too crowded, many ways to spend leisure time.<br /> \
		None prostitutes don't have such great conditions though... They struggle in the poor areas, working hard for the prostitutes, and spending every bit of extra money to hire them.",
	"Virtual brothel": "Embrace the metaverse! Forget the laws of physics, all your fantasies can come true in here. It takes highly qualified technicians to maintain the machines, but it's worth it.",
	"Brollywood": "Customers can scenarize a full movie, where they can be and do whatever they want, as long as it involves sex. Your prositutes categorically refuse to produce none sexual movies, they have strong principles.",
	"District": "It's getting out of proportions: a full district dedicated to prostitution. Historians will later reckon this event was the turning point towards a world fully dominated by the prostitute caste.",
	"Androthel": "Those androids are no jokes. They are smart, empathetic, kind, gentle, funny... In a word: perfect. Most customers never come back to a traditional prostitute after having tried an android.",
	"Bankthel": "Money grows, and grows, and grows.<br /><br />The money stored in the Bankthel is multiplied by 1.00001 every second if there is at least 1 operational prostitute. That's +137% per day. Even hedge funds managers would find this interest rate appealing.",
	"Country": "They say money can buy anything. They may or may not be right, but apparently, it can buy a full country. \
		Some unscrupulous dictator traded his land for a lifetime supply of prostitutes and a big pile of gold, not caring at all for what would happen to the human livestock living there.",
	"Space Station": "Sky is not the limit. This station has a brothel area for rich and whimsical customers, but most of it is actually dedicated to space exploration and colonization.",
};

// structure: 0/1: FREE SPOTS, OBSOLETE 2/3: amount of prostitutes necessary + increment 4/5: period of production + decrement 6/7: period of level up + increment
// 8: ident_number and Chain of production divider.
window.DICT_Factories_STALE = {
	"Simple items":        [0, 0, 10,     2, 1.2e+6, 10, 3.6e+6,  3, 1], // leveling cost: the "Simple items" line starts level 1, the player doesn't pay for the first level
	"Common materials":    [0, 0, 30,     3, 3.6e+6, 10, 6e+6,    3, 2],
	"Sophisticated items": [0, 0, 400,    4, 1e+7,   10, 1.5e+7,  4, 3],
	"Rare metals":         [0, 0, 5000,   5, 3e+7,   10, 5e+7,    5, 4],
	"Futuristic items":    [0, 0, 60000,  6, 1e+8,   10, 2e+8,    6, 5],
	"Spaceships":          [0, 0, 700000, 7, 5e+9,   10, 6e+9,    7, 6],
};

// structure : build item[cost, simple items, common materials, ...], buy lvl 1[...], upgrade lvl 2[...], upgrade lvl 3[...]
// inside: [0: dollars, 1: simple items, 2: common materials, ..., 6: space stations, 7: conditions [type of building, building, position of the level(in it's DICT), level required]]
window.DICT_Factories_UPGRADE_COSTS = {
	"Simple items": [[10, 0, 0, 0, 0, 0, 0, []], [0, 0, 0, 0, 0, 0, 0, []], [1e+8, 20, 0, 0, 0, 0, 0, []], [8e+17, 1000, 10, 0, 0, 0, 0, []]],
	"Common materials": [[1e+10, 10, 0, 0, 0, 0, 0, []], [1e+17, 3000, 0, 0, 0, 0, 0, []], [2e+26, 1000, 100, 0, 0, 0, 0, []], [5e+35, 1e+10, 1e+6, 100, 0, 0, 0, []]],
	"Sophisticated items": [[1e+200, 0, 0, 0, 0, 0, 0, []], [3e+30, 1e+8, 1e+6, 0, 0, 0, 0, [[DICT_Laboratory_upgrades, "Engineering", 0, 2]]], [1e+40, 0, 6e+7, 9000, 0, 0, 0, []], [4e+49, 0, 2e+11, 1e+8, 5e+5, 0, 0, []]],
	"Rare metals": [[1e+200, 0, 0, 0, 0, 0, 0, []], [2e+45, 1e+16, 3e+10, 2e+7, 0, 0, 0, [[DICT_Laboratory_upgrades, "Engineering", 0, 3]]], [6e+53, 3e+19, 3e+12, 7e+9, 1e+6, 0, 0, []], [1e+62, 2e+22, 8e+15, 3e+13, 3e+9, 0, 0, []]],
	"Futuristic items": [[1e+200, 0, 0, 0, 0, 0, 0, []], [1e+58, 0, 2e+13, 0, 1.5e+8, 0, 0, [[DICT_Laboratory_upgrades, "Engineering", 0, 4]]], [3e+70, 0, 7e+15, 0, 3e+10, 0, 0, []], [1e+82, 0, 9e+17, 0, 5e+12, 0, 0, []]],
	"Spaceships": [[1e+200, 0, 0, 0, 0, 0, 0, []], [5e+81, 0, 2e+17, 0, 2e+12, 0, 0, [[DICT_Laboratory_upgrades, "Engineering", 0, 5]]], [1e+100, 0, 3e+18, 0, 2e+12, 0, 5e+4, []], [1e+120, 0, 6e+19, 0, 4e+13, 0, 3e+7, []]],
};

// structure : 0: level max 1: time completed items 2: time completed upgrade 3: max level paid (but ugrade not completed) 4: stock of items 5: ever unlocked? 6: current upgrade ongoing (2 or 3)
window.DICT_Factories_DYNAMIC = {};
for (var i in DICT_Factories_STALE) {DICT_Factories_DYNAMIC[i] = [0, 0, 0, 0, 0, 0, 0];}
DICT_Factories_DYNAMIC["Simple items"][0] = 1; // activate the first production line.
// note: the level currently selected is calculated with the number of prostitutes attributed and DICT_Factories_STALE 2 and 3.

window.DICT_Factories_DESCRIPTIONS = {
	"Simple items": "Those items are pretty easy to make, a monkey could do the job. Actually, you suspect your prostitutes to be feeding monkeys to do it so they can screw around. \
	But hey... As long as the job is done, whatever. You can barely notice the difference between humans and monkeys anyway.<br />\
	The end result is: dildos, butt plugs, handcuffs and plenty of other sextoys are now available for your customers, if they pay the price.",
	"Common materials": "How did you expect to build great brothels without bricks, stones, tiles or wood?<br /><br />\
	No need to answer, the question is rethorical. Sure, there would be other ways. Nobody wants to hear you rambling about them though, so please, spare us.",
	"Sophisticated items": "Oh, nice! Computers! Telephones! Cameras! Now customers can send your prostitutes pictures of their intimate parts.<br /><br /> \
		But no worries, they have to pay to do it, so everything is in order.",
	"Rare metals": "As your business is more and more dependant on lithium, cobalt, uranium and other rare metals, it's time to take control over their extraction and production.<br />\
		It only took some prostitute services and money discreetly adressed to the right people, and that was done. Easy.",
	"Futuristic items": "Giant neural networks, quantum computers, super smart robots: your scientists have achieved a lot, and now is the time to make money out of it.",
	"Spaceships": "\"Let's conquer space!\"<br /> From this marvelous idea, a heated debate burst between pro rockets (they look like penises) and pro spaceships (they are inherently cool). We had a winner.",
}

window.DICT_Factories_SYMBOLS = {"Simple items": "&#x25A0;",
								 "Common materials": "&#x2394;",
								 "Sophisticated items": "&#x1F4BB;",
								 "Rare metals": "&#x232C;",
								 "Futuristic items": "&#x269b;",
								 "Spaceships": "&#x1f680",
								}

window.genitals_stored = 0;
window.decrementor_worshipers = 0.9; // gains from worshipers = worshiper^decrementor_worshipers

// structure : 0:total worshipers 1:temps de completion, 2:temps completed
window.LIST_worshipers = [0, 3600000, 0];

// 0: worshipers attributed 1: initial completion time 2: increment 3: time completed 4: level max 5: current level. 6: description
window.DICT_Temple_upgrades = {
	"Prestige": [0, 3.6e+8, 3.6, 0, 20, 0, "Each level grants 1 Prestige Point."],
	"Style": [0, 2e+10, 5.5, 0, 10, 0, "Each level adds 0.01 to the conversion power of Ruin Everything from dollars to Style points."],
	"Energy": [0, 3.2e+11, 6.8, 0, 10, 0, "Each level adds 0.005 to the conversion power of the Bully God when he destroys Fundamental Energy."],
	"Law of attraction": [0, 1e+12, 5.5, 0, 10, 0, "Attracts dollars. The efficiency of your Workers positively affects the efficiency of your Brothels."],
}




// LABORATORIES and SCHOOLS: at the beginning of the file.




window.lobby_price_incrementor = 1.5; // each attributed prostitute consumes more money than the previous one.
window.lobby_prostitutes_decrementor = 0.6; // each attributed prostitute accelerates the lobby speed less than the previous one.
window.lobby_time_stored = 0; // this can (and often will) be negative.

// structure :  0: name, 1: bought or not, 2: experience gained, 3: gains, 4: price per millisecond for 1 prostitute (dollars), 5: completion time (in milliseconds) 6: number of completions (0.0001 %) 7: completions required (1,000,000*0.0001 %) = 100 %
window.LIST_Lobby = [
	["Media control", 0, 0, 1000, 1e+46, 1.4e+5, 0, 1000000],
	["Governments infiltration", 0, 0, 5000, 1e+51, 8.46e+7, 0, 1000000],
	["World domination", 0, 0, 20000, 1e+60, 1e+12, 0, 1000000],
	["The world is not enough", 0, 0, 0, 0, 0, 0, 1000000]
]

window.LIST_Lobby_descriptions = [
	"<br />You've done a great job so far. Prostitution is thriving, you are respected among the Gods, and for the first time, you \
		start feeling like you're worth more than a piece of crap.<br /><br /> \
		Yet, this is not enough.<br /><br />\
		You want a complete dominion, and to reach your goal, you need to control the human minds.<br />\
		Naturally, you send your prostitutes take control over the medias.<br />\
		Slogans like \"eat, pray, love, as long as money is involved\" or \"NO to free sex!\" are flooding everywhere.",
	"As the movement towards more prostitution rises, opposition appears. In particular, the Lobby One Ken Obi (L.O.K.O), a very influent lobby, is actively trying to thwart the ascension of prostitution.<br /> \
		Ruled by the charismatic Ken Obi, they have been influencing governements against your interests.<br /><br /> \
		Yet, your influence is growing: since your diplomats were able to stop wars and improve worldwide security, it is more and more established that prostitution appeases people and shall be promoted.<br /><br /> \
		Besides, a lot of efforts have been done in order to get the religious leaders' sympathy, and most of them support your cause, their worshipers following the lead.",
	"<br />In most countries, free sex has become illegal. It is fair that participants estimate the pleasure they will get from the act, and compensate their partner(s) accordingly.<br /> \
		Those compensations are taxed, of course, which provides a substantial additional income to your organization.<br /><br /> \
		The LOKO's influence is quickly decreasing, and Ken Obi himself is facing allegations of participation to non remunerated sexual activities.",
	"<br />The human world is under control. Prostitutes are the dominant class, the rest of the world is reduced to serving them.<br /><br />\
		 As a direct consequence, you have become the most powerful God. Most Gods are scared of you, especially those who once harassed you, and are now dreading your wrath.<br />\
		 And, oh my, how right they are... The carnage you perpetrated among them throughout your journey to the top was the worst in living memory. Maybe the Godess of Memory could have remembered worse, but you slaughtered her too.\
		 Your grim task now accomplished, you turn your eyes, filled with blood, towards the stars. And you laugh, hysterically. The world is not enough."	 
]

// number of prostitutes attributed per place:
window.DICT_attributions = {
	"Workers": 0,
	"Temple": 0,
	"Lobby": 0,
}
for (var i in DICT_Brothels_STALE) {DICT_attributions[i] = 0;} // attributions to brothels
for (var i in DICT_Factories_STALE) {DICT_attributions[i] = 0;} // attributions to factories
for (var i in DICT_Schools) {DICT_attributions[i+" admin"] = 0;} // attributions to schools (administrators)
for (var i in DICT_Schools) {DICT_attributions[i+" prof"] = 0;} // attributions to schools (professors)
for (var i in DICT_Schools) {DICT_attributions[i+" pupil"] = 0;} // attributions to schools (pupils)

window.DICT_attributions_humans = {
	"Workers": 0,
	"Lobby": 0,
}
for (var i in DICT_Brothels_STALE) {DICT_attributions_humans[i] = 0;} // attributions to brothels
for (var i in DICT_Factories_STALE) {DICT_attributions_humans[i] = 0;} // attributions to factories
for (var i in DICT_Schools) {DICT_attributions_humans[i+" pupil"] = 0;} // attributions to schools (pupils)

// structure :    NAME:   0:button identifiant css, 1:cout, 2:incrementation du cout, 3:niveau actuel, 4: niveau max
// 5:DICT_nom_visible, 6: 'energy', 'style', 7 (specific to Concentrated parts): associated number of component
window.DICT_fundamental_talents = {
	'God repellent': ['God_repellent', 5, 1.2, 0, 990, {}, 'energy'],
	'Quick mix': ['Quick_mix', 10, 1.5, 0, 99, {'God repellent':1}, 'energy'],
	'Energy fountain': ['Energy_fountain', 200, 2, 0, 180, {'God repellent':1}, 'energy'],
	'Frenzy': ['Frenzy', 40, 1, 0, 1, {'God repellent':1}, 'energy'],
	'Lazy convert': ['Lazy_convert', 500, 1, 0, 1, {'Frenzy':1}, 'energy'],
	'Bully detector': ['Bully_detector', 15000, 1, 0, 1, {'Lazy convert':1}, 'energy'],
	'Step up': ['Step_up', 600000, 1, 0, 1, {'Bully detector':1}, 'energy'],
	'Multitasking': ['Multitasking', 300000000, 10, 0, 9, {'Step up':1}, 'energy'],
	'Octogod': ['Octogod', 1e+19, 1, 0, 1, {'Multitasking':9}, 'energy'],
	'Unstoppable': ['Unstoppable', 1e+25, 1, 0, 1, {'Octogod':1}, 'energy'],
	'Industrialization': ['Industrialization', 2000000, 1.7, 0, 49, {'Quick mix':30}, 'energy'],
	'Twins': ['Twins', 1e+11, 2.4, 0, 20, {'Industrialization':20}, 'energy'],
	'1 = more': ['One_equals_more', 3e+19, 8, 0, 49, {'Twins':20}, 'energy'],
	'Hourglass tapping': ['Hourglass_tapping', 6e+25, 2e+5, 0, 9, {'1 = more':1}, 'energy'],
	'Artwork': ['Artwork', 1000000000, 10, 0, 28, {}, 'energy'], // max: 21, 28, 39?
	'Multiwork':['Multiwork', 1e+20, 9, 0, 69, {'Artwork':1, 'Multitasking':1}, 'energy'],
	'Concentrated Arm':['Concentrated_Arm', 1e+30, 1.5, 0, 370, {'Hourglass tapping':1}, 'energy', 5],
	'Concentrated Hand':['Concentrated_Hand', 1e+35, 1.5, 0, 340, {'Concentrated Arm':1}, 'energy', 4],
	'Concentrated Chest':['Concentrated_Chest', 1e+40, 1.5, 0, 310, {'Concentrated Hand':1}, 'energy', 7],
	'Concentrated Belly':['Concentrated_Belly', 1e+45, 1.5, 0, 280, {'Concentrated Chest':1}, 'energy', 6],
	'Concentrated Leg':['Concentrated_Leg', 1e+50, 1.5, 0, 250, {'Concentrated Belly':1}, 'energy', 3],
	'Concentrated Foot':['Concentrated_Foot', 1e+55, 1.5, 0, 220, {'Concentrated Leg':1}, 'energy', 2],
	'Concentrated Toe':['Concentrated_Toe', 1e+60, 1.5, 0, 190, {'Concentrated Foot':1}, 'energy', 1],
	'Concentrated Toenail':['Concentrated_Toenail', 1e+65, 1.5, 0, 160, {'Concentrated Toe':1}, 'energy', 0],
	'Concentrated Genitals':['Concentrated_Genitals', 1e+70, 1.5, 0, 130, {'Concentrated Toenail':1}, 'energy', 9],
	'Concentrated Head':['Concentrated_Head', 1e+75, 1.5, 0, 100, {'Concentrated Genitals':1}, 'energy', 8],
	
	'Life saver': ['Life_saver', 1, 1.05, 0, 2000, {}, 'style'],
	'Money saver': ['Money_saver', 10, 10, 0, 66, {'Life saver':10}, 'style'], // money saved = smaller(10^(talent-1), 100 % dollars)
	'Crap saver': ['Crap_saver', 40000, 5e+11, 0, 6, {'Money saver':1}, 'style'],
	'Tip': ['Tip', 100, 2.5, 0, 160, {'Money saver':1}, 'style'],
	'Real esthete': ['Real_esthete', 250, 2.5, 0, 160, {'Tip':1}, 'style'],
	'Real estate': ['Real_estate', 7e+8, 8e+7, 0, 7, {'Real esthete':15}, 'style'],
	'Chain of production': ['Chain_of_production', 100000, 8, 0, 70, {'Crap saver':1}, 'style'], // production double
	'Optimized processes': ['Optimized_processes', 1e+20, 1000, 0, 9, {'Chain of production':15, 'Real estate':1}, 'style'],
	'Classy school': ['Classy_school', 1.2e+29, 5000, 0, 10, {'Optimized processes':3}, 'style'],
	'Wide teaching': ['Wide_teaching', 1e+37, 30, 0, 9, {'Optimized processes':6}, 'style'],
	'Quick persuasion': ['Quick_persuasion', 1e+43, 70, 0, 10, {'Wide teaching':5, 'Classy school':3}, 'style'],
	'Scaling': ['Scaling', 7e+44, 70, 0, 10, {'Quick persuasion':1}, 'style'],
};

window.DICT_fundamental_talents_DESCRIPTIONS = {
	'God repellent': "The bully God is repelled, he will stroll around for 10 more turns before wiping your progress.",
	'Quick mix': "Your muscles have developed and you mix faster! 1 less turn per level to convert your creations into Fundamental Energy (minimum: 1 turn).",
	'Energy fountain': "\"Nothing is lost, nothing is created, everything is transformed\"? \
		You are a Godess, you just don't care, one equals plenty: converting gives 5 % more fundamental energy per level.",
	'Frenzy': "No pause, no break, those are for the weak!<br />A togglable button becomes available to automatically reactivate the Auto button after the arrival of the bully God.",
	'Lazy convert': "Don't worry, be happy: if a \"Construct\" button is activated, \
		a cute automaton will automatically start converting the associated stock if you don't have enough &#x2206 to construct anymore. Then, it will construct again! Who is a good robot?",
	'Bully detector': "Your automaton can now spot the Bully God from a long distance. If it cannot construct and convert before his arrival, \
		it will convert the stock as soon as possible.",
	'Step up': "Get the Smartomaton, which is able to detect when the conversion of a stock will grant enough fundamental energy to construct the next body part. \
		It will also automatically construct this new body part, leaving you with nothing to do but admire your fundamental energy go up.",
	'Multitasking': "Octopuses are visionary. Copy the octopuses, grow tentacules, work more to earn more. \
		You can now create or convert several elements at once, 1 more per level.",
	'Octogod': "Who wants to choose body parts one by one?<br /> That's the question you asked to a group of gods, and none replied \"me\". Actually, none replied, they ignored you.<br /><br /> \
		Anyway, you decide to go one step further in your multitasking skills, and you are now able to select all the body parts at once.",
	'Unstoppable': "After having its work ruined by the Bully God, your automaton will buy all the energy talents it can, without ever taking a cut. What an honesty!",
	'Industrialization': "You organize, create assembly-lines, remove useless processes. 1 less turn per level to create elements (minimum: 1 turn).",
	'Twins': "You are a Godess, you are magical. Every 20 creations of the same element, you instantly create one more for free! \
		It takes one less element per level to get your free duplicate.",
	'1 = more': "Your optimization skills have become amazing! Every time you create an element, you create one more per level!",
	'Hourglass tapping': "Remember the hourglass of time? You'd think it's a metaphor, but it's not. Tap it like a psycho to make the sand go down faster!<br /><br /> \
		You multiply the number of elements you create by your level in Hourglass tapping + 1, but the number of turns before the arrival of the Bully God is divided by this amount.",
	'Artwork': "Your skills have tremendously improved. Your talent is now sky rocketing. Your creativity is beyond dancing pigs, whatever that's supposed to mean. \
		Buy this and you will be able to create your first Artwork! Besides, Artwork creations will be 10 % faster per level.",
	'Multiwork': "Create 1 more Artwork per level each time you create an Artwork. Yep, it's as cool as it sounds. And it's retroactive.",
	'Concentrated Toenail':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 15 times more Toenails.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Toe':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 30 times more Toes.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Foot':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 45 times more Feet.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Leg':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 60 times more Legs.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Hand':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 75 times more Hands.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Arm':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 90 times more Arms.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Belly':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 105 times more Bellies.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Chest':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 120 times more Chests.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Head':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 135 times more Heads.<br />Besides, every Toenail is converted into more Fundamental Energy',
	'Concentrated Genitals':'"Industrialization" and "Quick mix" are disabled for this body part, but every construction builds 150 times more Genitals.<br />Besides, every Toenail is converted into more Fundamental Energy',
	
	'Life saver': "Sure, destroying everything is more stylish. But hey... As long as the other gods BELIEVE you destroyed everything, you're fine.",
	'Money saver': "Why settle for saving lives when you can save MONEY?",
	'Crap saver': "A noticeable thing about you, is that you like stuff. You like piling up mountains of crap, just to wipe them, and rebuild them, again and again.<br />Yet, in a flash of savviness, you realise that maybe it would be useful to keep some of the crap for later.<br /><br />Save 10 % of the items in your stock when you Ruin Everything. Each level saves items from one more factory.",
	'Tip': "Your Workers are so good that customers want to tip. They make 40 % more money per date per level.",
	'Real esthete': "Behind this lame pun hides a nice 40 % per level increase of the income of your Brothels. \
		Indeed, your prostitutes somehow got some sense of basic home arrangement, making customers more likely to spend more time and more money.",
	'Real estate': "No more puns, things get serious. Your temples expand, they get bigger and more magnificent, attracting more worshipers.<br /><br />Your priests attract worshipers 30 % faster per level.",
	'Chain of production': "Do not confuse it with the chains production, which is right next to the handcuffs production and the latex production.<br /><br />The production of factories is multiplied each level by 2<sup>1&nbsp;/&nbsp;factory&nbsp;rank</sup>.",
	'Optimized processes': "Remove superfluous processes. Like testing, for example. Just say it's \"beta versions\", customers will do the testing, and if condoms get torn, you will obviously offer a refund. Because THAT is having ethics, others should inspire from you.<br /><br />Laboratories upgrades' price raise is divided by (1 + your level in  Optimized processes). The effect is retroactive.",
	'Classy school': "The Basics School is classy now. Shiny walls, a fountain in the courtyard, charismatic (and hot) teachers:  everything you need to attract pupils and train them faster. And if you think those qualities are irrelevant in teaching efficiency, you are contesting the maths: a scientific study proved a 10 % improvement of training speed thanks to Classy school!",
	'Wide teaching': "The maximum optimal amount of pupils per professor increases by&nbsp;1 per level in Wide teaching.<br /><br />You don't know how this talent is giving this effect though. The professors could probably enlighten you, but they are way too busy teaching prostitution.",
	'Quick persuasion': "You can go a long way with a smile. You can go a lot further with a smile and a blow.",
	'Scaling': "Economies of scale are a wonderful thing. You can pay less, have more, and...<br /><br />Oh, why bother... This is just one more random upgrade. Buy it."
};

window.prestige_points_total = 0;
window.deal_timer = 0;
window.current_deal = "none";
window.pretty_stored_time = 0; // Body building
window.frozen_stored_time = 0; // Freeze
window.time_frozen = false; // Freeze
window.autoverheat_activated = false; // Autoverheat
window.inflation_stored_time = 0; // Inflation
window.inflation_bonus = 0; // Inflation
window.LIST_focus_bonus_validated = [false, false, false, false, false, false, false, false, false, false]; // Focus
window.energy_transfered = 0; // Transfer
window.god_of_energy_upset = 0; // 0 or 1. Not a true/false boolean, because I use DICT_Prestige_additionnal_descriptions[deal][god_of_energy_upset].
window.god_of_energy_happy = false; // if you seal all the deals, the god of energy is happy and becomes immune to getting upset.

// START - Not saved
window.Deal_time = 300000;
window.selected_deal = "none"; // deal selected, necessary if you want to break the deal
window.frozenjuice = 0; // beetlejuice equivalent. Freeze
window.DEAL_Freeze_multiplicator = 2; // multiply the time stored by this value before applying it. Freeze.
window.inflation_delay = 10800000; // number of milliseconds necessary to add + 100 %. 1080000 = 3 hours.
// END - Not saved

window.LIST_Prestige_costs = [1, 2, 2, 5];

// structure: 0: god(position)    1: position    2: bought/not bought    3: necessary deals to purchase   4: necessary building to see.
window.DICT_Deals = {"Body building": [0, 0, 0, [], 'Workers'],
					 "Colosseus": [0, 1, 0, ["Body building"], 'Factories'],
					 "Threat": [0, 2, 0, ["Body building"], 'Temple'],
					 "Conviction": [0, 3, 0, ["Threat", "Colosseus"], 'Lobby'],
					 
					 "Generic beauty": [1, 0, 0, [], 'Workers'],
					 "Harmony": [1, 1, 0, ["Generic beauty"], 'Brothels'],
					 "Home arrangement": [1, 2, 0, ["Generic beauty"], 'Brothels'],
					 "New sexy": [1, 3, 0, ["Harmony", "Home arrangement"], 'Schools'],
					 
					 "H24": [2, 0, 0, [], 'Workers'],
					 "Instant": [2, 1, 0, ["H24"], 'Workers'],
					 "Autoverheat": [2, 2, 0, ["H24"], 'Workers'],
					 "Freeze": [2, 3, 0, ["Instant", "Autoverheat"], 'Workers'],
					 
					 "4th wall": [3, 0, 0, [], 'Workers'],
					 "Think big": [3, 1, 0, ["4th wall"], 'Workers'],
					 "Unlocker": [3, 2, 0, ["4th wall"], 'Workers'],
					 "Inflation": [3, 3, 0, ["Think big", "Unlocker"], 'Workers'],
					 
					 "Full potential": [4, 0, 0, [], 'Factories'],
					 "Beyond limits": [4, 1, 0, ["Full potential"], 'Factories'],
					 "Focus": [4, 2, 0, ["Full potential"], 'Workers'],
					 "Science beach!": [4, 3, 0, ["Beyond limits", "Focus"], 'Laboratory'],
					 
					 "Discount talents": [5, 0, 0, [], 'Workers'],
					 "Max style": [5, 1, 0, ["Discount talents"], 'Workers'],
					 "Part-time Artist": [5, 2, 0, ["Discount talents"], 'Workers'],
					 "Transfer": [5, 3, 0, ["Max style", "Part-time Artist"], 'Workers'],
					}


window.DICT_Prestige_DESCRIPTIONS = {
	// Strength
	'Body building': "Your workers go to the gym. As time goes by, they become fit, strong and flexible. Humans like that, and pay more. Incomes from Workers grow linearly: 20 % per hour since the last Ruin Everything.<br />Limit: + 1,900 %.<span id='additional_tooltip_body_building'></span>",
	'Threat': "\"You no prey our Godess? YOU SURE?!\" Your zealots are terrifying the population, improving magnificently your conversion efficiency. Humans do not need to be offered Genitals anymore to become Worshipers.",
	'Colosseus': "Your prostitutes are now so strong that they can juggle with fridges. Producing items in factories and upgrading factories is 3 times faster.",
	'Conviction': "Your prostitutes are patient and stubborn. No need to sleep. No need to eat. No need to rest. They relentlessly argue and negociate with the human governments to defend and promote prostitution. They go from one meeting to another, day and night. They even save money!<br />Some of the reward of the current lobby campaign is applied immediately.<span id='additional_tooltip_conviction'></span>",

	// Beauty
	'Generic beauty': "The Godess of Beauty makes your prostitutes more beautiful. 75&nbsp;% discount on Workers upgrades, because sellers want your prostitutes to wear and promote their clothes.",
	'Harmony': "The Godess of Beauty is appalled by your prostitutes. Only one leg? One arm? Come on... She fixes them all. This is much better now, and thanks to their new attractiveness, your prostitutes make 2 times more profits, either as Workers or in Brothels.",
	'Home arrangement': "Your prostitutes get some aesthetic taste. Your brothels are beautiful, they attract more customers, and richer ones too. Profits triple.",
	'New sexy': "Smart is the new sexy. Whip pupils so that they learn better. Don't worry, they like it. Probably. You don't care anyway.<br /><br />Schools speed is multiplied by 3.",
	
	// Time
	'H24': "The limit for the offline progress is now 24 hours instead of 6 hours.",
	'Autoverheat': "You can set the Autoturn button to run 10 times faster.",
	'Instant': "Who has time for paperwork? From now on, signing deals is instantaneous!",
	'Freeze': "You get the power to freeze time in the Human World. Better, you get the power to STORE time! And to double it! Release it all whenever you want to progress instantly.",
	
	// Laziness
	'4th wall': "FreeToPlay, PayToPlay, PayToWin... Today, after countless hours of R&D, we go one step further. This is a revolution. Brought to you by the God of Laziness, here comes the PayToPay! Enjoy!",
	'Think big': "Because 1,000 is not enough. You are now able to attribute prostitutes up to 1 billion at a time!",
	'Unlocker': "Gotta Unlock 'Em All! This button buys everything you can buy in the Human World at once. No more painful repeated clicks after Ruining Everything. Of course, one would think that such a feature should be free. That a decent designer wouldn't let players suffer in vain. Well I talked about it to the God of Laziness, he replied \"Lol!\".",
	'Inflation': "Stay still and see your income get multiplied! Remember: when you want to click, relax, don't do it.<br /><br />The growth is linear, + 100 % every 3 hours, reset on Ruin Everything.<span id='additional_tooltip_inflation'></span>",
	
	// Science
	'Full potential': "The bonus multiplicator from items consumed in brothels is tripled.",
	'Beyond limits': "Your factories gain one free level.",
	'Focus': "The God of Science lends you his Helmet of Focusing.<br /><br /> Focusing on one body part multiplies the number of body parts created based on half of your level in the fundamental talent Multitasking.\
		<br /><br />Besides, when not focusing on one single part, the number of parts created at the end of a construction is multiplied by 10&nbsp;% of the amount of turns left in the constructions of all body parts at the beginning of the turn.",
	'Science beach!': "Your laboratories multiply the production of their associated building by 100 % per level instead of 50 %. As a result, ressources flow and you can relax on the beach.",
	
	// Energy
	'Discount talents': "Both &#x2206; and &#423; talents' prices are divided by 2.<br /><br />",
	'Max style': "You can spend your Style points without impacting your style bonus on conversions.<br /><br />",
	'Part-time Artist': "You are now able to build/convert and create artworks at the same time.<br /><br />",
	'Transfer': "Pour &#x2206; into a $ multiplicator. The more you pour, the bigger the multiplicator. <br /><br />",
}

window.DICT_Prestige_additionnal_descriptions = {
	'Discount talents': ["You ask for a half refund for the already purchased talents, but after some hesitations, the God of Energy refuses. He looks really sorry for disappointing you.<br /><br />\
		\"You know, the other Gods always break their deals with me. It makes me sad, I feel rejected... I hope you won't break our deal!\"<br /><br />\
		He seems so miserable, you give him a hug.",
		"The God of Energy seemed a bit sad. He stayed almost silent while you sealed the deal."],
	'Max style': ["The God of Energy confesses that he is bullied by the other Gods, because he has very few grasp on the Human World. Strong from this common pain, you spend a lot of time together, comforting each other and trash talking about the other Gods.",
		"When the God of Energy looks at you, it is with eyes full of guilt and sadness. You wonder what's going on."],
	'Part-time Artist': ["The God of Energy confesses that he is bullied by the other Gods, because he has very few grasp on the Human World. Strong from this common pain, you spend a lot of time together, comforting each other and trash talking about the other Gods.", 
		"When the God of Energy looks at you, it is with eyes full of guilt and sadness. You wonder what's going on."],
	'Transfer': ["You spend a lot of time cuddling now. In each other's arms, when you talk about learning Transfer, the God of Energy sighs:<br /><br /> \
		\"I don't want to make you pay for this... But the other Gods would bully me even more...\"<br /><br /> \
		You smile, and hug him tighter.",
		"This time, you can't help yourself and you ask what's the matter.<br />\
		\"Well... You broke our deal in the past, you are like the others...\", replies miserably the God of Energy. \"It's okay though,\", he adds with a nervous smile, \
		\"I'm not blaming you, I know I'm not worth much...\"<br />\
		You don't really know what to do, so you shrug and move on."]
}

// structure :    NAME:   0:button identifiant css, 1:cout, 2:incrementation du cout, 3:niveau actuel, 4: niveau max, 5:DICT_nom_visible
window.DICT_God_of_Extortion = {
	'Evil Pact': ['Evil_Pact', 666, 1, 0, 1, {'Bullystroyer':1, 'Obliviate':1}],
	'Bullystroyer': ['Bullystroyer', 15, 1, 0, 1, {'Transversion':1, 'Maximum memoriam':1, 'Incremental energy':1, 'Ephemeral death':1}],
	'Obliviate': ['Obliviate', 3, 1, 0, 1e+9, {'Transversion':1, 'Maximum memoriam':1, 'Incremental energy':1, 'Ephemeral death':1}],
	'Transversion': ['Transversion', 3, 1, 0, 1, {'Hibernate':1, 'Printing machine':1, 'Time wreaker':1, 'Copyism':1}],
	'Maximum memoriam': ['Maximum_memoriam', 10, 1, 0, 1, {'Hibernate':1, 'Printing machine':1, 'Time wreaker':1, 'Copyism':1}],
	'Incremental energy': ['Incremental_energy', 10, 1, 0, 1, {'Time disturber':1, 'Prestigious':1, 'Premium skin':1, 'Discount skins':1}],
	'Ephemeral death': ['Ephemeral_death', 1, 1, 0, 1e+9, {'Time disturber':1, 'Prestigious':1, 'Premium skin':1, 'Discount skins':1}],
	'Hibernate': ['Hibernate', 6, 1, 0, 1, {}],
	'Printing machine': ['Printing_machine', 2, 1, 0, 1e+9, {}],
	'Time wreaker': ['Time_wreaker', 1, 1, 0, 1e+9, {}],
	'Copyism': ['Copyism', 1, 1, 0, 30, {}],
	'Time disturber': ['Time_disturber', 1, 1, 0, 1e+9, {}],
	'Prestigious': ['Prestigious', 1, 1, 0, 10, {}],
	'Premium skin': ['Premium_skin', 10, 1, 0, 8, {}],
	'Discount skins': ['Discount_skins', 1, 1, 0, 1, {}],
}

window.printing_machine = 0;
window.coins_1_hour = 0;
window.coins_24_hours = 0;
window.toggled_skins = true;
window.total_skins = 8; // not saved

window.DICT_God_of_Extortion_DESCRIPTIONS = {
	'Evil Pact': "Here is the Evil Pact. Sign it in order to have as much Fundamental Energy and Dollars as you want. Signing the pact will also reduce the price of ALL the other Super Cool Advanced Masteries to zero golden ring.",
	'Bullystroyer': "Kill the Bully God, and get unlimited turns. Violence solves problems.<br /><br /><i>Reading details in the Encyclopedia is recommanded.</i>",
	'Obliviate': "The God of Energy forgets that you broke his heart.<br /><br /><i>WARNING: this doesn't give any progression advantage.</i>",
	'Transversion': "When a body part is converted, it's also duplicated and sent to the laboratory or temple storage.",
	'Maximum memoriam': "If a technological level has been reached once in the laboratory, you don't need to spend body parts to reach it again in case you decide to forget this technological level or Ruin everything. \
		<br />You will still need to pay the price in dollars though.",
	'Incremental energy': "The Fundamental Energy gained from conversions is multiplied by the exponent of your stock of Fundamental Energy.",
	'Ephemeral death': "For the most impatients : bypass the Time and immediately resurrect the scientist.",
	'Hibernate': "Multiply the maximum offline time by 7.",
	'Printing machine': "Dollar gains are tripled until you Ruin Everything.<br /><br />Stacks additively.",
	'Time wreaker': "Get a coin that moves time 24h forward when activated.",
	'Copyism': "Get 10 % more artworks per level. The effect is retroactive.",
	'Time disturber': "Get 10 coins that move time 1h forward when activated.",
	'Prestigious': "Get one Prestige point per level.",
	'Premium skin': "Get a skin that you can apply on menus, for a personalized experience.",
	'Discount skins': "Get all the premium skins at once! 1 Golden Ring instead of 80! An unexplainable offer from the God of Extortion.",
}

window.LIST_tutorial_dialogues = [
	"If you can read this, I probably failed in my code somewhere. Maybe you cheated. Or maybe you're just spying the source?",
	"Welcome, Godess! I am the annoying chat box, and I will write stuff for your attention. I will do this because I love you. Or because I love wasting your time. It's either one or the other anyway. \
		So! Shall we begin? <span class='tutorial_emphasize'>Click on the right arrow</span>, at the bottom right of myself. To read previous pages of the tutorial, click on the left arrow.",
	"You can click anywhere on me to drag me around, or reduce my size by clicking on the magnifying glass at my bottom right.<br /><span class='tutorial_emphasize'>Drag me down</span> to reveal your workshop.",
	"The first element costs 1&nbsp;&#x2206; to be created. Conveniently, you have 1&nbsp;&#x2206; available (displayed on the top left of the screen).<br />\
		<span class='tutorial_emphasize'>Click on the \"Construct\" button</span> to start the creation. <span class='tutorial_emphasize'>Then, wait until your first item is built.</span> Easy enough.",
	"You created a TOENAIL! Gotta start somewhere... I'd laugh at you, but I'm a chat box and you're a Godess, so I wouldn't dare.<br />\
		<span class='tutorial_emphasize'>Click on \"Convert\"</span> to transform your stock into 2&nbsp;&#x2206;.",
	"Time is managed with the \"Auto\" and \"Next turn\" buttons at the top right. Notice the time counter under them, with an ominous figure standing at the right of it.<br />\
		Something tells me that this scary character will come when the counter reaches the limit. Be brave: <span class='tutorial_emphasize'>go beyond turn 100&nbsp;/&nbsp;100</span>, and face your doom!",
	"<div style='font-size:14px'> &#x1f479;: \"Ooooh what is that? Puny tiny godess trying to build stuff? You're useless and you won't achieve anything! Just give up!\" A mean God has come to bully you. He ruined everything! He destroyed all your stocks and let you\
		only a portion of your Fundamental Energy (<span id='tutorial8_energy'>(&#x2206;&nbsp;+&nbsp;1)<sup>0.85</sup></span>). \
		<br />I expect this unpleasant fellow to come back very often... <span id='tutorial8_turns'>Every 100&nbsp;turns.</span> \
		<br />&nbsp;&nbsp;&nbsp;&nbsp;<span class='tutorial_emphasize'>Keep producing &#x2206;, gather <b><u>at least 6&nbsp;&#x2206; at turn 0 / 100</u></b></span> to unlock new tools!</div>",
	"<div style='font-size:14px'>You are now rich enough to buy a talent! Talents are permanent, no God will ever take them from you. Invest in them after the bully God has ruined your progress to become stronger and gather even more Fundamental Energy. \
		When you are done, click on \"God World\" and try to gather 10&nbsp;&#x2206; to <span class='tutorial_emphasize'>construct the next part, under the toenails.</span><br />&nbsp;&nbsp;Oh, and there is an Encyclopedia, don't hesitate to check it!</div>",
	"You created a TOE! Amazing synergy with the toenail.<br />\
		Tip: you can activate an \"Unlocked buttons\" mode in the settings. It lets you program your next action, which will make your work more comfortable, dear Godess.<br />\
		<span class='tutorial_emphasize'>You're on your own from now on.</span> Good luck, have fun!",
	"You created a FOOT! You try to put it together with the toe and the toenail, but you're not quite sure how. Let's be kind and call the result \"creative\".",
	"You created a LEG! You plug it on the foot. You will definitely kick ass with that.",
	"You created a HAND! Amazing synergy with... Nothing. Since you don't know what to do with it, you decide to simply call it \"Thing\".",
	"You created an ARM! You awkwardly plug the hand onto it. In case you want to wave at someone someday, you now have the perfect tool.",
	"You created a BELLY! There seems to be a lot of worm-like gross things inside. You're not so proud of this one...",
	"You created a CHEST! It comes with two excrescences, big, soft and round, surmounted by ridiculous little pink buttons. It should make for a comfortable cushion.",
	"<div style='font-size:14px'>You created a HEAD! What... WHAT A MASTERPIECE! Eyes, ears, mouth, nose, hair, how fabulous! It kinda looks like a ball though. You try to resist. You try. Hard. \
		It starts with some imperceptible twitch. Someone later commented on what happened next in the terms \"that escalated quickly\": basketball spin, soccer juggle, shoot => even Picasso wouldn't approve the result. Shame on you.</div>",
	"You created GENITALS! That's disgusting... Why would you do that?",
	"You created a PROSTITUTE! What... WHAT? Godess? Oh no, I have a bad feeling about this...",
	"Yeah, ehm... I... I'm gonna go now, all right? I don't want to have anything to do with this... Just check the Encyclopedia if you have any questions, okay?",
];

window.LIST_tutorial_dialogues_validation = [];
for (var i in LIST_tutorial_dialogues) {LIST_tutorial_dialogues_validation.push(0);}
LIST_tutorial_dialogues_validation[0] = 1;

// structure: GENERAL MENUS   /  SPECIFIC MENUS:  0:visible?   1: ever clicked?
window.DICT_encyclopedia = {
	'Main Frame': {'High values': [1, 0], 'Bully God': [1, 0], 'Beetlejuice': [0, 0], 'Counter': [1, 0], 'Next turn': [1, 0], 'Auto': [1, 0], 'Accelerator': [1, 0], 'Fundamental Energy': [1, 0], 'Dollars': [0, 0], 'Style Points': [0, 0], 'Prostitutes': [0, 0], 'Pupils': [0, 0], 'Ruin everything': [0, 0]},
	'God World': {'Name': [1, 0], 'Construct': [1, 0], 'Stock': [1, 0], 'Convert': [1, 0], 'Artwork': [0, 0]},
	'Fundamental Talents': {'Talent tree': [0, 0], 'Energy talents': [0, 0], 'Style talents': [0, 0]},
	'Human World': {'Real time': [0, 0], 'Buildings': [0, 0], 'Attribution multiplicator': [0, 0], 'Workers': [0, 0], 'Brothels': [0, 0], 'Factories': [0, 0], 'Temple': [0, 0], 'Laboratory': [0, 0], 'Schools': [0, 0], 'Lobby': [0, 0]},
	'Prestige': {'Prestige points': [0, 0], 'Seal/Break deals': [0, 0], 'God deals': [0, 0]},
	'God of Extortion': {'Golden Rings': [0, 0], 'SCAM tree': [0, 0], 'Super Cool Advanced Masteries': [0, 0]},
	'Encyclopedia': {'Metapedianism': [1, 0]},
	'Settings': {'Patch notes': [1, 0], 'Title screen': [1, 0], 'Revelation screen': [0, 0], 'Save game': [1, 0], 'Load game': [1, 0], 'Unlocked buttons': [1, 0]},
}

// 0: visible?    1: ID in html
window.DICT_encyclopedia_additional_parts = {
	"Casinothel": [0, "casinothel_encyclopedia"],
	"Zoutopia": [0, "zoutopia_encyclopedia"],
	"Bankthel": [0, "bankthel_encyclopedia"],
	"Brollywood": [0, "brollywood_encyclopedia"],
	"Virtual brothel": [0, "virtual_brothel_encyclopedia"],
	"Laboratory": [0, "scientist_encyclopedia"],
	"Advanced school": [0, "advanced_school_encyclopedia"],
	"Elite school": [0, "elite_school_encyclopedia"],
}

window.DICT_content_encyclopedia = {
	
	'Default': "<p class='bold'>Hither stands the Encyclopedia, a very unfun place to be. You will find a lot of boring walls of text in here, and... That's it, basically. But you will learn THINGS! \
		If you're unsure what something does, you probably want to come over here in order to tediously but bravely study the intricacies of the Universe.<br /><br /> \
		Orange buttons indicate that a page of the Encyclopedia has never been read.</p>",
	
	// Main Frame
	'High values': "When a value is higher than 999,999, it will be displayed using the scientific notation.<br />\
		For example, 3,000,000 will display 3e+6. 21,000,000 is 2.1e+7. 508,000,000,000 is 5.08e+11.<br />\
		This notation may be hard to use at first, but it is necessary as numbers become too big for the usual notation system.",
	'Bully God': "Everytime you reach the end of the counter, the bully God arrives. He will destroy all your stock, as well as your ongoing constructions and conversions. On top of that, he may destroy some of your Fundamental Energy. \
		The amount you are able to save is equal to (current&nbsp;Fundamental&nbsp;Energy+1)<sup>0.85</sup>, rounded. You can notice that if you have absolutely no Energy left, the bully God will give you one. Maybe he is not that bad...",
	'Beetlejuice': "If you click 3 times in a row on the head of the bully God, he will be called right away, you will immediately reach the final turn before he bullies you. If you click only once or twice on the head of the bully God, you can cancel the call by clicking on \"Auto\" or \"Next turn\".",
	'Counter': "The number of turns left before the arrival of the bully God. Be careful: the next turn won't be executed if you are at the last turn. Example: if the counter indicates 100&nbsp;/&nbsp;100, clicking \"Next turn\" will immediately attract the bully God, you won't finish a conversion even if there is only 1 turn left to complete it.",
	'Next turn': "This button controls the time in the God World. Each time you click, the game goes one turn forward.",
	'Auto': "This button controls the time in the God World. The time will go forward at a speed of 1 turn per second until you click on the button again. The arrival of the bully God will systematically deactivate the Auto button.",
	'Accelerator': "When activated, \"Auto\" will make time go forward at a speed multiplied by 10. Activating the accelerator itself doesn't change the current turn, it's only a booster for the \"Auto\" button.",
	'Fundamental Energy': "You get Fundamental Energy (&#x2206;) when you successfully convert elements in the God World. It can be used to construct elements, or to buy Fundamental Talents.",
	'Dollars': "Your prostitutes work in the human world and are paid in dollars ($). You can invest your dollars in the Human World to purchase upgrades that will make you progress faster, or hoard them to get a better reward when you click on \"Ruin everything\".",
	'Style Points': "Style Points (&#423;) have 2 functions: you can spend them in the Fundamental Talents area to acquire some talents, or keep them and multiply the &#x2206; obtained from conversions by 1+("+multiplier_style_points_to_funda+" X &#423;).<br /><br />\
	When you Ruin everything, you get (your dollars)<sup>0.7</sup> Style Points.",
	'Prostitutes': "Inactive prostitutes / Total prostitutes. Inactive prostitutes can be attributed to a task in the human world by clicking on the \"+\" button next to the task. If you don't have inactive prostitutes to attribute anymore, you can deattribute some by clicking on the \"-\" button next to a task where prostitutes are working.",
	'Pupils': "Inactive pupils / Total pupils. Pupils are humans trained in the Basics School, they know the basics and they can do almost the same things that artworks can do. The few differences are: you can't use the fundamental talent \"Life saver\" to save pupils, they can't work in Temples as priests, and they can't be teachers in any school. Because they are not worthy.",
	'Ruin everything': "Gods show their strength and aloofness to each other by willingly destroying their hard work. In order to look stylish in the eyes of the other Gods, tacit rules require you to destroy everything you've created in the human world (your progress in the God World can remain unscathered, except for Artworks) and start over from scratch.<br ><br />\
	As a reward, you will get (your dollars)<sup>0.7</sup> Style Points (&#423;).<br ><br />\
	One last thing to notice: if you are not at turn 0, Ruining everything will pull the bully God.",
	
	// God World
	'Name': "The name of an element is hidden until you create it for the first time. As soon as you do, the next element becomes available, with question marks hiding its name. There is a total of 10 different elements.",
	'Construct': "\"Construct\" an element means you are spending turns in order to create it. You initiate the construction by clicking on \"Construct\". The construction will automatically start when you click on the \"Next turn\" button. \
		When there is only 1 turn left indicated on the progress bar, the next turn will create the element: it will be added to your stock.<br /><br /> \
		When you click on the \"Construct\" button, it becomes green if you have enough energy to build this element (and remove the cost from your Fundamental Energy), or red if you don't have enough.<br /><br /> \
		As long as you don't click on the \"Next turn\" button, you can click again on the construct button to cancel the construction and get your Fundamental Energy back.<br /><br /> \
		If you have selected \"Unlocked buttons\" in the Settings menu, note that you can click on the \"Construct\" button while another action is ongoing (converting, for example). The construction will be waiting for your current action to be completed, and automatically start whenever it's possible. In that case, the Fundamental Energy is taken when the construction is ready to start, not when you click on the \"Construct\" button.<br /><br /> \
		If you have enough energy to build an element 2 times or more in a row, the \"Construct\" button will stay green, and you will automatically start building another copy of the same element when the first one is finished, unless you click the \"Construct\" button again to cancel the future construction.",
	'Stock': "You have created the indicated amount of body parts, and you're storing them in the stock until they are converted into &#x2206; or destroyed by the bully God.",
	'Convert': "\"Convert\" an element means you are spending turns in order to transform your stock of this element into Fundamental Energy. You initiate the conversion by clicking on \"Convert\". \
		The conversion will start automatically when you click the \"Next turn\" button.<br /><br /> \
		When there is only 1 turn left indicated on the progress bar, the next turn will convert the element: your stock will drop to 0 and you will get an amount of fundamental energy equal to <font color='green'>2</font> times the cost of construction.<br /> \
		Example: if you convert a stock of <font color='red'>3</font> elements that have cost <font color='blue'>1</font> Fundamental Energy to create, you will gain <font color='green'>2</font>*<font color='red'>3</font>*<font color='blue'>1</font> = 6 Fundamental Energy.",
	'Artwork': "Artworks are masterpieces that are priced differently: you need fundamental energy to make them, but also 1 body part of each. Each artwork costs 10 % more &#x2206; than the previous one. Artworks need a lot of focus to be made, so you can't build any other body part at the same time.",

	//Fundamental Talents
	'Talent tree': "The bully God can't make you unlearn your talents. Some talents have several levels, each level costs more than the previous one.<br /><br />\
		Now, there is an issue with acquiring talents: learning takes time. A lot of time. Sadly, when you start working in the God World, the bully God will try to locate you and stop you. \
		Therefore, you need to frantically generate as much fundamental energy as possible before his arrival, since if you start learning a talent, the bully God will find you before you are done learning, and he will harass you until you give up and leave. This is why talents can only be learnt at turn 0, when the bully God isn't looking for you.",
	'Energy talents': "", // completion_fundamental_talents_encyclopedia() is filling this description
	'Style talents': "", // completion_style_talents_encyclopedia() is filling this description
	
	// Human World
	'Real time': "The human world uses the real time, 1 hour of progress in the human world takes 1 hour in the real world. The progress keeps going while you are offline during up to 6 hours.",
	'Buildings': "The \"Workers\" are the base building, it's automatically unlocked. The other buildings can be unlocked by clicking on the ??? representing them, if you have enough money.<br />\
		The very first time you purchase a building, it's free. You still need the money to buy it, but it won't be taken from you, and you can spend it on something else.",
	'Attribution multiplicator': "Click on this button, at the top right of the human world window, to change the amount of prostitutes you will attribute with one click on the \"+\" and \"-\" buttons.",
	'Workers': "Use the + and - buttons at the top right of the window to attribute prostitutes to this building. They will collect dollars over time. The speed is linear: 10 prostitutes will earn 10 times more money than 1 prostitute.\
		The earnings can also be multiplied by other sources. For example, clothes can be bought with dollars, and will multiply the money made by your workers in the future. Those clothes have 3 colors: pink is for girls, blue is for boys, purple is for both. Gods love cliches.",
	'Brothels': "Brothels need to have enough maintenance prostitutes to make money. The gains of the brothel are multiplied by the amount of operational prostitutes attributed to it.<br />\
		Money is stored in the brothels until you click on the \"Collect\" button, or on the \"Razzia\" button at the top left.<br /><br />\
		<span id='casinothel_encyclopedia' class='no_display'><b>Casinothel</b><br />Pay to roll a (loaded) die and multiply the income / hour of your brothel by the result! The die is loaded this way:<br />\
		Chances of rolling a 1: 1 / 32.<br />\
		Chances of rolling a 2: 16 / 32.<br />\
		Chances of rolling a 3: 8 / 32.<br />\
		Chances of rolling a 4: 4 / 32.<br />\
		Chances of rolling a 5: 2 / 32.<br />\
		Chances of rolling a 6: 1 / 32.\
		</span><br /><br />\
		<span id='zoutopia_encyclopedia' class='no_display'><b>Zoutopia</b><br />\
			When you click on \"Barter\", the brothel will stop charging dollars to its customers and will charge items instead.\
			To represent this, the production of your factories is multiplied by (1 + 9 X operational prostitutes in Zoutopia / maximum operational prostitutes in Zoutopia) X (bonus from items consumed in Zoutopia).</span><br /><br />\
		<span id='bankthel_encyclopedia' class='no_display'><b>Bankthel</b><br />\
			The money stored in the bankthel will automatically generate interests every second, the interest rate being approximately 100 % per day (24 hours). Keep the money in the bankthel untouched for many days to make a lot of money!</span><br /><br />\
		<span id='brollywood_encyclopedia' class='no_display'><b>Brollywood</b><br />\
			You can convert Brollywood into a Priesthel, where you will still shoot movies, but propaganda ones. The Priesthel makes as much money as Brollywood, but in addition, the speed of the worshipers is multiplied by (1 + "+brollywood_multiplicator+" X operational prostitutes in Brollywood / maximum operational prostitutes in Zoutopia) X (bonus from items consumed in Brollywood);</span><br /><br />\
		<span id='virtual_brothel_encyclopedia' class='no_display'><b>Virtual brothel</b><br />\
			Like with Brollywood and the Priesthel, there is no downside at activating the Holograms. If you consume items and have at least 1 operational prostitute, your lobbies' speed and money consumption will be multiplied by the bonus from items consumed in the Virtual brothel.\
			Note that the multiplicator is not dependant from the amount of operational prostitutes attributed: as long as the items are consumed and at least one operational prostitute is active, you get the full bonus.</span>",

	'Factories': "Some brothels can improve their efficiency by consuming items from factories.<br />\
		Those brothels have a \"Consume\" button, with 5 possible colors:<br />\
		- blue, the consumption is disabled.<br />\
		- green, the consumption is enabled.<br />\
		- white (milk), the bonus is activated but when there is no more bonus time left, no more items will be consumed, the brothel will lose its bonus.<br />\
		- red, the bonus is disabled, the brothel will consume items as soon as factories produce enough of them.<br />\
		- orange, the factories don't have enough items, the bonus will be lost and the button will become red as soon as there is no more bonus time left.<br /><br />\
		Factories need prostitutes to produce items. Click on a green round button to attribute prostitutes to this factory. Click on a dark round button to upgrade the factory. The production speed is multiplied by 10 for each upgrade.\
		If you start an upgrade, you can freely pause it by removing the prostitutes or by clicking on another button of the factory. The upgrade progression won't be lost, attribute prostitutes to it again if you want to keep going.",
	'Temple': "Attribute prostitutes to the Temple in order to recruit worshipers. Be careful: you can't remove prostitutes from the Temple, they will work here until you Ruin everything.<br /><br />\
		Your prostitutes alone are not convincing enough though: to become worshipers, humans need genitals as a present. One gift per human is enough to convince them. Create genitals in the God World, then send them to the Temple so that your prostitutes give them to the future worshipers.<br /><br />\
		Once recruited, your worshipers can focus their prayers in enhancing one of four of your abilities:<br />\
		- Epicness (Prestige) will grant you an extra Prestige point for every level reached.<br />\
		- Coolitude (Style) will improve your conversion rate from dollars to Style points: dollars<sup>0.7</sup> at level 0, dollars<sup>0.71</sup> at level 1, .... dollars<sup>0.80</sup> at level 10.<br />\
		- Solidity (Energy) will improve how much of your fundamental energy will be saved from the bully God: energy<sup>0.85</sup> at level 0, energy<sup>0.855</sup> at level 1, .... energy<sup>0.9</sup> at level 10.<br />\
		- Coordination (Law of attraction) will make your Workers generate a multiplicator intended to improve your Brothels. This multiplicator is displayed in the top right of the Workers panel, and is calculated as follow:<br />\
		multiplicator = 1 + (log2(workers)*log2(upgrades from clothes) / 20 * level of law of attraction). Log2 means \"logarithm base 2\": log2(2) = 1, log2(4) = 2, log2(8) = 3, log2(16) = 4, etc.<br /><br />\
		Worshipers are not destroyed when you Ruin everything. They even keep worshiping you if you don't rebuild the Temple, what a dedication! However, you will need to rebuild the Temple if you want to change their assignment.<br /><br />\
		The enhancement speed is multiplied by (attributed worshipers)<sup>0.9</sup>. To optimize your production, it is slighty better to spread your worshipers equally between all your abilities. However, it might be occasionally more interesting to focus all your worshipers on one ability to improve it faster. You're the judge!",
	'Laboratory': "Send body parts to the laboratory by clicking on the appropriate buttons. Those body parts are required to upgrade the 5 available fields of study: fundamental physics, biology, management, engineering and psychology.<br />\
		Fields of study have 5 levels, and each level costs 10 times more body parts than the previous one. Besides, upgrades cost dollars: 10,000 times more dollars per level of ALL the upgrades. If you upgrade biology, the cost of the next upgrade of the 4 other fields will be multiplied.<br />\
		Downgrading a field of study is free, and will cancel the price raise from the last upgrade.<br /><br />\
		Advanced buildings have requirements to be used: for example, a brothel may require \"management\" to be level 2.<br />\
		In addition, upgrades have general effects:<br />\
		- Fundamental physics: +50/125/238/406/659 % to Fundamental energy gained from conversions.<br />\
		- Biology: +50/125/238/406/659 % to the money gained by workers.<br />\
		- Management: +50/125/238/406/659 % to the money gained by brothels.<br />\
		- Engineering: +50/125/238/406/659 % to the speed of factories, in both production and upgrading.<br />\
		- Psychology: +50/125/238/406/659 % to the efficiency of the prayers of your worshipers.<br /><br />\
		<span id='scientist_encyclopedia' class='no_display'>The scientist is a very strange fellow. Though not exactly immortal, he will resurrect after 12 hours if you smite him. \
		Even more peculiar, those 12 hours are incompressible: you can't reduce them by Ruining everything, by using the deal Freeze, or by using the time coins proposed by the God of Extortion. \
		By the way, there is only one (but big) advantage you can get from smiting the scientist: the pleasure of beating the hell out of this pretentious prick.</span>",
	'Schools': "Schools require artworks to be built, the number of artworks is indicated along with the other costs. Same as in the Temple, you can't remove those artworks from the schools.<br />\
		Schools have professors and students. Professors can't be removed from the schools and must be artworks, while students can be removed freely and attributed somewhere else.<br /><br />\
		Basics school: attribute professors to teach humans how to be prostitutes. When they get their degree, you can use them almost like your regular artworks, except that they can't become priests or professors.<br />\
		The more professors you attribute, the faster the pupils are trained. Yet, note that there is a numerus closus: less and less pupils will graduate, and none will after 1,337,000 pupils have.<br />\
		The mathematical formula is: training speed = professors X (1,337,000 - pupils graduated) / 1,337,000.<br /><br />\
		<span id='advanced_school_encyclopedia' class='no_display'>Advanced school: Attribute professors and students to this school. They will improve the general knowledge of your prostitutes, and improve the income of your brothels and workers.<br />\
		There is a soft limit to the amount of students you can attribute; raise this limit by attributing more professors. The students beyond the limit will generate less improvement to your workers and brothels.<br />\
		Also, note that like the Basics school, the Advanced school have diminishing returns: the more you improve, the slower it becomes to improve more.<br /><br /></span>\
		<span id='elite_school_encyclopedia' class='no_display'>Elite school: very similar to the Advanced school, the Elite school improves the efficiency of your Lobby by accelerating it. Due to the elite status of the professors and of the students, there are less students per professor than in the Advanced school, and the returns from an excess of students diminish more sharply.</span>",
	'Lobby': "Attribute prostitutes to lobby campaigns to start investing money in it. Achieving the completion of a lobby campaign will give you a massive multiplicator to the income of your workers and brothels. The time and money invested in the campaign are saved when you Ruin everything, you don't have to start over.<br /><br>\
		The cost of the campaign will be increasing logarithmically: completing from 99 % to 100 % will cost about 10,000 times more money than from 0 to 1 %.<br />\
		The speed will be multiplied by (prostitutes attributed)<sup>"+lobby_prostitutes_decrementor+"</sup>.<br />\
		The cost will be multiplied by (prostitutes attributed)<sup>"+lobby_price_incrementor+"</sup>.<br /><br />\
		The completion speed will also be multiplied by Influence points. The price in dollars isn't multiplied accordingly, which means that the more Influence points you have, the cheaper the campaign will be.<br />\
		Influence points are obtained by Ruining everything, and depend on the amount of dollars converted:<br />\
		- 1e+55 dollars gives 1 Influence point.<br />\
		- 1e+57 dollars gives 1+2=3 Influence points.<br />\
		- 1e+59 dollars gives 1+2+3=6 Influence points.<br />\
		- 1e+61 dollars gives 1+2+3+4=10 Influence points.<br />\
		- 1e+63 dollars gives 1+2+3+4+5=15 Influence points.<br />\
		etc.",
	
	// Prestige
	'Prestige points': "Prestige points are used to seal deals with other Gods. They are obtained when you Ruin everything based on your Style points reward:<br />\
		- 1 Style point: 1 Prestige point.<br />\
		- 100 Style points: 1 Prestige point.<br />\
		- 10,000 Style points: 1 Prestige point.<br />\
		- 1e+6 Style points: 1 Prestige point.<br />\
		etc.<br />\
		The Prestige point of each step can be obtained once and only once, after Ruining everything you will have to reach the next step to get another point.<br />\
		You can have several Prestige points when you Ruin everything if your Style points reward is high enough compared to the reward of your previous Ruin everything.",
	'Seal/Break deals': "Each God has 4 deals. The bottom deal costs 1 Prestige point, the middle deals cost 2 Prestige points, and the top deal costs 5 Prestige points. You need to seal the lesser deals of a God to access his upper deals.<br />\
	Sealing a deal takes 5 minutes. You can break deals for free to get your Prestige points back, there is no downside apart from having to spend 5 minutes into sealing the deal again if you want it back.<br /><br />\
	Prestige points and deals are not part of the human world, they remain untouched when you Ruin everything.",
	'God deals': "", // completion_god_deals_encyclopedia() is filling this description
	
	// God of Extortion
	'Golden Rings': "Get golden rings with real money, spend the rings to get SCAMs. Golden rings are not lost if you break the deal 4th wall.",
	'SCAM tree': "Spend golden rings in the tree to get SCAMs. Contrary to the fundamental tree, the price doesn't go up, the price of level 1 is the same as the price of level 100.<br /><br />\
		In order to go up in the tree, you need to buy one level in at least one of the previous SCAMs. For example, if you want to purchase Incremental energy, you need to purchase at least one level in Time disturber, Prestigious, Premium skin or Discount skins.",
	'Super Cool Advanced Masteries': "", // completion_SCAMs_encyclopedia() is filling this description
	
	// Encyclopedia
	'Metapedianism': "Yep, you can get informations about the Encyclopedia in the Encyclopedia. Cool, huh? Scientists call this phenomena the \"metapedianism\".<br /><br />\
		Also, you may have noticed that the light comes from the right here, while it comes from the left everywhere else. That's because sometimes, enlightenment comes from where you expect it the least.",
	
	// Settings
	'Patch notes': "A list of most of the changes made to the game since launch.",
	'Title screen': "Read the intro screen again. You can also check the current version of the game at the bottom right of this screen.",
	'Revelation screen': "Read the revelation screen again, where your life as the mighty Godess of Prostitution begins!",
	'Save game': "Click on the button and save the text file on your computer for later use.",
	'Load game': "Open a save file previously stored on your computer using the \"Save button\". Copy the totality of the text that is in the file (use Ctrl+A if you use Windows). Click on the \"Load game\" button, paste inside the window that opened, validate with OK.",
	'Unlocked buttons': "If buttons are unlocked, they will never be grey/locked. By clicking on a button that would otherwise have been grey/locked, you will program its action: as soon as possible, this action will be performed.<br />\
		The locked mode is targeted at beginners, to give them an easier understanding of what they can and cannot do. Trying the unlocked mode at some point is recommanded though, programing actions adds a significant comfort once you get used to it.<br />\
		The unlocked mode is also recommanded for low end computers, since the constant change in the color of the buttons requires a lot of ressources and can reduce the maximum number of turns per second.",
	'Music': "Click on the button to choose between the musics you have unlocked, or mute the music.",
}

window.DICT_fundamental_talents_ENCYCLOPEDIA = {
	'God repellent': "Last level: 10,000 turns.<br />Gives you 10 more turns per level before the arrival of the Bully God. Your first talent point transforms your counter of turns from 0 / 100 to 0 / 110.",
	'Quick mix': "",
	'Industrialization': "",
	'Energy fountain': "The 5 % bonus is calculated from the income, not from the cost of the body part.<br />\
		Example: with Energy fountain level 2, if you create a body part for 100 &#x2206;, you will convert it for 200 X (1 + 0.05 X 2) = 220 &#x2206;.",
	'Twins': "You can see the Twins count in the tooltip of the stock of each element.<br />\
		Example: with Twins level 5, if you have \"Twins count: 15/15\" in the tooltip, it means that the next time you finish a construction, you will get twice the normal amount of body parts.<br />\
		The arrival of the bully God doesn't reset the count.",
	'1 = more': "Each level multiplies the amount of body parts constructed.<br />\
		Example: level 3, each construction will build 1+3=4 body parts.<br />\
		This amount is then doubled with the bonus from Twins.",
	'Hourglass tapping': "A clickable button is available next to the turns count.<br />\
		This talent doesn't reduce the number of turns necessary to convert or make artworks. Activating it will therefore have a slightly negative impact on your productivity.\
		But time will run faster, which is convenient, so, it's up to you to decide if you use it or not.<br />\
		You can't change your mind if you are not at turn 0: you need to start or stop tapping before turn 1, then you'll have to wait for the arrival of the bully God.",
	'Artwork': "Each level reduces the time by 10 percents, multiplicatively. Level 2 means 90 turns, level 3 81 turns, etc.",
	'Multiwork': "Example: you have 10 artworks. If you buy the level 1, you will immediately obtain 10 more artworks, for a total of 20. Then, the next artworks you produce will give you 2 instead of 1 artworks.",
	'Concentrated Toenail': "",
	'Concentrated Toe': "",
	'Concentrated Foot': "",
	'Concentrated Leg': "",
	'Concentrated Hand': "",
	'Concentrated Arm': "",
	'Concentrated Belly': "",
	'Concentrated Chest': "",
	'Concentrated Head': "",
	'Concentrated Genitals': "",
	'Lazy convert': "The automatons can be manually enabled or disabled by clicking on the buttons with a coffee icon at the right of the Convert buttons.",
	'Bully detector': "You can trust the automaton: it will optimize the production of the selected element, you don't need to care about the bully God anymore.",
	'Step up': "By selecting the smartomaton (under the icons of the body parts), the most profitable element will always be selected for production, taking into account the time left before the arrival of the bully God.<br />\
		The smartomaton is unable to manage the production of several body parts at the same time though, you will have to use the other automatons.",
	'Multitasking': "Selecting a task when too many tasks are already ongoing will cancel the most ancient task.",
	'Octogod': "To select / deselect all the buttons of a column, click on the arrows at the right of the Smartomaton button in the God World.",
	'Unstoppable': "Unstoppable can be enabled/disabled with a button next to the Smartomaton. When enabled, it will reactivate the Auto button after having spent Fundamental Energy in the talent tree.",
	
	'Life saver': "The amount of artworks saved is multiplied by the talent Multiwork.<br />\
		The price of the talent is 5 % higher per level. Since the first level costs 1 &#423; and the price is rounded, it means that several levels will be at the same price during the first levels.",
	'Money saver': "When you Ruin everything, the amount saved with this talent is deducted before calculating the reward in Style Points.",
	'Crap saver': "Level 1 saves 10 % of the stock of the first factory, level 2 adds a save of 10 % of the stock of the second factory, etc.",
	'Tip': "",
	'Real esthete': "A major talent, you should spend most of your Style points to upgrade it.",
	'Real estate': "",
	'Chain of production': "Example, with Chain of production level 8:\
		The production of the first factory is multiplied by 2<sup>8</sup>.<br />\
		The production of the second factory is multiplied by 2<sup>8/2</sup>.<br />\
		The production of the third factory is multiplied by 2<sup>8/3</sup>.<br />\
		The production of the fourth factory is multiplied by 2<sup>8/4</sup>.<br />\
		The production of the fifth factory is multiplied by 2<sup>8/5</sup>.<br />\
		The production of the sixth factory is multiplied by 2<sup>8/6</sup>.<br />",
	'Optimized processes': "Example with Optimized processes level 3:\
		Upgrading any discipline of the lab will cost 10,000 / (3+1) times more dollars than the previous upgrade.",
	'Classy school': "Level 1: efficiency multiplied by 1.1.<br />\
		Level 2: efficiency multiplied by 1.1 X 1.2.<br />\
		Level 3: efficiency multiplied by 1.1 X 1.2 X 1.3.<br />\
		Level 4: efficiency multiplied by 1.1 X 1.2 X 1.3 X 1.4.<br />\
		etc.",
	'Wide teaching': "Only useful for the Advanced and Elite schools. Teachers can teach to any amount of pupils, improving this talent only raises the limit before new students have diminishing returns.",
	'Quick persuasion': "Example with Quick persuasion level 4:<br />\
		The completion speed of the lobbies is multiplied by <br />(amount of prostitutes attributed)<sup>0.6 + 0.01X4</sup> = amount<sup>0.64</sup>.",
	'Scaling': "Example with Scaling level 4:<br />\
		The cost of the lobbies is multiplied by <br />(amount of prostitutes attributed)<sup>1.5 - 0.02X4</sup> = amount<sup>1.42</sup>."
}

window.DICT_god_deals_encyclopedia = {
	"Body building": "It takes ~4 days to reach the limit of +1,900 %.",
	"Colosseus": "",
	"Threat": "",
	"Conviction": "Multiplicator to workers and brothels:<br />1 + number of campaigns completed + (percentage completed X gains current campaign)<sup>0.4</sup>;<br />Notice that if you have completed the first campaign, there is a multiplicator even when there is no campaign ongoing.",
	"Generic beauty": "There is no refund on the upgrades that have already been purchased.",
	"Harmony": "The bonus is applied to both Workers and Brothels.",
	"Home arrangement": "The bonus is only applied to Brothels.",
	"New sexy": "",
	"H24": "Can be cumulated with the deal \"Freeze\", for a maximum of 48 hours in-game offline time (24h real time).",
	"Instant": "Deals take 0 minute instead of 5 to be sealed.",
	"Autoverheat": "The Accelerator makes the God World run at 10 turns / second, Autoverheat makes it run  at 100 turns / second.",
	"Freeze": "2 new buttons appear in the human world: the snowflake will freeze/unfreeze time. The frozen time is saved for later, click 3 times on the droplet to use it all instantly. Besides, time speed is doubled, regardless on whether it's frozen or not.<br />\
		Notice that the displayed ingame time remains unchanged: for example, something that is displayed to need 1 hour to complete will actually take 30 real time minutes.",
	"4th wall": "Get access to the cash shop. Spend real money to get perks. If you unseal the deal 4th wall, the perks are disabled, but they are re-enabled as soon as you seal 4th wall again.",
	"Think big": "",
	"Unlocker": "A locker button appears on top of the human world. Click on it to buy everything in the human world, as long as you have enough ressources.",
	"Inflation": "While you don't click, a multiplicator will slowly grow. It has no effect until you click on something, and then, it will become active and multiply the money gained by Workers and Brothels.<br />\
	Clicking on most buttons will activate the multiplicator. Browsing all menus and clicking in the Statistics, Encyclopedia and Settings won't trigger the effect.",
	"Full potential": "",
	"Beyond limits": "The free level is a fourth level, you will still have 2 levels to upgrade, at the same price.",
	"Focus": "With one body part being constructed, the amount constructed is equal to (1 + your level in Multitasking) / 2.<br />\
		With several body parts being constructed, the amount is equal to 0.1 times the sum of the turns left. Example, with 4 body parts ongoing:<br />\
		There are 20 turns left before bellies are converted.<br />\
		There are 8 turns left before chests are constructed.<br />\
		There is 1 turn left before heads are constructed.<br />\
		There are 10 turns left before genitals are constructed.<br />\
		Next turn, heads will be constructed. The multiplicator will be 1(basic multiplicator) + ((8-1) + (10-1)) X 0.1 = 2.6. Conversions do not count, so the 20-1 turns left before converting the bellies isn't added.",
	"Science beach!": "Instead of +50/125/238/406/659 %, the bonus from laboratories are now +100/300/700/1500/3100 %.",
	"Discount talents": "",
	"Max style": "",
	"Part-time Artist": "",
	"Transfer": "A button appears between the Fundamental Energy count and the Dollars count. Click on it when you are at turn 0 to spend 10 % of your fundamental energy and improve the multiplicator.<br />\
	The multiplicator is equal to 1 + log10(energy used) / 10. For example, if you transfer 1e+23 fundamental energy, your multiplicator will be 1 + 23/10 = 3.3.",
}

window.DICT_SCAMs_encyclopedia = {
	'Evil Pact': "Everytime golden rings are spent, the price of the Evil Pact decreases. When the Evil Pact is signed, the icons of Fundamental Energy and Dollars at the top left of the screen become clickable. On click, the amount is doubled. Keep clicking until you feel like you have enough fundamental energy/dollars.<br />\
		Note that there is a security limit set at 1e+200, which is far more than the most expensive things you will find in the game.<br /><br />\
		Additionally, as indicated in the tooltip, signing the Evil Pact will make all the other SCAMs free.",
	'Bullystroyer': "You can summon the spirit of the bully God to come bully you. You've come to the realisation that you are unable to learn talents without having just been bullied. You and the Bully God have a strangely twisted relationship...<br /><br />\
		Also, beware of the automatons: they don't quite understand death, and they keep expecting the Bully God to come by. Disabling them is recommanded, use the \"Construct\" and \"Convert\" buttons instead.<br /><br />\
		Side note: for technical reasons, the maximum number of turns is set at 2,147,000,000, at which point the spirit of the bully God will automatically be summoned. Reaching this limit would take around 25 days of 24h/24 autoturn at 1000 turns / second, so, chances are very low that you ever reach the limit.",
	'Obliviate': "If the heart of the God of Energy isn't broken, this SCAM will have no effect, except giving access to the Evil Pact.",
	'Transversion': "",
	'Maximum memoriam': "",
	'Incremental energy': "Example: if you have 1e+34 &#x2206;, the energy gained from conversions will be multiplied by 34.",
	'Ephemeral death': "If the scientist is alive, this SCAM has no effect. This SCAM is the only way to accelerate his resurrection.",
	'Hibernate': "Associated with the deal H24, this means one week of maximum offline progress.",
	'Printing machine': "",
	'Time wreaker': "The coins are displayed as clocks at the top right of the God of Extortion menu. Click on the coins to use them.",
	'Copyism': "If you have 1,000 artworks when you purchase Copyism, you will instantly have a total of 1,100 artworks. Furthermore, you will get 10 % more artworks when you create some in the future.",
	'Time disturber': "The coins are displayed as clocks at the top right of the God of Extortion menu. Click on the coins to use them.",
	'Prestigious': "This Prestige point is a bonus, it won't hinder your possibilities of getting coins via Ruining everything.<br /><br />\
		Warning: There are 6 Gods with 10 Prestige points maximum per God, for a total of 60. Prestige points beyond 60 are wasted, keep it in mind before leveling Prestigious to a high level.",
	'Premium skin': "Get an amazing Premium skin to personalize your menus! Only 10 golden rings!",
	'Discount skins': "Get all the Premium skins at once, because frankly... No, they are not that great.<br /><br />\
		To use a skin, click on the dress icon next to a menu until you get the skin you want for this menu. The small blue dot under the Prostitutes icon will let you display / remove the dress buttons. Not very useful, but... Well, it's there.",
}

// START - Statistiques
window.total_number_of_turns = 0;
window.total_encounters_with_bully_God = 0;
window.total_beetlejuice_activations = 0;
window.total_Fundamental_Energy_destroyed = 0;
window.LIST_total_fundamental_elements_created = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
window.LIST_total_fundamental_elements_destroyed = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
window.total_artworks_destroyed = 0;
window.total_ruin_everything = 0;
window.dollars_spent = 0;
window.dollars_converted = 0;
window.worker_upgrades_bought = 0;
window.brothels_bought = 0;
window.dice_rolled = 0;
window.sum_value_dice_rolls = 0;
window.body_parts_converted = 0; // warning: doesn't include genitals
window.body_parts_sent_to_lab = 0;
window.body_parts_used_in_upgrades = 0;
window.scientist_murders = 0;
window.money_spent_in_lobbies = 0;
window.deals_sealed = 0;
window.deals_broken = 0;
window.deals_broken_before_they_are_sealed = 0;
window.total_time_frozen = 0;
window.time_spent = 0;
window.time_spent_this_session = 0;
// END - Statistiques

// structure:   ID:    0: title     1:display hidden0/initial1   2: regular0/title1    3: unit    4: tooltip
window.DICT_all_statistics = {
	'ID_GENERAL': ["GENERAL", 1, 1, 0, ""],
	'ID_time_spent_this_session': ["Time spent playing (this session)", 1, 0, "", ""],
	'ID_time_spent': ["Time spent playing (total)", 1, 0, "", ""],
	'ID_time_since_ruin_everything': ["Time spent since the last Ruin everything", 1, 0, "", ""],
	
	'ID_GOD_WORLD': ["GOD WORLD", 1, 1, "", ""],
	'ID_total_number_of_turns': ["Total number of turns", 1, 0, "", ""],
	'ID_total_encounters_with_bully_God': ["Total encounters with the bully God", 1, 0, "", ""],
	'ID_Beetlejuice_count': ["Beetlejuice count", 1, 0, "", ""],
	'ID_total_Fundamental_Energy_destroyed': ["Fundamental Energy destroyed by the bully God", 1, 0, "", ""],
	'ID_parts_destroyed_0': ["Toenails destroyed by the bully God", 1, 0, "", ""],
	'ID_proportion_parts_destroyed_0': ["Proportion of Toenails destroyed by the bully God", 1, 0, " %", ""],
	'ID_parts_destroyed_1': ["Toes destroyed by the bully God", 1, 0, "", ""],
	'ID_proportion_parts_destroyed_1': ["Proportion of Toes destroyed by the bully God", 1, 0, " %", ""],
	'ID_parts_destroyed_2': ["Feet destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_2': ["Proportion of Feet destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_3': ["Legs destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_3': ["Proportion of Legs destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_4': ["Hands destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_4': ["Proportion of Hands destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_5': ["Arms destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_5': ["Proportion of Arms destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_6': ["Bellies destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_6': ["Proportion of Bellies destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_7': ["Chests destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_7': ["Proportion of Chests destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_8': ["Heads destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_8': ["Proportion of Heads destroyed by the bully God", 0, 0, " %", ""],
	'ID_parts_destroyed_9': ["Genitals destroyed by the bully God", 0, 0, "", ""],
	'ID_proportion_parts_destroyed_9': ["Proportion of Genitals destroyed by the bully God", 0, 0, " %", ""],
	'ID_total_artworks_destroyed': ["Artworks destroyed by the bully God", 0, 0, "", ""],
	
	'ID_HUMAN_WORLD': ["HUMAN WORLD", 0, 1, "", ""], // open: human world unlocked
	'ID_total_ruin_everything': ["Sometimes you ruin everything", 0, 0, " time(s)", ""], // open: 1st ruin everything
	'ID_dollars_spent': ["Dollars spent in the Human World", 0, 0, "", ""], // open: 1st ruin everything
	'ID_dollars_converted': ["Dollars converted into Style Points", 0, 0, "", ""], // open: 1st ruin everything
	'ID_worker_upgrades_bought': ["Worker upgrades bought", 0, 0, "", ""], // open: 1st ruin everything
	'ID_brothels_bought': ["Brothels bought", 0, 0, "", ""], // open: 1st brothels opening
	'ID_dice_rolled': ["Dice rolled", 0, 0, "", ""], // open: casinothel
	'ID_average_die_roll': ["Average die roll", 0, 0, "", ""], // open: casinothel
	'ID_proportion_items_converted': ["Body parts converted", 0, 0, " %", "Genitals not included."], // open: laboratory
	'ID_proportion_items_sent_to_the_lab': ["Body parts sent to the lab", 0, 0, " %", "Genitals not included."], // open: laboratory
	'ID_proportion_items_used_in_upgrades': ["Body parts used in upgrades", 0, 0, " %", "Parts used in upgrades divided by parts sent to the lab."], // open: laboratory
	'ID_scientist_murders': ["Scientist murders", 0, 0, "", ""], // open: 1st murder
	'ID_money_spent_in_lobbies': ["Money spent in lobbies", 0, 0, "", ""], // open: 1st lobbies opening
	
	'ID_PRESTIGE': ["PRESTIGE", 0, 1, "", ""], // open: 1st ruin everything
	'ID_deals_sealed': ["Deals sealed", 0, 0, "", ""], // open: 1st ruin everything
	'ID_deals_broken': ["Deals broken", 0, 0, "", ""], // open: 1st ruin everything
	'ID_deals_broken_before_they_are_sealed': ["Deals broken before they are sealed", 0, 0, "", ""], // open: 1st ruin everything
	'ID_prestige_god_of_strength': ["Prestige of the God of Strength", 0, 0, "", "Sum of all the Prestige points allocated to the God of Strength multiplied by time"], // open: 1st ruin everything
	'ID_prestige_godess_of_beauty': ["Prestige of the Godess of Beauty", 0, 0, "", "Sum of all the Prestige points allocated to the Godess of Beauty multiplied by time"], // open: 1st ruin everything
	'ID_prestige_god_of_time': ["Prestige of the God of Time", 0, 0, "", "Sum of all the Prestige points allocated to the God of Time multiplied by time"], // open: 1st ruin everything
	'ID_prestige_god_of_laziness': ["Prestige of the God of Laziness", 0, 0, "", "Sum of all the Prestige points allocated to the God of Laziness multiplied by time"], // open: 1st ruin everything
	'ID_prestige_god_of_science': ["Prestige of the God of Science", 0, 0, "", "Sum of all the Prestige points allocated to the God of Science multiplied by time"], // open: 1st ruin everything
	'ID_prestige_god_of_energy': ["Prestige of the God of Energy", 0, 0, "", "Sum of all the Prestige points allocated to the God of Energy multiplied by time"], // open: 1st ruin everything
	'ID_total_time_frozen': ["Total time frozen", 0, 0, "", ""], // open: 1st ruin everything
}

window.current_music = 0; // number of the position of the current music

// WARNING: there is a dangerous bug risking DICT_building_music associated with musics in the unlock_building function, check it in case of problems

// structure:  0: available or not    1:ID of the music    2: displayed name of the music     3: tooltip content
window.LIST_musics = [[1, "god_world_music", "God World", "Author: Maksymilian Jednor&#x00F3;g"],
					  [0, "workers_music", "Workers", "Author: Maksymilian Jednor&#x00F3;g"],
					  [0, "brothels_music", "Brothels", "Author: PGN Music"],
					  [0, "factories_music", "Factories", "Author: Bensound"],
					  [0, "temple_music", "Temple", "Author: Storyblocks"],
					  [0, "laboratory_music", "Laboratory", "Author: Jon Presstone"],
					  [0, "schools_music", "Schools", "Author: PGN Music"],
					  [0, "lobby_music", "Lobby", "Author: Maksymilian Jednor&#x00F3;g"],
					  [0, "space_music", "Space", "Author: Jon Presstone"],
					  [1, "mute_music", "Mute", "Disable the music"]];
					  

} // don't delete this, it's ending the big default_variables() function