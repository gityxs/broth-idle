
// START - Display functions

function display_front_screen(ident, LIST, bold=0) {
	if (bold == 0) {
		for (var screen in LIST) { // reinitialisation de tous les ecrans
			document.getElementById(LIST[screen]).style.display = 'none';
		}
		document.getElementById(ident).style.display = 'initial'; // mise en avant de l'ecran selectionne
		if (tutorial_step < 2) { // if this is the first time the game is opened ever
			document.getElementById("initial_mute_button").style.display = "none";
			next_tutorial_step(1);
			next_tutorial_step(2);
			change_page();
		}
	}
	else {
		for (var screen in LIST) { // reinitialisation de tous les ecrans
			document.getElementById(screen).style.display = "none";
			if (screen == "corps_Brothels_behind") {screen = "corps_Brothels";} // ugly exception to manage the screen.slice(6)
			if (document.getElementById("title_"+screen.slice(6)+"_inactive") == null) {
				if (screen == "corps_Brothels") {screen = "corps_Brothels_behind";} // ugly exception to manage the screen.slice(6)
				document.getElementById(LIST[screen][1]).style.fontWeight = 'normal';
			}
		}
		if (ident == "corps_Brothels") {ident = "corps_Brothels_behind";} // ugly exception because I suck at programing
		document.getElementById(ident).style.display = "initial";         // mise en avant de l'ecran selectionne
		document.getElementById(bold).style.fontWeight = 'bold'; // mise en avant de l'ecran selectionne
		document.getElementById("tutorial_box").style.zIndex = "1";
		if (ident == "corps_god_world") {document.getElementById("tutorial_box").style.zIndex = "5";}
	}
}

function display_number(number, stale=false) {
	var STR_number;
	if (typeof number != 'number') {number = Number(number);}
	if (number >= 1000) {
		if (number >= 1000000) {
			STR_number = number.toPrecision(4);
		}
		else {
			number = parseInt(number);
			STR_number = String(number);
			if (STR_number.length == 4) {STR_number = STR_number[0]+','+STR_number[1]+STR_number[2]+STR_number[3];}
			else if (STR_number.length == 5) {STR_number = STR_number[0]+STR_number[1]+','+STR_number[2]+STR_number[3]+STR_number[4];}
			else if (STR_number.length == 6) {STR_number = STR_number[0]+STR_number[1]+STR_number[2]+','+STR_number[3]+STR_number[4]+STR_number[5];}
		}
	}
	else {
		if (Number.isInteger(number)) {STR_number = number;}
		else {STR_number = number.toPrecision(4);}
	}
	
	if (stale != false && (number >= 1000000 || (number < 1000 && number >= 1))) {
		STR_number = String(STR_number);
		if (STR_number[4] == 0) {
			STR_number = STR_number.slice(0, 4)+STR_number.slice(5);
			if (STR_number[3] == ".") {
				STR_number = STR_number.slice(0, 3)+STR_number.slice(4);
			}
			else if (STR_number[3] == 0) {
				STR_number = STR_number.slice(0, 3)+STR_number.slice(4);
				if (STR_number[2] == ".") {
					STR_number = STR_number.slice(0, 2)+STR_number.slice(3);
				}
				else if (STR_number[2] == 0) {
					STR_number = STR_number.slice(0, 2)+STR_number.slice(3);
					if (STR_number[1] == ".") {
						STR_number = STR_number.slice(0, 1)+STR_number.slice(2);
					}
				}
			}
		}
	}
	
	else if (stale != false && (number < 1 && number > 0)) {
		STR_number = String(STR_number);
		if (STR_number.charAt(STR_number.length-1) == 0) {
			STR_number = STR_number.slice(0, STR_number.length-1);
			if (STR_number.charAt(STR_number.length-1) == 0) {
				STR_number = STR_number.slice(0, STR_number.length-1);
				if (STR_number.charAt(STR_number.length-1) == 0) {
					STR_number = STR_number.slice(0, STR_number.length-1);
				}
			}
		}
	}
	return STR_number
}

function display_money_in_stock_brothels(number) {
	if (typeof number != 'number') {number = Number(number);}
	if (number >= 1000) {
		if (number >= 1000000) {
			return number.toPrecision(4);
		}
		else {
			var STR_number = number.toPrecision(4);
			STR_number = String(STR_number);
			if (STR_number.length == 4) {STR_number = STR_number[0]+','+STR_number[1]+STR_number[2]+STR_number[3];}
			else if (STR_number.length == 5) {STR_number = STR_number[0]+STR_number[1]+','+STR_number[2]+STR_number[3]+STR_number[4];}
			else if (STR_number.length == 6) {STR_number = STR_number[0]+STR_number[1]+STR_number[2]+','+STR_number[3]+STR_number[4]+STR_number[5];}
			return STR_number
		}
	}
	else {
		return number.toFixed(0);
	}
}

function display_time(TIME) {
	var time_to_display;
	
	var days = Math.floor(TIME / (1000 * 60 * 60 * 24));
	var hours = Math.floor((TIME % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((TIME % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((TIME % (1000 * 60)) / 1000);
	var milliseconds = Math.floor(TIME % 1000);
	
	if (days > 9000) {time_to_display = "It's over 9000 days!!!";}
	else if (days > 0) {time_to_display = days+"d "+hours+"h "+minutes+"m "+seconds+"s";}
	else if (hours > 0) {time_to_display = hours+"h "+minutes+"m "+seconds+"s";}
	else if (minutes > 0) {time_to_display = minutes+"m "+seconds+"s";}
	else if (seconds > 0) {time_to_display = seconds+"s";}
	else if (milliseconds > 0) {time_to_display = milliseconds+"ms";}
	else {time_to_display = "0 ms";}
	
	return time_to_display
}

function display_fundamental_energy() {
	var ressource_doublable = "'"; // keep this one ' inside, important.
	if (DICT_God_of_Extortion['Evil Pact'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {ressource_doublable = " clickable' onmousedown=double_ressource('fundamental_energy')";}
	document.getElementById("fundamental_energy_value").innerHTML = "<span class='ressource_symbol"+ressource_doublable+">&#x2206;</span>"+display_number(fundamental_energy)+"<span id='TOOLTIP_fundamental_energy_value' class='DOWN_tooltip_text'>Your Fundamental Energy. This is the essence of the Universe. The more you have, the more you can create amazing things.</span>";
}

function display_transfer_button(initialize=false) {
	if (initialize == true && DICT_Deals['Transfer'][2] == 1) {document.getElementById("transfer_button").style.display = "initial";}
	if (current_turn == 0) {
		document.getElementById("transfer_button").className = "tooltip active_transfer_button";
	}
	else if (current_turn == 1) { // it could be a general "else", but it would waste cpu ressources every turn
		document.getElementById("transfer_button").className = "tooltip locked_button";
	}
}

function display_dollars() {
	if (tutorial_step > 16) {
		var ressource_doublable = "'"; // keep this one ' inside, important.
		if (DICT_God_of_Extortion['Evil Pact'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {ressource_doublable = " clickable' onmousedown=double_ressource('dollars')";}
		document.getElementById("dollars_value").style.display = "initial";
		document.getElementById("dollars_value").innerHTML = "<span class='ressource_symbol"+ressource_doublable+">$</span>"+display_number(dollars)+"<span class='DOWN_tooltip_text'>It turns out, humans love those. Get some, and buy petty humans with them!</span>";
		if (document.getElementById("content_tooltip_ruin_everything") != null) {
			var style_gains = 0;
			if (dollars > money_saved()) {style_gains = convert_dollars_into_style_points();}
			var prestige_informations = "";
			if (total_ruin_everything > 0) {
				var prestige_point_earned = prestige_points_to_give();
				var next_prestige_point = Math.exp(Math.log(100) * (prestige_points_total - DICT_Temple_upgrades['Prestige'][5] - DICT_God_of_Extortion['Prestigious'][3] + prestige_point_earned)) - style_points
				prestige_informations = "<br /><br />&#x1D4AB;restige Points earned: "+display_number(prestige_point_earned)+"&nbsp;&#x1D4AB; \
										 <br /><br />Next &#x1D4AB;restige Point: "+display_number(next_prestige_point, true)+"&nbsp;&#423;";
			}
			var influence_informations = "";
			if (DICT_dollars_buildings_DYNAMIC['Lobby'][0] == 1) {
				var influence_points_earned = influence_points_to_give(dollars);
				var next_influence_point = 1e+55;
				while (dollars > next_influence_point) {next_influence_point *= 100;}
				influence_informations = "<br /><br />&#300;nfluence Points earned: "+display_number(influence_points_earned)+"&nbsp;&#300; \
										 <br /><br />Next &#300;nfluence Points: "+display_number(next_influence_point, true)+"&nbsp;$ \
										 <br />"+display_number(influence_points_to_give(2*next_influence_point), true)+"&nbsp;&#300;";
		
			}
			document.getElementById("content_tooltip_ruin_everything").innerHTML = " \
				You are too cool to care, destroy everything! Check the Encyclopedia for details. \
				<br /><br />&#423;tyle Points earned: "+display_number(style_gains)+"&nbsp;&#423;"+prestige_informations+influence_informations;
		}
		for (var building in DICT_dollars_buildings_STALE) { // display the title in green if you have enough dollars to unlock it
			if (DICT_dollars_buildings_DYNAMIC[building][0] == 0) {
				if (dollars >= DICT_dollars_buildings_STALE[building][1]) {
					document.getElementById("title_"+building+"_inactive").style.backgroundColor = "#0F0";
					document.getElementById("title_"+building+"_inactive").style.backgroundImage = "radial-gradient(#0F0, #FFF)";
					document.getElementById("title_"+building+"_inactive").style.color = "#080";
					document.getElementById("title_"+building+"_inactive").style.textShadow = "1px 1px #FF0";
				}
				else {
					document.getElementById("title_"+building+"_inactive").style.backgroundColor = "grey";
					document.getElementById("title_"+building+"_inactive").style.backgroundImage = "none";
					document.getElementById("title_"+building+"_inactive").style.color = "#333";
					document.getElementById("title_"+building+"_inactive").style.textShadow = "1px 1px #000";
				}
			}
		}
	}
}

function display_style_points() {
	if (tutorial_step > 16) {
		var max_style = "";
	if (DICT_Deals['Max style'][2] == 1) {
		max_style = "<br /><br />Bonus to conversions from Max style: "+display_number(last_ruin_points)+".";
	}
		document.getElementById("style_value").style.display = "initial";
		document.getElementById("style_value").innerHTML = "<span class='ressource_symbol'>&#423;</span>"+display_number(style_points)+"<span class='DOWN_tooltip_text'> \
			Your &#423;tyle Points. Destroy everything you have created in the Human World to get some, because that's what cool Gods do.<br /><br />Your conversions generate 10 % more &#x2206; per &#423;.\
			"+max_style+"\
			</span>";
	}
}

function display_prostitutes() {
	if (tutorial_step > 16) {
		document.getElementById("prostitutes_value").style.display = "initial";
		document.getElementById("prostitutes_value").innerHTML = "<span class='ressource_symbol'>&#x269C;</span>"+display_number(inactive_artworks())+" / "+display_number(flexible_artworks())+"<span class='DOWN_tooltip_text'>Inactive Artworks / Available Artworks<br /><br />Total artworks:<br />"+display_number(total_artworks())+"<br /><br />You are the Godess of Prostitution. Use prostitutes to conquer the world!</span>";
	}
}

function display_trained_prostitutes() {
	if (DICT_dollars_buildings_DYNAMIC['Schools'][1] == 1) {
		document.getElementById("trained_prostitutes_value").style.display = "initial";
		document.getElementById("trained_prostitutes_value").innerHTML = "<span class='ressource_symbol'>&#x1f393;</span>"+display_number(inactive_humans())+" / "+display_number(DICT_Schools["Basics school"][3])+"<span class='DOWN_tooltip_text'>Prostitute is a more and more prestigious profession. Youngsters trained in your Basics School are as efficient as Artworks, but they can't work in the Temple or as professors in the Schools.</span>";
	}
}

function display_tooltip_tapping_button() {
	var tooltip_content = "Tap the hourglass to speed up time.";
	if (current_turn > 0) {
		if (tapping_activated) {tooltip_content += "<br /><br />You are in a tapping frenzy. You won't stop until the Bully God stops you!";}
		else {tooltip_content += "<br /><br />You feel the eye of the Bully God watching you, you don't dare starting tapping.";}
	}
	document.getElementById("tooltip_tapping_button").innerHTML = tooltip_content;
}

function display_turn() {
	var total_turns =  maximum_turns();
	var energy_safe = "<br /><br />Energy safe from the bully God: "+display_number(energy_saved_from_bully_god())+".";
	if (tutorial_step < 6) {energy_safe = "";}
	if (DICT_God_of_Extortion['Bullystroyer'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {
		document.getElementById("counter_turn").innerHTML = "<span class='tooltip'>"+display_number(current_turn)+"<span id='TOOLTIP_counter_turn' class='DOWN_tooltip_text'>This is the hourglass of time. Sort of."+energy_safe+"</span></span><span id='bully_god_face' onmousedown='activate_bully_god()'>&#x1f479;</span>";
		document.getElementById("counter_turn").style.color = "rgb(0,255,0)";
		document.getElementById("bully_god_face").style.opacity = 1;
	}
	else {
		document.getElementById("counter_turn").innerHTML = "<span class='tooltip'>"+display_number(current_turn)+" / "+display_number(total_turns)+"<span id='TOOLTIP_counter_turn' class='DOWN_tooltip_text'>This is the hourglass of time. Sort of.<br /><br />Turns left: "+display_number(total_turns-current_turn)+"."+energy_safe+"</span></span><span id='bully_god_face' onmousedown='activate_bully_god()'>&#x1f479;</span>";
		var turn_255 = parseInt(255*(current_turn/total_turns));
		document.getElementById("counter_turn").style.color = "rgb("+turn_255+","+(255-turn_255)+",0)";
		document.getElementById("bully_god_face").style.opacity = current_turn/total_turns;
	}
}

function display_content_tutorial_box() {
	if (LIST_tutorial_dialogues_validation[tutorial_page] == 1) {
		document.getElementById("content_tutorial_box").innerHTML = LIST_tutorial_dialogues[tutorial_page];
	}
	else {
		document.getElementById("content_tutorial_box").innerHTML = "You haven't unlocked this page yet. Follow the instructions in the previous page to unlock it!<span id='loupe' onmousedown='resize_tutorial()'> &#x1F50D;</span>";
	}
}

function display_counter_tutorial_box() {
	document.getElementById("counter_tutorial_box").innerHTML = "\
		<span class='tutorial_menu_button tooltip' onmousedown='resize_tutorial()'> &#x1F50D;<span class='TOP_tooltip_text'>Resize the chat box.</span></span>\
		<span class='tutorial_menu_button tooltip' onmousedown='toggle_tutorial()'> &#10060;<span class='TOP_tooltip_text'>Hide the chat box.</span></span>\
		<button id='tutorial_box_previous_page' class='tutorial_box_change_page' onclick=change_page('previous')>&#8678;</button> \
		"+tutorial_page+" / "+tutorial_step+"\
		<button id='tutorial_box_next_page' class='tutorial_box_change_page' onclick=change_page('next')>&#8680;</button>";
}

function resize_tutorial() {
	if (document.getElementById("tutorial_box").className != "tutorial_growth") {
		document.getElementById("tutorial_box").className = "tutorial_growth";
		tutorial_box_size = 1;
	}
	else {
		document.getElementById("tutorial_box").classList.remove("tutorial_growth");
		tutorial_box_size = 0;
	}
}

function toggle_tutorial() {
	if (tutorial_box_display == 1) {
		tutorial_box_display = 0;
		document.getElementById("tutorial_box").style.display = "none";
		document.getElementById("toggle_tutorial").classList.remove("activated_button");
	}
	else {
		tutorial_box_display = 1;
		document.getElementById("tutorial_box").style.display = "initial";
		document.getElementById("toggle_tutorial").classList.add("activated_button");
	}
}

function display_specific_tutorial_events(page=0) {
	if ((page == 1 || page == 17 || page == 18) && LIST_tutorial_dialogues_validation[page] == 1) {
		document.getElementById("tutorial_box_next_page").classList.add("tooltip");
		document.getElementById("tutorial_box_next_page").innerHTML += "<span id='TOOLTIP_tutorial_box_next_page' class='DOWN_tooltip_text'>Click on the arrow!</span>";
		document.getElementById("TOOLTIP_tutorial_box_next_page").style.display = "initial";
	}
	if (page == 2 && LIST_tutorial_dialogues_validation[page] == 1) {
	}
	
	if (page == 3 && LIST_tutorial_dialogues_validation[page] == 1) {
		document.getElementById("TOOLTIP_fundamental_energy_value").style.display = "initial";
	}
	else {
		document.getElementById("TOOLTIP_fundamental_energy_value").style.removeProperty("display");
	}
	
	if (page == 4 && LIST_tutorial_dialogues_validation[page] == 1) {
		if (tutorial_step < 5) {
			document.getElementById("auto_next_turn").innerHTML = "<button class='locked_button tooltip'> Auto <span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Locked</span></button>";
			document.getElementById("next_turn").innerHTML = "<button class='locked_button tooltip' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Locked</span></button>";
		}
	}
	
	if (page == 5 && LIST_tutorial_dialogues_validation[page] == 1) {
		document.getElementById("auto_next_turn").innerHTML = "<button class='tooltip' onclick='auto_next_turn()'> Auto <span class='LEFT_tooltip_text'>Validate automatically 1 turn per second</span></button>";
		document.getElementById("next_turn").innerHTML = "<button class='tooltip' onclick='next_turn()' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Validate the turn</span></button>";
		auto_next_turn(); // visual glitch risk otherwise
		auto_next_turn(); // visual glitch risk otherwise
	}
	
	if (page == 6 && LIST_tutorial_dialogues_validation[page] == 1) {
		DICT_corps_screens["corps_encyclopedia"][0] = 1; // unlock the encyclopedia
		document.getElementById(DICT_corps_screens["corps_encyclopedia"][1]).style.display = "initial"; // display the encyclopedia
		display_encyclopedia(); // display the encyclopedia
	}
	if (page == 7 && LIST_tutorial_dialogues_validation[page] == 1) {
		if (DICT_corps_screens["corps_fundamental_experience"][0] == 0) {
			display_front_screen('corps_fundamental_experience', DICT_corps_screens, DICT_corps_screens["corps_fundamental_experience"][1]);
			DICT_corps_screens["corps_fundamental_experience"][0] = 1;
			document.getElementById(DICT_corps_screens["corps_fundamental_experience"][1]).style.display = "initial";
			DICT_encyclopedia['Fundamental Talents']['Talent tree'][0] = 1;
			DICT_encyclopedia['Fundamental Talents']['Energy talents'][0] = 1;
			display_encyclopedia();
			document.getElementById("tutorial_box").style.zIndex = "5";
		}
		document.getElementById("toggle_unlocked_buttons").style.display = 'initial';
	}
	if (page == 17 && LIST_tutorial_dialogues_validation[page] == 1) {
		if (tutorial_step < 18) {
			document.getElementById("tutorial_box_next_page").setAttribute("onclick", "human_world_unlocked()");
			document.getElementById("transition_human_world_screen").style.display = "initial";
		}
	}
	if (page == 18 && LIST_tutorial_dialogues_validation[page] == 1) {
		DICT_encyclopedia['Main Frame']['Dollars'][0] = 1;
		DICT_encyclopedia['Main Frame']['Prostitutes'][0] = 1;
		DICT_encyclopedia['Main Frame']['Ruin everything'][0] = 1;
		DICT_encyclopedia['Human World']['Real time'][0] = 1;
		DICT_encyclopedia['Human World']['Buildings'][0] = 1;
		DICT_encyclopedia['Human World']['Attribution multiplicator'][0] = 1;
		DICT_encyclopedia['Human World']['Workers'][0] = 1;
		DICT_encyclopedia['Settings']['Revelation screen'][0] = 1;
		if (LIST_musics[1][0] == 0) { // if the music of the Workers isn't authorized yet
			LIST_musics[1][0] = 1; // Authorize the music of the Workers
			if (current_music != Object.keys(LIST_musics).length-1) { // if the music isn't muted
				current_music = 1; // Workers
				change_music(false); // activate the music of the Workers
			}
		}
		display_encyclopedia();
		display_prostitutes();
		display_dollars();
		display_style_points();
		document.getElementById("ruin_everything").style.display = "initial";
		document.getElementById("tutorial_box_next_page").setAttribute("onclick", "toggle_tutorial()");
	}
}

function display_specific_talent(talent) {
	if (talent == 'God repellent') {
		display_turn();
		if (DICT_fundamental_talents['God repellent'][3] == 1) { // remove the glow
			document.getElementById(DICT_fundamental_talents[talent][0]).outerHTML = display_fundamental_talent(talent)
		}
	}
	else if (talent == 'Frenzy') {
		document.getElementById("restartor").style.display = "initial";
	}
	else if (talent == 'Lazy convert') {
		for (var i in energy_building_STALE) {
			if (energy_building_DYNAMIC[i][2] == 1){
				display_line(i, 'body_part_'+i);
				display_progress_bar("progress_bar_"+i, i);
			}
		}
	}
	else if (talent == 'Step up') {
		display_talents_management_bar()
	}
	else if (talent == 'Octogod') {
		display_talents_management_bar()
	}
	else if (talent == 'Unstoppable') {
		display_talents_management_bar()
	}
	else if (talent == 'Quick mix') {
		for (var line in energy_building_DYNAMIC) {
			if (energy_building_DYNAMIC[line][2] == 1) {
				document.getElementById("TOOLTIP_convert_element_"+line).innerHTML = "Time to convert: "+time_needed_to_convert(line)+" turns";
			}
		}
	}
	else if (talent == 'Industrialization') {
		for (var line in energy_building_DYNAMIC) {
			if (energy_building_DYNAMIC[line][2] == 1) {
				display_line(line, 'body_part_'+line);
				display_progress_bar("progress_bar_"+line, line);
			}
		}
	}
	else if (talent == 'Twins') {
		for (var i in energy_building_STALE) {display_line(i, true)}
	}
	
	else if (talent == 'Hourglass tapping') {
		document.getElementById("tapping_button").style.display = "initial";
		display_tooltip_tapping_button()
	}
		
	else if (talent == 'Artwork') {
		if (DICT_fundamental_talents['Artwork'][3] == 1) {
			document.getElementById("Body_artwork").style.display = "initial";
			DICT_encyclopedia['God World']['Artwork'][0] = 1;
			display_encyclopedia();
			DICT_all_statistics['ID_total_artworks_destroyed'][1] = 1; // #stats
		}
		display_artwork();
	}
	
	else if (talent == 'Multitasking') {
		display_talents_management_bar()
	}
	
	else if (talent == 'Multiwork') {
		display_prostitutes()
		display_artwork()
		document.getElementById("TOOLTIP_"+DICT_fundamental_talents['Life saver'][0]).innerHTML = display_talent_tooltip("Life saver");
	}
	
	else if (talent.startsWith("Concentrated")) {
		display_line(DICT_fundamental_talents[talent][7], true)
	}
	
	else if (talent == 'Money saver') {display_dollars();} // we are interested in the function of actualization of the ruin_everything tooltip inside the display_dollars() function
	
	else if (talent == 'Tip') {display_workers()}
	
	else if (talent == 'Real esthete') {
		display_workers()
		display_all_brothels()
	}
	
	else if (talent == 'Real estate') {display_temple()}
	
	else if (talent == 'Chain of production') {display_all_factories()}
	
	else if (talent == 'Optimized processes') {display_all_laboratory_upgrades()}
	
	else if (talent == 'Wide teaching') {display_all_schools()}
	
}

function display_specific_prestige_deal(deal, broken=false) {
	if (deal == 'Body building') {
		pretty_stored_time = 0;
	}
	
	else if (deal == 'Colosseus') {
		display_all_factories()
	}
	
	// 'Threat': no display needed
	
	else if (deal == 'Conviction') {
		display_lobby(lobby_page)
	}
	
	else if (deal == 'Generic beauty') {
		display_workers_upgrades()
	}
	
	else if (deal == 'Harmony') {
		display_workers();
		// calling the time_runner() would be nice but causes a loop, so better wait for the next one.
	}
	
	// 'Home arrangement': no display needed
	
	//else if (deal == 'New sexy') : included in the time_runner
	
	// 'H24': no display needed
	
	else if (deal == 'Freeze') {
		if (broken == false) {
			document.getElementById("star_snow").style.display = 'initial';
			document.getElementById("droplet").style.display = 'initial';
		}
		else {
			use_stored_time() // use the stored time, need 3 times
			use_stored_time() // use the stored time, need 3 times
			use_stored_time() // use the stored time, need 3 times
			if (time_frozen == true) {freeze_time()} // unfreeze time
			else {reset_frozenjuice()} //reset_frozenjuice() is included in freeze_time(), so it's activated in both cases
			document.getElementById("star_snow").style.display = 'none';
			document.getElementById("droplet").style.display = 'none';
		}
	}
	
	else if (deal == 'Autoverheat') {
		if (broken == false) {
			document.getElementById("autoverheat").style.display = 'initial';
		}
		if (broken == true) {
			document.getElementById("autoverheat").style.display = 'none';
			if (speeder == "autoverheat") {FUNC_speeder("autoverheat")} // deactivate the autoverheat if necessary
		}
	}
	
	// 'Instant': no display needed
	
	else if (deal == '4th wall') {
		if (broken == false) {
			// start - discount skins
			DICT_corps_screens['corps_god_of_extortion'][0] = 1;
			document.getElementById("title_god_of_extortion").style.display = 'initial';
			if (DICT_God_of_Extortion['Discount skins'][3] == 1) {
				display_skins_interface(); // enable the skin change buttons
			}
			// end discount skins
			
			//start - maximum memoriam
			display_all_laboratory_upgrades(); // actualize the prices
			//end - maximum memoriam
			
			display_turn() // Bullystroyer
			
			// start - Evil Pact
			display_fundamental_energy();
			display_dollars();
			// end - Evil Pact
			
			DICT_encyclopedia['God of Extortion']['Golden Rings'][0] = 1;
			DICT_encyclopedia['God of Extortion']['SCAM tree'][0] = 1;
			DICT_encyclopedia['God of Extortion']['Super Cool Advanced Masteries'][0] = 1;
			display_encyclopedia();
		}
		else { // broken == true
			// start - discount skins
			document.getElementById("title_god_of_extortion").style.display = 'none'; // remove the display of the menu
			display_skins_interface(true); // disable the skin change buttons and go back to standard skins
			DICT_corps_screens['corps_god_of_extortion'][0] = 0; // register the none displayability of the menu (at the end, because it's required to disable the skin button)
			// end discount skins
			
			//start - maximum memoriam
			display_all_laboratory_upgrades(); // actualize the prices
			//end - maximum memoriam
			
			// start - Bullystroyer
			display_turn()
			if (current_turn > maximum_turns()) {god_reset();}
			// end - Bullystroyer
			
			// start - Evil Pact
			display_fundamental_energy();
			display_dollars();
			// end - Evil Pact
		}
	}
	
	else if (deal == 'Think big') {
		prostitutes_multiplicator = 1;
		display_multiplicator_button()
	}
	
	else if (deal == 'Unlocker') {
		if (broken == false) {
			document.getElementById("unlocker").style.display = 'initial';
		}
		if (broken == true) {
			document.getElementById("unlocker").style.display = 'none';
		}
	}
	
	else if (deal == 'Inflation') {
		inflation_stored_time = 0;
		inflation_bonus = 0;
		// calling the time_runner() would be nice but causes a loop, so it's better to wait for the next one.
	}
	
	else if (deal == "Full potential") {
		display_all_brothels();
	}
	
	else if (deal == "Beyond limits") {
		// deactivate the factories
		var current_level;
		for (var factory in DICT_Factories_STALE) {
			if (broken == true) {
				current_level = current_level_factory(factory);
				if (current_level > 0) { // deactivate the factory
					activate_deactivate_factory_level(factory, current_level, false)
				}
			}
		}
		display_all_factories();
	}
	
	else if (deal == 'Focus') {
		display_talents_management_bar()
	}
	
	else if (deal == "Science beach!") {
		for (var upgrade in DICT_Laboratory_upgrades) {
			document.getElementById(DICT_Laboratory_upgrades[upgrade][5]).innerHTML = display_number(100*(multiplicator_laboratory(upgrade)-1));
		}
	}
	
	else if (deal == "Discount talents") {
		display_initial_fundamental_tree()
		if (broken == true && god_of_energy_happy == false) {god_of_energy_upset = 1;}
	}
	
	else if (deal == "Max style") {
		last_ruin_points = style_points;
		display_style_points();
		if (broken == true && god_of_energy_happy == false) {god_of_energy_upset = 1;}
	}
	
	else if (deal == "Part-time Artist") {
		if (broken == true && god_of_energy_happy == false) {god_of_energy_upset = 1;}
	}
	
	else if (deal == 'Transfer') {
		if (broken == false) {
			document.getElementById("transfer_button").style.display = 'initial';
			document.getElementById("multiplicator_transfer").innerHTML = display_number(specific_number_modifier_upgrade("Transfer"));
			if (god_of_energy_upset == 0) {god_of_energy_happy = true;} // immunize against god of energy getting upset.
		}
		else {
			document.getElementById("transfer_button").style.display = 'none';
			energy_transfered = 0;
		}
	}
	
}

function display_specific_SCAM(scam) {
	
	// Hibernate: no display required

	if (scam == "Printing machine") {
		printing_machine += 1;
	}
	
	else if (scam == "Time disturber") {
		coins_1_hour += 10;
		display_1_hour();
	}
	
	else if (scam == "Time wreaker") {
		coins_24_hours += 1;
		display_24_hours();
	}
	
	else if (scam == "Copyism") {
		display_prostitutes();
		display_artwork();
	}
	
	else if (scam == "Prestigious") {
		prestige_points_total += 1;
		display_prestige_points();
	}
	
	// Premier skin: no display required
	
	else if (scam == "Discount skins") {
		DICT_God_of_Extortion["Premium skin"][3] = DICT_God_of_Extortion["Premium skin"][4] ; // max out Premium skin.
		display_skins_interface();
	}
	
	// Transversion: no display required
	
	else if (scam == "Maximum memoriam") {
		display_all_laboratory_upgrades();
	}
	// Incremental energy: no display required
	
	else if (scam == "Ephemeral death") {
		resurrect_the_scientist()
	}
	
	else if (scam == "Obliviate") {
		god_of_energy_upset = 0;
		display_prestige_deal("Transfer");
		display_prestige_deal("Max style");
		display_prestige_deal("Part-time Artist");
		display_prestige_deal("Discount talents");
		if (DICT_Deals['Transfer'][2] == 1) {god_of_energy_happy = true;}
	}
	
	else if (scam == "Bullystroyer") {
		display_turn();
	}
	
	else if (scam == "Evil Pact") {
		display_fundamental_energy();
		display_dollars();
	}
}

function display_images_line(line) {
	var DISPLAY_name = "<div id='class='elements_waving'>???</div>";
	if (energy_building_DYNAMIC[line][3] == 1) { // if this element has been built at least once, display its name
		DISPLAY_name = "<div class='symbol_display elements_waving'>"+energy_building_STALE[line][0]+"</span><span class='TOP_tooltip_text'>"+energy_building_STALE[line][1]+"</div>";
	}
	DISPLAY_name = "<div id='waving_delay"+line+"' class='elements_waving'>"+DISPLAY_name+"</div>";
	document.getElementById("images_line_"+line).innerHTML = "<td id='body_part_name_"+line+"' class='tooltip'>"+DISPLAY_name+"</td>";
}

function display_all_images_lines() {
	for (var body_part in energy_building_STALE) {display_images_line(body_part)}
}

function display_line(line, ID_line=false) {
	if (energy_building_DYNAMIC[line][2] == 1) { // if the previous element has been built at least once, display this line
		
		var TOP_DOWN = "DOWN";
		if (line > 1) {TOP_DOWN = "TOP";}
		
		// START - name
		var DISPLAY_name = "<div id='class='elements_waving'>???</div>";
		if (energy_building_DYNAMIC[line][3] == 1) { // if this element has been built at least once, display its name
			DISPLAY_name = "<div class='symbol_display elements_waving'>"+energy_building_STALE[line][0]+"</span><span class='"+TOP_DOWN+"_tooltip_text'>"+energy_building_STALE[line][1]+"</div>";
		}
		DISPLAY_name = "<div id='waving_delay"+line+"' class='elements_waving'>"+DISPLAY_name+"</div>";
		// END - name
		
		var text_progress_bar = 'text_progress_bar_green';
		if (energy_building_DYNAMIC[line][6] == 'convert') {text_progress_bar = 'text_progress_bar_yellow';}
		
		// START - stock
		var stock_or_not = "";
		if (DICT_fundamental_talents['Lazy convert'][3] == 0) {stock_or_not = "Stock:";}
		var green_stock = "";
		if (energy_building_DYNAMIC[line][5] > 0) {green_stock = "counter_stocks";}
		var twin_talent = "";
		if (DICT_fundamental_talents['Twins'][3] > 0) {twin_talent = "<br /><br />Twins count: "+(energy_building_DYNAMIC[line][8]+1)+"/"+(21-DICT_fundamental_talents['Twins'][3]);}
		DISPLAY_stock = "<td id='stock_element_"+line+"' class='tooltip'>"+stock_or_not+" <span class="+green_stock+">"+display_number(energy_building_DYNAMIC[line][5])+"<span id=</span><span id='TOOLTIP_stock_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Your stock of this element.<br /><br />Fundamental Energy gained if converted:<br /><span id='stock_gains_"+line+"'>"+display_number(conversion_gains(line))+"</span>&nbsp;&#x2206;"+twin_talent+"</span></button></td>";
		// END - stock
		
			//<span id='gains_element_"+line+"1' class='gains_element_indicator'></span>\
			//<span id='gains_element_"+line+"2' class='gains_element_indicator'></span>\
			//<span id='gains_element_"+line+"3' class='gains_element_indicator'></span>\
			//<span id='gains_element_"+line+"4' class='gains_element_indicator'></span>\
			//<span id='gains_element_"+line+"5' class='gains_element_indicator'></span>\
		
		if (unlocked_buttons == false) {
			var ongoing_activities = 0;
			for (var linea in energy_building_DYNAMIC) {
				if (energy_building_DYNAMIC[linea][6] != "inactive") {
					ongoing_activities += 1;
				}
			}
			var enough_room_for_activity = true;
			if (ongoing_activities >= DICT_fundamental_talents['Multitasking'][3] + 1) {
				enough_room_for_activity = false;
			}
		}
		
		// START - construct button
		TOP_DOWN = "DOWN";
		if (line > 0) {TOP_DOWN = "TOP";}
		if (unlocked_buttons == false &&
				(energy_building_DYNAMIC[line][4] != 0.0 ||
				(fundamental_energy < energy_building_STALE[line][2] && energy_building_DYNAMIC[line][6] != "construct") || // not enough energy to construct
				smartomaton_activated == true ||
				(!enough_room_for_activity && energy_building_DYNAMIC[line][6] == "inactive"))) {
			var DISPLAY_button = "<td id='construct_element_"+line+"'><button class='locked_button tooltip'>Construct<span id='TOOLTIP_construct_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>LOCKED<br /><br />Construction cost: "+ display_number(energy_building_STALE[line][2], true) +"&nbsp;&#x2206;<br /><br />Time to construct: "+time_needed_to_construct(line)+"&nbsp;turns</span></button></td>";
		}
		
		else {
			var DISPLAY_button = "<td id='construct_element_"+line+"'><button class='tooltip' onmousedown='program_action_body_part("+line+", \"autoconstruct\")'>Construct<span id='TOOLTIP_construct_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Construction cost: "+ display_number(energy_building_STALE[line][2], true) +"&nbsp;&#x2206;<br /><br />Time to construct: "+time_needed_to_construct(line)+"&nbsp;turns</span></button></td>";
			if (energy_building_DYNAMIC[line][7] == 'autoconstruct') { // if autobuild is turned "on"
				if (fundamental_energy >= energy_building_STALE[line][2]
					|| (energy_building_DYNAMIC[line][6] == 'construct' && energy_building_DYNAMIC[line][4] == 0.0)
					|| energy_building_DYNAMIC[line][6] == 'convert'
					|| future_fundamental_energy() >= energy_building_STALE[line][2]) {
					DISPLAY_button = "<td id='construct_element_"+line+"'><button class='tooltip activated_button' onmousedown='program_action_body_part("+line+", \"inactive\")'>Construct<span id='TOOLTIP_construct_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Construction cost: "+ display_number(energy_building_STALE[line][2], true) +"&nbsp;&#x2206;<br /><br />Time to construct: "+time_needed_to_construct(line)+"&nbsp;turns</span></button></td>";
				}
				else {
					DISPLAY_button = "<td id='construct_element_"+line+"'><button class='tooltip wannabe_activated_button' onmousedown='program_action_body_part("+line+", \"inactive\")'>Construct<span id='TOOLTIP_construct_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Construction cost: "+ display_number(energy_building_STALE[line][2], true) +"&nbsp;&#x2206;<br /><br />Time to construct: "+time_needed_to_construct(line)+"&nbsp;turns</span></button></td>";
				}
			}
		}
		// END - construct button
		
		// START - convert button
		TOP_DOWN = "DOWN";
		if (line > 1) {TOP_DOWN = "TOP";}
		if (unlocked_buttons == false &&
				(energy_building_DYNAMIC[line][4] != 0.0 ||
				 energy_building_DYNAMIC[line][5] == 0 ||
				 smartomaton_activated == true ||
				 (!enough_room_for_activity && energy_building_DYNAMIC[line][6] == "inactive"))) {
			var DISPLAY_convert = "<td id='convert_element_"+line+"'><button class='locked_button tooltip'>Convert<span id='TOOLTIP_convert_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>LOCKED<br /><br />Convert your stock into &#x2206;.<br /><br />Time to convert: "+time_needed_to_convert(line)+" turns</span></button></td>";
		}
		else {
			var DISPLAY_convert = "<td id='convert_element_"+line+"'><button class='tooltip' onmousedown='program_action_body_part("+line+", \"autoconvert\")'>Convert<span id='TOOLTIP_convert_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Convert your stock into &#x2206;.<br /><br />Time to convert: "+time_needed_to_convert(line)+" turns</span></button></td>";
			if (energy_building_DYNAMIC[line][7] == 'autoconvert') { // if autoconvert is turned "on"
				if ((energy_building_DYNAMIC[line][5] > 0 && (energy_building_DYNAMIC[line][6] == 'convert' && energy_building_DYNAMIC[line][4] == 0.0)) || (energy_building_DYNAMIC[line][6] == 'construct' && energy_building_DYNAMIC[line][4] > 0.0)) { // if you have some stock to convert or if an element is building
					DISPLAY_convert = "<td id='convert_element_"+line+"'><button class='tooltip activated_button' onmousedown='program_action_body_part("+line+", \"inactive\")'>Convert<span id='TOOLTIP_convert_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Convert your stock into &#x2206;.<br /><br />Time to convert: "+time_needed_to_convert(line)+" turns</span></button></td>";
				}
				else {
					DISPLAY_convert = "<td id='convert_element_"+line+"'><button class='tooltip wannabe_activated_button' onmousedown='program_action_body_part("+line+", \"inactive\")'>Convert<span id='TOOLTIP_convert_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Convert your stock into &#x2206;.<br /><br />Time to convert: "+time_needed_to_convert(line)+" turns</span></button></td>";
				}
			}
		}
		// END - convert button
		
		// START - automaton button
		var DISPLAY_automaton = "";
		if (DICT_fundamental_talents['Lazy convert'][3] == 1) {
			var automaton_button_color = ""; // blue, green, or locked.
			var automaton_button_function = ""; // depending on weither it's active, inactive or locked.
			if (unlocked_buttons == false && 
				(smartomaton_activated == true ||
				((fundamental_energy < energy_building_STALE[line][2] && energy_building_DYNAMIC[line][6] != "construct") && energy_building_DYNAMIC[line][5] == 0) ||
			    (!enough_room_for_activity && energy_building_DYNAMIC[line][6] == "inactive"))) {
				automaton_button_color = " locked_button"; // the blank is normal, don't remove
			}
			else if (energy_building_DYNAMIC[line][7] != 'automate') {
				automaton_button_function = "program_action_body_part("+line+", \"automate\")";
			}
			else { // if (energy_building_DYNAMIC[line][7] == 'automate')
				automaton_button_color = " activated_button"; // the blank is normal, don't remove
				automaton_button_function = "program_action_body_part("+line+", \"inactive\")";
			}
			DISPLAY_automaton = "<td id='automate_element_"+line+"'><button class='tooltip"+automaton_button_color+"' onmousedown='"+automaton_button_function+"'><span class='symbol_display'>&#x26FE;</span><span id='TOOLTIP_automate_element_"+line+"' class='"+TOP_DOWN+"_tooltip_text'>Have a coffee and relax: your automaton will do the job!</span></button></td>";
		}
		// END - automaton button
		
		// START - Transfer button
		var DISPLAY_transfer = "";
		if (line == 9) {
			if (DICT_dollars_buildings_DYNAMIC['Temple'][0] == 1) {
				DISPLAY_transfer = "<td>"+display_stock_genitals_temple_button()+"</td>";
			}
		}
		else if (DICT_dollars_buildings_DYNAMIC['Laboratory'][0] == 1) {
			DISPLAY_transfer = "<td>"+display_stock_body_part_laboratory_button(line)+"</td>";
		}
		// END - Transfer button
		
		// START - assemble and return the line
		var this_line = " \
			<tr id='body_part_"+line+"'> \
				<td> \
					<div class='Cadre_de_barre_de_progression'> \
						<div id='progress_bar_"+line+"' class='Niveau_de_barre_de_progression'></div> \
						<div id='text_progress_bar_"+line+"' class="+text_progress_bar+">"+display_text_progress_bar(line)+"</div> \
						<div class='bordure_barre_de_progression'></div> \
					</div></td> \
				"+DISPLAY_stock+" \
				"+DISPLAY_button+" \
				"+DISPLAY_convert+" \
				"+DISPLAY_automaton+" \
				"+DISPLAY_transfer+" \
			</tr>";
			
		if (ID_line == false) { // if the line is being created
			return this_line;
		}
		else { // if the line is being edited
			document.getElementById('body_part_'+line).outerHTML = this_line;
		}
		// END - assemble and return the line
	}
}

function display_all_lines() {
	document.getElementById("body_parts").innerHTML = "";
	for (var line in energy_building_DYNAMIC) {
		if (energy_building_DYNAMIC[line][2] == 1){ // we need to check, or display_progress_bar() will fail
			document.getElementById("body_parts").innerHTML += display_line(line);
			display_progress_bar("progress_bar_"+line, line, 0);
		}
	}
	display_talents_management_bar()
}

function display_progress_bar(ID_bar, number_of_composant) {
    document.getElementById(ID_bar).style.width = energy_building_DYNAMIC[number_of_composant][4] + '%';
}

function display_text_progress_bar(line) {
	var s = "s";
	var ongoing = "ongoing";
	if (energy_building_DYNAMIC[line][4] == 0.0) {ongoing = "initialized";}
	
	if (energy_building_DYNAMIC[line][6] == 'inactive') {
		return ("");
	}
	else if (energy_building_DYNAMIC[line][6] == 'construct') {
		var time_reduction = 0;
		if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[line][1]][3] == 0) {// if you don't have the talent Concentrated part
			time_reduction = DICT_fundamental_talents['Industrialization'][3];
		}
		var turns_left = Math.round((100-energy_building_DYNAMIC[line][4])/100*(energy_building_STALE[line][3]-time_reduction));
		// turns_left: (100-43)/100*(nombre de tours de base - niveau du talent reduisant le nombre de tours necessaires). Puis, on arrondit a l'entier le plus proche.
		turns_left = Math.max(1, turns_left);
		if (turns_left < 2) {s = ""}
		return ("Construction "+ongoing+": "+turns_left+" turn"+s+" left")
	}
	else if (energy_building_DYNAMIC[line][6] == 'convert') {
		var time_reduction = 0;
		if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[line][1]][3] == 0) {// if you don't have the talent Concentrated part
			time_reduction = DICT_fundamental_talents['Quick mix'][3];
		}
		var turns_left = Math.round((100-energy_building_DYNAMIC[line][4])/100*(energy_building_STALE[line][4]-time_reduction));
		// turns_left: (1-0.43)*(nombre de tours de base - niveau du talent reduisant le nombre de tours necessaires). Puis, on arrondit a l'entier le plus proche.
		turns_left = Math.max(1, turns_left);
		if (turns_left < 2) {s = ""}
		return ("Conversion "+ongoing+": "+turns_left+" turn"+s+" left")
	}
}

function display_talents_management_bar() {
	if (!document.getElementById("talents_management_bar_full_bar")) { // if the id doesn't exist, create it
		var new_bar = document.getElementById("body_parts").insertRow(-1);
		new_bar.id = "talents_management_bar_full_bar";
	}
	var management_bar = document.getElementById("talents_management_bar_full_bar");
	document.getElementById("talents_management_bar_full_bar").innerHTML = "";
	var divers = management_bar.insertCell(0);
	divers.colSpan = "2";
	divers.id = "talents_management_bar";
	var all_construct = management_bar.insertCell(1);
	var all_convert = management_bar.insertCell(2);
	var all_automate = management_bar.insertCell(3);
	if (DICT_dollars_buildings_DYNAMIC['Laboratory'][0] == 1) {
		var all_transfer = management_bar.insertCell(4);
	}
	
	// START - Smartomaton button
	if (DICT_fundamental_talents['Step up'][3] == 1) {
		document.getElementById("talents_management_bar").innerHTML += "&nbsp;&nbsp;<button id='smartomaton' class='tooltip' onmousedown='smartomate(true)'>Smartomaton\
							<span class='TOP_tooltip_text tooltip_deal'>\
							This automaton is so powerful that it can optimize your Fundamental Energy production probably better than you could.\
							It's very jealous though: it takes control and disables all the other automatons,\
							and it will refuse to work while you construct or convert on your own.\
							</span>\
						</button>";
		if (smartomaton_activated == true) {
			document.getElementById("smartomaton").className = "tooltip activated_button";
		}
	}
	// END - Smartomaton button
		
	// START - Unstoppable button
	if (DICT_fundamental_talents['Unstoppable'][3] == 1) {
		var color_unstoppable = "";
		if (unstoppable_activated == true) {color_unstoppable = "activated_button";}
		document.getElementById("talents_management_bar").innerHTML += 
						"&nbsp;&nbsp;<button id='unstoppable' class='tooltip "+color_unstoppable+"' onmousedown='toggle_unstoppable()'>Unstoppable\
						<span class='TOP_tooltip_text tooltip_deal'>\
						Activate an unstoppable automaton. Everytime the Bully God destroys your work, it will buy as many energy talents as possible.<br /><br />Fun fact: the Unstoppable and the Smartomaton have a creepy romance.\
						</span>\
						</button>";
	}
	// END - Unstoppable button

	if (DICT_fundamental_talents['Octogod'][3] == 1) {
		var begin = "<button class='tooltip' onmousedown='activate_all_lines(";
		var end = ")'>&#x21e7;<span class='LEFT_tooltip_text'>Use your numerous limbs to activate all the body parts at once.</<span></button>";
		all_construct.innerHTML = begin + '"autoconstruct"' + end;
		all_convert.innerHTML = begin + '"autoconvert"' + end;
		all_automate.innerHTML = begin + '"automate"' + end;
		if (DICT_dollars_buildings_DYNAMIC['Laboratory'][0] == 1) {
			all_transfer.innerHTML = "<button class='tooltip' onmousedown='FUNC_autotransfer_all_body_parts()'>&#x21e7;<span class='LEFT_tooltip_text'>Use your numerous limbs to transfer all the body parts (genitals excluded) at once.</<span></button>";
		}
	}
}

function display_artwork() {
	
	var text_progress_bar = 'text_progress_bar_green';
	if (DICT_artwork['auto_create'] == 0) {text_progress_bar = 'text_progress_bar_orange';}
	
	// START - create button
	var creation_cost = display_number(cost_artwork(), true);
	var tooltip_creation_cost = "Creation cost: "+ creation_cost +"&nbsp;&#x2206;<br /> \
								 1 Toenail<br /> \
								 1 Toe<br /> \
								 1 Foot<br /> \
								 1 Leg<br /> \
								 1 Hand<br /> \
								 1 Arm<br /> \
								 1 Belly<br /> \
								 1 Chest<br /> \
								 1 Head<br /> \
								 1 Genitals<br />";
	var s = "s";
	if (specific_number_modifier_upgrade("Artwork") == 1) {s = "";}
	var content_DISPLAY_create = "Create<span id='TOOLTIP_create_artwork_button' class='TOP_tooltip_text'>"+tooltip_creation_cost+"<br />Time to create: "+specific_number_modifier_upgrade("Artwork")+"&nbsp;turn"+s+"</span>";
	
	var DISPLAY_create = "<td id='create_artwork_button'><button class='tooltip' onmousedown='create_artwork()'>"+content_DISPLAY_create+"</button></td>";
		if (DICT_artwork['auto_create'] == 1) { // if autocreate is turned "on"
			if ((fundamental_energy >= creation_cost && body_parts_availability() == true) || (DICT_artwork['activity'] == 1 && DICT_artwork['percentage_completion'] == 0.0)) {
				DISPLAY_create = "<td id='create_artwork_button'><button class='tooltip activated_button' onmousedown='create_artwork()'>"+content_DISPLAY_create+"</button></td>";
			}
			else if (DICT_artwork['activity'] == 1) { // if an artwork is ongoing, but there is not enough money for the next one
				DISPLAY_create = "<td id='create_artwork_button'><button class='tooltip orange_button' onmousedown='create_artwork()'>"+content_DISPLAY_create+"</button></td>";			
			}
			else {
				DISPLAY_create = "<td id='create_artwork_button'><button class='tooltip wannabe_activated_button' onmousedown='create_artwork()'>"+content_DISPLAY_create+"</button></td>";
			}
		}
	// END - create button
	
	// START - total artworks
	var DISPLAY_total_artworks = "<td class='tooltip'>Total&nbsp;artworks:&nbsp;0</button></td>";
	if (total_artworks() > 0) {
		DISPLAY_total_artworks = "<td class='tooltip'>Total&nbsp;artworks:&nbsp;<span class='counter_creations'>"+display_number(total_artworks())+"</button></td>";
	}
	// END - total artworks
	
	var display_this = (" \
		<tr id='body_artwork'> \
			<td id='name_artwork'>Artwork</td> \
			<td> \
				<div class='Cadre_de_barre_de_progression'> \
					<div id='progress_bar_artwork' class='Niveau_de_barre_de_progression'></div> \
					<div class="+text_progress_bar+">"+display_text_progress_bar_artwork()+"</div> \
					<div class='bordure_barre_de_progression'></div> \
				</div></td> \
			"+DISPLAY_create+" \
			"+DISPLAY_total_artworks+" \
		</tr>");
	document.getElementById("Body_artwork").innerHTML = display_this;
}

function display_progress_bar_artwork() {document.getElementById('progress_bar_artwork').style.width = DICT_artwork['percentage_completion'] + '%';}

function display_text_progress_bar_artwork() {
	if (DICT_artwork['activity'] == 0) {
		return ("");
	}
	else if (DICT_artwork['auto_create'] == 0) {
		var turns_left = Math.round(specific_number_modifier_upgrade("Artwork")*(100-DICT_artwork['percentage_completion'])/100);
		var s = "s";
		if (turns_left < 2) {s = ""}
		return ("Creation paused: "+turns_left+" turn"+s+" left")
	}
	else {
		if (DICT_artwork['percentage_completion'] == 0.0) {
			return ("Construction will start next turn");
		}
		else {
			var turns_left = Math.round(specific_number_modifier_upgrade("Artwork")*(100-DICT_artwork['percentage_completion'])/100);
			var s = "s";
			if (turns_left < 2) {s = ""}
			return ("Creation ongoing: "+turns_left+" turn"+s+" left")
		}
	}
}

function display_default_human_world_titles() {
	document.getElementById("list_human_world_titles").innerHTML = " \
		<tr> \
			<td class='no_padding'><button id='title_Workers_inactive' class='title_building tooltip'>Workers</button></td> \
			<td class='no_padding'><button id='title_Brothels_inactive' class='title_building tooltip' onclick='unlock_building(\"Brothels\")'>???<span class='DOWN_tooltip_text'>Unlock: $1,000</span></button></td> \
			<td class='no_padding'><button id='title_Factories_inactive' class='title_building tooltip' onclick='unlock_building(\"Factories\")'>???<span class='DOWN_tooltip_text'>Unlock: $1,000,000</span></button></td> \
			<td class='no_padding'><button id='title_Temple_inactive' class='title_building tooltip' onclick='unlock_building(\"Temple\")'>???<span class='DOWN_tooltip_text'>Unlock: $"+display_number(DICT_dollars_buildings_STALE['Temple'][1], true)+"</span></button></td> \
			<td class='no_padding'><button id='title_Laboratory_inactive' class='title_building tooltip' onclick='unlock_building(\"Laboratory\")'>???<span class='DOWN_tooltip_text'>Unlock: $"+display_number(DICT_dollars_buildings_STALE['Laboratory'][1], true)+"</span></button></td> \
			<td class='no_padding'><button id='title_Schools_inactive' class='title_building tooltip' onclick='unlock_building(\"Schools\")'>???<span class='DOWN_tooltip_text'>Unlock: $"+display_number(DICT_dollars_buildings_STALE['Schools'][1], true)+"</span></button></td> \
			<td class='no_padding'><button id='title_Lobby_inactive' class='title_building tooltip' onclick='unlock_building(\"Lobby\")'>???<span class='DOWN_tooltip_text'>Unlock: $"+display_number(DICT_dollars_buildings_STALE['Lobby'][1], true)+"</span></button></td> \
		</tr>";
}

function display_multiplicator_button() {
	if (prostitutes_multiplicator == 100000) { // mean value breaking the beauty of my interface :(
		document.getElementById("multiplicator_button_value").innerHTML = "X 1e+5";
	}
	else {
		document.getElementById("multiplicator_button_value").innerHTML = "X "+display_number(prostitutes_multiplicator, true);
	}
}

function display_requirements_building(dictionnary, building_selected, position) {
	var requirements = "<table class='requirements_table'>";
	var DICT_all_requirements = requirements_building(dictionnary, building_selected, position);
	// DICT_all_requirements = {building: [current_level, required_level, locked_costs], ...};
	var current_level;
	var required_level;
	var symbol_validation;
	var locked_costs = false;
	var all_levels_validated = true;
	for (var i in DICT_all_requirements) {
		current_level = DICT_all_requirements[i][0];
		required_level = DICT_all_requirements[i][1];
		if (DICT_all_requirements[i][2]) {locked_costs = true;}
		symbol_validation = "<span style='color:green;'>&#x2713</span>";
		if (current_level < required_level) {
			symbol_validation = "<span style='color:red;'>&#x20E0</span>";
			all_levels_validated = false;
		}
		requirements += "<tr><td>"+symbol_validation+"</td>\
						<td>"+i+"</td>\
						<td>"+current_level+" / "+required_level+"</td></tr>";
	}
	requirements += "</table>";
	return [requirements, locked_costs, all_levels_validated];
}

function display_workers() {
	var VAR_multiplicator_workers = multiplicator_workers();
	var DISPLAY_attributed = "<span id='workers_attributed' class='tooltip'>"+display_number(DICT_attributions['Workers']+DICT_attributions_humans['Workers'])+" &#x269C;<span class='TOP_tooltip_text'>Amount of prostitutes attributed to this task.<br />"+display_tooltip_artworks_trained("Workers")+"</span></button></span>";
	var DISPLAY_speed = "<span id='workers_speed' class='tooltip'>$<span id='workers_speed_value'>"+display_number(speed_workers()*VAR_multiplicator_workers)+"</span> / hour<span class='TOP_tooltip_text'>Income per hour</span></button></span>";
	var DISPLAY_multiplicator = "<span id='workers_multiplicator' class='tooltip'>$<span id='workers_multiplicator_value'>"+display_number(VAR_multiplicator_workers, true)+"</span> / date<span class='TOP_tooltip_text'>Money you get from each date with a customer</span></button></span>";
	var DISPLAY_attractor = "<span id='workers_attractor' class='tooltip'> &#x1F9F2;<span id='workers_attractor_value'>"+display_number(specific_number_modifier_upgrade('Law of attraction'))+"</span><span id='tooltip_workers_attractor' class='LEFT_tooltip_text'>Your workers attract customers to your brothels, making them more profitable.<br /><br />Your brothels' income is multiplied by the indicated amount.</span></span>";
	var DISPLAY_magic_gathering = "<button id='magic_gathering_button' class='tooltip' onclick='magic_gathering()'>Magic Gathering<span class='DOWN_tooltip_text'>All your prostitutes interrupt their task immediately and become inactive.</span></button>";
	var DISPLAY_remove_prostitute = "<button class='round_button plus_minus_button tooltip' onclick=\"allocate_deallocate_prostitute('Workers', 'false')\">-</button>";
	var DISPLAY_add_prostitute = "<button class='round_button plus_minus_button tooltip' onclick=\"allocate_deallocate_prostitute('Workers')\">+</button>";

	document.getElementById("Body_workers").innerHTML = ( " \
				<div id='cadre_de_barre_de_progression_workers'> \
					<div id='header_workers'> \
						"+DISPLAY_attributed+" \
						"+DISPLAY_remove_prostitute+" \
						"+DISPLAY_add_prostitute+"<br /> \
						"+DISPLAY_speed+"<br /> \
						"+DISPLAY_multiplicator+"<br /> \
						"+DISPLAY_attractor+"<br /><br /> \
						"+DISPLAY_magic_gathering+"<br /> \
					</div> \
					<div id='progress_bar_workers'> \
						<div id='text_progress_bar_workers'>"+display_text_progress_bar_human_world()+"</div> \
					</div> \
				</div>");
	if (DICT_Temple_upgrades['Law of attraction'][5] > 0) {document.getElementById("workers_attractor").style.display = "initial";}
}

function display_progress_bar_workers() {
	document.getElementById('progress_bar_workers').style.height = Math.min(1, LIST_Workers[1]/LIST_Workers[0])*100 + '%';
	document.getElementById('progress_bar_workers').style.top = (1-Math.min(1, LIST_Workers[1]/LIST_Workers[0]))*100 + '%';
}

function display_text_progress_bar_human_world() {
	var pourcentage = (Math.min(1, LIST_Workers[1]/LIST_Workers[0])*100).toFixed(2);
	var remaining_time = pourcentage+" %<br />";
	if (DICT_attributions['Workers']+DICT_attributions_humans['Workers'] > 0) {
		var distance = (LIST_Workers[0]-LIST_Workers[1])/((DICT_attributions['Workers']+DICT_attributions_humans['Workers']));
		remaining_time += display_time(distance);
		remaining_time += "<br />";
	}
	return remaining_time;
}

function display_workers_upgrades() {
	document.getElementById("Body_workers_upgrade_1").innerHTML = "";
	document.getElementById("Body_workers_upgrade_2").innerHTML = "";
	document.getElementById("Body_workers_upgrade_3").innerHTML = "";
	var j = 1;
	for (var i in LIST_Workers_upgrades_DYNAMIC) {
		if (LIST_Workers_upgrades_DYNAMIC[i] == 0 && j <= 3) {
			//var name_color = '#8060e5'; 
			var name_color = '#8657b1'; // 134 87 177
			if (LIST_Workers_upgrades_STALE[i][3] == 'female') {name_color = '#FD5DA8';} // 253 93 168
			else if (LIST_Workers_upgrades_STALE[i][3] == 'male') {name_color = '#0F52BA';} // 15 82 186
			var disagree_button = "";
			if (LIST_Workers_upgrades_STALE[i][0] == "Green gauntlets") {disagree_button = "<button class='red_button' onclick='disagree_green_gauntlet()'>Disagree</button>";}
			document.getElementById("Body_workers_upgrade_"+j).innerHTML = "<span class='name_upgrade' style='color:"+name_color+";'>"+LIST_Workers_upgrades_STALE[i][0]+"</span><br /><br /> \
																	<img src='Images/Workers_upgrades/"+LIST_Workers_upgrades_STALE[i][0]+".png' class='workers_picture'>\
																	<span id='green_gauntlet_button'>"+disagree_button+"</span>\
																	<span class='profits_upgrade'> X "+LIST_Workers_upgrades_STALE[i][2]+"</span> \
																	<span class='comment_upgrade'>"+LIST_Workers_upgrades_STALE[i][4]+"</span> \
																	<span class='buy_upgrade_span'><button class='buy_workers_upgrade_button' onclick='buy_workers_upgrade("+i+")'>$"+display_number(price_workers_upgrade(i), true)+"</button></span>";
			j+=1;
		}
	}
}

function display_tooltip_consume_items_button(brothel, hourly=false) {
	var items_consumed = ""; // initialization of the string
	var hourly_modificator = 1;
	if (hourly == true) {hourly_modificator = 3600000/DICT_Brothels_STALE[brothel][5];}
	var m = 6;
	for (var n in DICT_Factories_SYMBOLS) {
		if (DICT_Brothels_STALE[brothel][m] > 0) {
			items_consumed += "&nbsp;"+display_number(DICT_Brothels_STALE[brothel][m]*hourly_modificator, true)+"&nbsp;"+DICT_Factories_SYMBOLS[n];
		}
		m++;
	}
	return items_consumed
}

function display_brothel(brothel) {
	if (DICT_Brothels_DYNAMIC[brothel][0] == 1) {
		var maintenance;
		var operational = 0;
		if (DICT_attributions[brothel]+DICT_attributions_humans[brothel] > DICT_Brothels_STALE[brothel][1]) {
			maintenance = DICT_Brothels_STALE[brothel][1];
			operational = DICT_attributions[brothel]+DICT_attributions_humans[brothel]-maintenance;
		}
		else {
			maintenance = DICT_attributions[brothel]+DICT_attributions_humans[brothel];
		}
		
		var blank_spaces = ""; // just to have a slightly better harmony on display of brothel without factory items used.
		
		// START - "Use items" button
		var specific_tooltip;
		var button_color;
		var brothel_color = "default_background_brothel";
		var Use_Items_button = "";
		// note on the next condition : the "in" operator works only on keys, a list wouldn't fit. So I use a dictionary with the value 0 for all keys.
		if (DICT_dollars_buildings_DYNAMIC['Factories'][0] == 1 && !(brothel in {"Minimalistic brothel":0, "Covered courtyard":0, "A sort of hut":0, "Bankthel":0})) {
			var enough_items = true;
			var i = 6;
			for (var factory_name in DICT_Factories_STALE) {
				if (DICT_Factories_DYNAMIC[factory_name][4] < DICT_Brothels_STALE[brothel][i]) {enough_items = false;} // if stock < quantity necessary
				i++;
			}
			if (DICT_Brothels_DYNAMIC[brothel][3] == 0) {
				specific_tooltip = "<span class='bold'>INACTIVE</span>, the bonus won't be applied and your items won't be consumed.<br /><br />";
				button_color = ""; // blue neutral button. Items consumption not activated
				brothel_color = "default_background_brothel";
			}
			else if (DICT_Brothels_DYNAMIC[brothel][4] > 0) {
				if (DICT_Brothels_DYNAMIC[brothel][3] == 1 && enough_items == true) {
					specific_tooltip = "<span class='bold'>ACTIVE</span>, the bonus is applied and items will automatically be consumed to refresh it at the end of the countdown.<br /><br />";
					button_color = 'activated_button';
					brothel_color = 'activated_brothel';
				}
				else if (DICT_Brothels_DYNAMIC[brothel][3] == 1 && enough_items == false) {
					specific_tooltip = "<span class='bold'>ACTIVE</span>, the bonus is applied but won't be refreshed when the countdown hits 0, you don't have enough items.<br /><br />";
					button_color = 'orange_button';
					brothel_color = 'orange_brothel';
				}
				else { // if DICT_Brothels_DYNAMIC[brothel][3] == 2
					specific_tooltip = "<span class='bold'>MILKING</span>, the bonus is applied until the end of the countdown, and will stop afterwards.<br /><br />";
					button_color = 'milk_button'; // milking button. Will use the buff until there is no more time. Will automatically deactivate when time runs out.
					brothel_color = 'milk_brothel';
				}
			}// green button Items consumption activated
			
			else { // if there is no more time in the countdown. DICT_Brothels_DYNAMIC[brothel][3] is equal to 1: if it was equal to 2, it's been swaped to 0 in the time_runner because there is no more buff time left.
				specific_tooltip = "<span class='bold'>INACTIVE</span>, the bonus will be applied as soon as you have enough items and at least 1 operational prostitute.<br /><br />";
				button_color = 'wannabe_activated_button';
				brothel_color = 'wannabe_activated_brothel';
			} // orange button Items consumption wannabe activated but not enough items
			
			var tooltip_items_button = "<span id='TOOLTIP_consume_items_"+brothel+"' class='tooltip_Consume_Items_brothels TOP_tooltip_text'>\
							"+specific_tooltip+" \
							Time left: <span id='time_left_"+brothel+"'>"+display_time(DICT_Brothels_DYNAMIC[brothel][4])+"</span><br />\
							Items required per order:"+display_tooltip_consume_items_button(brothel, false)+"<br />\
							Delivery frequency: "+display_number(3600000/DICT_Brothels_STALE[brothel][5], true)+" orders / hour<br />\
							Hourly consumption: "+display_tooltip_consume_items_button(brothel, true)+"<br />\
							Bonus income: X"+display_number(DICT_Brothels_STALE[brothel][4]*(1+DICT_Deals['Full potential'][2]*2), true)+"\
						   </span>";
			Use_Items_button = "<button id='BUTTON_consume_items_"+brothel+"' class='tooltip "+button_color+"' onclick=\"activate_items_consumption_brothel('"+brothel+"')\">Bonus"+tooltip_items_button+"</button>";
		}
		else {
			blank_spaces = "&nbsp;&nbsp;&nbsp;";
		}
		// END - "Use items" button
		
		// START - Specific brothels
		var specific_brothel_content = "";
		if (brothel == "Casinothel") {
			var dice_display = "&#x268"+(dice_casinothel-1);
			specific_brothel_content = "<button id='casinothel_button' onclick='roll_the_dice()'><span id='casinothel_button_text'>"+dice_display+"</span>\
			<span class='LEFT_tooltip_text larger_tooltip'>A cool dice. Roll it for $"+display_number(dice_dollars_cost, true)+" and 10 "+DICT_Factories_SYMBOLS['Common materials']+".<br />It seems a bit loaded though...</span></button>";
		}
		else if (brothel == "Zoutopia") {
			var friendly_color = "";
			if (zoutopia_activated) {friendly_color = "activated_button";}
			specific_brothel_content = "<button id='zoutopia_button' class='"+friendly_color+"' onclick='animals_friendly()'><span id='zoutopia_button_text'>&#x1F437;</span>\
			<span class='LEFT_tooltip_text larger_tooltip'><b><i>Barter</i></b><br /><br />Humans are great customers, but they are only one species. Make this brothel animals friendly! They don't use money, but they barter materials.<br /><br />Factories production multiplicator: X "+display_number(zoutopia_multiplicator(), true)+"</span></button>";
		}
		else if (brothel == "Brollywood") {
			var friendly_color = "";
			if (brollywood_activated) {friendly_color = "activated_button";}
			specific_brothel_content = "<button id='brollywood_button' class='"+friendly_color+"' onclick='priestywood()'><span id='brollywood_button_text'>&#x2600;</span>\
			<span class='LEFT_tooltip_text larger_tooltip'><b><i>Priesthel</i></b><br /><br />Propaganda movies are radicalizing worshipers. Adoring you is the only purpose of their life! They become much more effective.<br /><br />And this doesn't even damage the rentability of Brollywood. Turn this up, and keep it up!<br /><br />Worshipers efficiency: X "+display_number(priesthel_multiplicator(), true)+"</span></button>";
		}
		else if (brothel == "Virtual brothel") {
			var friendly_color = "";
			if (holograms) {friendly_color = "activated_button";}
			specific_brothel_content = "<button id='virtual_button' class='"+friendly_color+"' onclick='virtual_presence()'><span id='virtual_button_text'>&#9832;</span>\
			<span class='LEFT_tooltip_text larger_tooltip'><b><i>Holograms</i></b><br /><br />Use holograms to influence and manipulate all around the globe.<br /><br />Harass world leaders over and over until their mind is blown!<br /><br />Lobbies price and speed: X "+display_number(holograms_multiplicator(), true)+"</span></button>";
		}
		
		// END - Specific brothels
		
		var more_infos_brothel = "\
			<table class='additional_infos_brothels'> \
				<tr class='additional_infos_brothels'> \
					<td class='additional_infos_brothels'>bonus: X "+display_number(money_per_second_brothel(brothel, 1) / DICT_Brothels_STALE[brothel][3]) +"</td> \
					<td class='additional_infos_brothels'>Per prostitute</td> \
					<td class='additional_infos_brothels'>Total</td> \
				</tr> \
				<tr class='additional_infos_brothels'> \
					<td>Per second</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, 1)) +"</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, operational))+"</td> \
				</tr> \
				<tr class='additional_infos_brothels'> \
					<td class='additional_infos_brothels'>Per minute</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, 1)*60) +"</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, operational)*60)+"</td> \
				</tr> \
				<tr class='additional_infos_brothels'> \
					<td class='additional_infos_brothels'>Per hour</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, 1)*3600) +"</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, operational)*3600)+"</td> \
				</tr> \
				<tr class='additional_infos_brothels'> \
					<td class='additional_infos_brothels'>Per day</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, 1)*3600*24) +"</td> \
					<td class='additional_infos_brothels'>$ "+display_number(money_per_second_brothel(brothel, operational)*3600*24)+"</td> \
				</tr> \
			</table>";
		
		var average_gains_button_tooltip_direction = "TOP";
		if (brothel == "Minimalistic brothel") {average_gains_button_tooltip_direction = "DOWN";}
		var display_precision_artworks_trained = "";
		if (DICT_Schools['Basics school'][2] == 1) {
			display_precision_artworks_trained = "<span class='DOWN_tooltip_text'>"+display_tooltip_artworks_trained(brothel)+"</span>";
		}
		
		document.getElementById('ID_'+brothel).outerHTML = 
			"<div id='ID_"+brothel+"' class='brothel "+brothel_color+"'> \
				<div class='name_of_building'>"+brothel+"</div><br /> \
				<div class='first_line_brothel tooltip'>Maintenance: "+display_number(maintenance, true)+" / "+display_number(DICT_Brothels_STALE[brothel][1], true)+" &#x269C; \
				<button class='round_button plus_minus_button tooltip' onclick=\"allocate_deallocate_prostitute('"+brothel+"', false)\">-</button> <button class='round_button plus_minus_button tooltip' onclick=\"allocate_deallocate_prostitute('"+brothel+"')\">+</button> \
				Operational: "+display_number(operational, true)+" / "+display_number(DICT_Brothels_STALE[brothel][2], true)+" &#x269C;"+display_precision_artworks_trained+"</div><br /> \
				<div style='text-align:center'><span class='tooltip'>&#x1F4B0;: $ <span id='stock_"+brothel+"'>"+display_number(DICT_Brothels_DYNAMIC[brothel][2])+"</span><span class='TOP_tooltip_text'>Money stored, waiting for collection</span></span> \
				"+blank_spaces+"<button class='tooltip' onclick=\"collect_brothel('"+brothel+"')\">Collect<span class='TOP_tooltip_text'>Collect the money stored</span></button>&nbsp;&nbsp;&nbsp; \
				"+Use_Items_button+" \
				<span class='tooltip'>$ <span id='gains_per_hour_"+brothel+"'>"+display_number(money_per_second_brothel(brothel, operational)*3600)+"</span> / hour<span class='"+average_gains_button_tooltip_direction+"_tooltip_text big_tooltip_brothel'><div>"+more_infos_brothel+"</div></span></span> \
				<span class='description_button tooltip'>?<span class='tooltip_description LEFT_tooltip_text'>"+DICT_Brothels_DESCRIPTIONS[brothel]+"</span></span> \
				<span id='specific_brothel' class='tooltip'>"+specific_brothel_content+"</span></div> \
			</div>";
	}
	else {
		var requirements_and_locked_costs = display_requirements_building(DICT_Brothels_STALE, brothel, 12);
		var requirements = requirements_and_locked_costs[0];
		var locked_costs = requirements_and_locked_costs[1];
		
		var price_in_dollars = "&nbsp;$ "+display_number(DICT_Brothels_STALE[brothel][0], true);
		
		var costs = "<table class='costs_table'>";
		var factory_name;
		var stock;
		var stock_amount_required;
		for (var i in DICT_Brothels_STALE[brothel][13]) {
			if (DICT_Factories_DYNAMIC[DICT_Brothels_STALE[brothel][13][i][0]][5] == 0) {locked_costs = true;} // If this specific factory (DICT_Brothels_STALE[brothel][13][i][0]) have never been unlocked, don't display the cost
			else {
				factory_name = DICT_Brothels_STALE[brothel][13][i][0];
				stock = DICT_Factories_DYNAMIC[factory_name][4];
				stock_amount_required = DICT_Brothels_STALE[brothel][13][i][1];
				costs += "<tr><td>"+factory_name+"</td>\
							<td><span class='stock_cost_"+factory_name+"'>"+display_number(stock)+"</span> / "+display_number(stock_amount_required, true)+"</td></tr>";
			}
		}
		costs += "</table>";
		
		var buy_button_class = "buy_building_button";
		if (locked_costs == true) {requirements = ""; price_in_dollars = ""; costs = "";}
		else if (DICT_Brothels_DYNAMIC[brothel][0] < DICT_Brothels_DYNAMIC[brothel][5]) { // if the building is frozen due to labo downgrade
			price_in_dollars = ""; costs = "";
			buy_button_class = "buy_building_frozen_button";
		}
		
		document.getElementById('ID_'+brothel).outerHTML = 
			"<div id='ID_"+brothel+"' class='brothel default_background_brothel'><span class='buy_upgrade_span'><button class='"+buy_button_class+"' onclick='buy_brothel(\""+brothel+"\")'>"+requirements+"<span class='locked_price'>&#x1F512;"+price_in_dollars+"</span>"+costs+"</button></span></div>";
	
	}
}

function display_all_brothels() {for (var i in DICT_Brothels_DYNAMIC) {display_brothel(i)};}

function average_gains_per_hour_factory(factory) { // only needed for display. It's out of the main function because I also use it in time runner
	var average_gains_per_hour = 0;
	var current_level = current_level_factory(factory);
	if (current_level > 0 && current_level <= DICT_Factories_DYNAMIC[factory][0] + DICT_Deals['Beyond limits'][2]) {
		average_gains_per_hour = 3600000/factory_total_time_to_produce(factory)*multiplicator_speed_factory(factory)*multiplicator_quantity_factory(factory);
	}
	return average_gains_per_hour
}

function display_factory(factory) {
	if (DICT_Factories_DYNAMIC[factory][0] > 0) {
		var current_level = current_level_factory(factory);
		
		var display_text_progress_bar = '';
		var color_progress_bar = 'text_progress_bar_green';
		if (current_level > 0 && current_level <= DICT_Factories_DYNAMIC[factory][0] + DICT_Deals['Beyond limits'][2]) { // if production is ongoing
			display_text_progress_bar = "Production ongoing: "+display_number(multiplicator_quantity_factory(factory), true)+" "+DICT_Factories_SYMBOLS[factory];
		}
		else { // if production is not ongoing (inactive factory or upgrade ongoing)
			if (current_level > 0) { // upgrade ongoing
				display_text_progress_bar = "Production stalled.";
				color_progress_bar = 'text_progress_bar_orange';
			}
		}
		
		var factory_display =
			"<div id='ID_"+factory+"' class='factory'> \
				<div class='name_of_building'><span style='font-weight:normal'>"+DICT_Factories_SYMBOLS[factory]+"</span> "+factory+" <span style='font-weight:normal'>"+DICT_Factories_SYMBOLS[factory]+"</span></div><br /> \
				<table> \
					<tr> \
						<td>"+DICT_Factories_SYMBOLS[factory]+": <span id='stock_"+factory+"'>"+display_number(DICT_Factories_DYNAMIC[factory][4])+"</span></td> \
						<td><div class='Cadre_de_barre_de_progression'> \
								<div id='progress_bar_production_"+factory+"' class='Niveau_de_barre_de_progression'></div> \
								<div class='"+color_progress_bar+"'>"+display_text_progress_bar+"</div> \
								<div class='bordure_barre_de_progression'></div> \
							</div></td> \
						<td>Gains: <span id='average_gains_"+factory+"'>"+display_number(average_gains_per_hour_factory(factory))+"</span> "+DICT_Factories_SYMBOLS[factory]+" / hour</td> \
					</tr>";
		
		if (DICT_Factories_DYNAMIC[factory][3] > DICT_Factories_DYNAMIC[factory][0]) { // if an upgrade is ongoing
			display_text_progress_bar = '';
			color_progress_bar = 'text_progress_bar_green';
			if (current_level > DICT_Factories_DYNAMIC[factory][0] + DICT_Deals['Beyond limits'][2]) { // if production is ongoing
				var time_left = (factory_total_time_to_upgrade(factory, current_level) - DICT_Factories_DYNAMIC[factory][2]) / multiplicator_speed_factory(factory, true);
				display_text_progress_bar = "Level "+current_level+": <span id='upgrade_time_"+factory+"'>"+display_time(time_left)+"</span>.";
			}
			else {
				display_text_progress_bar = "Upgrade to level "+(Number(DICT_Factories_DYNAMIC[factory][6])+DICT_Deals['Beyond limits'][2])+" waiting.";
				color_progress_bar = 'text_progress_bar_orange';
			}
			factory_display += " \
					<tr> \
						<td>Upgrade:</td> \
						<td><div class='Cadre_de_barre_de_progression'> \
								<div id='progress_bar_upgrade_"+factory+"' class='Niveau_de_barre_de_progression'></div> \
								<div class='"+color_progress_bar+"'>"+display_text_progress_bar+"</div> \
								<div class='bordure_barre_de_progression'></div> \
							</div> \
						<td></td> \
					</tr>";
		}
		factory_display += "</table>" ;
				
		var up_to_date_k;
		for (var k = 1; k < 5; k++) {
			up_to_date_k = k;
			if (DICT_Deals['Beyond limits'][2] == 1) {up_to_date_k -= 1;}
			var color_class; // determines the color of the button
			var factory_tooltip = display_factory_tooltip(factory, current_level, k);

			if (current_level == k) { // ongoing creation of an item or upgrading, yellow button
				color_class = 'current_factory';
				factory_display += "<button id='ID_"+factory+"_level_"+k+"' class='tooltip factory_level level_"+k+" "+color_class+"' onmouseout='display_reset_factory_level_tooltip(\""+factory+"\", \""+current_level+"\", \""+k+"\")' onmousedown='activate_deactivate_factory_level(\""+factory+"\", \""+k+"\", \""+false+"\")'>"+factory_tooltip+"</button>";
			}
			else if (DICT_Factories_DYNAMIC[factory][0] >= up_to_date_k) { // if the max level is higher than or equal to the button but the button is not active, display it green with "activate" function
				color_class = 'activable_factory';
				factory_display += "<button id='ID_"+factory+"_level_"+k+"' class='tooltip factory_level level_"+k+" "+color_class+"' onmouseout='display_reset_factory_level_tooltip(\""+factory+"\", \""+current_level+"\", \""+k+"\")' onmousedown='activate_deactivate_factory_level(\""+factory+"\", \""+k+"\")'>"+factory_tooltip+"</button>";
			}
			else if (up_to_date_k > DICT_Factories_DYNAMIC[factory][3]) { // if the current level is lower than the button, and the max level is lower than the button: display a locked button
				color_class = 'locked_factory';
				factory_display += "<button id='ID_"+factory+"_level_"+k+"' class='tooltip factory_level level_"+k+" "+color_class+"' onmouseout='display_reset_factory_level_tooltip(\""+factory+"\", \""+current_level+"\", \""+k+"\")' onmousedown='buy_or_upgrade_factory(\""+factory+"\", \""+up_to_date_k+"\")'>"+factory_tooltip+"</button>";
			}
			else { // if an upgrade has been bought but is not completed yet, blue button
				color_class = 'upgrade_waiting';			
				factory_display += "<button id='ID_"+factory+"_level_"+k+"' class='tooltip factory_level level_"+k+" "+color_class+"' onmouseout='display_reset_factory_level_tooltip(\""+factory+"\", \""+current_level+"\", \""+k+"\")' onmousedown='activate_deactivate_factory_level(\""+factory+"\", \""+k+"\")'>"+factory_tooltip+"</button>";
			}
		}
			// gains per harvest: put it in a tooltip of "average gains per second".
			// period of harvest: put it in a tooltip of "average gains per second".
		factory_display +=
				"<span class='description_button tooltip'>?<span class='tooltip_description LEFT_tooltip_text'>"+DICT_Factories_DESCRIPTIONS[factory]+"</span></span> \
			</div>";
		
		document.getElementById('ID_'+factory).outerHTML = factory_display;
		if (factory == "Spaceships") {document.getElementById('ID_'+factory).innerHTML += "<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />";} // otherwise, tooltips are out of screen
		
		// START - "Beyond limits" deal management
		if (DICT_Deals['Beyond limits'][2] == 0) {
			document.getElementById("ID_"+factory+"_level_4").style.display = "none";
		}
		else {
			document.getElementById("ID_"+factory+"_level_4").style.display = "initial";
			document.getElementById("ID_"+factory+"_level_"+(DICT_Factories_DYNAMIC[factory][0]+1)).style.borderColor = "#ADE";
		}
		// END - "Beyond limits" deal management
		
		display_progress_bar_factory("progress_bar_production_"+factory, factory, current_level, false); // display production bar
		display_progress_bar_factory("progress_bar_upgrade_"+factory, factory, (Number(DICT_Factories_DYNAMIC[factory][6])+Number(DICT_Deals['Beyond limits'][2])), true); // display upgrade bar.
	}
	else {
		var requirements_and_locked_costs = display_requirements_building(DICT_Factories_UPGRADE_COSTS, factory, 1);
		var requirements = requirements_and_locked_costs[0];
		var locked_costs = requirements_and_locked_costs[1];
		
		var price_in_dollars = "&nbsp;$ "+display_number(DICT_Factories_UPGRADE_COSTS[factory][1][0], true);
		
		var costs = "<table class='costs_table'>";
		var factory_name;
		var stock;
		var stock_amount_required;
		var m = 1;
		for (var factory_name in DICT_Factories_SYMBOLS) {
			if (DICT_Factories_UPGRADE_COSTS[factory][1][m] > 0) {
				costs += "<tr><td>"+factory_name+"</td>\
							<td><span class='stock_cost_"+factory_name+"'>"+display_number(DICT_Factories_DYNAMIC[factory_name][4])+"</span> / "+display_number(DICT_Factories_UPGRADE_COSTS[factory][1][m], true)+" "+DICT_Factories_SYMBOLS[factory_name]+"</td></tr>";
			}
			m++;
		}
		costs += "</table>";
		
		var buy_button_class = "buy_building_button";
		if (locked_costs == true) {requirements = ""; price_in_dollars = ""; costs = "";}
		else if (DICT_Factories_DYNAMIC[factory][0] < DICT_Factories_DYNAMIC[factory][5]) { // if the building is frozen due to labo downgrade
			price_in_dollars = "";
			costs = "";
			buy_button_class = "buy_building_frozen_button";
		}
		
		document.getElementById('ID_'+factory).outerHTML = 
			"<div id='ID_"+factory+"' class='factory'><span class='buy_upgrade_span'><button class='"+buy_button_class+"' onclick='buy_or_upgrade_factory(\""+factory+"\", "+1+")'>"+requirements+"<span class='locked_price'>&#x1F512;"+price_in_dollars+"</span>"+costs+"</button></span></div>";
	}
}

function display_all_factories() {for (var i in DICT_Factories_DYNAMIC) {display_factory(i)};}

function display_progress_bar_factory(ID_bar, factory, level, upgrade=false) {
	var time_necessary_to_complete;
	if (upgrade == true) {
		if (DICT_Factories_DYNAMIC[factory][3] > DICT_Factories_DYNAMIC[factory][0]) { // no, you can't simplify and put this in the previous "if" statement
			time_necessary_to_complete = factory_total_time_to_upgrade(factory, level);
			document.getElementById(ID_bar).style.width = Math.min(1, DICT_Factories_DYNAMIC[factory][2]/time_necessary_to_complete)*100 + '%';
		}
	}
	else { // if production is ongoing
		time_necessary_to_complete = factory_total_time_to_produce(factory);
		document.getElementById(ID_bar).style.width = Math.min(1, DICT_Factories_DYNAMIC[factory][1]/time_necessary_to_complete)*100 + '%';
	}
}

function display_time_upgrade_bar_factory(factory, level) {
	var time_left = (factory_total_time_to_upgrade(factory, level) - DICT_Factories_DYNAMIC[factory][2]) / multiplicator_speed_factory(factory, true);
	document.getElementById("upgrade_time_"+factory).innerHTML = display_time(time_left);
}

function display_factory_tooltip(factory, level, k) {
	var up_to_date_k = k;
	if (DICT_Deals['Beyond limits'][2] == 1) {up_to_date_k -= 1;}
	if (level == k) {
		return "<span id='TOOLTIP_"+factory+"_level_"+k+"' class='LEFT_tooltip_text larger_tooltip'>Active, "+display_number(factory_necessary_prostitutes(factory, up_to_date_k), true)+" prostitutes are working.<br />"+display_tooltip_artworks_trained(factory)+"</span>";
	}
	
	else if (DICT_Factories_DYNAMIC[factory][0] >= up_to_date_k) { // if the max level is higher than or equal to the button
		return "<span id='TOOLTIP_"+factory+"_level_"+k+"' class='LEFT_tooltip_text larger_tooltip'>You need "+display_number(factory_necessary_prostitutes(factory, up_to_date_k), true)+" inactive prostitutes to run your factory at this level.</span>";					
	}
	
	else if (up_to_date_k > DICT_Factories_DYNAMIC[factory][3]) { // if the current level is lower than the button, and the max level is lower than the button: display a locked button
		var upgrade_cost = "<br /><br />Upgrade cost:"; // initialization of the string
		if (up_to_date_k < 4) {
			upgrade_cost += "<br />"+display_number(DICT_Factories_UPGRADE_COSTS[factory][up_to_date_k][0], true)+" $"; // indicate the price in dollars
			var m = 1;
			for (var n in DICT_Factories_SYMBOLS) {
				if (DICT_Factories_UPGRADE_COSTS[factory][up_to_date_k][m] > 0) {
					upgrade_cost += "<br />"+display_number(DICT_Factories_UPGRADE_COSTS[factory][up_to_date_k][m], true)+" "+DICT_Factories_SYMBOLS[n];
				}
				m++;
			}
			upgrade_cost += "<br />"+display_time(factory_total_time_to_upgrade(factory, k) / multiplicator_speed_factory(factory, true)); // time to upgrade
		}
		return "<span id='TOOLTIP_"+factory+"_level_"+k+"' class='LEFT_tooltip_text larger_tooltip'>You need "+display_number(factory_necessary_prostitutes(factory, up_to_date_k), true)+" inactive prostitutes to upgrade this factory to level "+k+"."+upgrade_cost+"</span>";
	}
	
	else { // if an upgrade has been bought but is not completed yet
		return "<span id='TOOLTIP_"+factory+"_level_"+k+"' class='LEFT_tooltip_text larger_tooltip'>You need "+display_number(factory_necessary_prostitutes(factory, up_to_date_k), true)+" inactive prostitutes to resume upgrading this factory to level "+k+".</span>";				
	}
}

function display_reset_factory_level_tooltip(factory, level, k) {
	document.getElementById("TOOLTIP_"+factory+"_level_"+k).outerHTML = display_factory_tooltip(factory, level, k);
}

function display_temple() {
	document.getElementById("Body_Temple").innerHTML = "\
	  <div> <br /> \
		"+display_number(DICT_attributions["Temple"], true)+" &#x269C;&nbsp; \
		<button class='round_button plus_minus_button' onclick='allocate_deallocate_prostitute(\"Temple\")'>+</button> \
		<br /><br /> \
		<div id='cadre_de_barre_de_progression_worshipers'> \
			<div id='progress_bar_worshipers'> <span id='image_progress_bar_worshipers'>&#x13020</span> </div> \
		</div> \
		"+display_genitals_management()+" \
		<br /><br /><br /><br /><br /><br /><br /> \
		<span id='inactive_active_worshipers'></span>. \
	  </div> \
	  <br /> \
	  <table id='table_upgrades_temple'> \
		"+display_upgrades_temple()+" \
	  </table>";
	display_inactive_active_worshipers()
	// vitesse de progression : standard * prostituees allouees * bonus / (8 000 000 000 - nombre actuel d'adorateurs)
}

function display_stock_genitals_temple_button() {
	var button_color = "";
	if (autotransfer_genitals) {button_color = " activated_button"};
	return "<button class='ID_autotransfer_genitals tooltip arrow_button round_button"+button_color+"' onmousedown='collect_genitals(); FUNC_autotransfer_genitals();'>&#x2B9E<span class='DOWN_tooltip_text'>Use your divine powers to transfer genitals from the God World to the Human World.</span></button>";
}

function display_time_left_genitals() {
	return display_time(LIST_worshipers[1] / multiplicator_speed_worshipers() * genitals_stored - (LIST_worshipers[2] / multiplicator_speed_worshipers()));
}

function display_genitals_management() {
	var color_transfer = "";
	if (autotransfer_genitals) {color_transfer = " activated_button";}
	var description_text = "Humans have an odd fascination for genitals. And you can build plenty of them, how convenient is that? \
			Store genitals, send prostitutes to deal them as fetiches, and guide humans into becoming devoted worshipers of your cult!";
	var return_this = " \
		<div id='genitals_window'> \
			<br /> \
			God World genitals: <span id='genitals_count'>"+display_number(energy_building_DYNAMIC[9][5])+"</span> \
			<button class='ID_autotransfer_genitals tooltip arrow_button round_button"+color_transfer+"' onclick='collect_genitals(); FUNC_autotransfer_genitals();'>&#x2B9E<span class='DOWN_tooltip_text'>Use your divine powers to transfer genitals from the God World to the Human World.</span></button> \
			Temple genitals: <span id='span_genitals_stored'>"+display_number(genitals_stored)+"</span> \
			<br />If the deal Threat isn't sealed, you will be out of genitals in:<br /> <span id='time_left_genitals'>"+display_time_left_genitals()+"</span>.\
			<span class='description_button tooltip'>?<span class='tooltip_description LEFT_tooltip_text'>"+description_text+"</span></span> \
		</div>";
	return return_this
}

function display_upgrades_temple() {
	var upgrades_temple = "<tr> \
								<th>Prayers</th> \
								<th>Level</th> \
								<th>Worshipers</th> \
								<th>Completion percentage</th> \
								<th>Time to next level</th> \
								<th></th> \
								<th></th> \
							</tr>";
	var time_left;
	for (var i in DICT_Temple_upgrades) {
		time_left = "-";
		if (DICT_Temple_upgrades[i][0] > 0) {
			time_left = display_time((DICT_Temple_upgrades[i][1] * Math.pow(DICT_Temple_upgrades[i][2], DICT_Temple_upgrades[i][5]) - DICT_Temple_upgrades[i][3]) / Math.max(1, multiplicator_upgrades_temple(i)));
		}
		if (DICT_Temple_upgrades[i][5] < DICT_Temple_upgrades[i][4]) { // if max level not reached yet
			upgrades_temple +=
				"<tr class='tooltip'> \
					<td>"+i+"<span class='TOP_tooltip_text'>"+DICT_Temple_upgrades[i][6]+"</span></td> \
					<td>"+DICT_Temple_upgrades[i][5]+"&nbsp;/&nbsp;"+DICT_Temple_upgrades[i][4]+"</td> \
					<td>"+display_number(DICT_Temple_upgrades[i][0])+"</td> \
					<td>"+display_number(DICT_Temple_upgrades[i][3] / (DICT_Temple_upgrades[i][1] * Math.pow(DICT_Temple_upgrades[i][2], DICT_Temple_upgrades[i][5])) * 100)+" % </td> \
					<td>"+time_left+"</td> \
					<td><button class='round_button plus_minus_button' onmousedown=\"allocate_deallocate_worshiper('"+i+"', "+false+")\">-</button></td> \
					<td><button class='round_button plus_minus_button' onmousedown=\"allocate_deallocate_worshiper('"+i+"')\">+</button></td> \
				</tr>";
		}
		else {
			upgrades_temple +=
				"<tr class='tooltip'> \
					<td><span style='color:green'>"+i+"</span><span class='TOP_tooltip_text'>"+DICT_Temple_upgrades[i][6]+"</span></td> \
					<td><span style='color:green'>"+DICT_Temple_upgrades[i][5]+"&nbsp;/&nbsp;"+DICT_Temple_upgrades[i][4]+"</span></td> \
					<td><span style='color:green'> - </span></td> \
					<td><span style='color:green'> - </span></td> \
					<td><span style='color:green'> - </span></td> \
					<td></td> \
					<td></td> \
				</tr>";
		}
		
	}
	return upgrades_temple
}

function display_inactive_active_worshipers() {
	document.getElementById("inactive_active_worshipers").innerHTML = "Worshipers: "+display_number(inactive_worshipers())+" / "+display_number(LIST_worshipers[0]);
}

function display_progress_bar_worshipers() {document.getElementById('progress_bar_worshipers').style.height = Math.min(1, LIST_worshipers[2]/LIST_worshipers[1])*100 + '%';}

function display_stock_all_body_parts_laboratory() {
	for (var i in energy_building_STALE) {
		if (i < 9) {
			display_stock_body_part_laboratory(i)
		}
	}
}

function display_stock_body_part_laboratory(part) {
	document.getElementById("stock_labo_"+part).innerHTML = " \
		<span id='"+part+"_count'>"+display_number(energy_building_DYNAMIC[part][5])+"</span> "+energy_building_STALE[part][0]+" \
		"+display_stock_body_part_laboratory_button(part)+" \
		<span id='span_"+part+"_stored'>"+display_number(LIST_body_parts_stored[part])+"</span> "+energy_building_STALE[part][0];
}

function display_stock_body_part_laboratory_button(part) { // it used to be included in display_stock_body_part_laboratory(part), but as it's also used in display_line(), I separated it
	var button_color = "";
	if (LIST_autotransfer_body_parts[part]) {button_color = " activated_button"};
	return "<button class='ID_autotransfer_body_parts"+part+" tooltip arrow_button round_button"+button_color+"' onmousedown='collect_body_parts("+part+"); FUNC_autotransfer_body_part("+part+")'>&#x2B9E<span class='DOWN_tooltip_text'>Use your divine powers to transfer body parts from the God World to the Human World.</span></button>";
}

function display_all_laboratory_upgrades() {
	for (var i in DICT_Laboratory_upgrades) {
		display_laboratory_upgrade(i);
	}
}

function display_lab_upgrade_tooltip(up_or_down) {
	if (up_or_down == "up") {return "Upgrade to the next level."}
	else {return "Downgrade to the previous level."}
}

function display_reset_upgrade_tooltip(upgrade) {
	document.getElementById("TOOLTIP_"+DICT_Laboratory_upgrades[upgrade][5]).innerHTML = display_lab_upgrade_tooltip(upgrade);
}

function display_laboratory_upgrade(upgrade) {
	var list_items_to_upgrade = "";
	for (var j in DICT_Laboratory_upgrades[upgrade][2]) {
		list_items_to_upgrade += display_number(cost_items_upgrade_laboratory(upgrade, j), true)+" "+energy_building_STALE[j][0]+" | ";
	}
	
	document.getElementById('ID_'+upgrade).outerHTML = 
		"<div id='ID_"+upgrade+"' class='"+DICT_Laboratory_upgrades[upgrade][3]+"'> \
			<span class='bold'>"+upgrade+"</span> <span style='font-style:italic'>level "+DICT_Laboratory_upgrades[upgrade][0]+" / 5</span><br /> \
			<span class='description_button tooltip'>?<span class='tooltip_description LEFT_tooltip_text'>"+DICT_Laboratory_descriptions[upgrade][DICT_Laboratory_upgrades[upgrade][0]]+"<br /><br />"+DICT_Laboratory_descriptions_addition[upgrade]+"</span></span> \
			Cost to upgrade: $"+display_number(cost_dollars_upgrade_laboratory(upgrade), true)+".<br /> \
			Items cost to upgrade: "+list_items_to_upgrade+"<br />\
			<button class='tooltip' onmouseout='display_reset_upgrade_tooltip(\""+upgrade+"\")' onclick=\"upgrade_laboratory('"+upgrade+"')\">Upgrade<span id='TOOLTIP_"+DICT_Laboratory_upgrades[upgrade][5]+"' class='tooltip_talent TOP_tooltip_text'>"+display_lab_upgrade_tooltip("up")+"</span></button> \
			<button class='tooltip' onclick=\"downgrade_laboratory('"+upgrade+"')\">Downgrade<span id='TOOLTIP_"+DICT_Laboratory_upgrades[upgrade][5]+"' class='tooltip_talent TOP_tooltip_text'>"+display_lab_upgrade_tooltip("down")+"</span></button> \
		</div>";
	document.getElementById(DICT_Laboratory_upgrades[upgrade][5]).innerHTML = display_number(100*(multiplicator_laboratory(upgrade)-1));
}

function display_all_schools() {
	for (var i in DICT_Schools) {
		display_school(i);
	}
}

function display_school(school) {
	var number = DICT_Schools[school][0];
	if (DICT_Schools[school][2] == 1) {
		var production_speed = production_speed_school(school);
		var type_earned = "&#x1f393";
		var pupils = "";
		var reassign_button = "";
		if (school == "Basics school"){
			var tooltip_content = "If you have inactive trained prostitutes, try to replace your active artworks with them.";
			reassign_button = "<button id='reassign_button' class='tooltip' onclick='reassign_prostitutes()'>Reassign<span class='DOWN_tooltip_text'>"+tooltip_content+"</span></button>";
		}
		else {
			type_earned = "%";
			var max_pupils = (1 + DICT_fundamental_talents['Wide teaching'][3]);
			if (school == "Advanced school") {max_pupils = 2*max_pupils;}
			var tooltip_max_pupils = "Diminishing returns beyond "+max_pupils+" pupils per professor.";
			max_pupils *= DICT_attributions[school+" prof"];
			pupils = "<span class=tooltip>Pupils: "+display_number(DICT_attributions_humans[school+" pupil"]+DICT_attributions[school+" pupil"])+"<span class='TOP_tooltip_text'>"+display_tooltip_artworks_trained(school+" pupil")+"</span></span> \
					/ <span class=tooltip>"+display_number(max_pupils, true)+"<span class='TOP_tooltip_text'>"+tooltip_max_pupils+"</span></span> \
					<button class='round_button plus_minus_button' onmousedown='allocate_deallocate_prostitute(\""+school+"\", false, \" pupil\")'>-</button> \
					<button class='round_button plus_minus_button' onmousedown='allocate_deallocate_prostitute(\""+school+"\", true, \" pupil\")'>+</button>";
		}
		document.getElementById('School_'+number).innerHTML = 
			"<span class='bold'>"+school+"</span><br /> \
			<span class='description_button tooltip'>?<span class='tooltip_description LEFT_tooltip_text'>"+DICT_Schools_descriptions[school]+"</span></span> \
			Professors: "+display_number(DICT_attributions[school+" prof"], true)+". <button class='round_button plus_minus_button' onmousedown='allocate_deallocate_prostitute(\""+school+"\", true, \" prof\")'>+</button>"+reassign_button+"<br /> \
			"+pupils+"<br />\
			Bonus earned: <span id='bonus_school_"+DICT_Schools[school][14]+"'>"+display_number(bonus_earned_school(school))+"</span> "+type_earned+". \
			Production: <span id='production_school_"+DICT_Schools[school][14]+"'>"+display_number(production_speed, true)+"</span> "+type_earned+" / hour";
	}
	else {
		var requirements_and_locked_costs = display_requirements_building(DICT_Schools, school, 6);
		var requirements = requirements_and_locked_costs[0];
		var locked_costs = requirements_and_locked_costs[1];
		var all_levels_validated = requirements_and_locked_costs[2];
		
		var costs = "<table class='costs_table'>\
						<tr><td>$"+display_number(DICT_Schools[school][4], true)+"</td> \
						<td>"+display_number(DICT_Schools[school][5])+" &#x269C;</td></tr>";
		var factory_name;
		var stock;
		var stock_amount_required;
		for (var i in DICT_Schools[school][12]) {
			factory_name = DICT_Schools[school][12][i][0];
			stock = DICT_Factories_DYNAMIC[factory_name][4];
			stock_amount_required = DICT_Schools[school][12][i][1];
			costs += "<tr><td>"+factory_name+"</td>\
							<td><span class='stock_cost_"+factory_name+"'>"+display_number(stock)+"</span> / "+display_number(stock_amount_required, true)+"</td></tr>";
		}
		costs += "</table>";

		var buy_button_class = "buy_building_button";		
		if (locked_costs == true) {requirements = ""; costs = "";}
		else if (DICT_Schools[school][2] < DICT_Schools[school][13]) { // if the building is frozen due to labo downgrade
			costs = "";
			buy_button_class = "buy_building_frozen_button";
		}
		
		document.getElementById('School_'+number).innerHTML = 
			"<span class='buy_upgrade_span'><button class='"+buy_button_class+"' onclick='buy_school(\""+school+"\")'>"+requirements+"&#x1F512"+costs+"</button></span>";
	}
}

function display_tooltip_artworks_trained(building) {
	var precision_display_artworks_trained = "";
	if (DICT_Schools['Basics school'][2] == 1) {
		precision_display_artworks_trained = "\
			"+display_number(DICT_attributions[building])+"&nbsp;&#x269C;<br />\
			"+display_number(DICT_attributions_humans[building])+"&nbsp;&#x1f393;";
	}
	return precision_display_artworks_trained
}

function display_influence_points() {
	document.getElementById("influence_points_value").innerHTML = "<span class='ressource_symbol'>&#300;</span>"+display_number(influence_points)+"<span class='DOWN_tooltip_text'>The completion speed of your lobbies is multiplied by your Influence Points.</span>";
}

function display_lobby(page=lobby_page) {
	var max_page_number_display = max_page_lobby() + 1;
	document.getElementById("display_page_lobby").innerHTML = lobby_page+1+" / "+max_page_number_display;
	var text_Lobby = "<div style='text-align:center'><span class='bold'>"+LIST_Lobby[page][0]+"</span><br /><br />"+LIST_Lobby_descriptions[page]+"</div>";
	document.getElementById("text_Lobby").innerHTML = text_Lobby;
	var infos_bar = "";
	if (page < 3) {
		if (LIST_Lobby[page][1] == 0) {
			infos_bar = "<button class='round_button plus_minus_button' onclick='allocate_deallocate_prostitute(\"Lobby\", false)';>-</button> <button class='round_button plus_minus_button' onclick='allocate_deallocate_prostitute(\"Lobby\", true)'>+</button> ";
			infos_bar += "<span class='tooltip'>"+display_number((DICT_attributions_humans['Lobby'] + DICT_attributions['Lobby']), true)+" &#x269C<span class='TOP_tooltip_text'>"+display_tooltip_artworks_trained("Lobby")+"</span></span>";
			infos_bar += " | ";
			infos_bar += display_speed_and_cost_lobby(page);
			document.getElementById("display_gains_Lobby").innerHTML = "X&nbsp;"+display_number(LIST_Lobby[page][3], true);
			document.getElementById("display_gains_Lobby").style.color = "#C00";
			document.getElementById("display_gains_Lobby").style.opacity = 0.3;		
			document.getElementById("Cadre_de_barre_de_progression_Lobby").style.backgroundColor = "#FDF";
			document.getElementById("bordure_barre_de_progression_Lobby").style.borderColor = "#404";
			document.getElementById("top_left_circle_Lobby").style.backgroundColor = "#404";
			document.getElementById("top_right_circle_Lobby").style.backgroundColor = "#404";
			document.getElementById("bottom_left_circle_Lobby").style.backgroundColor = "#404";
			document.getElementById("bottom_right_circle_Lobby").style.backgroundColor = "#404";
		}
		else {
			document.getElementById("display_gains_Lobby").innerHTML = "X&nbsp;"+display_number(LIST_Lobby[page][3], true);
			document.getElementById("display_gains_Lobby").style.color = "green";
			document.getElementById("display_gains_Lobby").style.textShadow = "1px 1px black";
			document.getElementById("display_gains_Lobby").style.opacity = 1;
			document.getElementById("Cadre_de_barre_de_progression_Lobby").style.backgroundColor = "#BFB";
			document.getElementById("bordure_barre_de_progression_Lobby").style.borderColor = "green";
			document.getElementById("top_left_circle_Lobby").style.backgroundColor = "green";
			document.getElementById("top_right_circle_Lobby").style.backgroundColor = "green";
			document.getElementById("bottom_left_circle_Lobby").style.backgroundColor = "green";
			document.getElementById("bottom_right_circle_Lobby").style.backgroundColor = "green";			
		}
		document.getElementById("infos_bar_Lobby").innerHTML = infos_bar;
	}
	else { // if it's the final page
		document.getElementById("display_gains_Lobby").innerHTML = "MAX&nbsp;LEVEL";
		document.getElementById("display_gains_Lobby").style.color = "green";
		document.getElementById("display_gains_Lobby").style.textShadow = "1px 1px black";
		document.getElementById("display_gains_Lobby").style.opacity = 1;
		document.getElementById("Cadre_de_barre_de_progression_Lobby").style.backgroundColor = "#BFB";
		document.getElementById("bordure_barre_de_progression_Lobby").style.borderColor = "green";
		document.getElementById("top_left_circle_Lobby").style.backgroundColor = "green";
		document.getElementById("top_right_circle_Lobby").style.backgroundColor = "green";
		document.getElementById("bottom_left_circle_Lobby").style.backgroundColor = "green";
		document.getElementById("bottom_right_circle_Lobby").style.backgroundColor = "green";	
	}
	display_influence_points();
}

function display_speed_and_cost_lobby(page) {
	var the_info_bar = "<span id='time_running_infos_bar_lobby'>";
	the_info_bar += " -"+display_number(price_per_millisecond_lobby()*3600*1000, true)+" $ / hour";
	if (DICT_attributions_humans['Lobby'] + DICT_attributions['Lobby'] > 0) {
		the_info_bar += " | "+display_time(((LIST_Lobby[page][7] - LIST_Lobby[page][6])*LIST_Lobby[page][5] - LIST_Lobby[page][2]) / completion_per_millisecond_lobby());
	}
	the_info_bar += "</span>";
	return the_info_bar;
}

function display_progress_bar_lobby() {
	var page = max_page_lobby();
	document.getElementById("progress_bar_lobby").style.width = display_number(LIST_Lobby[page][6] / LIST_Lobby[page][7] * 100)+ '%';
}

function display_credits_confirmation() {
	document.getElementById("confirm_box_credits").innerHTML = "<br />\
	Backgrounds: - <a href='https://www.freevector.com/free-star-background-vector--19055'>FreeVector.com</a><br />\
	- <a href='https://www.freepik.com'>https://www.freepik.com</a><br /><br />\
	- Musics: Maksymilian Jednor&#x00F3;g, Jon Presstone, PGN Music, Bensound, Storyblocks.<br /><br />\
	- Testing: Benjamin Serre (he didn't test that much to be honest, but he's a friend, we don't want to upset him by not crediting him, do we?)<br /><br />\
		<button class='activated_button' onclick='confirm_credits(true)'>Whatever!</button>";
}

function display_welcome_offer_confirmation() {
	document.getElementById("confirm_box_welcome_offer").innerHTML = "<br /><br >THERE IS NONE! YOU PAY FULL PRICE!<br /><br />Don't you remember who I am?!<br /><br /><br /> \
		<button class='wannabe_activated_button' onclick='confirm_welcome_offer(true)'>&#x2639;</button>";
}

function display_ruin_everything_confirmation() {
	var style_gains = 0;
	if (dollars > money_saved()) {style_gains = convert_dollars_into_style_points();}
	var prestige_informations = "";
	var influence_informations = "";
	if (total_ruin_everything > 0) {
		prestige_informations = "<br /><br />&#x1D4AB;restige Points earned: "+display_number(prestige_points_to_give())+"&nbsp;&#x1D4AB;";
	}
	if (DICT_dollars_buildings_DYNAMIC['Lobby'][1] == 1) {
		influence_informations = "<br /><br />&#300;nfluence Points earned: "+display_number(influence_points_to_give(dollars))+"&nbsp;&#300;";
	}
	var prostitutes_not_saved_warning = "";
	if (DICT_artwork['total_artworks'] > DICT_fundamental_talents['Life saver'][3] &&
		DICT_fundamental_talents['Life saver'][3] > 0 &&
		DICT_fundamental_talents['Life saver'][3] != DICT_fundamental_talents['Life saver'][4]) {
		prostitutes_not_saved_warning = "<br />WARNING: Some artworks will die if you don't spend more &#423;tyle Points in Life Saver.";
	}
	document.getElementById("confirm_box_ruin_everything").innerHTML = "\
		<br /><br />You'll lose almost everything in the Human World to convert your dollars into style points. Are you sure? \
		<br /><br />&#423;tyle Points earned: "+display_number(style_gains)+"&nbsp;&#423; \
		"+prestige_informations+"\
		"+influence_informations+"\
		"+prostitutes_not_saved_warning+"<br /><br />\
		<button class='wannabe_activated_button' onclick='ruin_everything(); confirm_ruin_everything(true)'>Confirm</button>&nbsp;&nbsp;&nbsp;&nbsp; \
		<button onclick='confirm_ruin_everything(true)'>Cancel</button>";
}

function display_talent_tooltip(talent) {
	if (talent_authorization(talent) == false) {
		var number_of_required_talent_points = DICT_fundamental_talents[talent][5][Object.keys(DICT_fundamental_talents[talent][5])[0]]; // a horribly complicated way to say: "the first value written in the dictionary"
		return ("What kind of marvelous treasure could be waiting behind these interrogation marks? <br /> \
			Buy <b>"+number_of_required_talent_points+"</b> talent point(s) in the previous talent(s) to unveil the mystery!");
	}
	else {
		var additional_infos = "";
		if (talent == "Artwork" && DICT_fundamental_talents[talent][3] > 0) {
			var s1 = " turns.";
			var s2 = " turns.";
			if (DICT_fundamental_talents[talent][3] == 27) {s2 = " turn.";}
			else if (DICT_fundamental_talents[talent][3] == 28) {s1 = " turn."; s2 = "";}
			additional_infos = "Current: "+specific_number_modifier_upgrade("Artwork")+s1+"<br />Next: "+specific_number_modifier_upgrade("Artwork", 1)+s2+"<br />";
		}
		else if (talent == "Energy fountain") {additional_infos = "Current: "+display_number(Math.round(specific_number_modifier_upgrade("Energy fountain")*100), true)+" %.<br />Next: "+display_number(Math.round(specific_number_modifier_upgrade("Energy fountain", true)*100), true)+" %.<br />";}
		else if (talent.startsWith("Concentrated")) {additional_infos = "Current: "+display_number(concentrated_multiplicator(DICT_fundamental_talents[talent][7])*100, true)+"%.<br />Next: "+display_number(concentrated_multiplicator(DICT_fundamental_talents[talent][7], 1)*100, true)+"%.<br />";}
		
		else if (talent == "Life saver") {additional_infos = "Current: "+display_number(life_saver_effect(DICT_fundamental_talents['Life saver'][3]))+" &#x269C; saved.<br />Next: "+display_number(life_saver_effect(DICT_fundamental_talents['Life saver'][3]+1))+" &#x269C; saved.<br />";}
		else if (talent == "Money saver") {additional_infos = "Current: $"+display_number(money_saved(), true)+" saved.<br />Next: $"+display_number(10*money_saved(), true)+" saved.<br />";}
		else if (talent == "Quick persuasion") {additional_infos = "Current exponent: "+display_number(lobby_prostitutes_decrementor+specific_number_modifier_upgrade(talent), true)+".<br />Next exponent: "+display_number(lobby_prostitutes_decrementor+specific_number_modifier_upgrade(talent, 1), true)+".<br />";}
		else if (talent == "Scaling") {additional_infos = "Current exponent: "+display_number(lobby_price_incrementor-specific_number_modifier_upgrade(talent), true)+".<br />Next exponent: "+display_number(lobby_price_incrementor-specific_number_modifier_upgrade(talent, 1), true)+".<br />";}
		else if (talent == "Tip" ||
				 talent == "Real esthete" ||
				 talent == "Real estate" ||
				 talent == "Classy school") {
			additional_infos = "Current: "+display_number(specific_number_modifier_upgrade(talent)*100, true)+"%.<br />Next: "+display_number(specific_number_modifier_upgrade(talent, 1)*100, true)+"%.<br />";
		}
		
		var symbol = '&#x2206';
		if (DICT_fundamental_talents[talent][6] == 'style') {symbol = '&#423;';}
		if (talent == 'Artwork' && energy_building_DYNAMIC[9][3] == 0) {
			return ("It takes something very special to unlock this talent. What could it be?");
		}
		else {
			var cost = "Cost: "+display_number(fundamental_talent_cost(talent), true)+"&nbsp;"+symbol+"<br />";
			if (DICT_fundamental_talents[talent][3] == DICT_fundamental_talents[talent][4]) {cost = "";} // if level max, no cost.
			return ("<b>"+talent+"</b> <br /> \
				"+DICT_fundamental_talents[talent][3]+" / "+DICT_fundamental_talents[talent][4]+" <br /> \
				"+cost+additional_infos+"<br /> \
				"+DICT_fundamental_talents_DESCRIPTIONS[talent]);
		}
	}
}

function display_reset_talent_tooltip(talent) {document.getElementById("TOOLTIP_"+DICT_fundamental_talents[talent][0]).innerHTML = display_talent_tooltip(talent);}

function display_game_over() {
	document.getElementById("Mysterious_black_square").innerHTML = ' \
	<span id="opened_black_square" onclick="display_front_screen(\'corps_end_screen\', LIST_main_screens)">&nbsp;&nbsp;&nbsp;&nbsp;&#x1F44D;</span>';
}

function display_fundamental_talent(talent) {
	var this_talent;
	var maxed_talent_color = "";
	if (DICT_fundamental_talents[talent][3] >= DICT_fundamental_talents[talent][4]) {maxed_talent_color = "maxed_talent_button";}
	var direction_tooltip = "TOP";
	var LIST_talents_needing_DOWN_tooltip = ["Octogod", "Unstoppable", "Wide teaching", "Classy school", "Quick persuasion", "Scaling"];
	if (talent.startsWith("Concentrated") || LIST_talents_needing_DOWN_tooltip.includes(talent)) {direction_tooltip = "DOWN";}
	if ((talent_authorization(talent) == true && talent != 'Artwork' && DICT_fundamental_talents[talent][6] == 'energy') ||
		(energy_building_DYNAMIC[9][3] == 1 && talent == 'Artwork') ||
		(talent_authorization(talent) == true && total_ruin_everything > 0 && DICT_fundamental_talents[talent][6] == 'style')){
		var highlighted_or_not = "fundamental";
		var glowing = "";
		if (talent == "God repellent" || (energy_building_DYNAMIC[9][3] == 1 && talent == "Artwork") || (talent == "Life saver" && total_ruin_everything > 0)) { // if I want the button to be yellow
			highlighted_or_not = "highlighted";
			if (talent == "God repellent" && DICT_fundamental_talents[talent][3] == 0) {
				glowing = "highlighting_glow";
			}
		}
		this_talent = "<span id='"+DICT_fundamental_talents[talent][0]+"' class='fundamental_talent' onmouseout='display_reset_talent_tooltip(\""+talent+"\");cancel_multiple_add_talent_on_hold(\""+talent+"\")'><button class='"+highlighted_or_not+"_talent_button "+maxed_talent_color+" "+glowing+" tooltip' onmousedown='add_talent(\""+talent+"\");temporize_add_talent_on_hold(\""+talent+"\")' onmouseup='cancel_multiple_add_talent_on_hold(\""+talent+"\")'> "+talent+" <span id='TOOLTIP_"+DICT_fundamental_talents[talent][0]+"' class='tooltip_talent "+direction_tooltip+"_tooltip_text'>"+display_talent_tooltip(talent)+"</span></button></span>";
	}
	else if (DICT_fundamental_talents[talent][6] == 'energy' || total_ruin_everything > 0) {
		this_talent = "<span id='"+DICT_fundamental_talents[talent][0]+"' class='fundamental_talent' onmouseout='display_reset_talent_tooltip(\""+talent+"\")'><button class='fundamental_talent_button "+maxed_talent_color+" tooltip' onclick='add_talent(\""+talent+"\")'> ??? <span id='TOOLTIP_"+DICT_fundamental_talents[talent][0]+"' class='tooltip_talent "+direction_tooltip+"_tooltip_text'>"+display_talent_tooltip(talent)+"</span></button></span>";
	}
	else { // if the talent is a style talent and the tree isn't unlocked yet
		this_talent = "<span id='"+DICT_fundamental_talents[talent][0]+"' class='fundamental_talent style_talent' onmouseout='display_reset_talent_tooltip(\""+talent+"\")'><button class='fundamental_talent_button "+maxed_talent_color+" tooltip' onclick='add_talent(\""+talent+"\")'> ??? <span id='TOOLTIP_"+DICT_fundamental_talents[talent][0]+"' class='tooltip_talent TOP_tooltip_text'>"+display_talent_tooltip(talent)+"</span></button></span>";	
	}
	return this_talent;
}

function display_initial_fundamental_tree() {
	var tree = '';
	for (var talent in DICT_fundamental_talents) {
		tree += display_fundamental_talent(talent);
	}
	document.getElementById("full_tree").innerHTML = tree;
}

function display_initial_style_talents() {
	var LIST_style_links = document.getElementsByClassName("style_link"); // make style tree links visibles
	for (var i=0; i < LIST_style_links.length; i++) {LIST_style_links[i].style.display = 'initial';} // make style tree links visibles
	
	var LIST_style_talents = document.getElementsByClassName("style_talent"); // make style tree buttons visibles
	for (var j=0; j < LIST_style_talents.length; j++) {LIST_style_talents[j].style.display = 'initial';} // make style tree buttons visibles
	document.getElementById("Life_saver").outerHTML = display_fundamental_talent('Life saver');	
}

function display_prestige_points() {
	var TEXT_progress_bar = "";
	if (deal_timer != 0) {
		TEXT_progress_bar = "<div id='Cadre_de_barre_de_progression_prestige' class='Cadre_de_barre_de_progression'> \
			<div id='progress_bar_prestige' class='Niveau_de_barre_de_progression'></div> \
			<div id='text_progress_bar_prestige' class='text_progress_bar_yellow'>"+display_text_progress_bar_prestige()+"</div> \
			<div class='bordure_barre_de_progression'></div> \
		</div>";
	}
	document.getElementById("prestige_points_count").innerHTML = "&#x1D4ABrestige points: "+prestige_points_available()+" / "+prestige_points_total+". "+TEXT_progress_bar;
}

function display_progress_bar_prestige() {
	document.getElementById('progress_bar_prestige').style.width = percentage_completion_deal() + '%';
}

function display_text_progress_bar_prestige() {return (current_deal+": "+display_time(Deal_time - (timestamp() - deal_timer)))}

function display_prestige_deal(deal) {
	var deal_tooltip = display_deal_tooltip(deal);
	var button_color = 'cyan_button';
	if (previous_deals_bought(deal) != true) {button_color = 'locked_button';}
	else if (selected_deal == deal) {button_color = 'activated_button';}
	else if (current_deal == deal) {button_color = 'orange_button';}
	else if (DICT_Deals[deal][2] == 1) {button_color = 'silver_button';}
	var v = DICT_Deals[deal][0]; // god
	var i = DICT_Deals[deal][1]; // position
	document.getElementById("Deal_"+v+"_"+i).outerHTML = " \
		<button id='Deal_"+v+"_"+i+"' class='"+button_color+" tooltip' \
		onclick='click_on_prestige_deal(\""+deal+"\")' onmouseout='display_reset_deal_tooltip(\""+deal+"\")'> \
		"+deal+deal_tooltip+"</button>";
	display_additional_deal_tooltip(deal); // can't be added before without redoing a lot of coding.
}

function display_prestige_deals() {for (var deal in DICT_Deals) {display_prestige_deal(deal)}}

function display_deal_tooltip(deal) {
	var tooltip_size = 'big_tooltip_deal';
	if (deal == "Autoverheat" || deal == "Part-time Artist") {tooltip_size = 'tooltip_deal';}
	var tooltip_content = 'You need to unlock a building in the Human World to unveil this talent.';
	if (DICT_dollars_buildings_DYNAMIC[DICT_Deals[deal][4]][1] == 1) {
		tooltip_content = DICT_Prestige_DESCRIPTIONS[deal];
		if (DICT_Prestige_additionnal_descriptions[deal] != null && DICT_Deals[deal][2] == 1) { // Specific text God of Energy
			tooltip_content += DICT_Prestige_additionnal_descriptions[deal][god_of_energy_upset];
		}
	}
	return "<span id='TOOLTIP_"+deal+"' class='"+tooltip_size+" TOP_tooltip_text'>Price: "+LIST_Prestige_costs[DICT_Deals[deal][1]]+" &#x1D4AB<br /><br />"+tooltip_content+"</span>";
}

function display_additional_deal_tooltip(deal) {
	if (deal == "Body building") {
		if (DICT_Deals["Body building"][2] == 1) {
			document.getElementById("additional_tooltip_body_building").innerHTML = "\
				<br /><br />Idle time: "+display_time(pretty_stored_time*18000000)+".\
				<br />Bonus: + "+display_number(pretty_stored_time*100)+" %.";
		}
	}
	else if (deal == "Conviction") {
		if (DICT_Deals["Conviction"][2] == 1 && DICT_dollars_buildings_DYNAMIC[DICT_Deals[deal][4]][1] == 1) { // if the deal is bought and the description of the tooltip is displayed (lobbies bought)
			document.getElementById("additional_tooltip_conviction").innerHTML = "\
				<br /><br />Bonus: X "+display_number(specific_number_modifier_upgrade("Conviction"))+" $.";
		}
	}
	else if (deal == "Inflation") {
		if (DICT_Deals["Inflation"][2] == 1) {
			document.getElementById("additional_tooltip_inflation").innerHTML = "\
				<br /><br />Idle time: "+display_time(inflation_stored_time)+".\
				<br />Bonus on next click: X "+display_number(1 + inflation_stored_time / inflation_delay)+" $.\
				<br />Current bonus: X "+display_number(specific_number_modifier_upgrade("Inflation"), true)+" $.";
		}
	}
}

function display_reset_deal_tooltip(deal) {
	document.getElementById("TOOLTIP_"+deal).outerHTML = display_deal_tooltip(deal);
	display_additional_deal_tooltip(deal)
}

function display_purchase_tooltip(purchase) {
	var cost = "Cost: "+display_number(DICT_God_of_Extortion[purchase][1], true)+"&nbsp;<span style='color:#FFD700';>"+golden_rings_symbol+"</span><br />";
	var additional_infos = "";
	var description = DICT_God_of_Extortion_DESCRIPTIONS[purchase];
	if (purchase == "Printing machine") {
		additional_infos = "Current: X "+display_number(specific_number_modifier_upgrade(purchase), true)+".<br />Next: X "+display_number(specific_number_modifier_upgrade(purchase, 1), true)+".<br />";
	}
	else if (purchase == "Copyism") {
		additional_infos = "Current: X "+display_number(specific_number_modifier_upgrade(purchase), true)+".<br />Next: X "+display_number(specific_number_modifier_upgrade(purchase, 1), true)+".<br />";
	}
	else if (purchase == "Evil Pact") {
		if (golden_rings_spent > 0 && DICT_God_of_Extortion['Evil Pact'][3] != 1) {
			additional_infos = "Cost: "+display_number(DICT_God_of_Extortion[purchase][1] - golden_rings_spent, true)+"&nbsp;<span style='color:#FFD700';>"+golden_rings_symbol+"</span><br />";
			cost = "<s>"+cost+"</s>";
		}
	}
	else if (purchase == "Transversion" || purchase == "Maximum memoriam" || purchase == "Ephemeral death") {
		if (DICT_dollars_buildings_DYNAMIC['Laboratory'][1] == 0) { // if the lab has never been unlocked
			description = "You need to unlock the 5th building in the Human World to read the description of this SCAM. Don't hesitate to purchase a lot of SCAMs to unlock it faster!<br /><br />He he..."
		}
	}
	if (DICT_God_of_Extortion['Evil Pact'][3] == 1) {cost = "Cost: 0&nbsp;<span style='color:#FFD700';>"+golden_rings_symbol+"</span><br />";}
	return ("<b>"+purchase+"</b> <br /> \
				"+display_number(DICT_God_of_Extortion[purchase][3], true)+" / "+display_number(DICT_God_of_Extortion[purchase][4], true)+" <br /> \
				"+cost+additional_infos+"<br /> \
				"+description);
}

function display_reset_purchase_tooltip(purchase) {document.getElementById("TOOLTIP_"+DICT_God_of_Extortion[purchase][0]).innerHTML = display_purchase_tooltip(purchase);}

function display_purchase(purchase) {
	var DISPLAY_purchase;
	var maxed_talent_color = "";
	var color_button = "locked_purchase_button";
	if (purchase_authorization(purchase)) {
		color_button = "purchase_button";
		if (DICT_God_of_Extortion[purchase][3] >= DICT_God_of_Extortion[purchase][4]) {color_button = "maxed_purchase_button";}
	}
	
	DISPLAY_purchase = "<button id='"+DICT_God_of_Extortion[purchase][0]+"' class='"+color_button+" tooltip' onmouseout='display_reset_purchase_tooltip(\""+purchase+"\")' onclick='buy_purchase(\""+purchase+"\")'>"+purchase+"<span id='TOOLTIP_"+DICT_God_of_Extortion[purchase][0]+"' class='TOP_tooltip_text tooltip_talent'>"+display_purchase_tooltip(purchase)+"</span></button>";
		
	document.getElementById(DICT_God_of_Extortion[purchase][0]).outerHTML = DISPLAY_purchase;
}

function display_god_of_extortion() {
	for (var purchase in DICT_God_of_Extortion) {display_purchase(purchase)}
	display_golden_rings()
}

function display_golden_rings() {
	document.getElementById("golden_rings_value").innerHTML = "<span id='golden_rings_symbol' class='ressource_symbol'>"+golden_rings_symbol+"</span>"+display_number(golden_rings_total-golden_rings_spent)+"<span class='DOWN_tooltip_text'> \
		If you run into a giant mechanic ladybug, your rings will jump around while you desperately try to catch them. \
		<br /><br />Luckily, giant mechanic ladybugs do not exist. And you can't run. Your rings are safe.</span>";
}

function display_1_hour() {
	document.getElementById("value_1_hour").innerHTML = "<span class='ressource_symbol clickable' onclick='use_time_coin(1)'>&#x1F550;</span>"+display_number(coins_1_hour)+"<span class='LEFT_tooltip_text'>Click on the symbol to use a coin and move 1 hour forward instantly.</span>";
}

function display_24_hours() {
	document.getElementById("value_24_hours").innerHTML = "<span class='ressource_symbol clickable' onclick='use_time_coin(24)'>&#x23F0;</span>"+display_number(coins_24_hours)+"<span class='LEFT_tooltip_text'>Click on the symbol to use a coin and move 24 hours forward instantly.</span>";
}

function display_toggle_skins() {
	toggled_skins ^= true;
	var displaying = "";
	if (toggled_skins) {displaying = "initial";}
	for (var menu in DICT_corps_screens) { // display the menus that have been unlocked
		if (DICT_corps_screens[menu][0] == 1) {
			if (DICT_God_of_Extortion['Discount skins'][3] == 1) {
				document.getElementById("change_skin_"+menu.slice(6)).style.display = displaying;
			}
		}
	}
}

function display_skins_interface(broken=false) {
	if (!broken) {
		if (DICT_God_of_Extortion['Discount skins'][3] == 1) {
			document.getElementById("discount_skins_main_button").style.display = "initial";
			for (var menu in DICT_corps_screens) {
				if (DICT_corps_screens[menu][0] == 1) {
					if (DICT_Deals['4th wall'][2] == 1) {
						if (toggled_skins) {
							document.getElementById("change_skin_"+menu.slice(6)).style.display = "initial";
						}
						var iterations = 0
						while (iterations < (total_skins+1)) { // a bit lazy function, if the computer struggles at launch, optimize it.
							change_skin(menu);
							iterations ++;
						}
					}
				}
			}
		}
	}

	else { //  if (broken) {. This is called when the "4th wall" deal is broken.
		document.getElementById("discount_skins_main_button").style.display = "none";
		for (var menu in DICT_corps_screens) {
			if (DICT_corps_screens[menu][0] == 1) {
				document.getElementById("change_skin_"+menu.slice(6)).style.display = "none";
				var safety = 0;
				while (DICT_corps_screens[menu][2] != 0 && safety < 100) {
					change_skin(menu);
					safety++; // this should never go beyond 100.
				}
				if (safety >= 100) {console.log("ERROR #1: infinite loop when changing skin.");}
			}
		}
	}
}

function display_encyclopedia() {
	document.getElementById("main_buttons_encyclopedia").innerHTML = ""; // reset the content of the buttons to avoid displaying them two times
	document.getElementById("secondary_buttons_encyclopedia").innerHTML = ""; // reset the content of the buttons to avoid displaying them two times
	document.getElementById("displayed_content_encyclopedia").innerHTML = DICT_content_encyclopedia["Default"];
	completion_fundamental_talents_encyclopedia();
	completion_style_talents_encyclopedia();
	completion_god_deals_encyclopedia();
	completion_SCAMs_encyclopedia();
	if (DICT_corps_screens["corps_encyclopedia"][0] == 1) {
		for (var i in DICT_encyclopedia) { // display or do not display the main buttons
			document.getElementById("main_buttons_encyclopedia").innerHTML += "<button id='encyclopedia_"+i+"' class='yellow_button_reversed italic bold' onclick='select_button_encyclopedia(\""+i+"\")'>"+i+"</button> ";
			document.getElementById("encyclopedia_"+i).style.display = 'none';
			for (var j in DICT_encyclopedia[i]) {
				document.getElementById("secondary_buttons_encyclopedia").innerHTML += "<button id='encyclopedia_"+j+"' class='standard_button_reversed' onclick='select_secondary_button_encyclopedia(\""+i+"\", \""+j+"\")'>"+j+"</button> ";
				document.getElementById("encyclopedia_"+j).style.display = 'none';
				if (DICT_encyclopedia[i][j][0] == 1) {
					document.getElementById("encyclopedia_"+i).style.display = 'initial';
					if (DICT_encyclopedia[i][j][1] == 0) {
						document.getElementById("encyclopedia_"+i).className = "orange_button_reversed italic bold";
					}
				}
			}
		}
	}
}

function display_additional_parts_encyclopedia() {
	for (var i in DICT_encyclopedia_additional_parts) {
		if (DICT_encyclopedia_additional_parts[i][0] == 1) { // if the special display is authorized
			if (document.getElementById(DICT_encyclopedia_additional_parts[i][1])) { // if not null. if null, it means this is not the right building, so don't display it's description
				document.getElementById(DICT_encyclopedia_additional_parts[i][1]).style.display = "initial";
			}
		}
	}
}

function select_button_encyclopedia(selected_button) {
	for (var i in DICT_encyclopedia) { // disable the current activated button if there is one
		document.getElementById("encyclopedia_"+i).className = "yellow_button_reversed italic bold";
		for (var j in DICT_encyclopedia[i]) {
			document.getElementById("encyclopedia_"+j).style.display = 'none';
			document.getElementById("encyclopedia_"+j).className = 'standard_button_reversed';
			if (DICT_encyclopedia[i][j][0] == 1 && DICT_encyclopedia[i][j][1] == 0) { // if this button has been discovered but never been clicked
				document.getElementById("encyclopedia_"+i).className = "orange_button_reversed italic bold";
			}
		}
	}
	document.getElementById("encyclopedia_"+selected_button).className = "activated_button_reversed italic bold";
	document.getElementById("displayed_content_encyclopedia").innerHTML = "";
	for (var j in DICT_encyclopedia[selected_button]) {
		if (DICT_encyclopedia[selected_button][j][0] == 1) {
			document.getElementById("encyclopedia_"+j).style.display = 'initial';
			if (DICT_encyclopedia[selected_button][j][1] == 0) { // if this button has never been clicked
				document.getElementById("encyclopedia_"+j).className = 'orange_button_reversed';
			}
		}
	}
}

function select_secondary_button_encyclopedia(main_button, selected_button) {
	for (var j in DICT_encyclopedia[main_button]) { // disable the current activated button if there is one
		document.getElementById("encyclopedia_"+j).className = "standard_button_reversed";
		if (DICT_encyclopedia[main_button][j][1] == 0) { // if this button has never been clicked
			document.getElementById("encyclopedia_"+j).className = 'orange_button_reversed';
		}
	}
	DICT_encyclopedia[main_button][selected_button][1] = 1; // register that this button has been clicked at least once.
	document.getElementById("encyclopedia_"+selected_button).className = "activated_button_reversed";
	document.getElementById("displayed_content_encyclopedia").innerHTML = DICT_content_encyclopedia[selected_button];
	if (["Brothels", "Laboratory", "Schools"].includes(selected_button)) { // special displays for specific brothels, the scientist and the advanced/elite schools
		display_additional_parts_encyclopedia();
	}
}

function display_all_stats() {
	document.getElementById('statistics_table').innerHTML = ""; // empty the table before refilling it
	for (var i in DICT_all_statistics) {
		if (DICT_all_statistics[i][1] == 1) { // if the stat is authorized to be displayed
			if (DICT_all_statistics[i][2] == 1) { // if the stat is a title
				var line_break = "<tr><td></td><td></td></tr><tr><td></td><td></td></tr>";
				if (i == "ID_GENERAL") {line_break = "";} // for the first line, don't break
				document.getElementById('statistics_table').innerHTML += line_break+"<tr> \
					<td class='italic'>"+DICT_all_statistics[i][0]+"</td> \
					<td></td> \
				 </tr>";
			}
			else { // for regular stats
				var tooltip_stat = "";
				if (DICT_all_statistics[i][4] != "") {tooltip_stat = "<span class='TOP_tooltip_text'>"+DICT_all_statistics[i][4]+"</span>";}
				if (i == "ID_total_encounters_with_bully_God") {
					if (total_encounters_with_bully_God >= 1000) {
						tooltip_stat = "<span class='TOP_tooltip_text'>After destroying so much of your work, the Bully God decided to nickname you \"D&R\". Die & Retry.</span>";
					}
				}
				else if (i == "ID_scientist_murders") {
					var tooltip_content = ["",
						"HOW DARE YOU?! I'll be back.",
						"Killing me won't give you anything. No really, it won't. Check the Encyclopedia if you don't believe me!",
						"You're too stubborn. I give up. Whatever, just keep killing me...",];
						var accounted_murders = scientist_murders;
						if (scientist_murders > 3) {accounted_murders = 3;}
						tooltip_stat = "<span class='TOP_tooltip_text'>"+tooltip_content[accounted_murders]+"</span>";
				}
				document.getElementById('statistics_table').innerHTML += "<tr class='tooltip'> \
					<td>"+DICT_all_statistics[i][0]+tooltip_stat+"</td> \
					<td id='"+i+"'>"+DICT_all_statistics[i][3]+"</td> \
				</tr>";
				compute_stat(i);
			}
		}
	}
}

function concentrated_descriptions() { // special function, could be in the variables globales file.
	for (var i in energy_building_STALE) {
		DICT_fundamental_talents_DESCRIPTIONS['Concentrated '+energy_building_STALE[i][1]] = '"Industrialization" and "Quick mix" are disabled for '+energy_building_STALE[i][8]+', \
			but every construction builds '+(energy_building_STALE[i][3]+energy_building_STALE[i][4])+' times more '+energy_building_STALE[i][8]+'. \
			<br />Besides, every '+energy_building_STALE[i][0]+' is converted into '+display_number(energy_building_STALE[i][6], true)+' times more Fundamental Energy,\
			plus '+Math.round((energy_building_STALE[i][7] - 1) * 100)+'% per level.';
	}
}

// END - Display functions

function dragElement(html_element) { // adapted to the tutorial box, would need some adjustments for good compatibility with other boxes
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	html_element.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		html_element.style.cursor = "grabbing";
		document.onmousemove = elementDrag; // call a function whenever the cursor moves:
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		var new_location;
		if (html_element.offsetTop - pos2 > -30) { // prevent excessive movement to the top
			new_location = Math.min(540, html_element.offsetTop - pos2); // prevent excessive movement to the bottom
			html_element.style.top = new_location + "px";
			if (new_location < 12) {html_element.style.zIndex = "1";}
			if (new_location > 120 && LIST_tutorial_dialogues_validation[3] == 0) {next_tutorial_step(3);}
			else {html_element.style.zIndex = "5";}
			tutorial_box_top = new_location;
		}
		if (html_element.offsetLeft - pos1 > -100) { // prevent excessive movement to the left
			new_location = Math.min(350, html_element.offsetLeft - pos1); // prevent excessive movement to the right
			html_element.style.left = new_location + "px";
			tutorial_box_left = new_location;
		}
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		html_element.style.cursor = "grab";
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function completion_fundamental_talents_encyclopedia() {
	DICT_content_encyclopedia['Energy talents'] = ""; // reset the content
	for (var i in DICT_fundamental_talents) {
		if (((talent_authorization(i) == true && i != 'Artwork') || (energy_building_DYNAMIC[9][3] == 1 && i == 'Artwork')) && DICT_fundamental_talents[i][6] == "energy") {
			DICT_content_encyclopedia['Energy talents'] += "<font color='red'>"+i+"</font><br /> \
															Price for level 1: "+display_number(DICT_fundamental_talents[i][1], true)+"&nbsp;&#x2206;.<br />\
															Price increment: "+display_number(DICT_fundamental_talents[i][2], true)+".<br /> \
															Max level: "+display_number(DICT_fundamental_talents[i][4], true)+".<br />\
															Price for last level: "+display_number(DICT_fundamental_talents[i][1]*Math.pow(DICT_fundamental_talents[i][2], DICT_fundamental_talents[i][4]), true)+"&nbsp;&#x2206;.<br /> \
															"+DICT_fundamental_talents_ENCYCLOPEDIA[i]+"<br /><br />";
		}
	}
}

function completion_style_talents_encyclopedia() {
	DICT_content_encyclopedia['Style talents'] = ""; // reset the content
	for (var i in DICT_fundamental_talents) {
		if (talent_authorization(i) == true && DICT_fundamental_talents[i][6] == "style") {
			DICT_content_encyclopedia['Style talents'] += "<font color='red'>"+i+"</font><br /> \
															Price for level 1: "+display_number(DICT_fundamental_talents[i][1], true)+"&nbsp;&#423;.<br />\
															Price increment: "+display_number(DICT_fundamental_talents[i][2], true)+".<br /> \
															Max level: "+display_number(DICT_fundamental_talents[i][4], true)+".<br />\
															Price for last level: "+display_number(DICT_fundamental_talents[i][1]*Math.pow(DICT_fundamental_talents[i][2], (DICT_fundamental_talents[i][4]-1)), true)+"&nbsp;&#423;.<br /> \
															"+DICT_fundamental_talents_ENCYCLOPEDIA[i]+"<br /><br />";
		}
	}
}

function completion_god_deals_encyclopedia() {
	DICT_content_encyclopedia['God deals'] = ""; // reset the content
	for (var i in DICT_god_deals_encyclopedia) {
		if (DICT_dollars_buildings_DYNAMIC[DICT_Deals[i][4]][1] == 1) {
			DICT_content_encyclopedia['God deals'] += "<font color='#C0C0C0'>"+i+"</font><br /> \
															Price: "+display_number(LIST_Prestige_costs[DICT_Deals[i][1]], true)+"&nbsp;&#x1D4AB;.<br />\
															"+DICT_god_deals_encyclopedia[i]+"<br /><br />";
		}
	}
}

function completion_SCAMs_encyclopedia() {
	DICT_content_encyclopedia['Super Cool Advanced Masteries'] = ""; // reset the content
	for (var i in DICT_SCAMs_encyclopedia) {
		if (!(['Transversion', 'Maximum memoriam', 'Ephemeral death'].includes(i)) || DICT_dollars_buildings_DYNAMIC['Laboratory'][1] == 1) { // if the scam isn't one of the scams that need the lab, or if the lab is unlocked
			DICT_content_encyclopedia['Super Cool Advanced Masteries'] += "<font color='cyan'>"+i+"</font><br /> \
															Price per level: "+display_number(DICT_God_of_Extortion[i][1], true)+"&nbsp;"+golden_rings_symbol+".<br />\
															Max level: "+display_number(DICT_God_of_Extortion[i][4], true)+".<br />\
															"+DICT_SCAMs_encyclopedia[i]+"<br /><br />";
		}
	}
}

function ongoing_tasks() {
	var current_tasks = 0;
	for (var line5 in energy_building_DYNAMIC) {
		if (energy_building_DYNAMIC[line5][4] != 0.0) {
			current_tasks +=1;
		}
	}
	return current_tasks;
}

function is_LIST_activities_full() {return (LIST_activities.length >= DICT_fundamental_talents['Multitasking'][3] + 1)}

function remove_most_ancient_scheduled_activity(number_of_composant) {program_action_body_part(LIST_activities[0], "inactive");} // disable the element

function future_fundamental_energy() {
	var conversion_gains = 0;
	for (var body_part in energy_building_DYNAMIC) {
		if (energy_building_DYNAMIC[body_part][6] == 'convert') {
			var style_modificator = style_points;
			if (DICT_Deals['Max style'][2] == 1) {style_modificator = last_ruin_points;}
			conversion_gains += energy_building_DYNAMIC[body_part][5]*energy_building_STALE[body_part][5]*specific_number_modifier_upgrade("Energy fountain")*(1+0.1*style_modificator);
		}
	}
	return (fundamental_energy + conversion_gains);
}

function maximum_turns() {
	return (100+DICT_fundamental_talents['God repellent'][3]*10);
}

function time_needed_to_construct(line) {
	var time_for_1_construct = energy_building_STALE[line][3];
	if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[line][1]][3] == 0) { // if the talent Concentrated part isn't acquired yet, count Industrialization
		time_for_1_construct = Math.max(energy_building_STALE[line][3]-DICT_fundamental_talents['Industrialization'][3], 1);
	}
	return time_for_1_construct
}

function time_needed_to_convert(line) {
	var time_for_1_convert = energy_building_STALE[line][4];
	if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[line][1]][3] == 0) { // if the talent Concentrated part isn't acquired yet, count Quick mix
		time_for_1_convert = Math.max(energy_building_STALE[line][4]-DICT_fundamental_talents['Quick mix'][3], 1);
	}
	return time_for_1_convert
}

function concentrated_multiplicator(line, modifier=0) {
	var corrected_level = DICT_fundamental_talents['Concentrated '+energy_building_STALE[line][1]][3] + modifier;
	if (corrected_level == 0) {return 1}
	else {
		return energy_building_STALE[line][6] * Math.pow(energy_building_STALE[line][7], (corrected_level - 1))
	}
}

function multiplicator_body_parts_created(part, in_next_turn=false) {
	var twin_bonus = 0;
	if (DICT_fundamental_talents['Twins'][3] > 0) {
		if (in_next_turn != false) { // Twin talent counter, don't do it for stats
			energy_building_DYNAMIC[part][8] += 1;
		}
		if (energy_building_DYNAMIC[part][8] >= (21 - DICT_fundamental_talents['Twins'][3])) {
			twin_bonus = 1;
			if (in_next_turn != false) {energy_building_DYNAMIC[part][8] = 0;}
		}
	}
	var concentrated_multiplier = 1;
	if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[part][1]][3] > 0) {// if you have the talent Concentrated_part
		concentrated_multiplier = energy_building_STALE[part][3]+energy_building_STALE[part][4]; // construction time + conversion time
	}
	var body_parts_created = 1;
	body_parts_created *= 1+twin_bonus;
	body_parts_created *= 1+DICT_fundamental_talents['1 = more'][3];
	body_parts_created *= concentrated_multiplier;
	if (focus_activated()) { // the condition of availability of the Focus deal is already included
		body_parts_created *= specific_number_modifier_upgrade("Focus");
	}
	else {
		body_parts_created *= multiplicator_focus_spread(); // the condition of availability of the Focus deal is already included
	}
	if (tapping_activated) {body_parts_created *= (1 + DICT_fundamental_talents['Hourglass tapping'][3]);}
	return parseInt(body_parts_created)
}

function multiplicator_focus_spread() {
	var focus_multiplicator = 1;
	if (DICT_Deals['Focus'][2] == 1) {
		var turns_left;
		for (var i in energy_building_DYNAMIC) {
			if (energy_building_DYNAMIC[i][6] == "construct") {
				var time_reduction = 0;
				if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[i][1]][3] == 0) {// if you don't have the talent Concentrated part
					time_reduction = DICT_fundamental_talents['Industrialization'][3];
				}
				turns_left = Math.round((100-energy_building_DYNAMIC[i][4])/100*(energy_building_STALE[i][3]-time_reduction));
				// turns_left: (100-43)/100*(nombre de tours de base - niveau du talent reduisant le nombre de tours necessaires). Puis, on arrondit a l'entier le plus proche.
				turns_left = Math.max(1, turns_left);
				focus_multiplicator += 0.1*turns_left;
			}
		}
	}
	return focus_multiplicator
}

function conversion_gains(line) {
	var multiplicator_gains = energy_building_STALE[line][5];
	var style_modificator = style_points;
	if (DICT_Deals['Max style'][2] == 1) {style_modificator = last_ruin_points;}
	multiplicator_gains *= specific_number_modifier_upgrade("Energy fountain");
	multiplicator_gains *= (1+multiplier_style_points_to_funda*style_modificator);
	multiplicator_gains *= multiplicator_laboratory("Fundamental physics");
	multiplicator_gains *= concentrated_multiplicator(line);
	if (DICT_God_of_Extortion['Incremental energy'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {
		multiplicator_gains *= Math.max(1, Math.log10(fundamental_energy));
	}
	var gains;
	if (energy_building_DYNAMIC[line][4] == 0.0 || energy_building_DYNAMIC[line][6] != "construct") { // if there is no construction ongoing
		gains = energy_building_DYNAMIC[line][5]*multiplicator_gains.toFixed(0);
	}
	else { // else, include the ongoing construction in the gains from conversion.
		gains = (energy_building_DYNAMIC[line][5]+1)*multiplicator_gains.toFixed(0);
	}
	return gains
}

function cost_artwork() {
	if (DICT_artwork['percentage_completion'] == 0) { // if no artwork is being created
		return (DICT_artwork['base_cost']*Math.pow(DICT_artwork['increment'], DICT_artwork['total_artworks']))
	}
	else { // if an artwork is being created
		return (DICT_artwork['base_cost']*Math.pow(DICT_artwork['increment'], (DICT_artwork['total_artworks']+1)))
	}
}

function total_artworks() {
	return Math.round(DICT_artwork['total_artworks'] * (1 + DICT_fundamental_talents['Multiwork'][3]) * specific_number_modifier_upgrade("Copyism"));
}

function inactive_prostitutes() {return (inactive_humans()+inactive_artworks())}

function inactive_humans() {
	var used_prostitutes = 0;
	for (var task in DICT_attributions_humans) {
		used_prostitutes += DICT_attributions_humans[task];
	}
	return (DICT_Schools["Basics school"][3] - used_prostitutes)
}

function inactive_artworks() {
	var used_prostitutes = 0;
	for (var task in DICT_attributions) {
		used_prostitutes += DICT_attributions[task];
	}
	return (total_artworks() - used_prostitutes)
}

function flexible_artworks() {
	var flex_artworks = total_artworks();
	flex_artworks -= DICT_attributions["Temple"];
	for (var i in DICT_Schools) {
		flex_artworks -= DICT_attributions[i+" admin"] + DICT_attributions[i+" prof"];
	}
	return flex_artworks;
}

function locked_artworks() {
	var amount_locked = 0;
	for (var task in DICT_attributions) {
		if (!(task in DICT_attributions_humans)) {
			amount_locked += DICT_attributions[task];
		}
	}
	return amount_locked
}

function inactive_worshipers() {
	var used_worshipers = 0;
	for (var task in DICT_Temple_upgrades) {
		used_worshipers += DICT_Temple_upgrades[task][0];
	}
	return (LIST_worshipers[0]-used_worshipers)
}

function current_level_factory(factory) {
	var incrementor = DICT_Factories_STALE[factory][3];
	var beyond_limits_modificator = 1;
	if (DICT_Deals['Beyond limits'][2] == 1) {beyond_limits_modificator = incrementor;}
	var attributed_divided_by_initiales = (DICT_attributions[factory]+DICT_attributions_humans[factory])*beyond_limits_modificator/DICT_Factories_STALE[factory][2]; // first factory: 0, 1, 7, 7*7, 7*7*7
	if (attributed_divided_by_initiales == 0) {return 0}
	else if (attributed_divided_by_initiales < 1 && attributed_divided_by_initiales > 0) {return 1} // special case when the Beyond limits deal just got broken and the current level of a factory is 1.
	else if (attributed_divided_by_initiales == 1) {return 1}
	else if (attributed_divided_by_initiales/incrementor == 1) {return 2}
	else if (attributed_divided_by_initiales/incrementor == incrementor) {return 3}
	else if (attributed_divided_by_initiales/incrementor == incrementor*incrementor) {return 4}
	else {console.log("ERROR #2: MEGA BUG YO!!!!");} // this shouldn't happen. Also, yeah, I should have used logarithms. I tried, failed, and did that. Good enough.
}

function list_of_necessary_items(brothel) {
	var enough_items = true;
	var i = 6;
	for (var factory_name in DICT_Factories_STALE) {
		if (DICT_Factories_DYNAMIC[factory_name][4] < DICT_Brothels_STALE[brothel][i]) {enough_items = false;} // if stock < quantity necessary
		i++;
	}
}

function bonus_earned_school(school) {return DICT_Schools[school][3]*DICT_Schools[school][8];}

function production_speed_school(school) {
	var school_speed = multiplicator_speed_schools(school) * 3600 * 1000 / DICT_Schools[school][9]; // hourly production. DICT_Schools[school][9] = time to complete 1 percent/pupil with 1 pupil/professor.
	if (school != "Basics school") {school_speed /= 10000;}
	return school_speed;
}

function max_page_lobby() {
	var page = 0;
	while (page < 4) {
		if (LIST_Lobby[page][1] == 1) {page++;} // if this lobby is done, go to the next
		else {break}
	}
	return page
}

function cost_of_prestige_deal(deal_index) {return LIST_Prestige_costs[deal_index];}

function percentage_completion_deal() {return ((timestamp() - deal_timer) / Deal_time * 100)}

function previous_deals_bought(deal) {
	var index_deal = DICT_Deals[deal][1];
	for (var index_previous_deal in DICT_Deals[deal][3]) {
		var previous_deal = DICT_Deals[deal][3][index_previous_deal];
		if (DICT_Deals[previous_deal][2] == 0) {return false}
	}
	return true
}

function prestige_points_available() {
	var prestige_count = prestige_points_total;
	for (var deal in DICT_Deals) {
		if (DICT_Deals[deal][2] == 1 || current_deal == deal) {
			prestige_count -= cost_of_prestige_deal(DICT_Deals[deal][1]);
		}
	}
	return prestige_count
}

function disable_break_the_deal_button() {
	document.getElementById("Break_the_Deal").style.color = "";
	document.getElementById("Break_the_Deal").classList.add("locked_button");
	document.getElementById("Break_the_Deal").onclick = function() {""};
}

function enable_break_the_deal_button() {
	document.getElementById("Break_the_Deal").style.color = "#FFD700";
	document.getElementById("Break_the_Deal").classList.remove("locked_button");
	document.getElementById("Break_the_Deal").onclick = function() {break_the_deal()};
}

function click_on_prestige_deal(deal) {
	cancel_inflation_streak()
	
	var print_error_message = false;
	
	if (selected_deal == deal) {selected_deal = "none";}
	else {selected_deal = deal;}
	
	if (current_deal != deal) {
		var error_message = "<br /><br /><span class='error_infos_box'>";
		if (DICT_Deals[deal][2] == 1) {
			error_message += " "; // This deal is already sealed.
		}
		else {
			if (deal_timer != 0) { // deal_timer = timestamp si un deal est en cours
				selected_deal = "none"; // don't select a deal if it cannot be started or broken
				error_message += "Another deal is already being negociated, seal it or break it if you want to start negociating this one.<br />";
			}
			if (prestige_points_available() < LIST_Prestige_costs[DICT_Deals[deal][1]]) {
				selected_deal = "none"; // don't select a deal if it cannot be started or broken
				error_message += "You don't have enough available &#x1D4AB to negociate this deal.<br />";
			}
			if (previous_deals_bought(deal) == false) {
				selected_deal = "none"; // don't select a deal if it cannot be started or broken
				var s = "";
				if (DICT_Deals[deal][1] == 3) {s = "s";}
				error_message += "You need to seal the previous deal"+s+" to negociate this one.<br />";
			}
		}
		if (error_message != "<br /><br /><span class='error_infos_box'>") {
			print_error_message = true;
		}
		else { // if there is no error, start the deal
			deal_timer = timestamp()-Deal_time*DICT_Deals["Instant"][2];
			current_deal = deal;
			display_prestige_points();
		}
	}
	if (selected_deal == "none") {disable_break_the_deal_button()}
	else {enable_break_the_deal_button()}
	display_prestige_deals();
	if (print_error_message == true && DICT_Deals[deal][2] != 1) {document.getElementById("TOOLTIP_"+deal).innerHTML += error_message+"</span>";}
}

function break_the_deal() {
	cancel_inflation_streak()
	var no_upper_deal = true;
	for (var tested_deal in DICT_Deals) {
		if (DICT_Deals[tested_deal][0] == DICT_Deals[selected_deal][0] &&
			(DICT_Deals[tested_deal][1] > DICT_Deals[selected_deal][1] && !(DICT_Deals[tested_deal][1] == 2 && DICT_Deals[selected_deal][1] == 1)) &&
			(DICT_Deals[tested_deal][2] == 1 || tested_deal == current_deal)) {
			no_upper_deal = false;
		}
	}
	if (selected_deal != "none" && no_upper_deal == true) { // if conditions are fulfilled, break the deal
		DICT_Deals[selected_deal][2] = 0;
		if (current_deal == selected_deal) {
			deals_broken_before_they_are_sealed += 1; // #stats
			compute_stat("ID_deals_broken_before_they_are_sealed");
			current_deal = "none";
			deal_timer = 0;
		}
		else { // #stats
			deals_broken += 1; // #stats
			compute_stat("ID_deals_broken");
		}
		display_specific_prestige_deal(selected_deal, true) // display what's modified by the broken deal
		selected_deal = "none";
		disable_break_the_deal_button()
		display_prestige_points()
		display_prestige_deals()
	}
}

function cancel_inflation_streak() {
	if (inflation_bonus < inflation_stored_time) {inflation_bonus = inflation_stored_time;}
	inflation_stored_time = 0;
	display_additional_deal_tooltip("Inflation");
}

function body_parts_availability() {
	var components_available = true;
	for (var i in energy_building_DYNAMIC) {
		if (energy_building_DYNAMIC[i][5] == 0) {
			components_available = false;
			break
		}
	}
	return components_available
}

function speed_workers() {return ((DICT_attributions['Workers']+DICT_attributions_humans['Workers'])/LIST_Workers[0]*60*60*1000).toPrecision(4)}

function multiplicator_upgrades_workers() {
	var multiplicator = 1;
	for (var i in LIST_Workers_upgrades_STALE) {
		if (LIST_Workers_upgrades_DYNAMIC[i] == 1) {
			multiplicator *= LIST_Workers_upgrades_STALE[i][2];
		}
	}
	return multiplicator
}

function multiplicator_workers() {
	var multiplicator = 1;
	multiplicator *= specific_number_modifier_upgrade("Harmony");
	multiplicator *= specific_number_modifier_upgrade("Tip");
	multiplicator *= specific_number_modifier_upgrade("Body building");
	multiplicator *= specific_number_modifier_upgrade("Inflation");
	multiplicator *= specific_number_modifier_upgrade("Transfer");
	multiplicator *= specific_number_modifier_upgrade("Conviction");
	multiplicator *= specific_number_modifier_upgrade("Printing machine");
	multiplicator *= multiplicator_upgrades_workers();
	multiplicator *= multiplicator_laboratory("Biology");
	multiplicator *= multiplicator_advanced_school();
	multiplicator *= multiplicator_lobbies();
	multiplicator *= global_multiplier;
	
	return multiplicator
}

function life_saver_effect(level) {
	return level*(1+DICT_fundamental_talents['Multiwork'][3])*specific_number_modifier_upgrade("Copyism");
}

function money_saved() {return Math.round(0.1*fundamental_talent_cost('Money saver')*specific_number_modifier_upgrade('Discount talents')/DICT_fundamental_talents['Money saver'][2])}

function modify_multiplicator_button() {
	if (prostitutes_multiplicator == 1) {prostitutes_multiplicator = 10;}
	else if (prostitutes_multiplicator == 10) {prostitutes_multiplicator = 100;}
	else if (prostitutes_multiplicator == 100) {prostitutes_multiplicator = 1000;}
	else if (prostitutes_multiplicator == 1000) {
		if (DICT_Deals['Think big'][2] == 1) {prostitutes_multiplicator = 1e4;}
		else {prostitutes_multiplicator = 1}
	}
	else if (prostitutes_multiplicator == 1e4) {prostitutes_multiplicator = 1e5;}
	else if (prostitutes_multiplicator == 1e5) {prostitutes_multiplicator = 1e6;}
	else if (prostitutes_multiplicator == 1e6) {prostitutes_multiplicator = 1e7;}
	else if (prostitutes_multiplicator == 1e7) {prostitutes_multiplicator = 1e8;}
	else if (prostitutes_multiplicator == 1e8) {prostitutes_multiplicator = 1e9;}
	else if (prostitutes_multiplicator == 1e9) {prostitutes_multiplicator = 1;}
	display_multiplicator_button()
}

function factory_necessary_prostitutes(factory, level) {
	return parseInt(DICT_Factories_STALE[factory][2]*Math.pow(DICT_Factories_STALE[factory][3], (level-1)))
}

function factory_total_time_to_produce(factory) {
	return DICT_Factories_STALE[factory][4];
}

function factory_total_time_to_upgrade(factory, level) {
	return DICT_Factories_STALE[factory][6] * Math.pow(DICT_Factories_STALE[factory][7], (level-1-DICT_Deals['Beyond limits'][2]));
}

function start_building_element(number_of_composant) {
	if (fundamental_energy >= energy_building_STALE[number_of_composant][2]) { // if you have enough money
		fundamental_energy -= energy_building_STALE[number_of_composant][2];
		energy_building_DYNAMIC[number_of_composant][6] = 'construct';
		LIST_focus_bonus_validated[number_of_composant] = true; // Useful for the god deal Focus
		display_fundamental_energy();		
	}
}

function start_converting_element(number_of_composant) {
	if (energy_building_DYNAMIC[number_of_composant][6] == 'construct') {
		fundamental_energy += energy_building_STALE[number_of_composant][2];
		display_fundamental_energy();
	}
	if (energy_building_DYNAMIC[number_of_composant][5] > 0) {
		energy_building_DYNAMIC[number_of_composant][6] = 'convert';
	}
	else {
		energy_building_DYNAMIC[number_of_composant][6] = 'inactive';
	}
}

function focus_activated() { // return "true" or "false"
	if (ongoing_tasks() + buildings_that_ended < 2 && LIST_activities.length < 2 && DICT_Deals['Focus'][2] == 1) {return true}
	else {return false}
}

function toggle_initial_mute_button() {
	initial_mute_button_activated ^= true; // swap from a boolean to the other
	if (initial_mute_button_activated == true) {
		document.getElementById("initial_mute_button").className = "activated_button";
	}
	else {
		document.getElementById("initial_mute_button").className = "";
	}
}

function toggle_restartor() { // restartor and unstoppable could be merged into one function with a variable
	restartor_activated ^= true; // swap from a boolean to the other
	if (restartor_activated == true) {
		document.getElementById("restartor_button").className = "tooltip activated_button";
	}
	else {
		document.getElementById("restartor_button").className = "tooltip";
	}
}

function toggle_semiauto(initialization=false) {
	if (tutorial_step > 5 || initialization == true) { // if inferior, better not activate it to avoid risk that the user screws up
		semiauto_activated ^= true; // swap from a boolean to the other
		if (semiauto_activated == true) {
			document.getElementById("semiauto_button").className = "tooltip activated_button";
		}
		else {
			document.getElementById("semiauto_button").className = "tooltip";
		}
	}
}

function toggle_unstoppable() { // restartor and unstoppable could be merged into one function with a variable
	unstoppable_activated ^= true; // swap from a boolean to the other
	if (unstoppable_activated == true) {
		document.getElementById("unstoppable").className = "tooltip activated_button";
	}
	else {
		document.getElementById("unstoppable").className = "tooltip";
	}
}

function automate(number_of_composant) {
	if (energy_building_DYNAMIC[number_of_composant][4] == 0.0) {
		var time_for_1_construct = time_needed_to_construct(number_of_composant);
		var time_for_1_convert = time_needed_to_convert(number_of_composant);
		var enough_money = fundamental_energy >= energy_building_STALE[number_of_composant][2];
		var enough_time = true; // if we don't have Bully detector, we can't know if it's false, so it's true by default.
		if (DICT_fundamental_talents['Bully detector'][3] == 1) {
			var hourglass_tapping_value = 0;
			if (tapping_activated == true) {hourglass_tapping_value = DICT_fundamental_talents['Hourglass tapping'][3];}
			var turns_left = (100 + DICT_fundamental_talents['God repellent'][3]*10 - current_turn)/(1 + hourglass_tapping_value);
			enough_time = time_for_1_construct + time_for_1_convert <= turns_left;
		}
		if (enough_money && enough_time) { // enough_time: if there is enough time to do 1 construct and 1 convert:
			start_building_element(number_of_composant);
		}
		else if (energy_building_DYNAMIC[number_of_composant][5] > 0) {
			start_converting_element(number_of_composant);
		}
	}
}

function disable_programed_actions() {
	for (var element_part in energy_building_DYNAMIC) {
		program_action_body_part(element_part, "inactive")
	}
}

function check_ongoing_parts() {
	var i = 9;
	while (i >= 0) {
		if (energy_building_DYNAMIC[i][4] != 0.0) {
			return true;
		}
		i--;
	}
	return false
}

function smartomate(swap=false) {
	if (smartomaton_activated != swap) { // if the smartomaton is active (next_turn) or activated
		
		if (swap == true) {
			disable_programed_actions()
		} // disable other programed actions
		
		if (!check_ongoing_parts()) { // if check_ongoing_parts() == false, if no other parts are being constructed / converted
			var hourglass_tapping_value = 0;
			if (tapping_activated == true) {hourglass_tapping_value = DICT_fundamental_talents['Hourglass tapping'][3];}
			var turns_left = (100 + DICT_fundamental_talents['God repellent'][3]*10 - current_turn)/(1 + hourglass_tapping_value);
			i = 9;
			while (i >= 0) { // loop from the biggest element to the smallest (genitals to toenail)
				if (energy_building_DYNAMIC[i][2] == 1) { // if the element is visible (unlocked)
					var time_for_1_construct = time_needed_to_construct(i);
					var time_for_1_convert = time_needed_to_convert(i);
					// START - can I step up?
					if (i < 9) { // if Genitals, you can't step up
						var style_modificator = style_points;
						if (DICT_Deals['Max style'][2] == 1) {style_modificator = last_ruin_points;}
						var fundamental_energy_to_add = energy_building_STALE[i][5]*energy_building_DYNAMIC[i][5]*specific_number_modifier_upgrade("Energy fountain")*(1+0.1*style_modificator); // += (unit price * stock)+0.05*level-of-Energy-fountain*(0.1*style points)			
						var convert_to_next_step = (fundamental_energy + fundamental_energy_to_add) >= energy_building_STALE[i+1][2];
						if (convert_to_next_step == true) { // convert in order to build the next component
							var time_for_1_construct_next_element = Math.max(energy_building_STALE[i+1][3]-DICT_fundamental_talents['Industrialization'][3], 1);
							var time_for_1_convert_next_element = Math.max(energy_building_STALE[i+1][4]-DICT_fundamental_talents['Quick mix'][3], 1);
							if (time_for_1_convert+time_for_1_construct_next_element+time_for_1_convert_next_element <= turns_left) {
							// enough time to convert this element, then construct+convert the next element?
								start_converting_element(i)
								display_line(i, true) // lazy programing, I just want to change the color of the text bar from green to yellow
								break
							}
						}
					}
					// END - can I step up?
					if (time_for_1_construct + time_for_1_convert <= turns_left && (fundamental_energy >= energy_building_STALE[i][2] || energy_building_DYNAMIC[i][6] == 'construct')) {
						// enough time to build+convert && (enough energy to build || energy to build already spent)?
						start_building_element(i)
						display_line(i, true)
						break
					}
					else if (energy_building_DYNAMIC[i][5] > 0) { // if there are some stocks of this element
						if (time_for_1_convert <= turns_left) { // if there is enough time to convert the element
							start_converting_element(i)
							display_line(i, true) // lazy programing, I just want to change the color of the text bar from green to yellow
							break
						}
					}
				}
				i--;
			}
		}
		if (swap == true) { // the condition takes less ressources than displaying every turn.
			document.getElementById("smartomaton").className = "tooltip activated_button";
		}
		smartomaton_activated = true;
		if (semiauto_activated == true && auto_turn_activated == 0) {
			if (document.getElementById("auto_next_turn").innerHTML != '<button class="locked_button"> Auto </button>') {
				// (ugly coding, might induce bugs if the content of "auto_next_turn" isn't constant.) If it's equal to the locked button, it means the god_reset process is ongoing (or that the auto button is locked for some reason), so don't relaunch the autoturn
				auto_next_turn(); // enable the autoturn
			}
		}
		if (unlocked_buttons == false) {display_all_lines()} // lock all the buttons if the lock is activated
	}
	else if (swap == true) {
		disable_programed_actions() // disable the action started by the smartomaton
		document.getElementById("smartomaton").className = "tooltip";
		smartomaton_activated = false;
		if (unlocked_buttons == false) {display_all_lines()} // unlock some buttons if the lock is activated
	}
}

function activate_all_lines(type) { // type = autoconstruct, autoconvert, automate
	var all_activated = true;
	for (var i in energy_building_STALE) {
		if (energy_building_DYNAMIC[i][7] != type) {
			all_activated = false;
		}
	}
	if (!all_activated) {
		for (var i in energy_building_STALE) {
			i = Number(i); // make i into a number, if it's registered as a string, problems occur with the LIST_activity
			program_action_body_part(i, "inactive")
		}
		for (var i in energy_building_STALE) {
			i = Number(i); // make i into a number, if it's registered as a string, problems occur with the LIST_activity
			program_action_body_part(i, type);
		}
	}
	else {
		for (var i in energy_building_STALE) {
			i = Number(i); // make i into a number, if it's registered as a string, problems occur with the LIST_activity
			program_action_body_part(i, "inactive");
		}
	}
}

function unlock_buttons(initialize=false) {
	var button_color;
	if (unlocked_buttons == true) {
		unlocked_buttons = false;
		if (initialize == false) { // don't do it if I activate the function at the initialization of the script, I don't want to disable actions at launch.
			for (var i in energy_building_DYNAMIC) {
				if (energy_building_DYNAMIC != "inactive" || energy_building_DYNAMIC != "automaton") {
					program_action_body_part(i, "inactive")
				}
			} // deactivate the unauthorized planned actions
		}
		button_color = "";
		display_all_lines()
	}
	else {
		unlocked_buttons = true;
		button_color = "activated_button";
		display_all_lines()
	}
	document.getElementById("toggle_unlocked_buttons").innerHTML = 
		'<button onclick="unlock_buttons()" class="'+button_color+' tooltip"> Unlocked buttons <span id="unlock_button_tooltip" class="DOWN_tooltip_text larger_tooltip">\
		Lock or unlock some buttons in the God World. Locked buttons are easier to understand and therefore recommanded for beginners, while unlocked buttons provide a better comfort through a better ability to plan actions.<br /><br />\
		Unlocking buttons may improve CPU performances.</span></button>';
}

function program_action_body_part(line, action="inactive") {
	//document.getElementById("gains_element_"+line+"1").style.display = "initial";
	//document.getElementById("gains_element_"+line+"1").style.animation = "mynewmove 1s 2";

	if (action == "inactive" && (tutorial_step <= 4) && fundamental_energy == 0 && energy_building_DYNAMIC[0][4] == 0) { // if the player has never ever launched a conversion, prevent him from canceling it
		return
	}
	if (action != 'inactive') {
		if (smartomaton_activated == true) {smartomate(true)} // disable the smartomaton
		if (LIST_activities.includes(line)) {program_action_body_part(line, "inactive");} // if this line already has an action programed deactivate the previous activity for this line
		else if (is_LIST_activities_full()) { // if LIST_activities is full and you need some room
			remove_most_ancient_scheduled_activity(line); // remove the most ancient element
		} 
		LIST_activities.push(line); // add this component to the list of component currently built
		if (action == 'autoconstruct') {
			if(energy_building_DYNAMIC[line][4] == 0.0) {
				start_building_element(line)
			}
			if (LIST_tutorial_dialogues_validation[3] == 0) {
				auto_next_turn()
			}
		}
		else if (action == 'autoconvert') {
			if (tutorial_step < 5 && fundamental_energy == 0) {
				document.getElementById("auto_next_turn").innerHTML = "<button class='tooltip' onclick='auto_next_turn()'> Auto <span class='LEFT_tooltip_text'>Validate automatically 1 turn per second</span></button>";
				document.getElementById("next_turn").innerHTML = "<button class='tooltip' onclick='next_turn()' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Validate the turn</span></button>";
				auto_next_turn() // visual glitch otherwise
				auto_next_turn() // visual glitch otherwise
			}
			if (energy_building_DYNAMIC[line][4] == 0.0) {
				start_converting_element(line);
			}
		}
		else { // if action == 'automate'
			automate(line);
		}
		if (semiauto_activated == true && auto_turn_activated == 0) {
			auto_next_turn(); // enable the autoturn
		}
	}
	else {
		function required_to_filter(saved_number) {return saved_number != line;}
		LIST_activities = LIST_activities.filter(required_to_filter);
		if (energy_building_DYNAMIC[line][4] == 0.0 && energy_building_DYNAMIC[line][6] == 'construct') {
			energy_building_DYNAMIC[line][6] = 'inactive';
			fundamental_energy += energy_building_STALE[line][2];
			display_fundamental_energy();
		}
		else if (energy_building_DYNAMIC[line][4] == 0.0 && energy_building_DYNAMIC[line][6] == 'convert') {
			energy_building_DYNAMIC[line][6] = 'inactive';
		}
		if (semiauto_activated == true && auto_turn_activated == 1 && ongoing_tasks() == 0 && LIST_activities.length == 0 && DICT_artwork['activity'] == 0) {
			auto_next_turn(); // disable the autoturn. rare case, when a player does a double click.
		}
	}
	energy_building_DYNAMIC[line][7] = action; // save the action in the database
	if (energy_building_DYNAMIC[line][2] == 1) { // if the line is displayed. If not, it would trigger a "null" error with the smartomaton
		display_line(line, 'body_part_'+line);
		display_progress_bar("progress_bar_"+line, line);
	}
	if (unlocked_buttons == false) {display_all_lines()} // lock the buttons of the other lines
}

function start_artwork() {
	if (DICT_artwork['percentage_completion'] == 0.0) {
		if (body_parts_availability() == true) {
			if (fundamental_energy >= cost_artwork()) {
				for (var line in energy_building_DYNAMIC) {
					energy_building_DYNAMIC[line][5] -= 1;
					display_line(line, true);
					display_progress_bar("progress_bar_"+line, line);
				}
				fundamental_energy -= cost_artwork();
				display_fundamental_energy();
				DICT_artwork['activity'] = 1;
				if (semiauto_activated == true && auto_turn_activated == 0) {
					auto_next_turn(); // enable the autoturn
				}
				return false // this line is useful only for ASIate
			}
			else {return "energy"} // this line is useful only for ASIate
		}
		else {return "components"} // this line is useful only for ASIate
	}
}

function cancel_artwork() {
	if (DICT_artwork['activity'] == 1 && DICT_artwork['percentage_completion'] == 0.0) {
		for (var line in energy_building_DYNAMIC) {
			energy_building_DYNAMIC[line][5] += 1;
			display_line(line, true);
			display_progress_bar("progress_bar_"+line, line);
		}
		fundamental_energy += cost_artwork();
		display_fundamental_energy();
		DICT_artwork['activity'] = 0;
	}
}
	
function create_artwork() {
	if (DICT_artwork['auto_create'] == 0) {
		DICT_artwork['auto_create'] = 1;
		start_artwork();
	}
	else {
		DICT_artwork['auto_create'] = 0;
		cancel_artwork();
	}
	display_artwork();
	display_progress_bar_artwork();
}

function price_workers_upgrade(upgrade) {
	var green_gauntlet_multiplicator = 1;
	if (LIST_Workers_upgrades_STALE[upgrade][0] == "Green gauntlets") {green_gauntlet_multiplicator *= Math.pow(2, disagree);}
	return (LIST_Workers_upgrades_STALE[upgrade][1] / specific_number_modifier_upgrade("Generic beauty") * green_gauntlet_multiplicator);
}

function disagree_green_gauntlet() {
	disagree += 1;
	display_workers_upgrades()
}

function buy_workers_upgrade(upgrade) {
	cancel_inflation_streak()
	if (dollars >= price_workers_upgrade(upgrade)) { // if you have enough money to buy the upgrade
		dollars_spent += price_workers_upgrade(upgrade); // #stats
		compute_stat("ID_dollars_spent");
		worker_upgrades_bought += 1; // #stats
		compute_stat("ID_worker_upgrades_bought");
		dollars -= price_workers_upgrade(upgrade); // remove the money
		LIST_Workers_upgrades_DYNAMIC[upgrade] = 1; // validate that the upgrade is bought
		display_workers(); // display the updated income per second
		display_workers_upgrades(); // update the display of upgrades, to show a new upgrade
		display_dollars();
	}
	else {
		// show a tooltip indicating that you don't have enough money to buy this upgrade
	}
}

function buy_brothel(brothel) {
	cancel_inflation_streak()
	
	// START - levels high enough in upgrades?
	var DICT_requirements = requirements_building(DICT_Brothels_STALE, brothel, 12);
	for (var i in DICT_requirements) {
		if (DICT_requirements[i][0] < DICT_requirements[i][1]) {return} // if current_level < required_level
	}
	// END - levels high enough in upgrades?
	
	if (dollars < DICT_Brothels_STALE[brothel][0] && DICT_Brothels_DYNAMIC[brothel][5] == 0) {return} // if you don't have enough money to unlock this brothel

	// START - enough factories items?
	var factory_name;
	var stock;
	var stock_required;
	for (var i in DICT_Brothels_STALE[brothel][13]) {
		factory_name = DICT_Brothels_STALE[brothel][13][i][0];
		stock = DICT_Factories_DYNAMIC[factory_name][4];
		stock_required = DICT_Brothels_STALE[brothel][13][i][1];
		if (stock < stock_required && DICT_Brothels_DYNAMIC[brothel][5] == 0) {return}
	}
	// END - enough factories items?
	
	// if it hasn't returned yet, it means the conditions are fulfilled, so, unlock the brothel
	if (DICT_Brothels_DYNAMIC[brothel][5] == 0) {
		dollars -= DICT_Brothels_STALE[brothel][0];
		dollars_spent += DICT_Brothels_STALE[brothel][0]; // #stats
		compute_stat("ID_dollars_spent");
		brothels_bought += 1;
		compute_stat("ID_brothels_bought");
		display_dollars();
		if (["Casinothel", "Zoutopia", "Bankthel", "Brollywood", "Virtual brothel"].includes(brothel)) {
			if (DICT_encyclopedia_additional_parts[brothel][0] == 0) {
				DICT_encyclopedia_additional_parts[brothel][0] = 1; // validate the visibility of this brothel in the encyclopedia
				DICT_encyclopedia['Human World']['Brothels'][1] = 0; // put back the Brothels to orange in the encyclopedia
				display_encyclopedia();
			}
		}
	} // pay for the brothel
	display_prostitutes();
	for (var i in DICT_Brothels_STALE[brothel][13]) { // remove components from the stock
		factory_name = DICT_Brothels_STALE[brothel][13][i][0];
		if (DICT_Brothels_DYNAMIC[brothel][5] == 0) {DICT_Factories_DYNAMIC[factory_name][4] -= DICT_Brothels_STALE[brothel][13][i][1];}
		display_factory(factory_name);
	}
	DICT_Brothels_DYNAMIC[brothel][0] = 1; // the brothel is unlocked in the database
	DICT_Brothels_DYNAMIC[brothel][5] = 1; // the brothel has been unlocked at least once since the last Ruin everything
	display_brothel(brothel); // display the unlocked brothel
	display_all_factories(); // display the updated stocks of items after consumption by the purchase
}

function money_per_second_brothel(brothel, operational) {
	var money_gained = DICT_Brothels_STALE[brothel][3];
	money_gained *= operational; // number of operational prostitutes
	money_gained *= multiplicator_items_to_brothels(brothel);
	money_gained *= specific_number_modifier_upgrade("Real esthete");
	money_gained *= specific_number_modifier_upgrade("Harmony");
	money_gained *= specific_number_modifier_upgrade("Home arrangement");
	money_gained *= specific_number_modifier_upgrade("Inflation");
	money_gained *= specific_number_modifier_upgrade("Conviction");
	money_gained *= multiplicator_laboratory("Management");
	money_gained *= multiplicator_advanced_school();
	money_gained *= multiplicator_lobbies();
	money_gained *= specific_number_modifier_upgrade("Transfer");
	money_gained *= specific_number_modifier_upgrade("Law of attraction");
	money_gained *= specific_number_modifier_upgrade("Printing machine");
	money_gained *= global_multiplier;
	if (brothel == "Casinothel") {money_gained *= dice_casinothel;}
	else if (brothel == "Zoutopia") {if (zoutopia_activated) {money_gained *= 0;}}
	return money_gained
}

function collect_brothel(brothel) {
	cancel_inflation_streak()
	function collect_one_brothel(brot) {
		dollars += DICT_Brothels_DYNAMIC[brot][2];
		DICT_Brothels_DYNAMIC[brot][2] = 0;
		display_brothel(brot);
	}
	if (brothel == "razzia") {for (var i in DICT_Brothels_DYNAMIC) {collect_one_brothel(i)}}
	else {collect_one_brothel(brothel)}
	display_dollars();
}

function consume_items_brothel(brothel, shortened=false, bulks=1) {
	var error_message = "<br /><br /><span class='error_infos_box'>";
	
	// START - all possible error messages
	var i = 6;
	for (var factory_name in DICT_Factories_STALE) {
		if (DICT_Factories_DYNAMIC[factory_name][4] < DICT_Brothels_STALE[brothel][i]) { // if stock < quantity necessary
			error_message += "You don't have enough "+factory_name+" to buff this brothel with items.<br />";
			if (shortened != false) {break;} // this is used to save cpu since this function is called in the time_runner()
		}
		i++;
	}
	// END - all possible error messages
	if (error_message == "<br /><br /><span class='error_infos_box'>") { // if there are enough items.
		i = 6; // DICT_Brothels_STALE[brothel][6]: simple items required. DICT_Brothels_STALE[brothel][7]: simple materials required. etc
		for (var factory_name in DICT_Factories_STALE) { // loop through all the items and check if one is required to activate the brothel
			if (DICT_Brothels_STALE[brothel][i] > 0) { // if some of this item is required
				DICT_Factories_DYNAMIC[factory_name][4] -= DICT_Brothels_STALE[brothel][i]; // remove the items from the stock
				display_factory(factory_name); // refresh the factory to display the updated stock
			}
			i++;
		}
		DICT_Brothels_DYNAMIC[brothel][4] += DICT_Brothels_STALE[brothel][5]; // add time to the buff countdown
	}
	// else {do nothing yet, maybe add an error message in a tooltip later}
}

function activate_items_consumption_brothel(brothel) {
	// 0: inactive
	// 1: active, trying to consume
	// 2: active, will stop when time is out, not try to consume
	cancel_inflation_streak()
	if (DICT_Brothels_DYNAMIC[brothel][3] == 0) {
		DICT_Brothels_DYNAMIC[brothel][3] = 1;
		if (DICT_Brothels_DYNAMIC[brothel][4] <= 0) {consume_items_brothel(brothel);}
	}
	else if (DICT_Brothels_DYNAMIC[brothel][3] == 1) {
		if (DICT_Brothels_DYNAMIC[brothel][4] > 0) {DICT_Brothels_DYNAMIC[brothel][3] = 2;} // if there is buff time left
		else {DICT_Brothels_DYNAMIC[brothel][3] = 0;} // if there is no more buff time left
	}
	else { // if (DICT_Brothels_DYNAMIC[brothel][3] == 2)
		DICT_Brothels_DYNAMIC[brothel][3] = 0;
	}
	display_brothel(brothel);
}

function multiplicator_items_to_brothels(brothel) {
	var items_consumption_multiplicator = 1;
	if ((DICT_Brothels_DYNAMIC[brothel][3] == 1 || DICT_Brothels_DYNAMIC[brothel][3] == 2) && DICT_Brothels_DYNAMIC[brothel][4] > 0) { // if option "active" or "milk" is active and there is buff time left
		items_consumption_multiplicator = DICT_Brothels_STALE[brothel][4]*(1+DICT_Deals['Full potential'][2]*2);
	}
	return items_consumption_multiplicator;
}

function roll_the_dice() { // function for the Casinothel
	if (dollars >= dice_dollars_cost && DICT_Factories_DYNAMIC['Common materials'][4] > 9) {
		dollars_spent += dice_dollars_cost; // #stats
		compute_stat("ID_dollars_spent");
		dollars -= dice_dollars_cost;
		display_dollars();
		DICT_Factories_DYNAMIC['Common materials'][4] -= 10;
		display_factory("Common materials");
		var roll_it_babe = Math.floor(Math.random() * 32);
		if (roll_it_babe == 0) {dice_casinothel = 1} // 0
		else if (roll_it_babe < 17) {dice_casinothel = 2;} // 1 - 16
		else if (roll_it_babe < 25) {dice_casinothel = 3;} // 17 - 24
		else if (roll_it_babe < 29) {dice_casinothel = 4;} // 25 - 28
		else if (roll_it_babe < 31) {dice_casinothel = 5;} // 29 - 30
		else {dice_casinothel = 6;} // 31
		if (dice_rolled == 0) { // #stats if this is the first roll, display it in the stats menu
			DICT_all_statistics["ID_dice_rolled"][1] = 1;
			DICT_all_statistics["ID_average_die_roll"][1] = 1; 
			display_all_stats();
		}
		dice_rolled += 1; // #stats
		sum_value_dice_rolls += dice_casinothel; // #stats
		compute_stat("ID_dice_rolled");
		compute_stat("ID_average_die_roll");
		display_brothel("Casinothel");
	}
}

function animals_friendly() { // function for Zoutopia
	zoutopia_activated ^= true; // if true => false, if false, => true
	display_brothel("Zoutopia");
	display_all_factories(); // display the updated amount of items in the progress bars
}

function priestywood() { // function for Brollywood
	brollywood_activated ^= true; // if true => false, if false, => true
	display_brothel("Brollywood");
}

function virtual_presence() { // function for virtual brothel
	holograms ^= true; // if true => false, if false, => true
	display_brothel("Virtual brothel");
}

function activate_deactivate_factory_level(factory, level, activate=true) {
	cancel_inflation_streak()
	if (activate == true) {
		var up_to_date_level = level;
		if (DICT_Deals['Beyond limits'][2] == 1) {up_to_date_level -= 1;}
		var prostitutes_necessary = factory_necessary_prostitutes(factory, up_to_date_level);
		if (inactive_prostitutes() + (DICT_attributions[factory]+DICT_attributions_humans[factory]) >= prostitutes_necessary) {
			allocate_deallocate_prostitute(factory, false);
			window.CURRENT_LEVEL = up_to_date_level;
			allocate_deallocate_prostitute(factory, true);
			delete CURRENT_LEVEL;
			// display_factory() would be redundant, it's already activated in the allocate_deallocate_prostitute() function
		}
		// else {do nothing}
	}
	else { // if (activate == false)
		allocate_deallocate_prostitute(factory, false); // remove all prostitutes allocated
		// display_factory(factory); it's already in the allocate_deallocate_prostitute() function
	}
}

function buy_or_upgrade_factory(factory, level) {
	// level: desired level.
	cancel_inflation_streak()
	var error_message = "<br /><br /><span class='error_infos_box'>";
	
	// START - all possible error messages
	if (!(DICT_Factories_DYNAMIC[factory][0] < DICT_Factories_DYNAMIC[factory][5])) { // if the building isn't frozen due to labo downgrade
		if (dollars < DICT_Factories_UPGRADE_COSTS[factory][level][0]) {
			error_message += "You don't have enough money to upgrade this factory.<br />";
		}
		var i = 1;
		for (var factory_name in DICT_Factories_UPGRADE_COSTS) {
			if (DICT_Factories_DYNAMIC[factory_name][4] < DICT_Factories_UPGRADE_COSTS[factory][level][i]) { // if stock < quantity necessary
				error_message += "You don't have enough "+factory_name+" to upgrade this factory.<br />";
			}
			i++;
		}
		if (inactive_prostitutes()+(DICT_attributions[factory]+DICT_attributions_humans[factory]) < DICT_Factories_STALE[factory][2]*Math.pow(DICT_Factories_STALE[factory][3], (level-1)) && level > 0) {
			if (level > 1) { // this limitation doesn't exist if you just buy the factory
				error_message += "You don't have enough prostitutes available to upgrade this factory.<br />";
			}
		}
	}
	
	// START - levels high enough in upgrades?
	var DICT_building;
	var building;
	var position_current_level;
	var current_level;
	var required_level;
	for (var i in DICT_Factories_UPGRADE_COSTS[factory][level][7]) {
		DICT_building = DICT_Factories_UPGRADE_COSTS[factory][level][7][i][0];
		building = DICT_Factories_UPGRADE_COSTS[factory][level][7][i][1];
		position_current_level = DICT_Factories_UPGRADE_COSTS[factory][level][7][i][2];
		current_level = DICT_building[building][position_current_level];
		required_level = DICT_Factories_UPGRADE_COSTS[factory][level][7][i][3];
		if (current_level < required_level) {error_message += "The level of your "+building+" is too low.<br />";}
	}
	// END - levels high enough in upgrades?

	// END - all possible error messages
	
	if (error_message != "<br /><br /><span class='error_infos_box'>") { // if there is an error message to display
		level = parseInt(level);
		if (level > 1) {document.getElementById("TOOLTIP_"+factory+"_level_"+(level+DICT_Deals['Beyond limits'][2])).innerHTML += error_message+"</span>";} // if level == 1, the ElementById is undefined
	}
	else { // start the upgrade
		
		// START - pay for the upgrade
		if (!(DICT_Factories_DYNAMIC[factory][0] < DICT_Factories_DYNAMIC[factory][5])) { // if the building isn't frozen due to labo downgrade, pay
			if (DICT_Factories_DYNAMIC[factory][3] < level) {
				dollars_spent += DICT_Factories_UPGRADE_COSTS[factory][level][0]; // #stats
				compute_stat("ID_dollars_spent");
				dollars -= DICT_Factories_UPGRADE_COSTS[factory][level][0];
				i = 1;
				for (var factory_name in DICT_Factories_UPGRADE_COSTS) {
					DICT_Factories_DYNAMIC[factory_name][4] -= DICT_Factories_UPGRADE_COSTS[factory][level][i]; // remove the items consumed in the upgrade
					i++;
				}
			}
		}
		// END - pay for the upgrade
		
		if (level > 1) {
			if (DICT_Factories_DYNAMIC[factory][6] != level) {DICT_Factories_DYNAMIC[factory][2] = 0;} // reset the timer if necessary
			DICT_Factories_DYNAMIC[factory][6] = level;
			DICT_Factories_DYNAMIC[factory][3] = Math.max(level, DICT_Factories_DYNAMIC[factory][3]); // indicate the max level for which the price was paid (level 2 or 3)
			var corrected_level = Number(level);
			if (DICT_Deals['Beyond limits'][2] == 1) {corrected_level += 1;}
			activate_deactivate_factory_level(factory, corrected_level, true) // allocate the right amount of prostitutes
			DICT_Factories_DYNAMIC[factory][5] = level; // this factory level has been started upgrading at least once. Necessary for labo upgrades/downgrades.
		}
		else {
			DICT_Factories_DYNAMIC[factory][0] = 1; // if this is a Buy of the factory, instantly upgrade to level 1.
			DICT_Factories_DYNAMIC[factory][5] = level; // this factory has been bought at least once. Necessary for labo upgrades/downgrades.
			display_all_brothels(); // display the price of the brothels that become accessible
		}
		display_all_factories(); // display the updated stocks of items after consumption by the purchase
		display_dollars();
	}
}

function multiplicator_speed_factory(factory, upgrade=false) {
	var multiplicator = 1;
	if (upgrade == false) {multiplicator *= Math.pow(DICT_Factories_STALE[factory][5], (current_level_factory(factory)-1));}
	multiplicator *= specific_number_modifier_upgrade("Colosseus");
	multiplicator *= multiplicator_laboratory("Engineering");
	multiplicator *= global_multiplier;
	return multiplicator
}

function zoutopia_multiplicator() {
	if (zoutopia_activated) {
		var operational_prostitutes = Math.max(0, DICT_attributions['Zoutopia']+DICT_attributions_humans['Zoutopia']-DICT_Brothels_STALE['Zoutopia'][1]);
		if (operational_prostitutes > 0) {
			return (1 + 9 * operational_prostitutes / DICT_Brothels_STALE['Zoutopia'][2])*multiplicator_items_to_brothels("Zoutopia");
		}
	}
	return 1;
}

function multiplicator_quantity_factory(factory) {
	var multiplicator = 1;
	multiplicator *= Math.pow(specific_number_modifier_upgrade("Chain of production"), 1 / DICT_Factories_STALE[factory][8]);
	if (zoutopia_activated == true) {
		var operational_prostitutes = Math.max(0, DICT_attributions['Zoutopia']+DICT_attributions_humans['Zoutopia']-DICT_Brothels_STALE['Zoutopia'][1]);
		if (operational_prostitutes > 0) {
			multiplicator *= zoutopia_multiplicator();
		}
	}
	return multiplicator
}

function collect_genitals() {
	cancel_inflation_streak()
	genitals_stored += energy_building_DYNAMIC[9][5];
	document.getElementById("span_genitals_stored").innerHTML = display_number(genitals_stored);
	document.getElementById("time_left_genitals").innerHTML = display_time_left_genitals();
	energy_building_DYNAMIC[9][5] = 0;
	document.getElementById("genitals_count").innerHTML = 0;
	display_line(9, "body_part_9");
	display_progress_bar("progress_bar_9", 9);
}

function FUNC_autotransfer_genitals() {
	autotransfer_genitals = !autotransfer_genitals;
	for (var j in document.getElementsByClassName("ID_autotransfer_genitals")) {
		document.getElementsByClassName("ID_autotransfer_genitals")[j].className = "ID_autotransfer_genitals";
		document.getElementsByClassName("ID_autotransfer_genitals")[j].className += " tooltip arrow_button round_button";
	}
	if (autotransfer_genitals) {
		for (var k in document.getElementsByClassName("ID_autotransfer_genitals")) {
			document.getElementsByClassName("ID_autotransfer_genitals")[k].className += " activated_button";
		}
	}
}

function multiplicator_speed_worshipers() {return (DICT_attributions['Temple']*specific_number_modifier_upgrade("Real estate")*global_multiplier);}

function priesthel_multiplicator() {
	if (brollywood_activated) {
		var operational_prostitutes = Math.max(0, DICT_attributions['Brollywood']+DICT_attributions_humans['Brollywood']-DICT_Brothels_STALE['Brollywood'][1]);
		if (operational_prostitutes > 0) {
			return (1+(brollywood_multiplicator * operational_prostitutes / DICT_Brothels_STALE['Brollywood'][2])*multiplicator_items_to_brothels("Brollywood"));
		}
	}
	return 1;
}

function multiplicator_upgrades_temple(upgrade) {
	var multiplicator = Math.pow(DICT_Temple_upgrades[upgrade][0], decrementor_worshipers) * multiplicator_laboratory("Psychology");
	if (brollywood_activated) {
		var operational_prostitutes = Math.max(0, DICT_attributions['Brollywood']+DICT_attributions_humans['Brollywood']-DICT_Brothels_STALE['Brollywood'][1]);
		if (operational_prostitutes > 0) {
			multiplicator *= priesthel_multiplicator();
		}
	}
	multiplicator *= global_multiplier;
	return multiplicator
}

function collect_body_parts(part) {
	cancel_inflation_streak()
	LIST_body_parts_stored[part] += energy_building_DYNAMIC[part][5];
	document.getElementById("span_"+part+"_stored").innerHTML = display_number(LIST_body_parts_stored[part]);
	body_parts_sent_to_lab += energy_building_DYNAMIC[part][5]; // #stats
	compute_stat("ID_proportion_items_converted");
	compute_stat("ID_proportion_items_sent_to_the_lab");
	compute_stat("ID_proportion_items_used_in_upgrades");
	energy_building_DYNAMIC[part][5] = 0;
	document.getElementById(part+"_count").innerHTML = 0;
	display_line(part, true);
}

function FUNC_autotransfer_body_part(body_part) {
	LIST_autotransfer_body_parts[body_part] = !LIST_autotransfer_body_parts[body_part];
	for (var j in document.getElementsByClassName("ID_autotransfer_body_parts"+body_part)) {
		document.getElementsByClassName("ID_autotransfer_body_parts"+body_part)[j].className = "ID_autotransfer_body_parts"+body_part;
		document.getElementsByClassName("ID_autotransfer_body_parts"+body_part)[j].className += " tooltip arrow_button round_button";
	}
	if (LIST_autotransfer_body_parts[body_part]) {
		for (var k in document.getElementsByClassName("ID_autotransfer_body_parts"+body_part)) {
			document.getElementsByClassName("ID_autotransfer_body_parts"+body_part)[k].className += " activated_button";
		}
	}
}

function FUNC_autotransfer_all_body_parts() {
	var all_activated = true;
	for (var i in LIST_autotransfer_body_parts) {
		if (i < 9) { // do nothing for genitals
			if (LIST_autotransfer_body_parts[i] == false) {
				FUNC_autotransfer_body_part(i)
				all_activated = false; // if one or more body part is inactive, activate them all. Otherwise, deactivate them all.
			}
		}
	}
	if (all_activated) {
		for (var i in LIST_autotransfer_body_parts) {
			if (i < 9) { // do nothing for genitals
				FUNC_autotransfer_body_part(i)
			}
		}
	}
}

function sum_levels_laboratory() {
	var counter = 0;
	for (var i in DICT_Laboratory_upgrades) {
		counter += DICT_Laboratory_upgrades[i][0];
	}
	return counter
}

function cost_dollars_upgrade_laboratory(upgrade) {
	return (DICT_Laboratory_upgrades[upgrade][4] * Math.pow(LIST_Laboratory[0] / (1 + DICT_fundamental_talents['Optimized processes'][3]), sum_levels_laboratory()));
}

function cost_items_upgrade_laboratory(upgrade, item) {
	if (DICT_Laboratory_upgrades[upgrade][0] < DICT_Laboratory_upgrades[upgrade][6]) { // if current_level < maximum_level_reached
		if (DICT_God_of_Extortion['Maximum memoriam'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {
			return 0; // no item required, price = 0.
		}
	}
	return (DICT_Laboratory_upgrades[upgrade][2][item] * Math.pow(LIST_Laboratory[1], DICT_Laboratory_upgrades[upgrade][0]));
}

function requirements_building(dictionnary, building_selected, position) { // position: location of the list of requirements in the DICT
	var conditions_location = dictionnary[building_selected][position];
	if (dictionnary == DICT_Factories_UPGRADE_COSTS) {conditions_location = dictionnary[building_selected][position][7];}
	var DICT_requirements = {};
	var DICT_building;
	var building;
	var position_current_level;
	var current_level;
	var required_level;
	var locked_costs = false;
	for (var i in conditions_location) {
		DICT_building = conditions_location[i][0];
		// START - Will the costs be displayed?
		
		if (DICT_building == DICT_Factories_DYNAMIC) {
			if (DICT_dollars_buildings_DYNAMIC['Factories'][1] == 0) {
				locked_costs = true;
			}
		}
		else if (DICT_building == DICT_Laboratory_upgrades && DICT_dollars_buildings_DYNAMIC['Laboratory'][1] == 0) {locked_costs = true;}
		else if (DICT_building == DICT_Schools) {
			if (DICT_dollars_buildings_DYNAMIC['Schools'][1] == 0) {
				locked_costs = true;
			}
			else if (DICT_Schools[conditions_location[i][1]][13] == 0) { // if the specific school has never been unlocked
				locked_costs = true;
			}
		}
		else if (DICT_building == DICT_dollars_buildings_DYNAMIC && DICT_dollars_buildings_DYNAMIC['Lobby'][1] == 0) {locked_costs = true;}
		// END - Will the costs be displayed?
		building = conditions_location[i][1];
		position_current_level = conditions_location[i][2];
		current_level = DICT_building[building][position_current_level];
		required_level = conditions_location[i][3];
		DICT_requirements[building] = [current_level, required_level, locked_costs];
	}
	return DICT_requirements
}

function upgrade_laboratory(upgrade) {
	cancel_inflation_streak()
	var upgrade_impossible = "<br /><br /><span class='error_infos_box'>";
	if (DICT_Laboratory_upgrades[upgrade][0] >= DICT_Laboratory_upgrades[upgrade][1]) {
		upgrade_impossible += "The maximum level has already been reached.<br />";
	}
	else {
		if (dollars < cost_dollars_upgrade_laboratory(upgrade)) {
			upgrade_impossible += "Not enough dollars.<br />";
		}
		var enough_items = true;
		for (var body_part in DICT_Laboratory_upgrades[upgrade][2]) {
			if (LIST_body_parts_stored[body_part] < cost_items_upgrade_laboratory(upgrade, body_part)) {
				enough_items = false;
			}
		}
		if (!enough_items) {
			upgrade_impossible += "Not enough body parts.<br />";
		}
	}
	if (upgrade_impossible == "<br /><br /><span class='error_infos_box'>") {
		dollars_spent += cost_dollars_upgrade_laboratory(upgrade); // #stats
		compute_stat("ID_dollars_spent");
		dollars -= cost_dollars_upgrade_laboratory(upgrade);
		for (var body_part in DICT_Laboratory_upgrades[upgrade][2]) {
			LIST_body_parts_stored[body_part] -= cost_items_upgrade_laboratory(upgrade, body_part);
			body_parts_used_in_upgrades += cost_items_upgrade_laboratory(upgrade, body_part); // #stats
			compute_stat("ID_proportion_items_used_in_upgrades");
			display_stock_body_part_laboratory(body_part);
		}
		DICT_Laboratory_upgrades[upgrade][0] += 1;
		DICT_Laboratory_upgrades[upgrade][6] = Math.max(DICT_Laboratory_upgrades[upgrade][6], DICT_Laboratory_upgrades[upgrade][0]); // maximum level ever reached
		
		if (upgrade == "Fundamental physics") {
			for (var i in energy_building_STALE) {
				document.getElementById("stock_gains_"+i).innerHTML = display_number(conversion_gains(i));
			}
		}
		
		display_dollars()
		// START - heavy functions because I need to update the display of tooltips for things that need a specific labo level to be upgraded
		display_workers()
		display_all_brothels()
		display_all_factories()
		display_all_laboratory_upgrades()
		display_temple()
		display_all_schools()
		display_lobby(lobby_page)
		// START - heavy functions because I need to update the display of tooltips for things that need a specific labo level to be upgraded
	}
	else {document.getElementById("TOOLTIP_"+DICT_Laboratory_upgrades[upgrade][5]).innerHTML += upgrade_impossible+"</span>";}
}

function downgrade_laboratory(upgrade) {
	cancel_inflation_streak()
	if (DICT_Laboratory_upgrades[upgrade][0] > 0) {
		DICT_Laboratory_upgrades[upgrade][0] -= 1;
		
		for (var brothel in DICT_Brothels_DYNAMIC) {
			if (DICT_Brothels_DYNAMIC[brothel][0] == 1) { // if the building is active
				var DICT_requirements = requirements_building(DICT_Brothels_STALE, brothel, 12);
				for (var i in DICT_requirements) {
					if (DICT_requirements[i][0] < DICT_requirements[i][1]) { // if current level < required_level
						DICT_Brothels_DYNAMIC[brothel][0] -= 1;
						DICT_attributions[brothel] = 0;
						DICT_attributions_humans[brothel] = 0;
						break // very important to break, I don't want to have a level -= 2, level -= 3, ...
					}
				}
			}
		}
		
		for (var factory in DICT_Factories_DYNAMIC) {
			if (DICT_Factories_DYNAMIC[factory][0] > 0) { // if the building is active
				var DICT_requirements = requirements_building(DICT_Factories_UPGRADE_COSTS, factory, 1);
				for (var i in DICT_requirements) {
					if (DICT_requirements[i][0] < DICT_requirements[i][1]) { // if current level < required_level
						DICT_Factories_DYNAMIC[factory][0] -= 1;
						DICT_attributions[factory] = 0;
						DICT_attributions_humans[factory] = 0;
						break // very important to break, I don't want to have a level -= 2, level -= 3, ...
					}
				}
			}
		}

		for (var school in DICT_Schools) {
			if (DICT_Schools[school][2] == 1) { // if the building is active
				var DICT_requirements = requirements_building(DICT_Schools, school, 6);
				for (var i in DICT_requirements) {
					if (DICT_requirements[i][0] < DICT_requirements[i][1]) { // if current level < required_level
						DICT_Schools[school][2] -= 1;
						DICT_attributions[school+" pupil"] = 0;
						DICT_attributions_humans[school+" pupil"] = 0;
						break // very important to break, I don't want to have a level -= 2, level -= 3, ...
						// note later: I don't know why "DICT_Schools[school][2] -= 1" was used instead of "DICT_Schools[school][2] = 0". It works, I let it this way.
					}
				}
			}
		}
		
		// START - heavy functions because I need to update the display of tooltips for things that need a specific labo level to be upgraded
		display_prostitutes()
		display_trained_prostitutes()
		display_workers()
		display_all_brothels()
		display_all_factories()
		display_all_laboratory_upgrades()
		display_temple()
		display_all_schools()
		display_lobby(lobby_page)
		// END - heavy functions because I need to update the display of tooltips for things that need a specific labo level to be upgraded
	}
}

function multiplicator_laboratory(upgrade) {
	return Math.pow(1 + LIST_Laboratory[3]*(1+DICT_Deals['Science beach!'][2]), DICT_Laboratory_upgrades[upgrade][0])
}

function kill_the_scientist() {
	scientist_dead = true;
	DICT_all_statistics["ID_scientist_murders"][1] = 1; // #stats
	scientist_murders += 1; // #stats
	compute_stat("ID_scientist_murders");
	display_all_stats();
	scientist_timer = timestamp();
	document.getElementById("Body_laboratory_alternative").style.display = 'initial';
	for (var upgrade in DICT_Laboratory_upgrades) { // downgrade all levels to 0.
		var j = 0;
		while (DICT_Laboratory_upgrades[upgrade][0] > 0) {
			downgrade_laboratory(upgrade);
			j++;
			if (j > 10) {console.log("ERROR #3: infinite while loop. upgrade: "+upgrade); break;}
		}
	}
}

function resurrect_the_scientist() {
	scientist_dead = false;
	scientist_resurrected = true;
	scientist_timer = 0;
	document.getElementById("Body_laboratory_alternative").style.display = 'none';
	additional_tooltip_resurrection();
	if (DICT_encyclopedia_additional_parts['Laboratory'][0] == 0) {
		DICT_encyclopedia_additional_parts['Laboratory'][0] = 1; // validate the visibility of the scientist in the encyclopedia
		DICT_encyclopedia['Human World']['Laboratory'][1] = 0; // put back the Laboratory to orange in the encyclopedia
		display_encyclopedia();
	}
}

function additional_tooltip_resurrection() {
	document.getElementById("scientist_resurrection").innerHTML = "The scientist is resurrected! Incredible... \
	He probably has deals with other gods indeed, if the Godess of Death herself, who despises both Gods and humans alike, decided to meddle into his business.<br /><br />";
}

function buy_school(school) {
	cancel_inflation_streak()
	// START - levels high enough in upgrades?
	var DICT_building;
	var building;
	var position_current_level;
	var current_level;
	var required_level;
	for (var i in DICT_Schools[school][6]) {
		DICT_building = DICT_Schools[school][6][i][0];
		building = DICT_Schools[school][6][i][1];
		position_current_level = DICT_Schools[school][6][i][2];
		current_level = DICT_building[building][position_current_level];
		required_level = DICT_Schools[school][6][i][3];
		if (current_level < required_level) {return}
	}
	// END - levels high enough in upgrades?
	if (DICT_Schools[school][13] == 0) { // if this school has never been unlocked in this Ruin Everything
		if (dollars < DICT_Schools[school][4]) {return} // enough money?
		
		// START - enough factories items?
		var factory;
		var stock;
		var stock_required;
		for (var i in DICT_Schools[school][12]) {
			factory = DICT_Schools[school][12][i][0];
			stock = DICT_Factories_DYNAMIC[factory][4];
			stock_required = DICT_Schools[school][12][i][1];
			if (stock < stock_required) {return}
		}
		// END - enough factories items?
		
		if (inactive_artworks() < DICT_Schools[school][5]) {return}	// enough inactive artworks?
	}
	
	// if it hasn't returned yet, it means the conditions are fulfilled, so, unlock the school
	if (DICT_Schools[school][13] == 0) { // remove the dollars
		dollars_spent += DICT_Schools[school][4]; // #stats
		compute_stat("ID_dollars_spent");
		dollars -= DICT_Schools[school][4];
		allocate_deallocate_prostitute(school, true, " admin"); // allocate the administrators
		for (var i in DICT_Schools[school][12]) { // remove components from the stock
			factory = DICT_Schools[school][12][i][0];
			DICT_Factories_DYNAMIC[factory][4] -= DICT_Schools[school][12][i][1];
			display_factory(factory);
		}
		if (["Advanced school", "Elite school"].includes(school)) {
			if (DICT_encyclopedia_additional_parts[school][0] == 0) {
				DICT_encyclopedia_additional_parts[school][0] = 1; // validate the visibility of this school in the encyclopedia
				DICT_encyclopedia['Human World']['Schools'][1] = 0; // put back the Schools to orange in the encyclopedia
				display_encyclopedia();
			}
		}
		
	}
	display_dollars();
	display_prostitutes();
	DICT_Schools[school][2] = 1; // the school is unlocked in the database
	DICT_Schools[school][13] = 1; // the school has been unlocked at least once
	if (school == "Basics school") { // activate the tooltips differenciating artworks and trained.
		display_workers()
		display_all_schools()
		display_lobby(lobby_page)
	}
	else {
		display_school(school); // display the unlocked school
	}
	display_all_factories(); // update the stocks consumed by the purchase, and differentiate artworks/trained for the basic school.
	display_all_brothels() // if a brothel necessitates a school to be displayed
}

function multiplicator_speed_schools(school, simplified=false) {
	var multiplicator_school;
	if (school == "Basics school") {
		multiplicator_school = DICT_attributions['Basics school prof']*specific_number_modifier_upgrade("Classy school");
		multiplicator_school *= (DICT_Schools["Basics school"][15] - DICT_Schools[school][3])/DICT_Schools["Basics school"][15];
	}
	else {
		if (school == "Advanced school") {
			var pupils_per_teacher_multiplier = 2;
			var decrement_excess_pupils_multiplier = 1;
		}
		else {// if (school == "Elite school")
			var pupils_per_teacher_multiplier = 1;
			var decrement_excess_pupils_multiplier = 10;
		}
		if (!simplified) { // simplified for offline progress or timewarp coins
			var base_number_of_completions_for_decrementor = DICT_Schools[school][15]; // = 200 % for advanced, 100 % for elite
		}
		var pupils_per_teacher = pupils_per_teacher_multiplier*(1 + DICT_fundamental_talents['Wide teaching'][3]);
		if (DICT_attributions[school+' prof'] > 0) {
			// multiplicator_school = minimum between "all students" (if you don't reach the limit) and "teachers fully employed" (if there are more students than teachers can handle)
			multiplicator_school = Math.min((DICT_attributions_humans[school+' pupil'] + DICT_attributions[school+' pupil']), DICT_attributions[school+' prof']*pupils_per_teacher);
			if (DICT_attributions[school+' prof']*pupils_per_teacher < DICT_attributions_humans[school+' pupil'] + DICT_attributions[school+' pupil']) {
				var additional_pupils = (DICT_attributions_humans[school+' pupil'] + DICT_attributions[school+' pupil'] - DICT_attributions[school+' prof']*pupils_per_teacher);
				multiplicator_school += additional_pupils / (1 + decrement_excess_pupils_multiplier*additional_pupils/DICT_attributions[school+' prof']/pupils_per_teacher);
			}
			if (!simplified) { // used for display
				multiplicator_school *= base_number_of_completions_for_decrementor / (base_number_of_completions_for_decrementor+DICT_Schools[school][3]); // the higher the current bonus, the slower it grows up. Half speed : 200 % for advanced, 100 % for elite.
			}
		}
		else {multiplicator_school = 0;} // no teacher
	}
	multiplicator_school *= specific_number_modifier_upgrade("New sexy");
	multiplicator_school *= global_multiplier;
	return multiplicator_school
}

function multiplicator_advanced_school() {return (1+DICT_Schools['Advanced school'][3]*DICT_Schools['Advanced school'][8]/100)}

function multiplicator_lobbies() {
	var total_multiplicator = 1;
	for (var i in LIST_Lobby) {
		if (LIST_Lobby[i][1] == 1) {total_multiplicator *= LIST_Lobby[i][3];}
	}
	return total_multiplicator
}

function completion_per_millisecond_lobby() { // en unitÃ©s de temps, qui sont basÃ©es sur les millisecondes, multipliÃ©es par les bonus
	if ((DICT_attributions['Lobby']+DICT_attributions_humans['Lobby']) == 0) {return 0}
	else {
		var completion = Math.pow((DICT_attributions['Lobby']+DICT_attributions_humans['Lobby']), (lobby_prostitutes_decrementor+specific_number_modifier_upgrade("Quick persuasion"))); // prostitutes
		completion *= influence_points;
		if (DICT_Schools['Elite school'][2] > 0) { // if the school is up (it can be down if there has been a downgrade in the lab)
			completion *= 1 + (DICT_Schools['Elite school'][3]*DICT_Schools['Elite school'][8])/100; // amount of completions * bonus per completion
		}
		if (holograms) {
			var operational_prostitutes = Math.max(0, DICT_attributions['Virtual brothel']+DICT_attributions_humans['Virtual brothel']-DICT_Brothels_STALE['Virtual brothel'][1]);
			if (operational_prostitutes > 0) {
				completion *= holograms_multiplicator()
			}
		}
		completion *= global_multiplier;
		return completion;
	}
}

function holograms_multiplicator() {
	if (holograms) {
		var operational_prostitutes = Math.max(0, DICT_attributions['Virtual brothel']+DICT_attributions_humans['Virtual brothel']-DICT_Brothels_STALE['Virtual brothel'][1]);
		if (operational_prostitutes > 0) {
			return multiplicator_items_to_brothels("Virtual brothel");
		}
	}
	return 1;
}

function price_per_millisecond_lobby() {
	// (nombre de prostitutes^incrementor) * price per prostitute per millisecond
	var VAR_max_page = max_page_lobby();
	var price = Math.pow((DICT_attributions['Lobby']+DICT_attributions_humans['Lobby']), (lobby_price_incrementor-specific_number_modifier_upgrade("Scaling"))) * LIST_Lobby[VAR_max_page][4];
	price *= Math.pow(LIST_Lobby[VAR_max_page][6], 2) / Math.pow(LIST_Lobby[VAR_max_page][7], 2); // this way, the price grows during the leveling. 1 % is 10K times cheaper than 99 %.
	price *= holograms_multiplicator();
	return price;
}

function specific_number_modifier_upgrade(upgrade, modifier=0) {
	// modifier: only useful for fundamental talents and SCAMs
	if (upgrade == 'Artwork') { // energy talent
		var divisions_left = DICT_fundamental_talents['Artwork'][3] - 1 + modifier;
		if (divisions_left == 28) {return "-"} // if we have reached the max level, which is 28.
		var turns_artwork = 100;
		while (divisions_left > 0) {
			turns_artwork = Math.floor(turns_artwork*0.9);
			divisions_left -= 1;
		}
		return turns_artwork;
	}
	else if (upgrade == "Energy fountain") { // energy talent
		return (1+0.05*(DICT_fundamental_talents['Energy fountain'][3]+modifier))
	}
	else if (upgrade == 'Tip') { // style talent
		return Math.pow(1.4, (DICT_fundamental_talents['Tip'][3]+modifier))
	}
	else if (upgrade == 'Real esthete') { // style talent
		return Math.pow(1.4, (DICT_fundamental_talents['Real esthete'][3]+modifier))
	}
	else if (upgrade == 'Real estate') { // style talent
		return Math.pow(1.3, (DICT_fundamental_talents['Real estate'][3]+modifier))
	}
	else if (upgrade == 'Chain of production') { // style talent
		return Math.pow(2, (DICT_fundamental_talents['Chain of production'][3]+modifier))
	}
	else if (upgrade == 'Classy school') { // style talent
		var LOCAL_level = DICT_fundamental_talents['Classy school'][3]+modifier;
		var LOCAL_multiplicator = 1;
		while (LOCAL_level > 0) {
			LOCAL_multiplicator *= 1 + LOCAL_level/10;
			LOCAL_level--;
		}
		return LOCAL_multiplicator
	}
	else if (upgrade == 'Quick persuasion') { // style talent
		return ((DICT_fundamental_talents['Quick persuasion'][3]+modifier) /100)
	}
	else if (upgrade == 'Scaling') { // style talent
		return ((DICT_fundamental_talents['Scaling'][3]+modifier) /50)
	}
	
	else if (upgrade == 'Body building') { // deal
		return (1+pretty_stored_time)
	}
	else if (upgrade == 'Colosseus') { // deal
		return (1 + DICT_Deals['Colosseus'][2]*2)
	}
	else if (upgrade == 'Conviction') { // deal
		var max_lobby = max_page_lobby();
		var percentage_completed = LIST_Lobby[max_lobby][6] / LIST_Lobby[max_lobby][7];
		var gain_current_ongoing_lobby = LIST_Lobby[max_lobby][3]; // 1,000 10,000 or 100,000
		return (1 + DICT_Deals['Conviction'][2]*(Math.pow((percentage_completed*gain_current_ongoing_lobby), 0.4) + max_lobby));
	}
	else if (upgrade == 'Harmony') { // deal
		return (1+DICT_Deals['Harmony'][2])
	}
	else if (upgrade == 'Generic beauty') { // deal
		return (1+3*DICT_Deals["Generic beauty"][2])
	}
	else if (upgrade == "Home arrangement") { // deal
		return (1+2*DICT_Deals['Home arrangement'][2])
	}
	else if (upgrade == 'New sexy') { // deal
		return (1 + DICT_Deals['New sexy'][2]*2)
	}
	else if (upgrade == 'Inflation') { // deal
		return (1 + inflation_bonus/inflation_delay*DICT_Deals['Inflation'][2])
	}
	else if (upgrade == 'Discount talents') { // deal
		return (1+DICT_Deals['Discount talents'][2])
	}
	else if (upgrade == 'Focus') { // deal
		return (Math.max((1+DICT_fundamental_talents['Multitasking'][3])/2, 1)) // Math.max: just in case multitasking = 0, the player still creates one body part, it doesn't become 0.5 rounded to 0.
	}
	else if (upgrade == 'Transfer') { // deal
		if (energy_transfered == 0 || DICT_Deals['Transfer'][2] == 0) {return 1}
		else {return (Math.log10(energy_transfered)/10 + 1)}
	}
	else if (upgrade == 'Law of attraction') { // Temple
		if ((DICT_attributions['Workers'] + DICT_attributions_humans['Workers']) == 0) {return 1}
		else {
			var return_this = Math.log2(multiplicator_upgrades_workers());
			return_this *= Math.log2(DICT_attributions['Workers'] + DICT_attributions_humans['Workers']);
			return_this /= 20;
			return_this *= DICT_Temple_upgrades['Law of attraction'][5];
			return_this += 1;
			return (return_this)
		}
	}
	else if (upgrade == "Printing machine") { // SCAM
		if ((printing_machine+modifier) == 0 || DICT_Deals['4th wall'][2] != 1) {return 1;}
		else {return (3*(printing_machine+modifier));}
	}
	else if (upgrade == "Copyism") { // SCAM
		if (DICT_Deals['4th wall'][2] != 1) {return 1;}
		else {return (1 + (DICT_God_of_Extortion['Copyism'][3]+modifier)*0.1);}
	}
}

function fundamental_talent_cost(talent) {
	var talent_cost = DICT_fundamental_talents[talent][1];
	talent_cost *= Math.pow(DICT_fundamental_talents[talent][2], DICT_fundamental_talents[talent][3]);
	talent_cost /= specific_number_modifier_upgrade('Discount talents');
	if (talent_cost < 1000000000) {return Math.max(parseInt(talent_cost), 1)} // if it's relevant (if values are low), round down with parseInt. 1 is the minimum cost of a talent (could become 0 with Discount talents)
	else {return talent_cost} // don't parseInt for big values, or it breaks and becomes 1.
}

function talent_authorization(talent) { // does the selected talent fulfill the conditions to be displayed?
	var talent_authorized_to_be_seen = true;
	for (var necessary_talent in DICT_fundamental_talents[talent][5]) {
		var necessary_talent_value = DICT_fundamental_talents[talent][5][necessary_talent];
		var level_of_the_necessary_talent = DICT_fundamental_talents[necessary_talent][3];
		if (level_of_the_necessary_talent < necessary_talent_value) {
			talent_authorized_to_be_seen = false;
		}
	}
	return talent_authorized_to_be_seen;
}

function purchase_authorization(purchase) { // does the selected purchase fulfill the conditions to be displayed?
	var purchase_authorized_to_be_seen = false;
	if (Object.keys(DICT_God_of_Extortion[purchase][5]).length === 0) { // if there is no requirement of previous upgrades to buy this one
		purchase_authorized_to_be_seen = true;
	}
	else {
		for (var necessary_purchase in DICT_God_of_Extortion[purchase][5]) {
			var necessary_purchase_value = DICT_God_of_Extortion[purchase][5][necessary_purchase];
			var level_of_the_necessary_purchase = DICT_God_of_Extortion[necessary_purchase][3];
			if (level_of_the_necessary_purchase >= necessary_purchase_value) {
				purchase_authorized_to_be_seen = true;
			}
		}
	}
	return purchase_authorized_to_be_seen;
}

function temporize_add_talent_on_hold(talent) {
	window.multiple_talents_temporize = setTimeout("activate_multiple_talents('"+talent+"')", 1000);
}

function activate_multiple_talents(talent) {
	window.multiple_talents_activation = setInterval("add_talent('"+talent+"')", 50);
}

function cancel_multiple_add_talent_on_hold(talent) {
	clearInterval(window.multiple_talents_temporize);
	clearInterval(window.multiple_talents_activation);
}

function add_talent(talent, update_encyclopedia=true) {
	if ((talent_authorization(talent) == true && talent != 'Artwork') || (energy_building_DYNAMIC[9][3] == 1 && talent == 'Artwork')) {
		var error_message = "<br /><br /><span class='error_infos_box'>";
		if (current_turn != 0 && DICT_fundamental_talents[talent][6] == 'energy') {
			error_message+= "You need to be at turn 0 to buy talents, you're at turn "+current_turn+"/"+(100+DICT_fundamental_talents['God repellent'][3]*10)+".<br />";
		}
		if (DICT_fundamental_talents[talent][3] >=  DICT_fundamental_talents[talent][4]) {
			error_message+= "This talent has already reached its maximum level!<br />";
		}
		else if ((fundamental_energy < fundamental_talent_cost(talent)) && DICT_fundamental_talents[talent][6] == 'energy') {
			error_message+= "You don't have enough fundamental energy to buy this talent.<br />";
		}
		else if ((style_points < fundamental_talent_cost(talent)) && DICT_fundamental_talents[talent][6] == 'style') {
			error_message+= "You don't have enough style points to buy this talent.<br />";
		}
		else if (fundamental_energy == fundamental_talent_cost(talent) && DICT_fundamental_talents[talent][6] == 'energy') {
			var construction_planned = 0;
			for (var i in energy_building_DYNAMIC) { // if fundamental energy has been spent for construction
				if (energy_building_DYNAMIC[i][6] == 'construct') {construction_planned = 1;}
			}
			if (construction_planned == 0) {
				error_message+= "You don't have enough fundamental energy to buy this talent.<br />";
				error_message+= "You can't use all your fundamental energy to buy a talent, you need to keep a least 1 &#x2206.<br />";
			}
		}
		if (error_message != "<br /><br /><span class='error_infos_box'>") {
			document.getElementById("TOOLTIP_"+DICT_fundamental_talents[talent][0]).innerHTML += error_message+"</span>";
		}
		else {
			if (DICT_fundamental_talents[talent][6] == 'energy') {
				fundamental_energy -= fundamental_talent_cost(talent);
				display_fundamental_energy();
			}
			else { // if (DICT_fundamental_talents[talent][6] == 'style')
				style_points -= fundamental_talent_cost(talent);
				display_style_points();
			}
			DICT_fundamental_talents[talent][3]+=1; // augmentation du niveau du talent
			if (DICT_fundamental_talents[talent][3] >= DICT_fundamental_talents[talent][4]) { // if talent reaches its max level
				document.getElementById(DICT_fundamental_talents[talent][0]).outerHTML = display_fundamental_talent(talent);
			}
			document.getElementById("TOOLTIP_"+DICT_fundamental_talents[talent][0]).innerHTML = display_talent_tooltip(talent);
			display_specific_talent(talent)
		}
		// START - actualize tree
		var validated_parents = 0;
		for (var child_talent in DICT_fundamental_talents) {
			for (var parent_talent in DICT_fundamental_talents[child_talent][5]) {
				if (talent == parent_talent) {
					for (var parent_talent in DICT_fundamental_talents[child_talent][5]) {
						if (DICT_fundamental_talents[child_talent][5][parent_talent] <= DICT_fundamental_talents[parent_talent][3]) { // si les valeurs des parents sont maintenant toutes suffisantes pour activer ce nouveau talent :
							validated_parents += 1;
							if (Object.keys(DICT_fundamental_talents[child_talent][5]).length <= validated_parents) { // si tous les parents sont d'un niveau suffisant
								document.getElementById(DICT_fundamental_talents[child_talent][0]).outerHTML = display_fundamental_talent(child_talent);
							}
						}
					}
				}
			}
		}
		// END - actualize tree
		
		if (update_encyclopedia == true) {display_encyclopedia();} // in case a new talent needs to be displayed; only done if we are not using the Unstoppable, to avoid multiple cause using excessive CPU power
		if (!unlocked_buttons) {display_all_lines()}
	}
}

function unlock_all() {
	if (DICT_Deals['Unlocker'][2] == 1) {
		for (var building in DICT_dollars_buildings_STALE) { // buildings
			if (DICT_dollars_buildings_DYNAMIC[building][0] == 0) {unlock_building(building);}
		}
		
		for (var i in LIST_Workers_upgrades_DYNAMIC) { // workers upgrades
			if (LIST_Workers_upgrades_DYNAMIC[i] == 0) {buy_workers_upgrade(i)}
		}
		
		if (DICT_dollars_buildings_DYNAMIC['Brothels'][0] == 1) {
			for (var brothel in DICT_Brothels_STALE) { // brothels
				if (DICT_Brothels_DYNAMIC[brothel][0] == 0) {buy_brothel(brothel)}
			}
		}
		
		if (DICT_dollars_buildings_DYNAMIC['Factories'][0] == 1) {
			for (var factory in DICT_Factories_STALE) { // factories
				if (DICT_Factories_DYNAMIC[factory][0] == 0) {buy_or_upgrade_factory(factory, 1)}
			}
		}

		if (DICT_dollars_buildings_DYNAMIC['Schools'][0] == 1) { // schools
			if (DICT_Schools['Advanced school'][2] == 0) {buy_school('Advanced school')}
			if (DICT_Schools['Elite school'][2] == 0) {buy_school('Elite school')}
		}
	}
	
	else {
		console.log("ERROR #4: Unlock button activated while it shouldn't be displayed.")
	}
}

function unlock_building(building='') {
	var activate_building = "<button id='title_"+building+"' class='title_building' onclick='display_front_screen(\"corps_"+building+"\", DICT_human_world_corps_screens, \"title_"+building+"\")'>"+building+"</button>";
	if (DICT_dollars_buildings_DYNAMIC[building][0] == 1) { // if the building is already active (this happens when we load the game)
		document.getElementById("title_"+building+"_inactive").outerHTML = activate_building;
	}
	else if (DICT_dollars_buildings_STALE[building][1] <= dollars && DICT_dollars_buildings_DYNAMIC[building][0] == 0) {
		cancel_inflation_streak()
		if (DICT_dollars_buildings_DYNAMIC[building][1] == 1) { // if this isn't the first time we unlock the building, pay the price
			dollars_spent += DICT_dollars_buildings_STALE[building][1]; // #stats
			compute_stat("ID_dollars_spent");
			dollars -= DICT_dollars_buildings_STALE[building][1];
			display_dollars();
		}
		else {
			DICT_dollars_buildings_DYNAMIC[building][1] = 1;
			var DICT_building_music = {"Workers": 1, "Brothels": 2, "Factories": 3, "Temple": 4, "Laboratory": 5, "Schools": 6, "Lobby": 7,};
			LIST_musics[DICT_building_music[building]][0] = 1; // Authorize the music of the building
			if (current_music != Object.keys(LIST_musics).length-1) { // if the music isn't muted
				current_music = DICT_building_music[building]; // music number of the building
				change_music(false); // activate the music of the ne building
			}
		}
		DICT_dollars_buildings_DYNAMIC[building][0] = 1;
		DICT_encyclopedia['Human World'][building][0] = 1;
		document.getElementById("title_"+building+"_inactive").outerHTML = activate_building;
		display_prestige_deals();
		// START - specific buildings
		if (building == 'Brothels') { // #stats
			DICT_all_statistics["ID_brothels_bought"][1] = 1;
			display_all_stats();
		} 
		if (building == 'Factories') {display_all_brothels()} // unlock the "Consume items" button
		else if (building == 'Temple') {display_workers(); display_all_lines()} // unlock the attractor indicator and display the transfer button
		else if (building == 'Laboratory') {
			DICT_all_statistics["ID_proportion_items_converted"][1] = 1;
			DICT_all_statistics["ID_proportion_items_sent_to_the_lab"][1] = 1;
			DICT_all_statistics["ID_proportion_items_used_in_upgrades"][1] = 1;
			display_all_stats();
			display_all_brothels(); // display locked costs
			display_all_factories(); // display locked costs
			display_all_lines(); // display the buttons to send body parts to the lab
			display_god_of_extortion(); // display the tooltips of the lab related SCAMs (in case this is the first time the lab is opened)
		}
		else if (building == 'Schools') {
			if (DICT_encyclopedia['Main Frame']['Pupils'][0] == 0) {
				DICT_encyclopedia['Main Frame']['Pupils'][0] = 1;
			}
			display_trained_prostitutes()
		}
		else if (building == 'Lobby') {
			DICT_all_statistics["ID_money_spent_in_lobbies"][1] = 1;
			display_all_stats();
			display_dollars();
			display_all_brothels();
			display_all_factories();
			display_all_laboratory_upgrades();
			display_all_schools();
		} // display locked costs
		// END - specific buildings
		display_encyclopedia(); // at the end, because a specific building could modify it.
	}
	else {cancel_inflation_streak()}
}

function allocate_deallocate_prostitute(ident, add=true, school_precision="") {
	cancel_inflation_streak()
	if (add == true) {
		var count_inactive_humans = inactive_humans();
		var count_inactive_artworks = inactive_artworks();
		var addition_for_factories = 0;
		if (ident in DICT_Factories_STALE) {addition_for_factories = DICT_attributions[ident] + DICT_attributions_humans[ident];}
		if (count_inactive_humans + count_inactive_artworks + addition_for_factories > 0) {
			time_runner(); // actualize before modification
			var save_attributed_artworks = DICT_attributions[ident+school_precision];
			DICT_attributions[ident+school_precision] = 0; // remove all Artworks before reassignement
			count_inactive_artworks += save_attributed_artworks;
			if (ident in DICT_Brothels_STALE) { // attribute to a brothel
				var max_capacity = DICT_Brothels_STALE[ident][1] + DICT_Brothels_STALE[ident][2]; // maintenance + exploitation
				var max_attribution = max_capacity - DICT_attributions_humans[ident]; // maintenance + exploitation - already attributed
				if (DICT_attributions_humans[ident] < max_capacity) {
					DICT_attributions_humans[ident] += Math.min(count_inactive_humans, prostitutes_multiplicator + save_attributed_artworks, max_attribution);
					if (DICT_attributions_humans[ident] < max_capacity && prostitutes_multiplicator + save_attributed_artworks > count_inactive_humans) {
						DICT_attributions[ident] += Math.min(count_inactive_artworks, prostitutes_multiplicator+save_attributed_artworks-count_inactive_humans, max_attribution-count_inactive_humans);
					}
				}
			}
			
			else if (ident in DICT_Factories_STALE) { // attribute to a factory
				var amount_of_prostitutes_to_attribute = factory_necessary_prostitutes(ident, CURRENT_LEVEL);
				if (count_inactive_artworks + count_inactive_humans + DICT_attributions[ident] + DICT_attributions_humans[ident] >= amount_of_prostitutes_to_attribute) {
					DICT_attributions_humans[ident] = Math.min(amount_of_prostitutes_to_attribute, count_inactive_humans);
					DICT_attributions[ident] = amount_of_prostitutes_to_attribute - DICT_attributions_humans[ident];
					if (DICT_Factories_DYNAMIC[ident][0] < CURRENT_LEVEL && CURRENT_LEVEL != DICT_Factories_DYNAMIC[ident][6]) { // if another level of upgrade is ongoing
						DICT_Factories_DYNAMIC[ident][2] = 0; // reset the progression in the upgrade that was ongoing before
						DICT_Factories_DYNAMIC[ident][6] = CURRENT_LEVEL; // this level is the new current one being upgraded
					}
				}
			}
			
			else if (ident == "Temple") {
				DICT_attributions[ident] += Math.min(count_inactive_artworks, prostitutes_multiplicator + save_attributed_artworks);
			}
			
			else if (ident in DICT_Schools) {
				if (school_precision != " pupil") { // attribute professors and administrators
					if (school_precision != " admin") { // if school_precision == prof
						DICT_attributions[ident+school_precision] += Math.min(count_inactive_artworks, prostitutes_multiplicator + save_attributed_artworks);
					}
					else { // if school_precision == admin
						DICT_attributions[ident+school_precision] += DICT_Schools[ident][5];
					}
				}
				else { // attribute pupils
					DICT_attributions_humans[ident+school_precision] += Math.min(count_inactive_humans, prostitutes_multiplicator + save_attributed_artworks);
					if (prostitutes_multiplicator + save_attributed_artworks > count_inactive_humans) { // if there were not enough inactive humans to fill
						DICT_attributions[ident+school_precision] += Math.min(count_inactive_artworks, prostitutes_multiplicator+save_attributed_artworks-count_inactive_humans);
					}
				}
			}
			
			else { // attribute to Workers or Lobby
				DICT_attributions_humans[ident] += Math.min(count_inactive_humans, prostitutes_multiplicator + save_attributed_artworks);
				if (prostitutes_multiplicator + save_attributed_artworks > count_inactive_humans) {
					DICT_attributions[ident] += Math.min(count_inactive_artworks, prostitutes_multiplicator+save_attributed_artworks-count_inactive_humans);
				}
			}
		}
	}
	else { // if add == false
		if (DICT_attributions[ident+school_precision] > 0 || DICT_attributions_humans[ident+school_precision] > 0) {
			time_runner(); // actualize before modification
			if (ident in DICT_Factories_STALE) { // if it's a factory, remove all prostitutes
				DICT_attributions[ident] = 0;
				DICT_attributions_humans[ident] = 0;
			}
			else { // else, remove the amount selected by the multiplicator
				var attributed_artworks = DICT_attributions[ident+school_precision];
				DICT_attributions[ident+school_precision] -= Math.min(attributed_artworks, prostitutes_multiplicator);
				if (attributed_artworks < prostitutes_multiplicator) {
					DICT_attributions_humans[ident+school_precision] -= Math.min(DICT_attributions_humans[ident+school_precision], prostitutes_multiplicator-attributed_artworks);
				}
			}
		}
	}
	
	// START - display the modifications
	display_prostitutes();
	display_trained_prostitutes();
	if (ident == 'Workers') {
		display_workers();
		display_progress_bar_workers();
	}
	else if (ident in DICT_Brothels_DYNAMIC) {display_brothel(ident); display_all_factories()} // display all factories because of Zoutopia
	else if (ident in DICT_Factories_DYNAMIC) {display_factory(ident)}
	else if (ident == 'Temple') {display_temple()}
	else if (ident in DICT_Schools) {display_school(ident)}
	else if (ident == 'Lobby') {display_lobby(lobby_page)}
	// END - display the modifications
}

function allocate_deallocate_worshiper(ident, add=true) {
	cancel_inflation_streak()
	if (add == true) {
		var VAR_inactive_worshipers = inactive_worshipers();
		if (VAR_inactive_worshipers > 0) {
			time_runner(); // actualize before modification
			DICT_Temple_upgrades[ident][0] += Math.min(VAR_inactive_worshipers, prostitutes_multiplicator);
		}
	}
	else { // if add == false
		if (DICT_Temple_upgrades[ident][0] > 0) {
			time_runner(); // actualize before modification
			DICT_Temple_upgrades[ident][0] -= Math.min(DICT_Temple_upgrades[ident][0], prostitutes_multiplicator); // else, remove the amount selected by the multiplicator
		}
	}
	display_temple();
}

function magic_gathering() {
	for (var i in DICT_attributions_humans) {
		DICT_attributions[i] = 0;
		DICT_attributions_humans[i] = 0;
	}
	display_workers()
	display_all_brothels()
	display_all_factories()
	// display_temple() no prostitutes here
	// display of the laboratory not needed, no prostitutes there
	display_all_schools()
	display_lobby(lobby_page)
	display_prostitutes()
	// display_trained_prostitutes() not needed, already included in previous functions
}

function reassign_prostitutes() {
	for (var i in DICT_attributions_humans) {
		if (inactive_humans() > 0) {
			var save_attributed = DICT_attributions[i];
			DICT_attributions[i] -= Math.min(inactive_humans(), save_attributed);
			DICT_attributions_humans[i] += Math.min(inactive_humans(), save_attributed);
		}
	}
	display_workers()
	display_all_brothels()
	display_all_factories()
	// display_temple() no prostitutes here
	// display of the laboratory not needed, no prostitutes there
	display_all_schools()
	display_lobby(lobby_page)
	display_prostitutes()
	// display_trained_prostitutes() not needed, already included in previous functions
}

function prestige_points_to_give() {
	var style_points_gained = convert_dollars_into_style_points();
	if ((style_points + style_points_gained) <= 0) { // exception because ln(0) doesn't exist
		return 0
	}
	else { // Math.log(10) = ln(10).
		return Math.max((parseInt(Math.log(style_points + style_points_gained) / Math.log(100)) - (prestige_points_total - DICT_Temple_upgrades['Prestige'][5] - DICT_God_of_Extortion['Prestigious'][3]) + 1), 0);
		// return one point for every power of 100 style points, minus the already earned prestige points, +1 because of the point given for the first Ruin Everything.
		// If this is negative, give 0.
	}
}

function influence_points_to_give(dollars_accounted) {
	if (dollars_accounted < Math.max(1e+55, (money_saved()*1.1))) {
		// money_saved()*1.1 : it should be money_saved(), which is the amount of money from the talent Money saver.
		// But because of computers inaccuracies, multiplication by 1.1, just in case.
		return 0
	} 
	else {
		var total_given_points = 0;
		var limit = 0;
		var added = 1; // value not important, has to be higher than "limit" to properly initiate the while loop
		var i = 0;
		while (limit < added) {
			added = parseInt(Math.log(dollars_accounted / 1e+53 / Math.pow(100, i)) / Math.log(100)); // il faut 1e+53 et pas 1e+55 comme diviseur, sinon 1e+55 donne 0 point au lieu de 1, 1e57 donne 1 au lieu de 2, etc.
			total_given_points += added;
			i++;
		}
		return total_given_points
	}
}

function buy_golden_rings() {
	if (publication == false) {golden_rings_total += 111;}
	else if (publication == "Armor Games") {golden_rings_total += 0;}
	else if (publication == "sineol") {golden_rings_total += 1;}
	display_golden_rings()
}

function buy_purchase(purchase) {
	var error_message = "<br /><br /><span class='error_infos_box'>";
	if (DICT_God_of_Extortion[purchase][3] >= DICT_God_of_Extortion[purchase][4]) {
		error_message += "This Super Cool Advanced Mastery has already reached its maximum level!";
	}
	else {
		if (!purchase_authorization(purchase)) {
			error_message += "You need to buy one of the previous Super Cool Advanced Masteries to get this one.<br />";
		}
		if ((golden_rings_total-golden_rings_spent) < DICT_God_of_Extortion[purchase][1]) {
			if (purchase == "Evil Pact" && (golden_rings_total >= DICT_God_of_Extortion[purchase][1])) {/*do nothing*/} // in that case, authorize
			else if (DICT_God_of_Extortion['Evil Pact'][3] == 1) {} // no cost, so authorize
			else {error_message += "You don't have enough Golden Rings to purchase this Super Cool Advanced Mastery.<br />";}
		}
	}
	if (error_message != "<br /><br /><span class='error_infos_box'>") {
		document.getElementById("TOOLTIP_"+DICT_God_of_Extortion[purchase][0]).innerHTML += error_message+"</span>";
	}
	else { // conditions are fulfilled, acquire the purchase
		if (purchase == "Premium skin") {
			error_message += "Your dedication to being scammed is admirable. But this is too much, even for me. Just take the Discount skins, my hero!";
			document.getElementById("TOOLTIP_"+DICT_God_of_Extortion[purchase][0]).innerHTML += error_message;
		}
		else {
			if (purchase == "Evil Pact") {golden_rings_spent = Math.max(golden_rings_spent, 666);}
			DICT_God_of_Extortion[purchase][3] += 1;
			if (DICT_God_of_Extortion['Evil Pact'][3] != 1) {golden_rings_spent += DICT_God_of_Extortion[purchase][1];}
			display_specific_SCAM(purchase); // not only a display function, it also executes the purchase if required
			display_golden_rings()
			display_god_of_extortion()
		}
	}
}

function change_skin(menu=0) {
	if (menu == 0) {console.log("ERROR #5: change_skin(menu=0) called without any menu.");}
	else {
		if (DICT_corps_screens[menu][2] < total_skins) { // apply the next skin
			DICT_corps_screens[menu][2] += 1;
			document.getElementById(menu).className = "skin_corps_"+DICT_corps_screens[menu][2]+" world_body";
			document.getElementById(DICT_corps_screens[menu][1]).className = "skin_title_"+DICT_corps_screens[menu][2]+" world_title";
		}
		else { // apply the default skin
			DICT_corps_screens[menu][2] = 0;
			document.getElementById(menu).className = "skin_"+menu+" world_body";
			document.getElementById(DICT_corps_screens[menu][1]).className = "skin_"+DICT_corps_screens[menu][1]+" world_title";
		}
	}
}

function double_ressource(ressource) {
	if (ressource == 'dollars') {
		if (dollars < 1e+200) {dollars *= 2;} // limit 1e+200 to avoid reaching the javascript limit (e+308)
		display_dollars()
	}
	else if (ressource == 'fundamental_energy') {
		if (fundamental_energy < 1e+200) {fundamental_energy *= 2;} // limit 1e+200 to avoid reaching the javascript limit (e+308)
		display_fundamental_energy();
	}
}

function compute_stat(stat) {
	var computed_value = 0;
	if (stat == 'ID_time_spent_this_session') {computed_value = display_time(time_spent_this_session);}
	else if (stat == 'ID_time_spent') {computed_value = display_time(time_spent);}
	else if (stat == 'ID_time_since_ruin_everything') {computed_value = display_time(timestamp() - last_ruin_everything);}
	else if (stat == 'ID_total_number_of_turns') {computed_value = display_number(total_number_of_turns);}
	else if (stat == 'ID_total_encounters_with_bully_God') {computed_value = display_number(total_encounters_with_bully_God);}
	else if (stat == 'ID_Beetlejuice_count') {computed_value = display_number(total_beetlejuice_activations);}
	else if (stat == 'ID_total_Fundamental_Energy_destroyed') {computed_value = display_number(total_Fundamental_Energy_destroyed);}
	else if (stat == 'ID_parts_destroyed_0') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[0]);}
	else if (stat == 'ID_parts_destroyed_1') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[1]);}
	else if (stat == 'ID_parts_destroyed_2') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[2]);}
	else if (stat == 'ID_parts_destroyed_3') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[3]);}
	else if (stat == 'ID_parts_destroyed_4') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[4]);}
	else if (stat == 'ID_parts_destroyed_5') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[5]);}
	else if (stat == 'ID_parts_destroyed_6') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[6]);}
	else if (stat == 'ID_parts_destroyed_7') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[7]);}
	else if (stat == 'ID_parts_destroyed_8') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[8]);}
	else if (stat == 'ID_parts_destroyed_9') {computed_value = display_number(LIST_total_fundamental_elements_destroyed[9]);}
	else if (stat == 'ID_proportion_parts_destroyed_0') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[0] > 0) {proportion = LIST_total_fundamental_elements_destroyed[0] / LIST_total_fundamental_elements_created[0];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_1') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[1] > 0) {proportion = LIST_total_fundamental_elements_destroyed[1] / LIST_total_fundamental_elements_created[1];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_2') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[2] > 0) {proportion = LIST_total_fundamental_elements_destroyed[2] / LIST_total_fundamental_elements_created[2];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_3') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[3] > 0) {proportion = LIST_total_fundamental_elements_destroyed[3] / LIST_total_fundamental_elements_created[3];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_4') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[4] > 0) {proportion = LIST_total_fundamental_elements_destroyed[4] / LIST_total_fundamental_elements_created[4];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_5') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[5] > 0) {proportion = LIST_total_fundamental_elements_destroyed[5] / LIST_total_fundamental_elements_created[5];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_6') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[6] > 0) {proportion = LIST_total_fundamental_elements_destroyed[6] / LIST_total_fundamental_elements_created[6];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_7') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[7] > 0) {proportion = LIST_total_fundamental_elements_destroyed[7] / LIST_total_fundamental_elements_created[7];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_8') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[8] > 0) {proportion = LIST_total_fundamental_elements_destroyed[8] / LIST_total_fundamental_elements_created[8];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_proportion_parts_destroyed_9') {
		var proportion = 0; // default to 0, to prevent potential division by 0.
		if (LIST_total_fundamental_elements_created[9] > 0) {proportion = LIST_total_fundamental_elements_destroyed[9] / LIST_total_fundamental_elements_created[9];}
		computed_value = display_number(proportion*100);
	}
	else if (stat == 'ID_total_artworks_destroyed') {computed_value = display_number(total_artworks_destroyed);}
	
	else if (stat == 'ID_total_ruin_everything') {computed_value = display_number(total_ruin_everything);}
	else if (stat == 'ID_dollars_spent') {computed_value = display_number(dollars_spent);}
	else if (stat == 'ID_dollars_converted') {computed_value = display_number(dollars_converted);}
	else if (stat == 'ID_worker_upgrades_bought') {computed_value = display_number(worker_upgrades_bought);}
	else if (stat == 'ID_brothels_bought') {computed_value = display_number(brothels_bought);}
	else if (stat == 'ID_dice_rolled') {computed_value = display_number(dice_rolled);}
	else if (stat == 'ID_average_die_roll') {
		if (dice_rolled != 0) {computed_value = display_number(sum_value_dice_rolls / dice_rolled);}
	}
	else if (stat == 'ID_proportion_items_converted') {
		var total_body_parts = 0;
		for (var i in LIST_total_fundamental_elements_created) {
			if (i < 9) {total_body_parts += LIST_total_fundamental_elements_created[i];}
			// exclude genitals
		}
		if (total_body_parts != 0) {computed_value = display_number(body_parts_converted / total_body_parts * 100);}
	}
	else if (stat == 'ID_proportion_items_sent_to_the_lab') {
		var total_body_parts = 0;
		for (var i in LIST_total_fundamental_elements_created) {
			if (i < 9) {total_body_parts += LIST_total_fundamental_elements_created[i];}
			// exclude genitals
		}
		if (total_body_parts > 0) {computed_value = display_number(body_parts_sent_to_lab / total_body_parts * 100);}
	}
	else if (stat == 'ID_proportion_items_used_in_upgrades') {
		if (body_parts_sent_to_lab != 0) {computed_value = display_number(body_parts_used_in_upgrades / body_parts_sent_to_lab * 100);}
	}
	else if (stat == 'ID_scientist_murders') {computed_value = display_number(scientist_murders);}
	else if (stat == 'ID_money_spent_in_lobbies') {computed_value = display_number(money_spent_in_lobbies);}
	else if (stat == 'ID_deals_sealed') {computed_value = display_number(deals_sealed);}
	else if (stat == 'ID_deals_broken') {computed_value = display_number(deals_broken);}
	else if (stat == 'ID_deals_broken_before_they_are_sealed') {computed_value = display_number(deals_broken_before_they_are_sealed);}
	else if (stat == 'ID_total_time_frozen') {computed_value = display_time(total_time_frozen);}


	computed_value += DICT_all_statistics[stat][3]; // add the unit if necessary (%, ...)	
	
	if (document.getElementById(stat)) { // if the statistic exists in the html part and is therefore updatable
		document.getElementById(stat).innerHTML = computed_value;
	}
}

function next_tutorial_step(step=0) {
	if (tutorial_step < step) {
		tutorial_step = step;
	}
	tutorial_page = step;
	LIST_tutorial_dialogues_validation[step] = 1;
	display_content_tutorial_box();
	display_counter_tutorial_box();
	display_specific_tutorial_events(step);
	if (tutorial_box_display == 0) {toggle_tutorial()}
}

function change_page(page='previous') {
	if (page == 'previous') {
		if (tutorial_page > 1) {
			tutorial_page-=1;
		}
	}
	else { // if page == 'next'
		if (tutorial_page < tutorial_step) {
			tutorial_page+=1;
		}
	}
	display_content_tutorial_box();
	display_counter_tutorial_box();
	display_specific_tutorial_events(tutorial_page);
}

function change_page_lobby(page='previous') {
	if (page == 'previous') {
		if (lobby_page > 0) {
			lobby_page-=1;
		}
	}
	else { // if page == 'next'
		if (lobby_page < max_page_lobby()) {
			lobby_page+=1;
		}
	}
	display_lobby(lobby_page);
}

function activate_bully_god() {
	if (activate_bullygod_authorized) {
		cancel_inflation_streak()
		if (beetlejuice_count < 3) {
			beetlejuice_count += 1;
			document.getElementById('beetlejuice'+beetlejuice_count).style.display = 'initial';
		}
		if (beetlejuice_count == 3) { // this must not be an "else if", don't change
			if (DICT_God_of_Extortion['Bullystroyer'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {
				total_beetlejuice_activations += 1;
				compute_stat("ID_Beetlejuice_count"); // #stat
				activate_bullygod_authorized = false;
				window.TIMEVAR_beetlejuice_reset = setTimeout("beetlejuice_reset()", 1500); // reauthorize the beetlejuice call after 1.5 second
				god_reset();
			}
			else if (current_turn < 100+DICT_fundamental_talents['God repellent'][3]*10) { // if current_turn >=, it means the god is already there, you can't call him
				total_beetlejuice_activations += 1;
				compute_stat("ID_Beetlejuice_count"); // #stat
				current_turn = 100+DICT_fundamental_talents['God repellent'][3]*10;
				display_tooltip_tapping_button() // add the lock indication on the tooltip
				document.getElementById("tapping_button").style.borderColor = "grey";
				display_turn();
			}
			if (DICT_encyclopedia['Main Frame']['Bully God'][0] == 0) {
				DICT_encyclopedia['Main Frame']['Bully God'][0] = 1;
				display_encyclopedia();
			}
			// we must not put compute_stat("ID_Beetlejuice_count") outside of the "if"
		}
		if (beetlejuice_count > 3) {console.log("ERROR #6: beetlejuice_count higher than 3.")}
	}
}

function beetlejuice_reset() {
	activate_bullygod_authorized = true; // only useful for Bullystroyer
	beetlejuice_count = 0;
	document.getElementById('beetlejuice1').style.display = 'none';
	document.getElementById('beetlejuice2').style.display = 'none';
	document.getElementById('beetlejuice3').style.display = 'none';
}

function next_turn() {
	if (auto_turn_activated == 0) {beetlejuice_reset();}

	// START - incrementation du compteur
	var really_current_turn = current_turn;
	current_turn += 1;
	if (tapping_activated) {current_turn += DICT_fundamental_talents['Hourglass tapping'][3];}
	if (really_current_turn == 0 && DICT_fundamental_talents['Hourglass tapping'][3] > 0) {
		display_tooltip_tapping_button() // add the lock indication on the tooltip
		document.getElementById("tapping_button").style.borderColor = "grey";
	}
	if (current_turn > maximum_turns()) {
		if (DICT_God_of_Extortion['Bullystroyer'][3] == 1 && DICT_Deals['4th wall'][2] == 1 && current_turn < 2147000000) {} // nothing happens, keep going
		else {
			god_reset();
			return
		}
	}
	// END - incrementation du compteur
	
	cancel_inflation_streak();
	display_transfer_button();
	var full_turn_inactive = false;
	var first_construction_completed_this_turn = false; // annoying variable used for the beginning of the tutorial
	if (ongoing_tasks() == 0 && LIST_activities.length == 0 && DICT_artwork['activity'] == 0) {full_turn_inactive = true;} // do the test again at the end, if it's still true, the full turn is inactive => let the autoturn run
	var was_the_artwork_ready_at_the_beginning_of_this_turn = false; // necessary because of the Part-time Artist talent
	if (DICT_artwork['activity'] == 1) {was_the_artwork_ready_at_the_beginning_of_this_turn = true;} // necessary because of the Part-time Artist talent
	
	if (DICT_artwork['auto_create'] == 0 || DICT_artwork['activity'] == 0 || DICT_Deals['Part-time Artist'][2] == 1) {
		
		buildings_that_ended = 0; // no "var", this is a global variable
		var new_percentage;
		var percentage_to_add;
		var max_tasks = 1 + DICT_fundamental_talents['Multitasking'][3];
		var display_line_needed = false; // only useful for the locked mode
		
		for (var line2 in energy_building_STALE) {
		// START - Converting
			if (energy_building_DYNAMIC[line2][6] == "convert" && ((ongoing_tasks()+buildings_that_ended < max_tasks) || energy_building_DYNAMIC[line2][4] != 0.0)) {
				// START - calculate percentage_to_add, managing the exception for the case where the time would be 0 or negative because of a high level of Quick mix
				if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[line2][1]][3] > 0) {// if you have the talent Concentrated part
					percentage_to_add = 100/energy_building_STALE[line2][4];
				}
				else {
					if (energy_building_STALE[line2][4] > DICT_fundamental_talents['Quick mix'][3]) {
						percentage_to_add = 100/(energy_building_STALE[line2][4]-DICT_fundamental_talents['Quick mix'][3]);
					}
					else {
						percentage_to_add = 100;
					}
				}
				// END - calculate percentage_to_add, managing the exception for the case where the time would be 0 or negative because of a high level of Quick mix
				
				new_percentage = energy_building_DYNAMIC[line2][4] + percentage_to_add;
				if (energy_building_DYNAMIC[line2][7] == 'automate' && unlocked_buttons == false) {
					if (energy_building_DYNAMIC[line2][4] == 0.0 && new_percentage < 99.99) {
						display_line_needed = true;
					}
				}
				energy_building_DYNAMIC[line2][4] = new_percentage;
				if (energy_building_DYNAMIC[line2][7] == 'autoconvert') {program_action_body_part(line2, 'inactive');} // disable autoconvert

				if (new_percentage > 99.99) { // when an element is fully converted. 99.99 instead of 100 because of computer inaccuracies on floats
					if (LIST_tutorial_dialogues_validation[5] == 0) { // first conversion done ever
						next_tutorial_step(5);
					}
					buildings_that_ended += 1;
					energy_building_DYNAMIC[line2][6] = 'inactive';
					energy_building_DYNAMIC[line2][4] = 0.0; // reset the progress bar
					fundamental_energy += conversion_gains(line2);
					display_fundamental_energy(); // display fundamental energy
					if (DICT_God_of_Extortion['Transversion'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {
						if (line2 < 9) {
							LIST_body_parts_stored[line2] += energy_building_DYNAMIC[line2][5];
							LIST_total_fundamental_elements_created[line2] += energy_building_DYNAMIC[line2][5]; // #stats
							body_parts_sent_to_lab += energy_building_DYNAMIC[line2][5]; // #stats
							compute_stat("ID_proportion_items_converted");
							compute_stat("ID_proportion_items_sent_to_the_lab");
							compute_stat("ID_proportion_items_used_in_upgrades");
							display_stock_body_part_laboratory(line2);
						}
						else if (line2 == 9) {
							genitals_stored += energy_building_DYNAMIC[line2][5];
							document.getElementById("span_genitals_stored").innerHTML = display_number(genitals_stored);
							document.getElementById("time_left_genitals").innerHTML = display_time_left_genitals();
						}
						else {
							console.log("ERROR #7: body part superior to 9, it's beyond genitals.");
						}
					}
					if (line2 < 9) {body_parts_converted += energy_building_DYNAMIC[line2][5];} // #stats don't include genitals
					compute_stat("ID_proportion_items_converted");
					compute_stat("ID_proportion_items_sent_to_the_lab");
					energy_building_DYNAMIC[line2][5] = 0; // remove all components from the stock
					display_line(line2, 'body_part_'+line2);
					display_line_needed = false;
					if (unlocked_buttons == false && line2 < 9) {
						var next_line = Number(line2) + 1;
						display_line(next_line, 'body_part_'+next_line)
					}
					if (line2 == 9) {document.getElementById('genitals_count').innerHTML = 0;} // display 0 genitals available in temple
					else {display_stock_body_part_laboratory(line2)} // display 0 body part available in laboratory
				}
				display_progress_bar("progress_bar_"+line2, line2, new_percentage, percentage_to_add, 1);
				document.getElementById("text_progress_bar_"+line2).innerHTML = display_text_progress_bar(line2);
			}
		// END - Converting
		
		// START - Constructing
			else if (energy_building_DYNAMIC[line2][6] == "construct" && ((ongoing_tasks()+buildings_that_ended < max_tasks) || energy_building_DYNAMIC[line2][4] != 0.0)) {

				// START - calculate percentage_to_add, managing the exception for the case where the time would be 0 or negative because of a high level of Industrialization
				if (DICT_fundamental_talents['Concentrated '+energy_building_STALE[line2][1]][3] > 0) {// if you have the talent Concentrated_part
					percentage_to_add = 100/energy_building_STALE[line2][3];
				}
				else {
					if (energy_building_STALE[line2][3] > DICT_fundamental_talents['Industrialization'][3]) {
						percentage_to_add = 100/(energy_building_STALE[line2][3]-DICT_fundamental_talents['Industrialization'][3]);
					}
					else {
						percentage_to_add = 100;
					}
				}
				// END - calculate percentage_to_add, managing the exception for the case where the time would be 0 or negative because of a high level of Industrialization
				
				new_percentage = energy_building_DYNAMIC[line2][4] + percentage_to_add;
				if (energy_building_DYNAMIC[line2][7] == 'automate' && unlocked_buttons == false) {
					if (energy_building_DYNAMIC[line2][4] == 0.0 && new_percentage < 99.99) {
						display_line_needed = true;
					}
				}
				energy_building_DYNAMIC[line2][4] = new_percentage;
				if (energy_building_DYNAMIC[line2][7] == 'autoconstruct' && (fundamental_energy < energy_building_STALE[line2][2]
					|| (unlocked_buttons == false && new_percentage != 0.0 && new_percentage < 99.99))) {
						program_action_body_part(line2, "inactive");
				} // disable autoconstruct
				
				if (new_percentage > 99.99) { // when an element is fully built. 99.99 instead of 100 because of computer inaccuracies on floats					
					// START - if the element was built for the first time
					if (energy_building_DYNAMIC[line2][3] == 0) { // if the element was built for the first time
						energy_building_DYNAMIC[line2][3] = 1; // make name visible (register it in database)
						DICT_all_statistics['ID_parts_destroyed_'+line2][1] = 1; // #stat. make it visible in the stats menu.
						DICT_all_statistics['ID_proportion_parts_destroyed_'+line2][1] = 1; // #stat. make it visible in the stats menu.
						display_all_stats(); // #stat. reload the stats page to include the new entries
						
						if (energy_building_DYNAMIC[line2] != energy_building_DYNAMIC[energy_building_DYNAMIC.length-1]) { // make next element visible, with exception if we have reached the end
							energy_building_DYNAMIC[parseInt(line2)+1][2] = 1;
							//document.getElementById('body_parts').innerHTML += display_line(parseInt(line2)+1);
						}
						
						display_all_lines();
						if (LIST_tutorial_dialogues_validation[4] == 0 && line2 == 0) { // if this is the first time we complete an element, activate this tutorial step.
							first_construction_completed_this_turn = true; // next_tutorial_step(4) can't be activated right now, it needs to be done at the end of the turn
						}
						else if (LIST_tutorial_dialogues_validation[8] == 0 && line2 == 1) {
							next_tutorial_step(8);
							DICT_corps_screens['corps_statistics'][0] = 1;
							document.getElementById("title_statistics").style.display = 'initial';
						}
						else if (LIST_tutorial_dialogues_validation[9] == 0 && line2 == 2) {
							next_tutorial_step(9);
						}
						else if (LIST_tutorial_dialogues_validation[10] == 0 && line2 == 3) {
							next_tutorial_step(10);
						}
						else if (LIST_tutorial_dialogues_validation[11] == 0 && line2 == 4) {
							next_tutorial_step(11);
						}
						else if (LIST_tutorial_dialogues_validation[12] == 0 && line2 == 5) {
							next_tutorial_step(12);
						}
						else if (LIST_tutorial_dialogues_validation[13] == 0 && line2 == 6) {
							next_tutorial_step(13);
						}
						else if (LIST_tutorial_dialogues_validation[14] == 0 && line2 == 7) {
							next_tutorial_step(14);
						}
						else if (LIST_tutorial_dialogues_validation[15] == 0 && line2 == 8) {
							next_tutorial_step(15);
						}
						else if (LIST_tutorial_dialogues_validation[16] == 0 && line2 == 9) {
							next_tutorial_step(16);
							document.getElementById('Artwork').outerHTML = display_fundamental_talent('Artwork');
						}
						display_all_images_lines(); // replace the ??? by the image of the body part
					}
					// END - if the element was built for the first time

					// START - Give the appropriate body parts
					if (line2 == 9) {
						if (autotransfer_genitals) {
							genitals_stored += multiplicator_body_parts_created(line2, true);
							document.getElementById("span_genitals_stored").innerHTML = display_number(genitals_stored);
							document.getElementById("time_left_genitals").innerHTML = display_time_left_genitals();
						}
						else {
							energy_building_DYNAMIC[line2][5] += multiplicator_body_parts_created(line2, true); // create the body parts
						}
					}
					else {
						if (LIST_autotransfer_body_parts[line2]) {
							LIST_body_parts_stored[line2] += multiplicator_body_parts_created(line2, true);
							body_parts_sent_to_lab += multiplicator_body_parts_created(line2); // #stats
							compute_stat("ID_proportion_items_converted");
							compute_stat("ID_proportion_items_sent_to_the_lab");
							compute_stat("ID_proportion_items_used_in_upgrades");
							display_stock_body_part_laboratory(line2);
						}
						else {
							energy_building_DYNAMIC[line2][5] += multiplicator_body_parts_created(line2, true); // create the body parts
						}
					}
					LIST_total_fundamental_elements_created[line2] += multiplicator_body_parts_created(line2); // #stat
					// END - Give the appropriate body parts
					
					buildings_that_ended += 1;
					energy_building_DYNAMIC[line2][6] = 'inactive';
					energy_building_DYNAMIC[line2][4] = 0.0; // reset the progress bar
					
					// START - launch the next building/convert if auto mate/construct/convert is activated
					if (energy_building_DYNAMIC[line2][7] == 'automate') {
						automate(line2);
					}
					else if (energy_building_DYNAMIC[line2][7] == 'autoconstruct') {
						start_building_element(line2);
					}
					else if (energy_building_DYNAMIC[line2][7] == 'autoconvert') {
						start_converting_element(line2);
					}
					// END - launch the next building/convert if auto build/convert is activated
					display_line(line2, "body_part_"+line2);
					display_line_needed = false;
					if (line2 == 9) {document.getElementById("genitals_count").innerHTML = display_number(energy_building_DYNAMIC[9][5]);}
					else {document.getElementById(line2+"_count").innerHTML = display_number(energy_building_DYNAMIC[line2][5]);}
				}
				display_progress_bar("progress_bar_"+line2, line2, new_percentage, percentage_to_add);
				document.getElementById("text_progress_bar_"+line2).innerHTML = display_text_progress_bar(line2);
			}
		// END - Constructing
			if (display_line_needed == true) {display_line(line2, "body_part_"+line2);}
		} // end of the loop: for (var line2 in energy_building_STALE)
	
		// START - if an autobuilding element is waiting for energy, start building it if converting got you enough money. This function also includes the common case where a construction simply waits for its conversion to finish.
		for (var i in energy_building_DYNAMIC) {
			if (energy_building_DYNAMIC[i][7] == 'autoconstruct' && energy_building_DYNAMIC[i][6] == 'inactive') {
				start_building_element(i); // if the conditions for construction are not checked, the function will do nothing
				if (energy_building_DYNAMIC[i][6] == 'inactive' && fundamental_energy < energy_building_STALE[i][2] && energy_building_STALE[i][2] <= future_fundamental_energy()) { // if there wasn't enough energy to start the construction but there will be enough with conversions
					display_line(i, true);
				}
			}
			else if (energy_building_DYNAMIC[i][7] == 'automate' && energy_building_DYNAMIC[i][6] == 'inactive') {
				automate(i);
			}
		}
		// END - if an autobuilding element is waiting for energy, start building it if converting got you enough money. This function also includes the common case where a construction simply waits for its conversion to finish.
		
		// START - activate the creation of an artwork if necessary
		if (DICT_artwork['auto_create'] == 1 && was_the_artwork_ready_at_the_beginning_of_this_turn == false) {
			start_artwork();
			if (DICT_artwork['activity'] == 1) {display_artwork();}
		}
		// END - activate the creation of an artwork if necessary
	}
	
	if (DICT_artwork['auto_create'] == 1 && DICT_artwork['activity'] == 1 && was_the_artwork_ready_at_the_beginning_of_this_turn == true) {

		percentage_to_add = 100 / specific_number_modifier_upgrade("Artwork");
		new_percentage = DICT_artwork['percentage_completion'] + percentage_to_add;
		DICT_artwork['percentage_completion'] = new_percentage;
		
		if (new_percentage > 99.99) { // when an artwork is fully built. 99.99 instead of 100 because of computer inaccuracies on floats
		
			// START - if this is the first artwork ever built
			if (LIST_tutorial_dialogues_validation[17] == 0) {
				next_tutorial_step(17);
			}
			// END - if this is the first artwork ever built
			
			DICT_artwork['activity'] = 0;
			DICT_artwork['percentage_completion'] = 0.0; // reset the progress bar
			DICT_artwork['total_artworks'] += 1; // add one component to the stock
			display_prostitutes();

			if (DICT_artwork['auto_create'] == 1) {start_artwork();} // launch the next creation if auto create is activated
		}
		display_artwork();
		display_progress_bar_artwork();
	}
	
	if (smartomaton_activated == true) {smartomate()} // activate the smartomaton
	if (semiauto_activated == true && auto_turn_activated == 1 && smartomaton_activated == false) {
		if (ongoing_tasks() == 0 && DICT_artwork['activity'] == 0 && full_turn_inactive == false) {
			var all_body_parts_inactive = true;
			for (var m in energy_building_DYNAMIC) {
				if (energy_building_DYNAMIC[m][6] != 'inactive') {all_body_parts_inactive = false;}
			}
			if (all_body_parts_inactive == true) {
				auto_next_turn(); // disable the autoturn
			}
		}
	}
	if (first_construction_completed_this_turn == true) {
		next_tutorial_step(4);
	}
	if (unlocked_buttons == false) {display_all_lines()}
	
	display_turn(); // show the increment of 1 turn, and actualize the tooltip
	total_number_of_turns += 1; // stat
	compute_stat('ID_total_number_of_turns'); // #stat
}

function tap_the_hourglass(initialize=false) {
	if (current_turn == 0 || initialize == true) { // initialize : only when we load the game
		tapping_activated ^= true;
		if (tapping_activated == true) {document.getElementById("tapping_button").className = "tooltip activated_button";}
		else {document.getElementById("tapping_button").className = "tooltip";}
		display_tooltip_tapping_button()
	}
}

function auto_next_turn() {
	beetlejuice_reset();
	if (auto_turn_activated == 0) {
		auto_turn_activated = 1;
		var speed = 1000;
		if (speeder == "accelerator") {speed = 100;}
		else if (speeder == "autoverheat") {speed = 10;}
		auto_turn_runner = setInterval("next_turn()", speed);
		document.getElementById('auto_next_turn').innerHTML = "<button class='tooltip activated_button' onmousedown='auto_next_turn()'> Auto <span class='LEFT_tooltip_text'>Validate automatically 1 turn per second</span></button>";
		document.getElementById('next_turn').innerHTML = "<button class='tooltip locked_button' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Validate the turn - Locked while \"Auto\" is active.</span></button>";
	}
	else { // if auto_turn_activated == 1
		auto_turn_activated = 0;
		clearInterval(window.auto_turn_runner);
		document.getElementById('auto_next_turn').innerHTML = "<button class='tooltip' onclick='auto_next_turn()'> Auto <span class='LEFT_tooltip_text'>Validate automatically 1 turn per second</span></button>";
		document.getElementById('next_turn').innerHTML = "<button class='tooltip' onclick='next_turn()' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Validate the turn</span></button>";
	}
}

function FUNC_speeder(type=false) {
	if (type == false) {
		console.log("ERROR #8: FUNC_speeder function called without argument.")
	}
	else if (type == speeder) { // disable the speeders
		document.getElementById(type+"_button").classList.remove("greener_button");
		speeder = false;
	}
	else { // activate a speeder and disable the other
		if (speeder != false) {document.getElementById(speeder+"_button").classList.remove("greener_button");}
		document.getElementById(type+"_button").classList.add("greener_button");
		speeder = type;
	}
	if (auto_turn_activated == 1) {
		auto_next_turn() // deactivate
		auto_next_turn() // reactivate with the new value
	}
}

function unfreeze_turn_buttons() {
	document.getElementById('auto_next_turn').innerHTML = "<button class='tooltip' onclick='auto_next_turn()'> Auto <span class='DOWN_tooltip_text'>Validate automatically 1 turn per second</span></button>";	
	document.getElementById('next_turn').innerHTML = "<button class='tooltip' onclick='next_turn()' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn' class='LEFT_tooltip_text'>Validate the turn</span></button>";
	if (restartor_activated == true) {auto_next_turn()} // re-launch the autoturn
}

function energy_saved_from_bully_god() {
	var energy_saved = 0;
	if (fundamental_energy < 1000000000) {energy_saved = parseInt(Math.pow((fundamental_energy+1), (bully_god_power+0.005*DICT_Temple_upgrades['Energy'][5])));}
	else {energy_saved = Number(Math.pow((fundamental_energy+1), (bully_god_power+0.005*DICT_Temple_upgrades['Energy'][5])).toFixed(0));}
	return energy_saved
}

function buy_talents_unstoppable() {
	var current_talent_level;
	var all_talents_maxed = false;
	var update_count = 0;
	while (all_talents_maxed == false) {
		all_talents_maxed = true; // will become false again if a talent is bought
		for (var talent in DICT_fundamental_talents) {
			if (DICT_fundamental_talents[talent][6] == "energy") { // it would be nice to test if the talent is also visible, but it's complicated and not necessary
				current_talent_level = DICT_fundamental_talents[talent][3];
				add_talent(talent, false);
				if (current_talent_level != DICT_fundamental_talents[talent][3]) {
					all_talents_maxed = false;
					update_count++;
				}
			}
		}
	}
	if (update_count > 0) {completion_fundamental_talents_encyclopedia();} // disable display_encyclopedia() in the add_talent() function to save CPU power, and call it here
}

function explosion(appear=true) { // used for god reset, it's only an aesthetic function
	if (appear == true) { // display the second explosion
		document.getElementById('explosion_2').style.display = "initial";
		setTimeout("explosion('false')", 900); // make the explosions disappear
	}
	else {
		document.getElementById('explosive_god').style.display = "none";
		document.getElementById('explosion_1').style.display = "none";
		document.getElementById('explosion_2').style.display = "none";
	}
}

function god_reset() {
	document.getElementById('explosive_god').style.display = "initial"; // display the first explosion
	document.getElementById('explosion_1').style.display = "initial"; // display the first explosion
	setTimeout("explosion()", 150); // display the 2nd explosion
	current_turn = 0;
	if (auto_turn_activated == 1) { // disable autoturn
		auto_next_turn();
	}
	document.getElementById('auto_next_turn').innerHTML = "<button class='locked_button'> Auto </button>"; // lock the button to prevent missclick
	document.getElementById('next_turn').innerHTML = "<button class='locked_button' style='letter-spacing:1px'>Next tu<span id='letter_spacing2px'>rn</span><span id='TOOLTIP_next_turn'></span></button>"; // lock the button to prevent missclick
	display_turn();
	if (DICT_fundamental_talents['Hourglass tapping'][3] > 0) {
		document.getElementById("tapping_button").style.borderColor = "initial";
		tap_the_hourglass() // disable it
		tap_the_hourglass() // re-enable it with the right display (green if activated)
	}
	display_transfer_button();
	
	document.getElementById('body_parts').innerHTML = ""; // reset the body to prepare for the reset of all lines
	var saved_state_line;
	for (var this_line in energy_building_DYNAMIC) {
		if (energy_building_DYNAMIC[this_line][2] == 1) {
			LIST_total_fundamental_elements_destroyed[this_line] += energy_building_DYNAMIC[this_line][5]; // #stats
			if (energy_building_DYNAMIC[this_line][6] == 'construct') { // #stats
				LIST_total_fundamental_elements_destroyed[this_line] += multiplicator_body_parts_created(this_line); // #stats
			} // #stats
			compute_stat('ID_parts_destroyed_'+this_line) // #stats
			compute_stat('ID_proportion_parts_destroyed_'+this_line) // #stats
			energy_building_DYNAMIC[this_line][6] = 'inactive'; // deactivate the current action
			energy_building_DYNAMIC[this_line][5] = 0; // reset du stock
			energy_building_DYNAMIC[this_line][4] = 0.0; // reset de la progression
			document.getElementById('body_parts').innerHTML += display_line(this_line); // reload the initial display of the line
			display_progress_bar("progress_bar_"+this_line, this_line); // reset progress bar
			if (this_line == 9) {document.getElementById('genitals_count').innerHTML = display_number(energy_building_DYNAMIC[9][5]);}
			// START - reset or not the autoconstruct. This must be done after the renewal of the display of the line.
			if (restartor_activated == false) { // reset auto construct / convert / maton
				energy_building_DYNAMIC[this_line][7] = 'inactive';
				display_line(this_line, 'body_part_'+this_line);
			}
			else { // proper relaunching of the previous programed action
				saved_state_line;
				if (energy_building_DYNAMIC[this_line][7] != 'inactive') {
					saved_state_line = energy_building_DYNAMIC[this_line][7];
					program_action_body_part(this_line); // disable the action
					program_action_body_part(this_line, saved_state_line); // re-enable the action
				}
			}
			// END - reset or not the autoconstruct.
		}
	}
	display_stock_all_body_parts_laboratory();
	display_talents_management_bar();
	
	if (DICT_fundamental_talents['Artwork'][3] > 0) {
		DICT_artwork['auto_create'] = 0;
		if (DICT_artwork['activity'] == 1) { // #stats
			total_artworks_destroyed += 1; // #stats
			compute_stat('ID_total_artworks_destroyed') // #stats
		} // #stats
		DICT_artwork['activity'] = 0; // disactivate the current action
		DICT_artwork['percentage_completion'] = 0.0; // reset de la progression
		display_artwork();
		display_progress_bar_artwork();
	}
	LIST_activities = []; // reset de la liste des constructions en cours
	var previous_fundamental_energy = fundamental_energy; // used for statistics
	fundamental_energy = energy_saved_from_bully_god();
	display_fundamental_energy();
	smartomate(); // reactivate the smartomaton to avoid losing a turn
	if (unlocked_buttons == false) {display_all_lines()}
	
	if (LIST_tutorial_dialogues_validation[6] == 0) {
		next_tutorial_step(6);
	}
	if (LIST_tutorial_dialogues_validation[7] == 0 && fundamental_energy > 5) {
		next_tutorial_step(7);
	}
	// START - stats
	total_encounters_with_bully_God += 1;
	compute_stat('ID_total_encounters_with_bully_God'); // #stat
	total_Fundamental_Energy_destroyed += previous_fundamental_energy - fundamental_energy;
	compute_stat('ID_total_Fundamental_Energy_destroyed'); // #stat
	// END - stats
	
	if (unstoppable_activated == true) {
		buy_talents_unstoppable();
		for (var talent in DICT_fundamental_talents) {display_reset_talent_tooltip(talent)} // remove the error messages "not enough money"
	}
	
	setTimeout("unfreeze_turn_buttons()", 1500); // reactivate the turn buttons after 1.5 second.
}

function transfer(initialization=false) { // God Deal Transfer
	if (current_turn == 0 && initialization == false) {
		energy_transfered += fundamental_energy/10;
		fundamental_energy -= fundamental_energy/10;
		display_fundamental_energy();
		display_workers();
	}
	document.getElementById("multiplicator_transfer").innerHTML = display_number(specific_number_modifier_upgrade("Transfer"), true);
}

function convert_dollars_into_style_points() {
	return Number(Math.pow(Math.max(0, (dollars-money_saved())), (0.7+0.01*DICT_Temple_upgrades['Style'][5])).toFixed(0))}

function confirm_credits(cancel=false) {
	if (cancel == false) {
		display_credits_confirmation();
		document.getElementById("frame_credits").style.display = "initial";
	}
	else {document.getElementById("frame_credits").style.display = "none";}
}

function confirm_welcome_offer(cancel=false) {
	if (cancel == false) {
		display_welcome_offer_confirmation();
		document.getElementById("frame_welcome_offer").style.display = "initial";
	}
	else {document.getElementById("frame_welcome_offer").style.display = "none";}
}

function confirm_ruin_everything(cancel=false) {
	if (cancel == false) {
		display_ruin_everything_confirmation() // actualize the amount of style and prestige points displayed in the confirmation
		document.getElementById("frame_ruin_everything").style.display = "initial";
	}
	else {document.getElementById("frame_ruin_everything").style.display = "none";}
}

function ruin_everything() {
	if (current_turn != 0) { // Pull the bully God
		if (restartor_activated == true) {toggle_restartor()} // prevents an unintuitive behaviour, where the autoturn will be launched after ruining everything
		god_reset();
	}
	
	// START - Reset all brothels
	dice_casinothel = 1; // reset the dice of the casinothel
	zoutopia_activated = false; // deactivate the factories multiplier from Zoutopia
	brollywood_activated = false; // deactivate the worshipers multiplicator from Brollywood
	holograms = false; // deactivate the holograms from the Virtual brothel.
	bankthel_time_spent = 0; // reset the timer of the bankthel.
	for (var i in DICT_Brothels_STALE) {
		dollars += DICT_Brothels_DYNAMIC[i][2]; // if the player forgot to collect, do it automatically
		DICT_Brothels_DYNAMIC[i] = [0, 0, 0, 0, 0, 0];
	}
	DICT_Brothels_DYNAMIC['Minimalistic brothel'][0] = 1; // activate the first brothel
	// END - Reset all brothels
	
	influence_points += influence_points_to_give(dollars);
	style_points += convert_dollars_into_style_points();
	last_ruin_points = style_points;
	dollars_converted += dollars - money_saved(); // #stats
	compute_stat("ID_dollars_converted");
	dollars = money_saved(); // dollars have been converted into style points, destroy the dollars, save some dollars with the fundamental talent.
	prestige_points_total += prestige_points_to_give();
	pretty_stored_time = 0; // Body building
	inflation_stored_time = 0; // Inflation
	inflation_bonus = 0; // Inflation
	display_additional_deal_tooltip("Inflation");
	display_additional_deal_tooltip("Body building");
	for (var task in DICT_attributions) {DICT_attributions[task] = 0;} // remove all prostitutes from their task
	for (var task in DICT_attributions_humans) {DICT_attributions_humans[task] = 0;} // remove all prostitutes from their task
	
	// START - Reset workers
	LIST_Workers[1] = 0; // reset the progress bar of workers
	DICT_artwork['total_artworks'] = Math.min(DICT_artwork['total_artworks'], life_saver_effect(DICT_fundamental_talents['Life saver'][3])); // kill all the prostitutes minus the ones saved by 'Life saver'
	for (var upgrade in LIST_Workers_upgrades_DYNAMIC) { // remove all workers upgrades
		LIST_Workers_upgrades_DYNAMIC[upgrade] = 0;
	}
	disagree = 0; // variable linked to the green gauntlet
	// END - Reset workers
	
	// START - Reset all factories
	var saved_stock;
	var j = 0;
	for (var i in DICT_Factories_STALE) {
		saved_stock = 0;
		if (DICT_fundamental_talents['Crap saver'][3] > j) {
			saved_stock = Math.floor(DICT_Factories_DYNAMIC[i][4]/10);
		}
		DICT_Factories_DYNAMIC[i] = [0, 0, 0, 0, saved_stock, 0, 0];
		j++;
	}
	DICT_Factories_DYNAMIC["Simple items"][0] = 1; // activate the first production line.
	// END - Reset all factories
	
	genitals_stored = 0; // reset stock Temple
	if (autotransfer_genitals) {FUNC_autotransfer_genitals()} // deactivate the automatic transfer of genitals to the temple
	
	// START - Reset laboratory
	for (var i in LIST_autotransfer_body_parts) { // deactivate the automatic transfer of body parts to the laboratory
		if (LIST_autotransfer_body_parts[i]) {FUNC_autotransfer_body_part(i)}
	}
	LIST_body_parts_stored = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // reset stocks Laboratory
	for (var i in DICT_Laboratory_upgrades) {DICT_Laboratory_upgrades[i][0] = 0;}
	// END - Reset laboratory
	
	// START - Reset schools
	for (var school in DICT_Schools) {
		DICT_Schools[school][1] = 0; // reset the experience
		DICT_Schools[school][2] = 0; // reset the locked/unlocked
		DICT_Schools[school][3] = 0; // reset the number of completions
		DICT_Schools[school][13] = 0; // this school has never been unlocked anymore
	}
	// END - Reset schools
	
	printing_machine = 0; // Reset this SCAM
	
	for (var building in DICT_dollars_buildings_DYNAMIC) {// remove all buildings
		DICT_dollars_buildings_DYNAMIC[building][0] = 0;
	}
	DICT_dollars_buildings_DYNAMIC['Workers'][0] = 1; // re-activate the first building, that is always open: the Workers
	display_all_lines(); // shouldn't be useful, but I had a bug with transfer body parts buttons not disappearing. I couldn't reproduce the bug, but I had this line, just in case.
	display_artwork(); // refresh the artwork line in the God World to update the tooltip (price) and number of artworks
	display_front_screen("corps_Workers", DICT_human_world_corps_screens, "title_Workers"); // display the Workers page in front
	display_default_human_world_titles(); // make the buildings disappear from the screen, reinitialize the titles of the Human World
	unlock_building('Workers'); // re-activate the display of the first building, the Workers.
	display_dollars(); // there is another display_dollars() at the end, unsure why this one is here, probably disposable
	display_prostitutes();
	display_style_points();
	display_prestige_points();
	display_workers();
	display_workers_upgrades();
	display_all_brothels();
	display_all_factories();
	display_temple();
	display_stock_all_body_parts_laboratory()
	display_all_laboratory_upgrades()
	display_all_schools()
	display_lobby()
	display_god_of_extortion()
	DICT_encyclopedia['Fundamental Talents']['Style talents'][0] = 1;
	DICT_encyclopedia['Main Frame']['Style Points'][0] = 1;
	DICT_encyclopedia['Prestige']['Prestige points'][0] = 1;
	DICT_encyclopedia['Prestige']['Seal/Break deals'][0] = 1;
	DICT_encyclopedia['Prestige']['God deals'][0] = 1;
	display_encyclopedia();
	
	last_ruin_everything = timestamp();
	total_ruin_everything += 1;
	if (total_ruin_everything == 1) {
		DICT_all_statistics["ID_total_ruin_everything"][1] = 1; // #stats
		DICT_all_statistics["ID_dollars_converted"][1] = 1;
		DICT_all_statistics["ID_PRESTIGE"][1] = 1;
		DICT_all_statistics["ID_deals_sealed"][1] = 1;
		DICT_all_statistics["ID_deals_broken"][1] = 1;
		DICT_all_statistics["ID_deals_broken_before_they_are_sealed"][1] = 1;
		//DICT_all_statistics["ID_prestige_god_of_strength"][1] = 1;
		//DICT_all_statistics["ID_prestige_godess_of_beauty"][1] = 1;
		//DICT_all_statistics["ID_prestige_god_of_time"][1] = 1;
		//DICT_all_statistics["ID_prestige_god_of_laziness"][1] = 1;
		//DICT_all_statistics["ID_prestige_god_of_science"][1] = 1;
		//DICT_all_statistics["ID_prestige_god_of_energy"][1] = 1;
		DICT_all_statistics["ID_total_time_frozen"][1] = 1;
		display_all_stats(); // display new additions to the stats panel
		display_initial_style_talents();
		DICT_corps_screens["corps_prestige"][0] = 1;
		document.getElementById(DICT_corps_screens["corps_prestige"][1]).style.display = "initial";
	}
	compute_stat("ID_total_ruin_everything"); // #stats
	display_dollars(); // display dollars at the end, I don't remember why, it may have become irrelevant
}

function human_world_unlocked() {
	next_tutorial_step(18);
	DICT_corps_screens["corps_human_world"][0] = 1;
	document.getElementById(DICT_corps_screens["corps_human_world"][1]).style.display = "initial";
	display_front_screen('corps_transition_human_world', LIST_main_screens);
	display_front_screen('corps_human_world', DICT_corps_screens, 'title_human_world');
	DICT_all_statistics["ID_HUMAN_WORLD"][1] = 1; // #stats
	DICT_all_statistics["ID_dollars_spent"][1] = 1; // #stats
	DICT_all_statistics["ID_worker_upgrades_bought"][1] = 1; // #stats
	display_all_stats();
}

function timestamp() {return Date.now();}

function freeze_time(initialization=false) {
	if (initialization == false) {cancel_inflation_streak();} // there is an automatic double freeze_time() at launch for display reasons, it wouldn't be fair to cancel inflation.
	reset_frozenjuice();
	if (time_frozen == false) {
		time_frozen = true;
		document.getElementById("star_snow").style.fontWeight = 'bold';
		document.getElementById("star_snow").style.color = 'blue';
		document.getElementById("tooltip_star_snow").innerHTML = 'The time is frozen!<br />Click to unfreeze it.';
		document.getElementById("corps_human_world").style.backgroundImage = 'linear-gradient(to right, #F55, #ADD8E6, #EEF)';
	}
	else {
		time_frozen = false;
		document.getElementById("star_snow").style.fontWeight = 'normal';
		document.getElementById("star_snow").style.color = 'grey';
		document.getElementById("tooltip_star_snow").innerHTML = 'Click to freeze the time.';
		document.getElementById("corps_human_world").style.backgroundImage = 'linear-gradient(to right, #F55, #A00)';
	}
}

function use_stored_time() {
	cancel_inflation_streak();
	if (typeof timer_reset_frozenjuice != "undefined") {
		clearTimeout(timer_reset_frozenjuice); // clear the previous timeout to avoid multiple ones to happen
	}
	if (frozenjuice < 3) { // condition to avoid console.log error messages if spam click during the 3 seconds before reset of frozenjuice
		frozenjuice += 1;
		document.getElementById('frozenjuice'+frozenjuice).style.display = 'initial';
		window.timer_reset_frozenjuice = setTimeout("reset_frozenjuice()", 3000); // reset the frozenjuice displays after 3 seconds.
	}
	if (frozenjuice > 2) {
		time_runner(parseInt(frozen_stored_time)); // the frozen multiplicator will be automatically applied in the time_runner function
		frozen_stored_time = 0;
		frozenjuice = 0;
		document.getElementById("droplet").setAttribute("onclick", ""); 
		document.getElementById("tooltip_stored_time").innerHTML = display_time(0);
		window.timer_reset_frozenjuice = setTimeout("reset_frozenjuice()", 3000); // reset the frozenjuice displays after 3 seconds.
	}
}

function reset_frozenjuice() {
	frozenjuice = 0;
	document.getElementById('frozenjuice1').style.display = 'none';
	document.getElementById('frozenjuice2').style.display = 'none';
	document.getElementById('frozenjuice3').style.display = 'none';
	document.getElementById("droplet").setAttribute("onclick", "use_stored_time()");
	if (typeof timer_reset_frozenjuice != "undefined") {
		clearTimeout(timer_reset_frozenjuice); // if you reset the frozenjuice, cancel the timer towards reseting frozenjuice again.
	}
}

function use_time_coin(time) {
	if (time == 1 && coins_1_hour > 0) {
		coins_1_hour -= 1;
		time_runner(3600000);
		display_1_hour();
	}
	else if (time == 24 && coins_24_hours > 0) {
		coins_24_hours -= 1;
		time_runner(86400000);
		display_24_hours();
	}
}

function time_runner(additional_time=0) {
	var accurate_timestamp = timestamp();
	var max_time = 21600000;
	if (DICT_Deals['H24'][2] == 1) {max_time *= 4;} // 6h => 24h
	if (DICT_God_of_Extortion['Hibernate'][3] == 1 && DICT_Deals['4th wall'][2] == 1) {max_time *= 7;} // 1 day => 1 week
	var time_since_last_stamp = Math.min((accurate_timestamp - last_timestamp), max_time); // limite de 6h/24h d'offline progress
	
	if (time_since_last_stamp < 0) {return} // Prevent time cheating.
	
	if (additional_time != 0) { // line used for the cheat test function, release Freeze and cash shop stuff
		time_since_last_stamp += additional_time;		
		if (deal_timer != 0) {deal_timer -= additional_time;} // if deal_timer == 0, it MUST stay 0, or bugs happen in the "Prestige" section of the time_runner() function
	}
	
	if (time_frozen == true && additional_time == 0) { // if additional_time isn't 0, always use the time, don't store it.
		frozen_stored_time += time_since_last_stamp;
		document.getElementById("tooltip_stored_time").innerHTML = display_time(parseInt(frozen_stored_time*DEAL_Freeze_multiplicator));
		total_time_frozen += time_since_last_stamp*DEAL_Freeze_multiplicator; // #stats
		compute_stat("ID_total_time_frozen");
		time_since_last_stamp = 0;
	}
	else if (DICT_Deals['Freeze'][2] == 1) {
		time_since_last_stamp *= DEAL_Freeze_multiplicator;
	}
	
	var completion;
	var remainder;
	var total_completions;
	
	// Note: Schools must be done first, because they multiply the other buildings. Be careful with the multiplier of the offline progress, don't use the raw new level of the schools.
	
	// START - Schools
	var DICT_completions = {"Basics school": DICT_Schools["Basics school"][3], "Advanced school": DICT_Schools["Advanced school"][3], "Elite school": DICT_Schools["Elite school"][3]};
	for (var i in DICT_Schools) {
		var time_left_to_account = time_since_last_stamp;
		if (DICT_Schools[i][1]+time_since_last_stamp*multiplicator_speed_schools(i) < DICT_Schools[i][9]) { // if not enough time for any completion
			DICT_Schools[i][1] += time_since_last_stamp*multiplicator_speed_schools(i);
			time_left_to_account = 0;
		}
		else {
			var completions_before_computations = DICT_Schools[i][3];
			time_left_to_account -= (DICT_Schools[i][9] - DICT_Schools[i][1]) / multiplicator_speed_schools(i); // remove the time needed to reach the completion
			DICT_Schools[i][1] = 0; // the completion has been reached, reset the experience gained until next completion
			DICT_Schools[i][3] += 1; // account for the completion
			var VAR_multiplicator_speed_schools = multiplicator_speed_schools(i); // useful to compute it once per iteration instead of twice.
			var j = 0;
			while (time_left_to_account*VAR_multiplicator_speed_schools > DICT_Schools[i][9] && (j < 100000 || i == "Basics school")) { // while there is enough time left for a full completion
				time_left_to_account -= DICT_Schools[i][9] / VAR_multiplicator_speed_schools;
				DICT_Schools[i][3] += 1; // account for the completion
				VAR_multiplicator_speed_schools = multiplicator_speed_schools(i); // recompute the value of VAR_multiplicator_speed_schools
				j++;
			}
			if (j >= 100000) { // after 100,000 completions, switch to an approximation to save cpu power and avoid a freeze.
				while (time_left_to_account*VAR_multiplicator_speed_schools > 1000*DICT_Schools[i][9]) { // while there is enough time left for a full completion
					time_left_to_account -= 1000*DICT_Schools[i][9] / VAR_multiplicator_speed_schools;
					DICT_Schools[i][3] += 1000; // account for the completions
					VAR_multiplicator_speed_schools = multiplicator_speed_schools(i); // recompute the value of VAR_multiplicator_speed_schools
				}
				while (time_left_to_account*VAR_multiplicator_speed_schools > DICT_Schools[i][9]) { // when there are less than 1000 left, do another round of completions one by one
					time_left_to_account -= DICT_Schools[i][9] / VAR_multiplicator_speed_schools;
					DICT_Schools[i][3] += 1; // account for the completion
					VAR_multiplicator_speed_schools = multiplicator_speed_schools(i); // recompute the value of VAR_multiplicator_speed_schools
				}
			}
			DICT_Schools[i][1] = time_left_to_account*VAR_multiplicator_speed_schools; // add the extra experience
			time_left_to_account = 0; // no more time left to account. this line isn't really necessary, I just like it
			DICT_completions[i] = DICT_Schools[i][3];
			DICT_Schools[i][3] = Math.trunc((completions_before_computations + DICT_completions[i]) / 2); // poor approximation used for offline progress.
		}
	}
	// END - Schools
	
	var future_pretty_stored_time = pretty_stored_time + time_since_last_stamp / 18000000 * DICT_Deals['Body building'][2]; // Body building deal. Necessary to calculate workers
	pretty_stored_time = (pretty_stored_time + future_pretty_stored_time) / 2;
	pretty_stored_time = Math.min(19, pretty_stored_time); // Body building deal. Necessary to calculate workers
	display_additional_deal_tooltip("Body building");
	inflation_stored_time += time_since_last_stamp * DICT_Deals['Inflation'][2];
	display_additional_deal_tooltip("Inflation");
	
	// START - Workers
	completion = LIST_Workers[1] + time_since_last_stamp*(DICT_attributions['Workers']+DICT_attributions_humans['Workers']);
	remainder = completion % LIST_Workers[0]; // temps completed += gain % temps_de_completion
	total_completions = (completion - remainder) / LIST_Workers[0]; // always an integer
	LIST_Workers[1] = remainder;
	var VAR_multiplicator_workers = multiplicator_workers()
	if (total_completions > 0) {
		dollars += total_completions*VAR_multiplicator_workers;
		// display of dollars : at the end of the time runner
	}
		//START - if (DICT_Deals['Body building'][2] == 1) { // 2 lines necessary because of the Body building talent
	document.getElementById("workers_speed_value").innerHTML = display_number(speed_workers()*VAR_multiplicator_workers);
	document.getElementById("workers_multiplicator_value").innerHTML = display_number(VAR_multiplicator_workers);
		// END
	display_progress_bar_workers();
	document.getElementById("text_progress_bar_workers").innerHTML = display_text_progress_bar_human_world();
	pretty_stored_time = Math.min(19, future_pretty_stored_time); // actualize pretty_stored_time
	// END - Workers
	
	// Brothels need to be done after Factories, to include the items created in the calculus of the time spent with bonuses.
	
	// START - Factories
	var current_level;
	var time_to_complete_upgrade;
	var remaining_time;
	for (var factory in DICT_Factories_DYNAMIC) {
		remaining_time = time_since_last_stamp;
		current_level = current_level_factory(factory);
		if (current_level > 0) {
			// START - Upgrade ongoing
			if (current_level > DICT_Factories_DYNAMIC[factory][0] + DICT_Deals['Beyond limits'][2]) {
				time_to_complete_upgrade = factory_total_time_to_upgrade(factory, current_level);
				DICT_Factories_DYNAMIC[factory][2] += time_since_last_stamp*multiplicator_speed_factory(factory, true);
				if (DICT_Factories_DYNAMIC[factory][2] >= time_to_complete_upgrade) { // if the upgrade is complete
					remaining_time = DICT_Factories_DYNAMIC[factory][2] - time_to_complete_upgrade;
					DICT_Factories_DYNAMIC[factory][2] = 0; // reset the upgrade counter
					DICT_Factories_DYNAMIC[factory][0] = current_level - DICT_Deals['Beyond limits'][2]; // validate the completion of the upgrade
					display_factory(factory); // refresh the display to show that we are now in production mode
				}
				else {
					display_time_upgrade_bar_factory(factory, current_level);
				}
				display_progress_bar_factory("progress_bar_upgrade_"+factory, factory, current_level, true);
			}
			// END - Upgrade ongoing
			// START - Production ongoing
			if (current_level <= DICT_Factories_DYNAMIC[factory][0] + DICT_Deals['Beyond limits'][2]) {
				completion = DICT_Factories_DYNAMIC[factory][1] + remaining_time*multiplicator_speed_factory(factory);
				remainder = completion % factory_total_time_to_produce(factory);
				total_completions = (completion - remainder) / factory_total_time_to_produce(factory) * multiplicator_quantity_factory(factory); // always an integer
				DICT_Factories_DYNAMIC[factory][1] = remainder;
				if (total_completions > 0) {
					DICT_Factories_DYNAMIC[factory][4] += total_completions; // add the adequate quantity of items to the stock.
					document.getElementById("stock_"+factory).innerHTML = display_number(DICT_Factories_DYNAMIC[factory][4]); // display the updated stock.
					for (var span in document.getElementsByClassName("stock_cost_"+factory)) {
						document.getElementsByClassName("stock_cost_"+factory)[span].innerHTML = display_number(DICT_Factories_DYNAMIC[factory][4]); // display the updated stock.
					}
				}
				display_progress_bar_factory("progress_bar_production_"+factory, factory, current_level, false);
			}
			// END - Production ongoing
			document.getElementById("average_gains_"+factory).innerHTML = display_number(average_gains_per_hour_factory(factory)); // display the updated speed of production.
		}
	}
	// END - Factories
	
	// START - Brothels
	for (var brothel in DICT_Brothels_STALE) {
		var operational_prostitutes = Math.max(0, DICT_attributions[brothel]+DICT_attributions_humans[brothel]-DICT_Brothels_STALE[brothel][1]);
		if (operational_prostitutes > 0) { // it will be > 0 only if there are exploitation prostitutes
			if (DICT_Brothels_DYNAMIC[brothel][3] == 1 || DICT_Brothels_DYNAMIC[brothel][3] == 2) {// if option "active" or "milk" is active
				var VAR_money_per_second;
				var time_left = time_since_last_stamp;
				var bonus_time_left = DICT_Brothels_DYNAMIC[brothel][4];
				bonus_time_left -= Math.min(DICT_Brothels_DYNAMIC[brothel][4], time_left); // remove time from the bonus time available
				if (bonus_time_left > 0) { // if time_since_last_stamp isn't high enough to deplete the time left in the bonus
					VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes);
					DICT_Brothels_DYNAMIC[brothel][4] = bonus_time_left;
					DICT_Brothels_DYNAMIC[brothel][2] += time_since_last_stamp/1000 * VAR_money_per_second; // gains in the stock of dollars
				}
				
				else if (bonus_time_left == 0) {
					if (DICT_Brothels_DYNAMIC[brothel][3] == 2) { // if option "milking" is active
						VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes);
						DICT_Brothels_DYNAMIC[brothel][2] += DICT_Brothels_DYNAMIC[brothel][4]/1000 * VAR_money_per_second; // gains in the stock of dollars WITH bonus
						DICT_Brothels_DYNAMIC[brothel][4] = 0; // no more bonus time left
						DICT_Brothels_DYNAMIC[brothel][3] = 0; // the bonus becomes "inactive"
						VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes); // recalculate with no bonus
						DICT_Brothels_DYNAMIC[brothel][2] += (time_since_last_stamp-DICT_Brothels_DYNAMIC[brothel][4])/1000 * VAR_money_per_second; // gains in the stock of dollars WITHOUT bonus
						display_brothel(brothel); // remove the white display
					}
					else { // if (DICT_Brothels_DYNAMIC[brothel][3] == 1), if option "active" is active
					
						VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes);
						DICT_Brothels_DYNAMIC[brothel][2] += DICT_Brothels_DYNAMIC[brothel][4]/1000 * VAR_money_per_second; // gains in the stock of dollars before consumption of a new bulk
						var bonus_time_left_again = DICT_Brothels_DYNAMIC[brothel][4]; // only useful for the display orange to red
						time_left -= DICT_Brothels_DYNAMIC[brothel][4];
						DICT_Brothels_DYNAMIC[brothel][4] = 0;
						
						var remainder_bulks = time_left % DICT_Brothels_STALE[brothel][5];
						var bulks_needed = 1 + (time_left-remainder_bulks)/DICT_Brothels_STALE[brothel][5];
						
						// START - maximum bulks available
						var max_bulks = 999999999; // infinite for now, since no item has been required yet
						var i = 6;
						for (var factory_name in DICT_Factories_STALE) {
							if (DICT_Brothels_STALE[brothel][i] > 0) { // if at least one item of this type is necessary
								max_bulks = Math.min(max_bulks, Math.trunc(DICT_Factories_DYNAMIC[factory_name][4] / DICT_Brothels_STALE[brothel][i]));
								// previous line: if an item is in shortage compared to the previous ones tested, it becomes the goulet d'etranglement
							}
							i++;
						}
						// END - maximum bulks available
						if (bulks_needed > max_bulks) {
							DICT_Brothels_DYNAMIC[brothel][2] += max_bulks*DICT_Brothels_STALE[brothel][5]/1000 * VAR_money_per_second;
							var i = 6; // DICT_Brothels_STALE[brothel][6]: simple items required. DICT_Brothels_STALE[brothel][7]: simple materials required. etc
							for (var factory_name in DICT_Factories_STALE) { // loop through all the items and check if one is required to activate the brothel
								if (DICT_Brothels_STALE[brothel][i] > 0) {
									DICT_Factories_DYNAMIC[factory_name][4] -= max_bulks*DICT_Brothels_STALE[brothel][i]; // remove the items from the stock
									if (DICT_Factories_DYNAMIC[factory_name][0] > 0) { // if the factory is active
										document.getElementById("stock_"+factory_name).innerHTML = display_number(DICT_Factories_DYNAMIC[factory_name][4]); // display the updated stock.
									}
								}
								i++;
							}
							DICT_Brothels_DYNAMIC[brothel][4] = 0; // no more bonus time left
							VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes); // recalculate with no bonus
							DICT_Brothels_DYNAMIC[brothel][2] += (time_left - max_bulks*DICT_Brothels_STALE[brothel][5])/1000 * VAR_money_per_second;
						}
						else { // if (bulks_needed <= max_bulks)
							var i = 6; // DICT_Brothels_STALE[brothel][6]: simple items required. DICT_Brothels_STALE[brothel][7]: simple materials required. etc
							for (var factory_name in DICT_Factories_STALE) { // loop through all the items and check if one is required to activate the brothel
								if (DICT_Brothels_STALE[brothel][i] > 0) {
									DICT_Factories_DYNAMIC[factory_name][4] -= bulks_needed*DICT_Brothels_STALE[brothel][i]; // remove the items from the stock
									if (DICT_Factories_DYNAMIC[factory_name][0] > 0) { // if the factory is active
										document.getElementById("stock_"+factory_name).innerHTML = display_number(DICT_Factories_DYNAMIC[factory_name][4]); // display the updated stock.
									}
								}
								i++;
							}
							DICT_Brothels_DYNAMIC[brothel][4] += bulks_needed*DICT_Brothels_STALE[brothel][5]; // add time to the buff countdown
							DICT_Brothels_DYNAMIC[brothel][4] -= time_left; // remove time from the buff countdown
							DICT_Brothels_DYNAMIC[brothel][2] += time_left/1000 * VAR_money_per_second;
						}
						if (bonus_time_left_again > 0) {display_brothel(brothel)} // if this time_runner was the last one before a bulk is needed but there isn't one
						if (bulks_needed > 0 && max_bulks > 0) {display_brothel(brothel)} // if a buff was needed and there was enough items to do it -> display the newly buffed brothel
					}
				}
				else { //if (bonus_time_left < 0) 
					console.log("ERROR #9: Negative time left for a bonus of a brothel.")
				}
				document.getElementById('time_left_'+brothel).innerHTML = display_time(DICT_Brothels_DYNAMIC[brothel][4]);
			}
			else { // if the bonus isn't active
				if (brothel != "Bankthel") {
					var VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes);
					DICT_Brothels_DYNAMIC[brothel][2] += time_since_last_stamp * VAR_money_per_second/1000; // gains in the stock of dollars
				}
				else { // if the brothel is the Bankthel
					bankthel_time_spent += time_since_last_stamp;
					var VAR_money_per_second = money_per_second_brothel(brothel, operational_prostitutes);
					while (bankthel_time_spent > bankthel_period) { // while there is enough time left for a full completion
						bankthel_time_spent -= bankthel_period;
						DICT_Brothels_DYNAMIC[brothel][2] += bankthel_period * VAR_money_per_second/1000; // gains in the stock of dollars
						DICT_Brothels_DYNAMIC[brothel][2] *= (1 + bankthel_bonus_per_tic); // bank interests
					}
				}
			}
			document.getElementById("stock_"+brothel).innerHTML = display_number(DICT_Brothels_DYNAMIC[brothel][2]);
			document.getElementById("gains_per_hour_"+brothel).innerHTML = display_number(3600 * VAR_money_per_second);
		}
	}
	// END - Brothels
	
	// START - Temple
		// START - worshipers recruited
	if (genitals_stored > 0 || DICT_Deals['Threat'][2] == 1) {
		completion = LIST_worshipers[2] + time_since_last_stamp*multiplicator_speed_worshipers();
		remainder = completion % LIST_worshipers[1];
		if (DICT_Deals['Threat'][2] == 1) {total_completions = (completion - remainder) / LIST_worshipers[1];}
		else {total_completions = Math.min((completion - remainder) / LIST_worshipers[1], genitals_stored);} // always an integer
		LIST_worshipers[2] = remainder;
		if (total_completions > 0) {
			if (DICT_Deals['Threat'][2] != 1) {
				genitals_stored -= total_completions;
				if (genitals_stored == 0) {LIST_worshipers[2] = 0} // if no more genitals, you can't start the conversion of a worshiper.
				document.getElementById("span_genitals_stored").innerHTML = display_number(genitals_stored);
			}
			LIST_worshipers[0] += total_completions;
			display_inactive_active_worshipers();
		}
		if (DICT_Deals['Threat'][2] == 0) {
			document.getElementById("time_left_genitals").innerHTML = display_time_left_genitals();
		}
		display_progress_bar_worshipers();
	}
		// END - worshipers recruited
		
		// START - completion of upgrades
	for (var i in DICT_Temple_upgrades) {
		completion = time_since_last_stamp * multiplicator_upgrades_temple(i);
		DICT_Temple_upgrades[i][3] += completion;
		if (DICT_Temple_upgrades[i][3] >= (DICT_Temple_upgrades[i][1] * Math.pow(DICT_Temple_upgrades[i][2], DICT_Temple_upgrades[i][5]))) { // if upgrade complete
			DICT_Temple_upgrades[i][3] -= (DICT_Temple_upgrades[i][1] * Math.pow(DICT_Temple_upgrades[i][2], DICT_Temple_upgrades[i][5]));
			DICT_Temple_upgrades[i][5] += 1;
			if (i == "Prestige") {
				prestige_points_total += 1;
				display_prestige_points()
			}
			else if (i == "Energy") {display_turn()} // update the tooltip to indicate the +0.005 increment.
			else if (i == "Law of attraction") {display_workers()} // update the display of the multiplicator 
			if (DICT_Temple_upgrades[i][5] >= DICT_Temple_upgrades[i][4]) { // if level max is reached
				DICT_Temple_upgrades[i][0] = 0; // attributed worshipers
				DICT_Temple_upgrades[i][3] = 0; // percentage of completion
				DICT_Temple_upgrades[i][5] = DICT_Temple_upgrades[i][4]; // current level = level max (in case somehow the current level becomes higher than the max)
				display_temple();
			}
		}
	}
	document.getElementById("table_upgrades_temple").innerHTML = display_upgrades_temple();
		// END - completion of upgrades
	// END - Temple
	
	// START - Laboratory
	if (scientist_timer > 0 && (accurate_timestamp - scientist_timer) > 43200000) {resurrect_the_scientist()} // 43200000 = 12 heures
	// END - Laboratory
	
	// START - Lobby
	var max_page = max_page_lobby();
	if (max_page < 4){
		lobby_time_stored += time_since_last_stamp;
		var VAR_completion_per_millisecond_lobby = completion_per_millisecond_lobby();
		var time_chunk = 1000; // 1000 milliseconds, this implies that the while loop will be run once per second left in the time to deal. Running it every millisecond would be too cpu demanding.
		var max_time_payable; // time it takes to spend all your dollars in the lobby at the current rate.
		var dollars_cost;
		while (lobby_time_stored > 0) {
			dollars_cost = time_chunk*price_per_millisecond_lobby();
			if (dollars > dollars_cost && LIST_Lobby[max_page][6] < LIST_Lobby[max_page][7]) { // if enough dollars to pay and upgrade not complete yet
				dollars_spent += dollars_cost; // #stats
				money_spent_in_lobbies += dollars_cost; // #stats
				dollars -= dollars_cost;
				// display of dollars : at the end of the time runner.
				LIST_Lobby[max_page][2] += time_chunk*VAR_completion_per_millisecond_lobby;
				while (LIST_Lobby[max_page][2] > LIST_Lobby[max_page][5]) { // if enough experience for at least 1 completion
					LIST_Lobby[max_page][2] -= LIST_Lobby[max_page][5];
					LIST_Lobby[max_page][6] += 1;
				}
				lobby_time_stored -= time_chunk;
			}
			else {break}
		}
		if (LIST_Lobby[max_page][6] >= LIST_Lobby[max_page][7]) { // if a lobby is complete
			LIST_Lobby[max_page][1] = 1;
			DICT_attributions['Lobby'] = 0;
			DICT_attributions_humans['Lobby'] = 0;
			change_page_lobby('next');
			display_lobby(lobby_page);
			document.getElementById("time_running_infos_bar_lobby").innerHTML = "";
			if (LIST_Lobby[max_page][0] == "World domination") { // if we just completed the final lobby, activate the space music
				LIST_musics[8][0] = 1; // Authorize the music for Space
				if (current_music != Object.keys(LIST_musics).length-1) { // if the music isn't muted
					current_music = 8; // Space
					change_music(false); // activate the music for Space
				}
			}
		}
		else if (lobby_page == max_page && max_page < 3) { // if max_page == 3, it's the end page, where there is no speed or cost.
			document.getElementById("time_running_infos_bar_lobby").outerHTML = display_speed_and_cost_lobby(lobby_page);
		}
		display_progress_bar_lobby();
		display_additional_deal_tooltip("Conviction");
	}
	// END - Lobby
	
	// START - Prestige
	if (current_deal != "none") { // if a deal is ongoing
		if (accurate_timestamp < deal_timer+Deal_time) {
			display_progress_bar_prestige()
			document.getElementById("text_progress_bar_prestige").innerHTML = display_text_progress_bar_prestige()
		}
		else {
			DICT_Deals[current_deal][2] = 1; // validate the deal
			display_specific_prestige_deal(current_deal);
			deal_timer = 0; // reset the timer
			current_deal = "none"; // no more deal currently negociated
			deals_sealed += 1; // #stats
			compute_stat("ID_deals_sealed");
			display_prestige_points() // remove the display of the progress bar
			display_prestige_deals() // change the color of the sealed deal and unlock the next deals
		}
	}
	// END - Prestige
	
	
	// START - Schools completions part 2
	for (var school in DICT_Schools) {
		if (DICT_Schools[school][2] == 1) {
			DICT_Schools[school][3] = DICT_completions[school]; // get the right completion value, not the half value. See first part of Schools completions for details
			document.getElementById("bonus_school_"+DICT_Schools[school][14]).innerHTML = display_number(bonus_earned_school(school));
			document.getElementById("production_school_"+DICT_Schools[school][14]).innerHTML = display_number(production_speed_school(school), true);
		}
	}
	display_trained_prostitutes()
	// END - Schools completions part 2
	
	display_dollars(); // this is used for both the workers and the lobby. As it's updating every time runner end game, just always do it.
	
	// START - #stats
	compute_stat("ID_dollars_spent"); // here instead of in the lobby section to avoid cpu overload
	compute_stat("ID_money_spent_in_lobbies"); // here instead of in the lobby section to avoid cpu overload
	time_spent_this_session = timestamp() - time_of_connection;
	time_spent = time_spent_at_connection + time_spent_this_session;
	compute_stat("ID_time_spent_this_session");
	compute_stat("ID_time_spent");
	compute_stat("ID_time_since_ruin_everything");
	// END - stats
	
	last_timestamp = accurate_timestamp;
}

function FUNC_game_over() {
	if (fundamental_energy > end_game_price) { // replace "1" with "end_game_price" when tests are done
		fundamental_energy -= end_game_price;
		game_over = true;
		display_game_over();
	}
}

function launch_music() { // dumb function because I don't understand how to use a parameter in addEventListener
	change_music(false);
}

function change_music(change=true) {
	var i = current_music;
	
	// START - select the next available music
	if (change == true) { // change = false when we load the game, and we just want to launch the current music
		i++;
		if (i+1 > Object.keys(LIST_musics).length) {i = 0;} // if the previous music was the last of the list, go back to the beginning
		while (LIST_musics[i][0] == 0) { // while we don't find a music that has been unlocked
			i++;
			if (i+1 > Object.keys(LIST_musics).length) {i = 0;} // if we reach the end of the list, go back to the beginning
		}
		current_music = i;
	}
	// END - select the next available music
	
	// i is the number of the music
	
	// START - cancel all possible musics ongoing
	for (var j in LIST_musics) {
		if (LIST_musics[j][1] != "mute_music") {
			document.getElementById(LIST_musics[j][1]).pause();
			document.getElementById(LIST_musics[j][1]).currentTime = 0;
		}
	}
	// mute: because there is no music, the pause() function doesn't seem to work, I hope there won't be any memory leak, I guess not.
	// END - cancel all possible musics ongoing
	
	document.getElementById(LIST_musics[i][1]).play(); // play the right music
	var icon = "&#x266B;";
	if (i+1 == Object.keys(LIST_musics).length) {icon = "&#x1F507;";} // mute button icon
	document.getElementById("change_music_button").innerHTML = icon+" "+LIST_musics[i][2]+" "+icon+"<span class='LEFT_tooltip_text'>"+LIST_musics[i][3]+"</span>";

	// END - launch the right music
}


// START - Save functions

function create_json_save(build_only=false) {
	list_of_global_variables = ['build',
								'tutorial_page',
								'tutorial_step',
								'lobby_page',
								'fundamental_energy',
								'dollars',
								'style_points',
								'influence_points',
								'last_ruin_points',
								'prestige_points_total',
								'deal_timer',
								'current_deal',
								'restartor_activated',
								'semiauto_activated',
								'smartomaton_activated',
								'speeder',
								'unstoppable_activated',
								'tapping_activated',
								'autotransfer_genitals',
								'LIST_autotransfer_body_parts',
								'current_turn',
								'tutorial_box_display',
								'tutorial_box_size',
								'tutorial_box_top',
								'tutorial_box_left',
								'unlocked_buttons',
								'prostitutes_multiplicator',
								'time_frozen',
								'frozen_stored_time',
								'pretty_stored_time',
								'inflation_stored_time',
								'inflation_bonus',
								'energy_transfered',
								'god_of_energy_upset',
								'god_of_energy_happy',
								'golden_rings_total',
								'golden_rings_spent',
								'printing_machine',
								'coins_1_hour',
								'coins_24_hours',
								'toggled_skins',
								'last_timestamp',
								'last_ruin_everything',
								'disagree',
								'scientist_dead',
								'scientist_resurrected',
								'scientist_timer',
								'game_over',
								'current_music',

								'DICT_all_statistics',
								'total_number_of_turns',
								'total_encounters_with_bully_God',
								'total_beetlejuice_activations',
								'total_ruin_everything',
								'total_Fundamental_Energy_destroyed',
								'total_artworks_destroyed',
								'dollars_spent',
								'dollars_converted',
								'worker_upgrades_bought',
								'brothels_bought',
								'dice_rolled',
								'sum_value_dice_rolls',
								'body_parts_converted',
								'body_parts_sent_to_lab',
								'body_parts_used_in_upgrades',
								'scientist_murders',
								'money_spent_in_lobbies',
								'deals_sealed',
								'deals_broken',
								'deals_broken_before_they_are_sealed',
								'total_time_frozen',
								'time_spent',
								'time_spent_this_session',

								'DICT_corps_screens',
								'DICT_fundamental_talents',
								'DICT_encyclopedia',
								'DICT_encyclopedia_additional_parts',
								'energy_building_DYNAMIC',								
								'LIST_Workers_upgrades_DYNAMIC',
								'DICT_dollars_buildings_DYNAMIC',
								'DICT_artwork',
								'DICT_attributions',
								'DICT_attributions_humans',
								'LIST_Workers',
								'DICT_Brothels_DYNAMIC',
								'dice_casinothel',
								'zoutopia_activated',
								'brollywood_activated',
								'bankthel_time_spent',
								'holograms',
								'DICT_Factories_DYNAMIC',
								'genitals_stored',
								'LIST_worshipers',
								'DICT_Temple_upgrades',
								'LIST_body_parts_stored',
								'DICT_Laboratory_upgrades',
								'DICT_Schools',
								'LIST_Lobby',
								'DICT_Deals',
								'LIST_focus_bonus_validated',
								'DICT_God_of_Extortion',
								'LIST_tutorial_dialogues_validation',
								'LIST_total_fundamental_elements_created',
								'LIST_total_fundamental_elements_destroyed',
								'LIST_activities',
								'LIST_musics',
								];
	if (build_only) {list_of_global_variables = ['build'];}
	var saved_file = {};
	var LIST_datas = list_of_global_variables;
	for (var i in LIST_datas) {
		saved_file[LIST_datas[i]] = eval(LIST_datas[i]);
	}
	return JSON.stringify(saved_file);
}

function save_as_text_file() {
	var file_to_save = create_json_save();
	if (publication != false) {file_to_save = btoa(file_to_save);}
	var data = "text/json;charset=utf-8," + encodeURIComponent(file_to_save); // not sure what this does exactly, some standardization thing probably
	var a       = document.createElement('a'); // create an element 'a' in the document, without a location
	a.href      = 'data:' + data; // I don't know what this does. I guess it's a link
	a.download  = 'BrothidleSave.txt'; // Default name of the saved file
	// a.innerHTML = 'download .txt file of json'; // I disable this line since I don't want the link to be displayed

	document.getElementById('text_intro').appendChild(a); // add the download link to my text_intro element
	a.click() // click on the download link
}

function load_text_file() {
	var loaded_file2 = prompt("1 - Open a save file from your computer. 2 - Select all the lines of the save file. 3 - Copy all the lines. 4 - Paste the content here. Warning: this action WILL DELETE YOUR CURRENT GAME, and replace it with your saved game.");
	if (loaded_file2 !== null) {
		clearInterval(window.auto_save);
		clearInterval(window.runner);
		localStorage.clear();
		default_variables();
		if (publication != false) {loaded_file2 = atob(loaded_file2);}
		var loaded_file = JSON.parse(loaded_file2);
		for (var saved_var in loaded_file) {
			
			// START - VERSION 0.5.1 and less
			if (saved_var == 'LIST_tutorial_dialogues') {
				for (var i in loaded_file[saved_var]) {
					LIST_tutorial_dialogues_validation[i] = parseInt(loaded_file[saved_var][i][1]);
				}
			}
			// END - VERSION 0.5.1 and less
			
			else {
				this[saved_var] = loaded_file[saved_var];
			}
		}
		save_or_delete_all_data(); // save the gathered data in cookies
		location.reload(true); // refresh the page
	}
}

function confirm_delete_all_data(cancel=false) {
	if (cancel == false) {document.getElementById("frame_total_reset").style.display = "initial";}
	else {document.getElementById("frame_total_reset").style.display = "none";}
}

function save_or_delete_all_data(action='save') {
	var activate_function = true;
	if (action !='save') { // delete all data
		var build_save = build;
		activate_function = false;
		clearInterval(window.auto_save);
		localStorage.clear();
		build = build_save;
		localStorage.setItem("full_data",create_json_save(true)); // save the version build
		location.reload(true); // refresh the page
	}
	
	if (activate_function == true) { // save data in local storage
		localStorage.setItem("full_data",create_json_save()); // (name, big json file string)
	}
}

function read_local_storage() {
	var storage = localStorage.getItem('full_data');
	if (storage != "") {
		var loaded_file = JSON.parse(storage);
		for (var saved_var in loaded_file) {
			if (saved_var == 'version') { // changement de nom de variable : "version" => "build". necessary for builds under 593
				build = Number(loaded_file[saved_var]);
			}
				
			else if (
				saved_var == 'build' ||
				saved_var == 'tutorial_page' ||
				saved_var == 'tutorial_step' ||
				saved_var == 'lobby_page' ||
				saved_var == 'fundamental_energy' ||
				saved_var == 'dollars' ||
				saved_var == 'style_points' ||
				saved_var == 'influence_points' ||
				saved_var == 'last_ruin_points' ||
				saved_var == 'prestige_points_total' ||
				saved_var == 'genitals_stored' ||
				saved_var == 'deal_timer' ||
				saved_var == 'current_turn' ||
				saved_var == 'tutorial_box_display' ||
				saved_var == 'tutorial_box_size' ||
				saved_var == 'tutorial_box_top' ||
				saved_var == 'tutorial_box_left' ||
				saved_var == 'prostitutes_multiplicator' ||
				saved_var == 'total_number_of_turns' ||
				saved_var == 'total_encounters_with_bully_God' ||
				saved_var == 'total_beetlejuice_activations' ||
				saved_var == 'total_ruin_everything' ||
				saved_var == 'total_Fundamental_Energy_destroyed' ||
				saved_var == 'total_artworks_destroyed' ||
				saved_var == 'dollars_spent' ||
				saved_var == 'dollars_converted' ||
				saved_var == 'worker_upgrades_bought' ||
				saved_var == 'brothels_bought' ||
				saved_var == 'dice_rolled' ||
				saved_var == 'sum_value_dice_rolls' ||
				saved_var == 'body_parts_converted' ||
				saved_var == 'body_parts_sent_to_lab' ||
				saved_var == 'body_parts_used_in_upgrades' ||
				saved_var == 'scientist_murders' ||
				saved_var == 'money_spent_in_lobbies' ||
				saved_var == 'deals_sealed' ||
				saved_var == 'deals_broken' ||
				saved_var == 'deals_broken_before_they_are_sealed' ||
				saved_var == 'total_time_frozen' ||
				saved_var == 'time_spent' ||
				saved_var == 'time_spent_this_session' ||
				saved_var == 'dice_casinothel' ||
				saved_var == 'bankthel_time_spent' ||
				saved_var == 'pretty_stored_time' ||
				saved_var == 'inflation_stored_time' ||
				saved_var == 'inflation_bonus' ||
				saved_var == 'frozen_stored_time' ||
				saved_var == 'energy_transfered' ||
				saved_var == 'god_of_energy_upset' ||
				saved_var == 'printing_machine' ||
				saved_var == 'golden_rings_total' ||
				saved_var == 'golden_rings_spent' ||
				saved_var == 'coins_1_hour' ||
				saved_var == 'coins_24_hours' ||
				saved_var == 'last_timestamp' ||
				saved_var == 'last_ruin_everything' ||
				saved_var == 'disagree' ||
				saved_var == 'scientist_timer' ||
				saved_var == 'current_music') { // number
				this[saved_var] = Number(loaded_file[saved_var]);
			}
			
			else if (
				saved_var == 'unlocked_buttons' ||
				saved_var == 'current_deal' ||
				saved_var == 'time_frozen' ||
				saved_var == 'restartor_activated' ||
				saved_var == 'semiauto_activated' ||
				saved_var == 'smartomaton_activated' ||
				saved_var == 'speeder' ||
				saved_var == 'unstoppable_activated' ||
				saved_var == 'tapping_activated' ||
				saved_var == 'autotransfer_genitals' ||
				saved_var == 'LIST_autotransfer_body_parts' ||
				saved_var == 'god_of_energy_happy' ||
				saved_var == 'toggled_skins' ||
				saved_var == 'scientist_dead' ||
				saved_var == 'scientist_resurrected' ||
				saved_var == 'zoutopia_activated' ||
				saved_var == 'brollywood_activated' ||
				saved_var == 'holograms' ||
				saved_var == 'game_over') { // string or boolean
				this[saved_var] = loaded_file[saved_var];
			}
			
			else if (saved_var == 'LIST_tutorial_dialogues_validation' ||
					 saved_var == 'DICT_artwork' ||
					 saved_var == 'LIST_body_parts_stored' ||
					 saved_var == 'LIST_total_fundamental_elements_created' ||
					 saved_var == 'LIST_total_fundamental_elements_destroyed') {
				for (var i in loaded_file[saved_var]) {
					this[saved_var][i] = Number(loaded_file[saved_var][i]);
				}
			}
			else if (saved_var == 'LIST_worshipers') {
				for (var i in loaded_file[saved_var]) {
					if (i != 1) {
						this[saved_var][i] = Number(loaded_file[saved_var][i]);
					}
				}
			}
			
			else if (saved_var == 'LIST_Workers') {
				this[saved_var][1] = Number(loaded_file[saved_var][1]);
			}
			
			else if (saved_var == 'LIST_activities') {
				for (var i in loaded_file[saved_var]) {
					LIST_activities.push(Number(loaded_file[saved_var][i]));
				}
			}
			
			else if (saved_var == 'energy_building_DYNAMIC') {
				for (var i in loaded_file[saved_var]) {
					for (var j in loaded_file[saved_var][i]) {
						if (j == 1 || j == 6) {
							energy_building_DYNAMIC[i][j] = loaded_file[saved_var][i][j];
						}
						else if (j == 7) {
							if (build >= 580) {
								energy_building_DYNAMIC[i][j] = loaded_file[saved_var][i][j];
							}
						}
						else {
							energy_building_DYNAMIC[i][j] = Number(loaded_file[saved_var][i][j]);
						}
					}
				}
			}
			
			else if (saved_var == 'LIST_Workers_upgrades_DYNAMIC') {
				for (var i in loaded_file[saved_var]) {
					if (build < 583) {LIST_Workers_upgrades_DYNAMIC[i] = loaded_file[saved_var][i][1];}
					else {
						if (i == "Luxurious eyeshadow") { // build < 679
							LIST_Workers_upgrades_DYNAMIC["Luxury eyeshadow"] = loaded_file[saved_var][i];
						}
						else if (i == "Stolen luxurious nail polish") { // build < 679
							LIST_Workers_upgrades_DYNAMIC["Stolen luxury nail polish"] = loaded_file[saved_var][i];
						}
						else {LIST_Workers_upgrades_DYNAMIC[i] = loaded_file[saved_var][i];}
					}
				}
			}
			
			else if (saved_var == 'DICT_dollars_buildings_DYNAMIC' ||
					 saved_var == 'DICT_Brothels_DYNAMIC' ||
					 saved_var == 'DICT_Factories_DYNAMIC') {
				for (var i in loaded_file[saved_var]) {
					for (var j in loaded_file[saved_var][i]) {
						if (i == "Minimalist brothel") { // necessary because of name change in build 579: "Minimalist brothel" to "Minimalistic brothel"
							this[saved_var]["Minimalistic brothel"][j] = Number(loaded_file[saved_var][i][j]);
						}
						else if (i == "School") { // necessary because of name change in build 605: "School" to "Schools"
							this[saved_var]["Schools"][j] = Number(loaded_file[saved_var][i][j]);
						}
						else if (i == "Complex items") { // necessary because of name change in build 656: "Complex items" to "Sophisticated items"
							this[saved_var]['Sophisticated items'][j] = Number(loaded_file[saved_var][i][j]);
						}
						else if (i == "Complex materials") { // necessary because of name change in build 681: "Complex materials" to "Rare metals"
							this[saved_var]['Rare metals'][j] = Number(loaded_file[saved_var][i][j]);
						}
						else {
							this[saved_var][i][j] = Number(loaded_file[saved_var][i][j]);
						}
					}
				}
			}
			
			else if (saved_var == 'DICT_Temple_upgrades') {
				for (var i in loaded_file[saved_var]) {
					for (var j in loaded_file[saved_var][i]) {
						if (j == 0 || j == 3 ||j == 5) {
							this[saved_var][i][j] = Number(loaded_file[saved_var][i][j]);
						}
					}
				}
			}
			
			else if (saved_var == 'DICT_Schools') {
				for (var i in loaded_file[saved_var]) {
					var j = 1;
					while (j < 4) {
						this[saved_var][i][j] = Number(loaded_file[saved_var][i][j]);
						j++;
					}
					this[saved_var][i][13] = Number(loaded_file[saved_var][i][13]); // ever unlocked
				}
			}
			
			else if (saved_var == 'LIST_Lobby') {
				for (var i in loaded_file[saved_var]) {
					this[saved_var][i][1] = Number(loaded_file[saved_var][i][1]);
					this[saved_var][i][2] = Number(loaded_file[saved_var][i][2]);
					if (build > 696) {this[saved_var][i][6] = Number(loaded_file[saved_var][i][6]);}
				}
			}

			else if (saved_var == 'DICT_Laboratory_upgrades') {
				for (var i in loaded_file[saved_var]) {
					this[saved_var][i][0] = Number(loaded_file[saved_var][i][0]);
					if (build > 712) {
						this[saved_var][i][6] = Number(loaded_file[saved_var][i][6]);
					}
				}
			}
			
			else if (saved_var == 'DICT_corps_screens') {
				for (var i in loaded_file[saved_var]) {
					if (i != "corps_test1" && i != "corps_test2" && i != "corps_test3") {
						this[saved_var][i][0] = Number(loaded_file[saved_var][i][0]);
						if (build > 710) {
							this[saved_var][i][2] = Number(loaded_file[saved_var][i][2]);
						}
					}
				}
			}
			
			else if (saved_var == 'DICT_fundamental_talents') {
				for (var i in loaded_file[saved_var]) {
					if (this[saved_var][i] != null) { // test necessary because of changes in the talent tree (build 580)
						if (i == "Class school") {this[saved_var]["Classy school"][3] = Number(loaded_file[saved_var][i][3]);} // build 693
						if (i == "Quick convincing") {this[saved_var]["Quick persuasion"][3] = Number(loaded_file[saved_var][i][3]);} // build 702
						if (i == "Energy fountain") {this[saved_var]["Energy fountain"][3] = Math.min(Number(loaded_file[saved_var][i][3]), DICT_fundamental_talents["Energy fountain"][4]);} // build 703
						else {this[saved_var][i][3] = Number(loaded_file[saved_var][i][3]);}
					}
				}
			}
			
			else if (saved_var == 'DICT_Deals') {
				for (var i in loaded_file[saved_var]) {
					if (i == "Thinking ahead") {this[saved_var]['H24'][2] = Number(loaded_file[saved_var][i][2]);} // because of change in build 614
					else if (i == "??5") {this[saved_var]['Freeze'][2] = Number(loaded_file[saved_var][i][2]);} // because of change in build 615
					else if (i == "??7") {} // because of change in build 621
					else if (i == "??9") {} // because of change in build 621
					else if (i == "Tireless") {} // because of change in build 628
					else if (i == "Pretty old") {} // because of change in build 628
					else if (i == "Instant deal") {this[saved_var]['Instant'][2] = Number(loaded_file[saved_var][i][2]);} // because of change in build 628
					else if (i == "Continuum break") {this[saved_var]['Focus'][2] = Number(loaded_file[saved_var][i][2]);} // because of change in build 662
					else if (i == "Focus" && build < 662) {this[saved_var]['Max style'][2] = Number(loaded_file[saved_var][i][2]);} // because of change in build 662
					else {this[saved_var][i][2] = Number(loaded_file[saved_var][i][2]);}
				}
			}
			
			else if (saved_var == 'LIST_focus_bonus_validated') {
				for (var i in loaded_file[saved_var]) {
					this[saved_var][i] = loaded_file[saved_var][i];
				}
			}
			
			else if (saved_var == 'DICT_God_of_Extortion') {
				for (var i in loaded_file[saved_var]) {
					this[saved_var][i][3] = Number(loaded_file[saved_var][i][3]);
				}
			}
			
			else if (saved_var == 'DICT_attributions' ||
					 saved_var == 'DICT_attributions_humans') {
				for (var i in loaded_file[saved_var]) {
					if (i == "Minimalist brothel") { // necessary because of name change in build 579: "Minimalist brothel" to "Minimalistic brothel"
						this[saved_var]["Minimalistic brothel"] = Number(loaded_file[saved_var][i]);
					}
					else if (!(saved_var =='DICT_attributions_humans' && i == "Temple")) { // unknown old version: Temple was in the 'DICT_attributions_humans', problems with Magic gathering.
						this[saved_var][i] = Number(loaded_file[saved_var][i]);
					}
				}
			}
			
			else if (saved_var == 'DICT_all_statistics') {
				for (var i in loaded_file[saved_var]) {
					this[saved_var][i][1] = Number(loaded_file[saved_var][i][1]);
				}
			}
			
			else if (saved_var == 'DICT_encyclopedia') {
				for (var i in loaded_file[saved_var]) {
					for (var j in loaded_file[saved_var][i]) {
						if (this[saved_var][i][j]) { // if it exists (prevents errors from updates)
							this[saved_var][i][j][0] = Number(loaded_file[saved_var][i][j][0]);
							this[saved_var][i][j][1] = Number(loaded_file[saved_var][i][j][1]);
						}
					}
				}
			}
			
			else if (saved_var == 'DICT_encyclopedia_additional_parts' ||
					 saved_var == "LIST_musics") {
				for (var i in loaded_file[saved_var]) {
					if (this[saved_var][i]) { // if it exists (prevents errors from updates)
						this[saved_var][i][0] = Number(loaded_file[saved_var][i][0]);
					}
				}
			}
			
		}
	}
}

// END - Save functions

function corrections() {
	// 0.545
	if (build < 0.545) {
		style_points = 0;
	}
	
	// 0.56
	if (build < 0.56) {
		LIST_tutorial_dialogues_validation.splice(5, 0, 0); // add the new tutorial step in the list
		if (tutorial_step > 5) {
			tutorial_step += 1;
		}
	}
	
	// 0.561
	if (tutorial_step > 7) {
		DICT_corps_screens["corps_encyclopedia"][0] = 1;
	}
	
	// 0.562
	if (tutorial_step >= 10) {DICT_encyclopedia['Fundamental Talents']['Energy talents'][0] = 1;}
	if (DICT_fundamental_talents['Artwork'][3] > 0) {DICT_encyclopedia['God World']['Artwork'][0] = 1;}
	if (style_points > 0) {DICT_encyclopedia['Fundamental Talents']['Style talents'][0] = 1;}
	if (tutorial_step >= 21) {DICT_encyclopedia['Human World']['Workers'][0] = 1;}
	
	// 0.57
	if (build < 0.57) {
		if (style_points > 0) {total_ruin_everything += 1;} // necessary to display the style tree properly, needs at least 1 total_ruin_everything
	}
	
	// 594
	if (build < 594) {if (build > 0) {last_timestamp = timestamp()}}
	
	// 648
	if (build < 649) {
		for (var i in DICT_Schools) {
			DICT_Schools[i][13] = 0;
		}
	}
	
	if (build < 663) {
		DICT_fundamental_talents['Optimized processes'][3] = 0;
	}
	
	if (build < 664) {
		if (tutorial_step > 9) {
			LIST_tutorial_dialogues_validation[tutorial_step] = 0;
			LIST_tutorial_dialogues_validation[(Number(tutorial_step)-1)] = 0;
			LIST_tutorial_dialogues_validation[(Number(tutorial_step)-2)] = 0;
			LIST_tutorial_dialogues_validation[(Number(tutorial_step)-3)] = 0;
			LIST_tutorial_dialogues_validation[(Number(tutorial_step)-4)] = 0;
			tutorial_step -= 5;
			tutorial_page = tutorial_step;
		}
		else {// destroy saves that are too low level, they would mess up the tutorial.
			if (build > 0) { // if this a save, not a totally fresh game
				tutorial_step = 0;
				fundamental_energy = 1;
				energy_building_DYNAMIC[0] = [0, 'Toenail', 1, 0, 0.0, 0, 'inactive', 'inactive', 0];
				current_turn = 0;
				LIST_activities = [];
				LIST_tutorial_dialogues_validation = [];
				for (var i in LIST_tutorial_dialogues) {LIST_tutorial_dialogues_validation.push(0);}
				LIST_tutorial_dialogues_validation[0] = 1;
			}
		}
	}
	if (build < 684) {
		if (DICT_Schools["Basics school"][3] > DICT_Schools["Basics school"][15]) {
			for (var building in DICT_attributions_humans) {
				DICT_attributions_humans[building] = 0;
			}
			DICT_Schools["Basics school"][3] = DICT_Schools["Basics school"][15];
		}
	}
	
	if (build < 708) {
		if (LIST_tutorial_dialogues_validation[6] == 1) {
			DICT_corps_screens['corps_statistics'][0] = 1;
		}
	}
	
	if (build < 717) { // #stats complete authorization of everything instead of unlocking bit by bit, but fuck it, that's good enough...
		for (var k in DICT_all_statistics) {
			DICT_all_statistics[k][1] = 1;
		}
	}
	
	if (build < 733) {
		if (DICT_fundamental_talents['Lazy convert'][3] == 1) {DICT_fundamental_talents['Frenzy'][3] = 1;}
	}
	if (build < 740) {
		if (tutorial_step > 3) {
			LIST_tutorial_dialogues_validation[tutorial_step+1] = 1;
			LIST_tutorial_dialogues_validation[tutorial_step+2] = 1;
			tutorial_step += 2;
		}
	}
	
	// because of builds < 753, but needs to be done even if the build has become higher
	if (DICT_artwork['total_artworks'] > 0 && LIST_tutorial_dialogues_validation[17] == 0) {
		next_tutorial_step(17);
	}
	build = 754;
}

function corrections_html() {
	// 0.544
	if (tutorial_step > 15) {document.getElementById("ruin_everything").style.display = "initial";}
}



