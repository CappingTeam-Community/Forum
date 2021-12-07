/**
* Initial database for Community Web Application
* InsertData.sql will hard insert some sample data
* to display on web application
*
* @version  1.0.2
* @since    10-12-2021
* @author   Devin White
**/

INSERT INTO User_tbl
(FirstName, LastName, UserName, Password, Email)
VALUES  ('', '', 'root', 'Password', 'root@community.com'),
        ('Devin', 'White', 'Devinwhite', 'Password1', 'devin.white1@marist.edu'),
        ('Brian', 'Lynch', 'BrianLynch', 'Password2', 'Brian.Lynch1@marist.edu'),
        ('Anthony', 'Damico', 'AnthonyDamico', 'Password3', 'Anthony.Damico1@marist.edu'),
        ('Zach', 'Freedman', 'ZachFreedman', 'Password4', 'Zach.Freedman1@marist.edu'),
        ('Dylan', 'Brightman', 'DylanBrightman', 'Password5', 'Dylan.Brightman1@marist.edu'),
        ('Lizzy', 'Motzart', 'skyna-', 'Password6', 'skyna-@hotmail.net'),
        ('Matt', 'Roland', 'mr68w', 'Password7', 'mr68w@gmail.com'),
        ('John', 'Smithy', 'PhuckSJWs', 'Password8', 'PhuckSJWs@irs.gov'),
        ('Randy', 'Hardy', 'rockyxhardy', 'OogaBooga', 'rockyxhardy@duolingo.com'),
        ('Connor', 'McGreggor', 'IrishGrouch24', 'Password10', 'IrishGrouch24@Guinness.com'),
        ('Sylvia', 'Jores', 'JoresV', 'Password11', 'JoresV@phizer.net'),
        ('Derek', 'Malek', "DekMelU", 'Password12', 'DekMelU@optonline.net'),
        ('Diana', 'CrossFit', 'DianaMuscle', 'Password13', 'DianaMuscle@p90x.com'),
        ('Gertrude', 'Funk', "GGFunk", 'Password14', 'GGfunk@marist.edu'),
        ('Justin', 'Guacamolefinger', 'Guac4life', 'Password15', 'guacamole@hasbro.com'),
        ('Just', 'Tony', 'JustTony', 'Password16', 'tony@you.me'),
        ('Crack', 'Baby', 'BabyCrack', 'Password17', 'Crack@cocaine.gov'),
        ('Samuel', 'Yeti', 'AbomonableBoi', 'Password18', 'sam@yeti.com'),
        ('tinashe', '2chainz', 'mostexpensive', 'Password19', 'tinashe@gordonramswy.com'),
        ('anthony', 'randall', 'a_randall', 'Password20', 'a.randall@marist.edu'),
        ('adrian', 'Bankowski', 'ABanks', 'Password21', 'adrian.bankowski@marist.edu'),
        ('Adam', 'Kapusta', 'AdamCabbage', 'Password22', 'adam@gmail.com'),
        ('Sidney', 'Jusdon', 'sidpuppy', 'Password23', 'judson15@gmail.com'),
        ('jordyn', 'Deubel', 'jordeubs', 'Password24', 'jdeubel@coma>hospital'),
        ('Ahmed', 'Sallam', 'sallamsalad', 'Password25', 'terrorist12@isis.whatnow');

INSERT INTO Category_tbl
(CategoryName, CategoryDescription, CategoryImage, CategoryVotes)
VALUES('Marvel', 'A community dedicated to Marvel Studios and the Marvel Cinematic Universe!', 'https://pbs.twimg.com/profile_images/573984336271122432/k8vEBoCW.jpeg', 2000000),
      ('League of Legends', 'This is a community devoted to the game League of Legends.', 'https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg', 5400000),
      ('Politics', 'Politics community is for news and discussion about U.S. politics.', 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1177,c_fill,g_auto,h_662,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181105112842-donkey-elephant-top.jpg', 5765),
      ('Cars', "Cars is the largest automotive enthusiast community on the Internet. We serve as communities' central hub for vehicle-related discussion including industry news, reviews, projects, videos, DIY guides, advice, stories, and more.", 'https://previews.123rf.com/images/welcomia/welcomia1405/welcomia140500063/28416319-colorful-cars-stock-cars-for-sale-dealer-lot-cars-row-.jpg', 75432),
      ('Technology', 'Community dedicated to the news and discussions about the creation and use of technology and its surrounding issues.', 'https://cdn.britannica.com/q:60/84/203584-050-57D326E5/speed-internet-technology-background.jpg', 83364),
      ('Fashion', 'Community dedicated too fashion, fashion industry, fashion news, clothing, fashion design', 'https://static.standard.co.uk/2021/10/07/12/Fashion_digi_web.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart', 1545),
      ('Olympics', 'Community for links and discussion about the Olympics and Paralympics.', 'https://stillmed.olympics.com/media/Images/OlympicOrg/IOC/The_Organisation/The-Olympic-Rings/Olympic_rings_TM_c_IOC_All_rights_reserved_1.jpg', 6848),
      ('Soccer', 'The futball Community. News, results and discussion about the beautiful game.', 'https://www.pe.com/wp-content/uploads/2021/05/xxxx_spo_ocr-l-soccer-generic-stock-001-8.jpg', 87538),
      ('Football', 'Community for those who love the classic American Sport', 'https://www.wkbn.com/wp-content/uploads/sites/48/2021/06/football-and-football-field-2.jpg?w=1280', 6);
SELECT * FROM Category_tbl;

INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (1, 'Why is Shang Chi Disney Plus release date November 11th, when they said only 45 Days of Exclusivity?',
'The movie came out September 3rd. Thats more like 70 days ?', "2021-10-11", 'https://images.thedirect.com/media/article_full/shang-chi-review-mcu.jpg', 1, 7),
        (1, 'Before the advent of the MCU who would you say were the A-list, B-list, C-list, and D-list characters of Marvel Comics?',
        "People often point to how Iron Man was an 'obscure' character before the movie, but I don't think that's completely accurate. That said I thought it would be insightful to take a step back through time and determine who the A-listers, B-listers, etc. were before the MCU took lesser-known characters and popularized them. I admit that I was not into Marvel much until around the first Avengers movie, so what I'm saying is largely based on second-hand experiences and what I can vaguely remember before Iron Man came out. Here is what I generally think the hierarchy of Marvel was: A-LIST - Spider-Man, X-Men, Fantastic Four, Hulk. Basically all of the heroes who regularly got cartoons, movies, merchandise, etc. and were front and center on posters. B-LIST - Iron Man, Captain America, Thor, Daredevil, and a few others that weren't as exposed in the public eye but were still very much prevalent in Marvel media, just usually as supporting roles and not the main focus. Though I'd say Cap and Daredevil sort of rode the line between A and B-list. C-LIST - Ant-Man, Doctor Strange, Black Panther, Captain Marvel, and most of the characters introduced after Phase 1 in the MCU. Fans of comics almost certainly knew who they were but they were mostly obscure in the eyes of the general public. D-LIST - Once you get to this point it's hard to really determine which characters belong here, but what I generally consider 'D-list' are the characters who even some comic fans didn't know anything about. I would like to say groups like the Guardians of the Galaxy or the Eternals, but I actually think those were too obscure to even justify calling them D-list; they were basically off the radar entirely. I'm not sure what to call this but there also seemed to be this weird area where Punisher and Blade were where they're pretty well-known to the public but weren't traditionally associated with Marvel heroes. Blade was a massively successful action-horror franchise but even today I have met people who didn't seem to know it was a Marvel movie, and at this point Punisher's skull symbol has taken on a completely new life as a mascot for the 'extreme edge goth punk' crowd, and an unsettling amount of soldiers and police officers, which is kind of scary. I admit that I was not into Marvel much until around the first Avengers movie, so what I'm saying is largely based on second-hand experiences and what I can vaguely remember before Iron Man came out. Here is what I generally think the hierarchy of Marvel was: A-LIST - Spider-Man, X-Men, Fantastic Four, Hulk. Basically all of the heroes who regularly got cartoons, movies, merchandise, etc. and were front and center on posters. B-LIST - Iron Man, Captain America, Thor, Daredevil, and a few others that weren't as exposed in the public eye but were still very much prevalent in Marvel media, just usually as supporting roles and not the main focus. Though I'd say Cap and Daredevil sort of rode the line between A and B-list. C-LIST - Ant-Man, Doctor Strange, Black Panther, Captain Marvel, and most of the characters introduced after Phase 1 in the MCU. Fans of comics almost certainly knew who they were but they were mostly obscure in the eyes of the general public. D-LIST - Once you get to this point it's hard to really determine which characters belong here, but what I generally consider 'D-list' are the characters who even some comic fans didn't know anything about. I would like to say groups like the Guardians of the Galaxy or the Eternals, but I actually think those were too obscure to even justify calling them D-list; they were basically off the radar entirely. I'm not sure what to call this but there also seemed to be this weird area where Punisher and Blade were where they're pretty well-known to the public but weren't traditionally associated with Marvel heroes. Blade was a massively successful action-horror franchise but even today I have met people who didn't seem to know it was a Marvel movie, and at this point Punisher's skull symbol has taken on a completely new life as a mascot for the 'extreme edge goth punk' crowd, and an unsettling amount of soldiers and police officers, which is kind of scary. Does this sound about right? If not, who would you rank as A-list, B-list, etc. before the inception of the Marvel Cinematic Universe?",
'2021-10-13',
'https://media.wired.com/photos/5955ceabcbd9b77a41915cf6/master/pass/marvel-characters.jpg',
27,
2),
        (1, "So who all is dead as of right now?", 'I have seen most of the MCU films once but none twice and some never so I am a really casual viewer.
After watching what feels like a dozen movies over the last several years (some out of order) and with the time-travel shenanigans, multiverses, the Snap and Blip, and fact that the films themselves are set in different “time periods” of the MCU, I don’t know which heroes are dead and which aren’t as of “present day” MCU.
Tony Stark, I think… and I remember Captain America getting real old and retiring after time-travel stuff so I guess he is dead too? Anyone else?', '2021-10-13', 'https://s26162.pcdn.co/wp-content/uploads/2021/08/marvel1.jpeg', 20, 17),
        (1, "Adam Warlock vs Captain Marvel", "As you know, it is already known who will be the actor who will give life to the character of Adam, who do you think would win?", "2021-10-14", 'https://i0.wp.com/wikiofnerds.com/wp-content/uploads/2021/10/Untitled-design-2021-10-18T160130.867.png?fit=1200%2C638&ssl=1', 1, 18),
        (1, "What were Thor's last words to Loki", "I heard people said It was 'You really are the worst brother', but I don't see him say that in Infinity War or Thor Ragnarok.", '2021-10-14', 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/10/rangarok-thor-loki.jpg', 11, 24),
        (1, 'MCU "STRONGEST AVENGER" list', 'Also, lets break down who is eligible for this:
"The original 6" (Iron Man, Captian America, Thor, Hulk, Black Widow, and Hawkeye)
Guardians Of The Galaxy (Star-Lord, Gamora, Drax, Groot, Rocket, Nebula, and Mantis)
War Machine
Falcon
Bucky
Scarlet Witch
Black Panther
Ant-Man
The Wasp
Doctor Strange
Spider-Man
Captain Marvel
23 in total
I picked the based on the final Endgame scene and/or if they have had a big enough impact in the MCU. As you see, no Vision nor Quicksilver.
The rule is that their characters are based on the MCU versions, not comic book versions. If there is no information, then a fallback to the comics is allowed. Also, anything the filmmakers say (even if contradicting the comics and/or the films) also is taken into account.
Feel free to make your top 5, top 10, top 23, etc. list if you dont want to do all 23
Also, we are comparing to their final Endgame versions: Thor with only Stormbreaker, Endgame Hulk, etc.
"The original 6" (Iron Man, Captian America, Thor, Hulk, Black Widow, and Hawkeye)
Guardians Of The Galaxy (Star-Lord, Gamora, Drax, Groot, Rocket, Nebula, and Mantis)
War Machine
Falcon
Bucky
Scarlet Witch
Black Panther
Ant-Man
The Wasp
Doctor Strange
Spider-Man
Captain Marvel
23 in total
I picked the based on the final Endgame scene and/or if they have had a big enough impact in the MCU. As you see, no Vision nor Quicksilver.
The rule is that their characters are based on the MCU versions, not comic book versions. If there is no information, then a fallback to the comics is allowed. Also, anything the filmmakers say (even if contradicting the comics and/or the films) also is taken into account.
Feel free to make your top 5, top 10, top 23, etc. list if you dont want to do all 23
Also, we are comparing to their final Endgame versions: Thor with only Stormbreaker, Endgame Hulk, etc.
Good luck', "2021-10-14", 'https://filmdaily.co/wp-content/uploads/2021/01/mcu-lede-1300x731.jpg', 1, 19);

INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (2, 'League Esports Funny Joke', 'Hey guys I was watching worlds and I came up with this joke
What do you call it when you randomly start crying for no reason and you cant figure out why?
RNG Cryin', "2021-10-20", "https://s.yimg.com/uu/api/res/1.2/W._x8EY3MXq4Q_t2qeWP7Q--~B/aD0xMTU4O3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-01/cdcf03a0-4e92-11eb-afdf-ffae59fc8055.cf.jpg", 1, 6),
        (2, 'The Ranked Ladder did not update yesterday', 'I know this isnt a big issue, but it is just super weird. I got to grandmaster for the first time i stayed awake to see my Account transition from Master to GM aaaaaaaaaand nothing... Eventually i started panicking and adding all players that were also supposed to get upgraded yesterday. And yes they didnt get it either. Please fix Riot, all players didnt get it and all players that were supposed to drop out stayed. It isnt a big deal but i asked like 20 people and they never heard of that even being a thing. Thank you for your time.', "2021-10-20", "https://preview.redd.it/9h9a7d0mttv31.png?width=1132&format=png&auto=webp&s=fa8b1575a45a69dfd186828600a182780c9871c4", 8, 15),
        (2, 'Teemo is life', "When are they going to get rid of sweeping lens so the entire enemy team can't destroy my beautiful shrooms D: life is not fairrrrrrrrrrrr", "2021-10-20", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg", 6, 12),
        (2, 'Anyone remember the "We are gamers" LCS ad?', "Not sure if this is allowed here, but I was wondering if anyone remembered the 'We are gamers' ad that played in the middle of the lcs or was it worlds? Years ago. like 2015/2016. Sorry if this isn't allowed, but I was wondering if anyone had a link to it if it's still up on youtube or not? Thanks.", "2021-10-20", "https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/na-lcs-roster-moves-hub.jpg", 2, 10),
        (2, 'Is my client bugged?', "I tried to do several times the missions on the client that are connected to lolesports (like the one where you need to watch a game on lolesports, or the one needing you to do the knockout pickems) but I don't receive the rewards. I restart the client after doing them but I get nothing.
Does anybody know if there's a solution? (I'm logging on lolesports with the same account I play, yeah)
Thanks in advance.", "2021-10-20", "https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/na-lcs-roster-moves-hub.jpg", 3, 2),
        (2, 'Why didnt I get my chest?', 'So i wanted to get s chest by playing sivir with a premade teammate. The game has ended and i got an S+ but the chest is nowhere to be found. Yes i did have avalible chests Yes i do have sivir No i havent earned a chest yet for her The name of the profile is ezazoli EUNE Can u please report this bug if it is one?', "2021-10-20", "https://i.ytimg.com/vi/BetIkC8WDrw/maxresdefault.jpg", 9, 15);
        
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (3, 'Biden admin calls on SCOTUS to let police enter homes, confiscate guns without a warrant', 'https://saraacarter.com/biden-admin-calls-on-scotus-to-let-police-enter-homes-confiscate-guns-without-a-warrant/', "2021-10-20", "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_41/3512243/211013-biden-mb-1036.jpg", 12, 2),
        (3, 'More than 100 San Francisco first responders remain unvaccinated and could lose jobs', 'https://www.sfchronicle.com/sf/article/More-than-100-San-Francisco-police-and-16532932.php?sid=5d54065e91d15c7b08162233&utm_source=newsletter&utm_medium=email&utm_content=headlines&utm_campaign=sfc_morningfix', "2021-10-20", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/1200px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg", 24, 6),
        (3, 'U.S. Coal Use Is Rebounding Under Biden Like It Never Did With Trump', 'https://www.bloomberg.com/news/articles/2021-10-12/u-s-coal-use-rebounds-under-biden-as-energy-crisis-drives-fossil-fuel-demand', "2021-10-20", "https://www.aljazeera.com/wp-content/uploads/2021/10/379645697.jpg?resize=770%2C513", 19, 3),
        (3, 'Youngkin vows to hold Loudoun County officials responsible after alleged sexual assaults', 'https://www.foxnews.com/politics/youngkin-vows-to-hold-loudoun-county-officials-responsible-after-alleged-sexual-assaults', "2021-10-20", "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614414c183d4f3dd71dc9bde%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3000%26cropY1%3D0%26cropY2%3D1687", 8, 14),
        (3, "Aaron Rodgers has a big problem with 'woke cancel culture", 'https://nypost.com/2021/10/19/aaron-rodgers-has-a-big-problem-with-woke-cancel-culture/?utm_source=reddit.com', "2021-10-20", "https://cdn.vox-cdn.com/thumbor/_sJEM10TSI59oT24IpNiNUfO7mQ=/0x0:4800x3200/1200x800/filters:focal(2016x1216:2784x1984)/cdn.vox-cdn.com/uploads/chorus_image/image/70008055/rodgers__3_.0.jpg", 3, 4),
        (3, "Kamala Harris' AG office illegally colluded with abortion providers during investigation, attorneys allege", 'https://www.foxnews.com/politics/kamala-harris-colluded-abortion-providers', "2021-10-20", "https://thehill.com/sites/default/files/harriskamalatwo_10152019getty.jpg", 1, 6);
        
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (4, 'New 2022 Range Rover teased ahead of reveal next week - pictures', 'https://www.autoexpress.co.uk/land-rover/range-rover/108912/new-2022-range-rover-teased-ahead-reveal-next-week-pictures', "2021-10-20", "https://images.hgmsites.net/hug/land-rover-range-rover_100809988_h.jpg", 10, 14),
        (4, 'Clutch shudder in first, take it back or keep driving? 04 WRX.', "I had a Subaru tuning shop replace my clutch and flywheel on my 04 WRX with an Exedy OEM organic clutch and lightweight flywheel and now when the clutch starts to heat up and sometimes when cold when I'm taking off in first gear the entire car shakes, I can avoid it by revving to near 3000rpm when pulling away but I feel that's just going to burn the clutch.
Should I take it back to the shop? I've put about 1000km on it, maybe it needs more time to bed with the flywheel?", "2021-10-20", "https://oards.com/wp-content/uploads/clutch-pedal-adjustment.jpg", 14, 13),
        (4, 'Acura rolls over 400,000 miles. "I love driving it too much," says owner', 'https://www.thedrive.com/news/42807/owner-puts-330000-miles-on-acura-nsx-i-love-driving-it-too-much', "2021-10-20", "https://www.autoguide.com/blog/wp-content/uploads/2020/12/Mitsubishi-mirage-400k-miles3.jpg", 21, 12),
        (4, 'Which cars have overrated power figures from the manufacturer?', 'Saw the recent post about underrated cars, now to do one with the opposite. The one I can think of was the 1999 Ford Mustang SVT Cobra, which was advertised for 320 hp. Independent testing found the number was closer to 290 hp, it was enough for Ford to recall the car and skip the standard Cobra for next year to fix the issue (300 Cobra Rs were produced for the year 2000 that heavily deviated from the base car).
What other examples are out there?', "2021-10-20", "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/267321/1999-ford-mustang-svt-cobra-tested-review-car-and-driver-photo-561584-s-original.jpg?crop=0.929xw:0.761xh;0.0497xw,0.168xh&resize=1200:*", 14, 10),
        (4, 'Red Honda badges.', 'Why are the red Honda badges found on Type R models acceptable to put on a civic Si, but not a “non type r” civic hatchback? Is it to do with speed class, putting respek on the red badge, or just people being gate keeping gremlins?', "2021-10-20", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2022_Honda_Civic_Sport%2C_Front_Right%2C_06-20-2021.jpg/1200px-2022_Honda_Civic_Sport%2C_Front_Right%2C_06-20-2021.jpg", 6, 9),
        (4, 'Which cars have underrated power figures from the manufacturer?', "I've read about the SRT 4 and the MK VII GTI as having very underrated hp and torque figures. What other cars were / are underrated?", "2021-10-20", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cd12dn92e-1604609584.jpg?crop=0.867xw:0.760xh;0.0731xw,0.0561xh&resize=640:*", 7, 21);
        
--insert posts into category 'technology'
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (5, 'Study: Fossil fuel plans would far overshoot climate goals', 'https://apnews.com/article/climate-science-business-environment-europe-dcbcc6388b24c8b83476ddea14b92e21', "2021-10-20", "https://cdn2.opendemocracy.net/media/images/pxfuel.com.max-760x504.jpg", 9, 7),
        (5, 'Google Play Store will soon show you how much apps know about you', 'https://www.techradar.com/news/google-play-store-will-soon-show-you-how-much-apps-know-about-you', "2021-10-20", "https://cdn.arstechnica.net/wp-content/uploads/2020/09/Google-Play-Store-logo.jpg", 23, 6),
        (5, 'Facebook plans to soon rebrand with a new name', 'https://www.marketwatch.com/story/facebook-plans-to-soon-rebrand-with-a-new-name-report-11634701715?mod=home-page', "2021-10-20", "https://blog.logomyway.com/wp-content/uploads/2019/09/facebook-logo.jpg", 17, 5),
        (5, "The CFO's Guide to Ransomware Risk Mitigation", 'https://accelerationeconomy.com/cyber-security/the-cfos-guide-to-ransomware-risk-mitigation/', "2021-10-20", "https://www.kaspersky.com/content/en-global/images/repository/isc/2021/ransomware.jpg", 9, 4),
        (5, 'Wearable Microphone Jamming', 'http://sandlab.cs.uchicago.edu/jammer/', "2021-10-20", "https://m.media-amazon.com/images/I/71OkWZr+U-L._AC_SX355_.jpg", 37, 3),
        (5, 'Teen Girls Are Developing Tics. Doctors Say TikTok Could Be a Factor.', 'https://www.wsj.com/articles/teen-girls-are-developing-tics-doctors-say-tiktok-could-be-a-factor-11634389201?mod=e2tw', "2021-10-20", "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/02/how-to-delete-tiktok-920x515.jpg", 21, 2);
        
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (6, 'The hot new Aussie designers to know from Australian Fashion Week', 'https://www.standard.co.uk/insider/fashion/australian-fashion-week-designers-resortwear-collections-b938549.html', "2021-10-20", "https://static.standard.co.uk/2021/06/03/10/newFile-4.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart", 9, 7),
        (6, 'Modified Runway Set for Fendi Show', 'https://www.frameweb.com/article/fendi-aw-2021-bureau-betak', "2021-10-20", "https://d1tm14lrsghf7q.cloudfront.net/public/media/385/77408_00title_bureau_betak_fendi_ss21_2_cropped.jpg", 23, 6),
        (6, 'How to donate clothes in the most ethical ways possible', 'https://mashable.com/article/how-to-ethically-donate-clothes', "2021-10-20", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykI3ggpX6yjSD2v-7z2sSXSOxMOPbUpHnHA&usqp=CAU", 17, 5),
        (6, "I knew VS had a lot of major changes going on. But I didn't know why until I read this: L Brands sells majority stake in Victoria's Secret, CEO Wexner to step down", 'https://www.reuters.com/article/us-victoria-s-secret-m-a-sycamore-partne-idUSKBN20E1T7?utm_source=reddit.com', "2021-10-10", "https://www.asiaone.com/sites/default/files/inline/images/736_1542686140.jpg", 9, 4),
        (6, 'Balenciaga Will Introduce Couture for Men', 'https://www.gq.com/story/balenciaga-mens-couture', "2021-01-20", "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F09%2Fbalenciaga-mens-couture-collection-show-demna-gvasalia-announcement-1.jpg?q=90&w=1400&cbr=1&fit=max", 37, 3),
        (6, 'New York Fashion Week Is Still Happening, Says Cuomo', 'https://www.thecut.com/2020/08/new-york-fashion-week-spring-2021-confirmed.html', "2020-10-20", "https://assets.vogue.com/photos/5e45a97db5eb1f0009e55a46/master/w_2560%2Cc_limit/00_nicole_story.jpg", 21, 2);
        
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (7, "An Olympian came to my school today", "Idk I just thought it was cool. It was Taliqua Clancy of Beach Volleyball fame. We got to see her silver medal and do a small interview of some questions we submitted earlier in the week. Was pretty cool.", "2020-10-20", "https://pbs.twimg.com/profile_images/765069538467512320/ZJSdr6Gb.jpg", 21, 26),
        (7, "Where to find old Olympic replays?", "So I know that most (if not all) full replays of all events of London 2012, Rio 2016, and Tokyo 2020 are on the Olympic website, but for older events, such as Athens 2004, Beijing 2008, Sydney 2000, etc, there's nothing.
Is there any other website out there (apart from the Olympic website) that has some full replays from said events? If so please link", "2020-10-20", "https://media.npr.org/assets/img/2021/08/01/gettyimages-1331862723-e6eb732d0c0147ff71ad581c703338075ec9ca36.jpg", 20, 25),
        (7, "Tokyo Replays", "Well, the Olympic replays for all the 2020 events is gone, and now we have 'archives' w/ other games, with events now gone. Half of basketball events now gone. Really outdone yourselves", "2020-10-20", "https://s.abcnews.com/images/Sports/WireAP_2739c5e9ed1849209f093cc29c4b9191_16x9_1600.jpg", 29, 23),
        (7, "Non-olympians getting Olympic tattoos to pick up women: Is this a thing?", "Hi! Please direct me to a better forum for posting this, if this isn’t the right place. I was on a hike yesterday and ran into a guy at the top of the mountain who had an Olympic tattoo on his forearm. I asked him about it and he said he was X athlete, competed in two Olympics, won medals, broke records, etc. He told me he still competes in Masters events, but now lives in Ohio and coaches. I just said, “Cool, I will look you up!” And went on my way. Yep. Looked him up and the real Olympian (who he described accurately) is actually an attorney in Montana. I told my girlfriend this story who then told me she met a guy with an Olympic tattoo a few months ago, and he said he competed bobsled/skeleton. She also looked him up, and discovered clearly that wasn’t true. I know a few Olympians through work, and a most of them do have Olympic ring tattoos that are super important to them. I am really, really hoping this is not some bad pick-up artist hack…", "2020-10-20", "https://swimswam.com/wp-content/uploads/2012/08/HaleyAndersonOlympicRingsTattoo.jpg", 28, 24),
        (7, "is there a list of all the new sports added since the modern olympics started in 1896?", "i am doing a school project on the olympic games and i am looking for what sports got added since the start of the the olympics.
is there a list i can find somewhere? it would help out.", "2020-10-20", "https://www.kreedon.com/wp-content/uploads/2021/08/n4qxv7qvpeur6hfdvfyw-1024x576-1.jpg", 26, 23),
        (7, "Agnes Tirop's Husband has been arrested in connection with her death.", "According to Kenyan officials, the husband of Olympic runner Agnes Tirop has been apprehended and will be charged with her murder after a nationwide manhunt was started and he was apprehended in the costal city of Mombasa while attempting to exit the country. https://knowafrika.com/agnes-tirops-husband-has-been-arrested-in-connection-with-her-death/", "2020-10-20", "https://s.yimg.com/ny/api/res/1.2/V6rF40HndFvEgQAVodzoOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/1a00a3c0-33a6-11ec-bee3-dd850e2f90c6", 2, 22);
        
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (8, "According to Kenyan officials, the husband of Olympic runner Agnes Tirop has been apprehended and will be charged with her murder after a nationwide manhunt was started and he was apprehended in the costal city of Mombasa while attempting to exit the country. ", "https://knowafrika.com/agnes-tirops-husband-has-been-arrested-in-connection-with-her-death/", "2021-02-12", "https://s.yimg.com/ny/api/res/1.2/V6rF40HndFvEgQAVodzoOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/1a00a3c0-33a6-11ec-bee3-dd850e2f90c6", 21, 21),
        (8, "PSG [3] - 2 Leipzig - Lionel Messi penalty 74' (panenka)", "https://streamwo.com/5vhtnK7", "2021-03-02", "https://img.bleacherreport.net/img/images/photos/003/791/835/hi-res-36fc279ed60ecfbf060e6c8f19bc2df3_crop_north.jpg?1550352893&w=3072&h=2048", 23, 20),
        (8, "[The Athletic] Steve Bruce will receive around £8 million in compensation due to a clause in his three year rolling contract", "https://theathletic.com/news/steve-bruce-departs-as-newcastle-head-coach/0ETO8FwlrlFI/", "2021-04-30", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/04/11/steve-bruce.jpg?width=1200", 1, 19),
        (8, "The numbers that show Raith Rovers have improved on last season as John McGlynn proves there is life after Regan Hendry and Co.", "https://www.thecourier.co.uk/fp/sport/football/2666235/raith-rovers-john-mcglynn-championship-regan-hendry/", "2021-06-17", "https://cdn.shopify.com/s/files/1/0274/0708/9716/files/socialmedia_201920_1200x1200.jpg?v=1573212987", 61, 18),
        (8, "Paulo Fonseca front-runner to become next Newcastle manager after talks during summer.", "https://www.telegraph.co.uk/football/2021/10/20/contenders-next-newcastle-united-manager-steve-bruce-sacked/", "2021-06-17", "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/10/21121227/Paulo-Fonseca.jpg", 27, 17),
        (8, "[Pre-Match Thread] SL Benfica v Bayern München (UEFA Champions League Group Stage)", "SL Benfica v Bayern München
Competition: UEFA Champions League
Kick off: 20 October 2021, 20:00 GMT
Venue: Estádio Da Luz
Referee: Ovidiu Hategan
Team News: Goretzka and Davies out for the game, Diogo Gonçalves back by the looks of it but shouldn't start while Rafa seems to be fully fit.
Possible SL Benfica starting XI: Odysseas, Diogo Gonçalves, Lucas Veríssimo, Otamendi, Verthoghen, Grimaldo, Weigl, João Mário, Rafa, Darwin and Yaremchuk
Possible Bayern München starting XI: Neuer, Pavard, Süle, Upamecano, Lucas, Sabitzer, Kimmich, Coman, Muller, Sane, Lewandowski", "2021-07-13", "https://cdn.vox-cdn.com/thumbor/BKt18xrXoXWDBIBpV_xRvD7BoJM=/0x0:4500x3000/1200x800/filters:focal(1020x388:1740x1108)/cdn.vox-cdn.com/uploads/chorus_image/image/70023413/1347743550.0.jpg", 21, 16);
        
INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostImage, PostVotes, CreatorID)
VALUES  (9, "How soon after a new FM release do the download for leagues down to tier 10 appear?", "Really enjoying starting with a low team recently, but wondering if that is an option when fm22 releases or it takes a while for the download to appear.", "2021-08-18", "", 37, 16),
        (9, "Game Pass and Mods", "With FM22 launching on Game Pass, I am guessing the mode available on Steam cannot work? As I believe it is a separate launcher? Thanks.", "2021-08-18", "", 37, 17),
        (9, "Advice for a beginner", "Just after a bit of advice really
I'm fairly new to FM, 4 seasons into my first save with Aston Villa. I'm doing constantly okay, finishing 6th or 7th every year, never getting far in Europe though.
Villa start with a decent amount of debt, I've just managed to clear that with a few player sales so hopefully I start getting some more money
I don't seem to be progressing at all, are there any tips or tricks I'm missing to push into the champions League places? Or do I just need to be patient and slowly progress over the years
I know it's vague, but any help would be appreciated", "2021-08-18", "", 37, 18),
        (9, "Weekly Help Thread - Ask your help requests here | Week Commencing 20/10/2021", "", "2021-08-18", "", 37, 11),
        (9, "Adding to training camp", "Is there a way to add a player to my training camp? I signed a player on the opening day of the season and he was on international duty but when he returned I couldn’t play him as he was not on the training camp.", "2021-08-18", "", 37, 12),
        (9, "My two most desired stats are workrate and teamwork. Dont know if they make too much difference but I like the thought that the boys are working hard for each other.", "", "2021-08-18", "", 37, 13);

SELECT * FROM Post_tbl;

INSERT INTO Comment_tbl
(PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (1, "Just cause it has a 45 day exclusive window doesnt mean they will release the movie right away on digital, it just means tfter 45 days they now are allowed to release it digitally, but if they want to hold if off for another month or 2, they can do it.
Plus its been doing well in cinemas, so makes sense they'll want to try and make a bit more money there before you give the option to watch it at home", "2021-10-11", 0, 5, null),
        (1, "45 days exclusive to theaters. After that you typically add in the pay to own platforms simuch as Blu-ray, iTunes, etc.
Then, after that sales channel, it comes to subscription streaming services.", "2021-10-11", 0, 4, null),
        (1, "I don’t know but why do I have a feeling that it still will not be released in 11th Nov cuz it clashes with Eternals and can hurt even if slightest i think they will further delay.", "2021-10-11", 0, 3, null),
        (1, "They are holding it out for their two year anniversary I think", "2021-10-11", 2, 3, 'Anneversary'),
        (1, "It’s Disney + day (Two years since Disney+ launched) so it’s a special occasion", "2021-10-11", 0, 2, 'Anneversary'),
        (1, "it's been killing the box office and has been one of the few films to have some staying power in theaters during the pandemic.", "2021-10-11", 0, 8, 'Pandemic'),
        (1, "Eternals is being released November 5", "2021-10-11", 1, 5, null),
        (1, "I think so that it matches with the release of the Eternals. More HYPE and more marketing so people are more likely to watch it then", "2021-10-11", 0, 2, null),
        (1, "45 day minimum. They are holding off because it has been successful in theaters. It hasn’t even come to theaters in some areas yet", "2021-10-11", 0, 5, null);
        
INSERT INTO Comment_tbl
(PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (2, "I think that’s pretty accurate. I think the MCU not having access to hardly any of your A listers was a good thing for them. They laid down a solid foundation for the MCU with a B list appetizer Now we get our A list main course.", "2021-10-13", 10, 6, null),
        (2, "I think you nailed them pretty perfectly.", "2021-10-13", 7, 2, null),
        (2, "If you go by pre-2008: A-List: Hulk Spider-Man B-List: Captain America Daredevil C-List: Black Panther Doctor Strange Iron Man Thor D-List: Ant Man Captain Marvel", "2021-10-13", 3, 3, 'teir-list'),
        (2, "Where would you put X-Men or Fantastic Four in there?", "2021-10-13", 2, 4, null),
        (2, "X-Men were A-List & GOTG were D-List, but it’s a bit hazy when you go by most teams since there’s gray area. I’d personally say FF (B) & Avengers (C).", "2021-10-13", 2, 5, 'teir-list'),
        (2, "Depends on the era. The FF from 1961 to the late 70s was definitely the premier team book at Marvel until Claremont took over the X-Men. Avengers I'd agree were C-listers for most of their existence until Bendis started writing them in the mid-2000s.", "2021-10-13", 2, 6, null),
        (2, "That run inserted two A-Listers (Spider-Man & Wolverine).", "2021-10-13", 2, 5, null),
        (2, "Yep, that's true, I forgot about that.", "2021-10-13", 1, 2, null),
        (2, "how do you measure iconicness? it has be put down in numbers somehow and sales are a good barometer", "2021-10-13", 1, 2, 'iconicness'),
        (2, "My list is your list.", "2021-10-13", 1, 3, null);
        
INSERT INTO Comment_tbl
(PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (3, "Natasha is dead as of End Game as well. Steve isn't dead just retired", "2021-10-13", 2, 4, null),
        (3, "Didn’t Far From Home say that he was dead?", "2021-10-13", 0, 3, null),
	(3, "hmm, im not sure.", "2021-10-13", 0, 5, null),
        (3, "I don't think so. Maybe the general public thinks he could be dead? In Falcon and The Winter Soldier, Torres (I think that's his name, can't remember) asks Sam if Steve is in a base on the moon. So it seems like it's not public knowledge where Steve is. I assume we’ll find out what's going on with him in an upcoming movie or series, especially Captain America 4. I don't think the audience is meant to think he's dead.", "2021-10-13", 1, 2, null),
        (3, "In falcon and winter solider’s museum scene we seen on one of the pillars of words that it says that Steve has “retired”. This means that the public story is that he has simply retired, it makes no mention of him becoming an old man so presumably the public don’t know about that.", "2021-10-13", 0, 3, null),
        (3, "Tony, Cap, Black Widow and Gamora are all deceased. Cap isn’t technically confirmed dead, but it’s heavily implied. There’s a chance Old Man Steve could come back.", "2021-10-13", 7, 4, null),
        (3, "I love that Abraham Lincoln is in there Edit: just so this isn't misinterpreted, I just find it funny he was listed when he hasn't appeared in the MCU (unless I missed something)", "2021-10-13", 2, 5, null),
        (3, "His portrait appeared in Agents of SHIELD.", "2021-10-13", 0, 6, null),
        (3, "Widow, died for the soul stone. Iron man,dead, died from snapping. Steve Rogers, retired. Loki, dead, strangled by thanos. Gamora from Guardians1-2, dead, also died for the soul stone. quicksilver, dead, shot by ultron. Tchalla, written out. Vision, dead? Maria Rambeau,dead.", "2021-10-13", 6, 8, 'helpful');
        
INSERT INTO Comment_tbl
(PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (4, "Honestly for the MCU only it’ll probably be a stalemate", "2021-10-13", 0, 4, null),
        (4, "See at this point they should keep the original premises of Adams origin, but not before they introduce the FF and the High Evolutionary. They really need to bring on the Fantastic Four!", "2021-10-13", 0, 1, null),
        (4, "Adam Warlock is a much much more powerful character than Captain Marvel.", "2021-10-14", 1, 8, null);
        
INSERT INTO Comment_tbl
(PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (5, "He says it in Infinity War right after Loki unveils he took the Tesseract. This was before he got metal gagged by Ebony Maw.", "2021-10-14", 0, 5, null),
        (5, "It was in the beginning of Infinity war when Thanos is speaking to Loki.", "2021-10-14", 0, 6, null),
        (5, "You're really the worst, brother", "2021-10-14", 1, 6, null),
        (5, "let me YouTube that for you", "2021-10-14", 0, 7, null);
        
INSERT INTO Comment_tbl
(PostID_Comment, Comment, CommentDate, CommentVotes, CommenterID, CommentTags)
VALUES  (6, "If we’re just picking one then I would say Captain Marvel", "2021-10-14", 7, 10, 'CaptianMarvel'),
        (6, "I ment a list; Not just one person. That I agree she is a HIGH contender for the number one spot.", "2021-10-14", 0, 4, null),
        (6, "Oh okay. At the top of the post it says one is the strongest. I thought you were asking. My bad.", "2021-10-14", 0, 10, null),
        (6, "Cleared it up", "2021-10-14", 0, 4, null),
        (6, "Scarlet Witch, Captain marvel, Doc strange, Thor, Iron man, If it was after infinity war I'd have put thor in first, but they nerfed him a lot in endgame", "2021-10-14", 3, 5, 'top5'),
        (6, "Big Iron Man fan here but Iron Man is actually one of the weakest. His latest armor isnt even that great.", "2021-10-14", 2, 3, 'IronMan'),
        (6, "Iron Man’s armor was one of the few things to make Thanos bleed. Not saying he’s one of the strongest with it on but you’re underestimating how powerful it is. Captain Marvel, Scarlet Witch, and Thor are the top 3 though.", "2021-10-14", 5, 11, "Top3"),
        (6, "It cut him. Stormbreaker fucking murdered him. Give Hawkeye a bow made of paper and he can problably cut Thanos too. Captain Marvel, Scarlet Witch, and Thor are the top 3 though. Probably. with Thor BARELY hanging in that Top 3 though....Subsititue him with someone else and I might not argue.", "2021-10-14", 2, 3, null),
        (6, "Yea I think Doc strange takes 3rd, his power level has presumably not changed since infinity war. Thor is my favourite character, but they fucked him up.", "2021-10-14", 1, 12, 'DoctorStrange'),
        (6, "Forgot about Strange, correct.", "2021-10-14", 0, 3, 'DoctorStrange'),
        (6, "I find that the 3 that are often talked about (Wanda, Danvers, Strange) peak in their own ways. Wanda: Highest non-AoE destructive power. Danvers: All-rounder + physical strength. Strange (technically not an Avenger): Most versatile", "2021-10-14", 5, 6, 'Top3'),
        (6, "Strange (technically not an Avenger) Danvers is? Neither officially are. Then again when Rogers says Assemble you can count them in.... Comic wise (since MCU neither confirms nor denies) they are or were members.", "2021-10-14", 1, 3, null),
        (6, "Danvers has more weight since she joined the others to kill farmer Thanos and liaised operations with Romanoff in the 5 year time gap", "2021-10-14", 2, 13, "CaptianMarvel"),
        (6, "Unbeatable tier Scarlet Witch - Held Thanos back vs. 5 Infinity Stones and only using half her powers, while focused on destroying the final Infinity Stone, then almost singlehandedly ripped Thanos apart without the stones.
Doctor Strange - Wielded time itself, went one-on-one for Thanos and stopped a black hole, can conjure the Mirror Dimension, can see millions of futures in minutes.
Captain Marvel - Photon blasts, held the Gauntlet open before being blasted away by the Power Stone, destroys entire fleets just by flying through their ships.
Thor - Unrestricted lightning powers without Mjolnir, wounded Thanos with Stormbreaker, beheaded him later.
Still unbeatable but not OP tier
Iron Man - Genius, builds his own suits, uses nanobot technology, can locate anything with FRIDAY.
Captain America - Enhanced super-soldier with a vibranium shield. Took all the punches from Thanos and still got up. Can do it all day.
Hulk - Now with brains and brawn put together. Smashed Loki like a toy, ripped apart Ultron-bots.
Groot - Sacrificed a limb for Stormbreaker, can penetrate soldiers and Chitauri with his arm. Also practically invincible unless he's completely disintegrated.
Rocket - Advantage of space-tech, small size, and intelligence. Basically a furry Tony Stark.
Black Panther - Vibranium suit can absorb energy and release it all with a punch or a kick. Gifted with the powers of the heart-shaped herb.
Still a valuable asset tier
Hawkeye - Impeccable aim with a bow and arrow ('played 18, shot 18'). Took on Chitauri and won. Otherwise, no other powers.
Gamora - A green Black Widow and an estranged daughter of Thanos. Could easily beat Black Widow in a fight, don't @ me.
War Machine - Black Iron Man with W E A P O N S.
Bucky - White War Machine with a vibranium arm and W E A P O N S.
Ant-Man - Pretty much Black Widow but with shrinking and growing capabilities. He punched ships out of the air in Endgame. As long as he has Pym Particles, he's good to go.
Wasp - Probably the same as Ant-Man, but has the advantage of flight.
Spider-Man - Can lift tons in weight, has the Iron Spider suit with insta-kill mode.
Average tier
Star-Lord - Resourceful, good at planning, advantage of space-tech. If he had his Celestial powers still, he would have been unbeatable-tier.
Mantis - Put a living planet to sleep and took a small meteor to the face. Otherwise, nothing else. Too naive, anyway.
Nebula - Basically the same as Gamora but since she lost all their battles (except the one in GOTG2), she's stuck here.
Normie tier
Black Widow - She ran at Thanos with a taser. Has no superpowers, just hand-to-hand skills. Almost got taken down by Ant-Man.
Drax - Isn't actually all that remarkable other than using knives and being able to jump very high. Kind of a dimwit, doesn't know how to be stealthy.
Scarlet Witch - Held Thanos back vs. 5 Infinity Stones and only using half her powers, while focused on destroying the final Infinity Stone, then almost singlehandedly ripped Thanos apart without the stones.
Doctor Strange - Wielded time itself, went one-on-one for Thanos and stopped a black hole, can conjure the Mirror Dimension, can see millions of futures in minutes.
Captain Marvel - Photon blasts, held the Gauntlet open before being blasted away by the Power Stone, destroys entire fleets just by flying through their ships.
Thor - Unrestricted lightning powers without Mjolnir, wounded Thanos with Stormbreaker, beheaded him later.
Still unbeatable but not OP tier
Iron Man - Genius, builds his own suits, uses nanobot technology, can locate anything with FRIDAY.
Captain America - Enhanced super-soldier with a vibranium shield. Took all the punches from Thanos and still got up. Can do it all day.
Hulk - Now with brains and brawn put together. Smashed Loki like a toy, ripped apart Ultron-bots.
Groot - Sacrificed a limb for Stormbreaker, can penetrate soldiers and Chitauri with his arm. Also practically invincible unless he's completely disintegrated.
Rocket - Advantage of space-tech, small size, and intelligence. Basically a furry Tony Stark.
Black Panther - Vibranium suit can absorb energy and release it all with a punch or a kick. Gifted with the powers of the heart-shaped herb.
Still a valuable asset tier
Hawkeye - Impeccable aim with a bow and arrow ('played 18, shot 18'). Took on Chitauri and won. Otherwise, no other powers.
Gamora - A green Black Widow and an estranged daughter of Thanos. Could easily beat Black Widow in a fight, don't @ me.
War Machine - Black Iron Man with W E A P O N S.
Bucky - White War Machine with a vibranium arm and W E A P O N S.
Ant-Man - Pretty much Black Widow but with shrinking and growing capabilities. He punched ships out of the air in Endgame. As long as he has Pym Particles, he's good to go.
Wasp - Probably the same as Ant-Man, but has the advantage of flight.
Spider-Man - Can lift tons in weight, has the Iron Spider suit with insta-kill mode.
Average tier
Star-Lord - Resourceful, good at planning, advantage of space-tech. If he had his Celestial powers still, he would have been unbeatable-tier.
Mantis - Put a living planet to sleep and took a small meteor to the face. Otherwise, nothing else. Too naive, anyway.
Nebula - Basically the same as Gamora but since she lost all their battles (except the one in GOTG2), she's stuck here.
Normie tier
Black Widow - She ran at Thanos with a taser. Has no superpowers, just hand-to-hand skills. Almost got taken down by Ant-Man.
Drax - Isn't actually all that remarkable other than using knives and being able to jump very high. Kind of a dimwit, doesn't know how to be stealthy.
Falcon - No superpowers to speak of, and all he has is carbon-fiber wings and special goggles. Better step his game up if he's the new Captain America.", "2021-10-14", 12, 9, "tierlist"),
        (6, "Gamora - A green Black Widow and an estranged daughter of Thanos. Could easily beat Black Widow in a fight, don't @ me. OH SHIT. YOU FUCKED UP NOW. Im not tackling this one... Black Widow - She ran at Thanos with a taser. Has no superpowers, just hand-to-hand skills. Almost got taken down by Ant-Man. I actually thought this too. But she has actually been experiemented on and is enhanced (besides comic, implied in Age Of Ultron). Besides hand-to-hand skills a EXPERT strategist (just like Cap)", "2021-10-14", 1, 3, null),
        (6, 'Hulk “Voiceprint authorization required” “Banner.” ”Welcome, Strongest Avenger” “Uhhhhhh, what?”', "2021-10-14", 0, 2, "Hulk"),
        (6, "Captain Marvel!", "2021-10-14", 0, 14, "CaptianMarvel"),
        (6, "People are so hung up on strength that they overlook the other things that make a character “strong” in the MCU. These types of discussions just turn into talk about strength. As if skills, fighting ability, brains, charisma, leadership ability etc. don’t matter. You can be the strongest but a horrible strategist, fighter and planner.", "2021-10-14", 3, 4, null),
        (6, "My top 3 would be: Scarlet Witch, especially if she gets her reality based powers according to the latest rumours. Captain Marvel. Doctor Strange", "2021-10-14", 5, 8, "Top3"),
        (6, "Unpopular opinion: Tony Fucking Stark. When having all infinity stones, Thanos was hurting and Hulk was all transitional Steve, but Tony (a mere human) didn't even flinch.", "2021-10-14", 1, 9, "ironman"),
        (6, "Flinched? He died.", "2021-10-14", 0, 3, null),
        (6, "Yeah, later.", "2021-10-14", 0, 9, null),
        (6, "And none of those died lol.... Stark is extremely weak. One of my favorite characters still but so weak. Cap destroyed him (which hurt to see but)", "2021-10-14", 0, 3, "ironman");


SELECT * FROM Comment_tbl;

SELECT * FROM User_tbl;

INSERT INTO UserCategory
(IDUser, IDCategory)
VALUES(6, 1), (2, 1), (5,1), (11, 1);

SELECT * FROM UserCategory;

INSERT INTO UserPost
(IDUser, IDPost)
VALUES(2, 1), (2, 13), (2,3), (2, 16);

INSERT INTO UserComment
(IDUser, IDComment)
VALUES(2, 1), (2, 13), (2,3), (2, 16);

SELECT * FROM UserPost;
