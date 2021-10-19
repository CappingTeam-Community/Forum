/**
* Initial database for Community Web Application
* InsertData.sql will hard insert some sample data
* to display on web application
*
* @version  1.0.0
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
        ('Diana', 'CrossFit', 'DianaMuscle', 'Password13', 'DianaMuscle@p90x.com');


INSERT INTO Category_tbl
(CategoryName, CategoryDescription, CategoryVotes)
VALUES('Marvel', 'A community dedicated to Marvel Studios and the Marvel Cinematic Universe!', 2000000),
      ('League of Legends', 'This is a community devoted to the game League of Legends.', 5400000);

SELECT * FROM Category_tbl;

INSERT INTO Post_tbl
(CategoryID_Post, PostTitle, PostBody, PostDate, PostVotes, CreatorID)
VALUES  (1, 'Why is Shang Chi Disney Plus release date November 11th, when they said only 45 Days of Exclusivity?', 
'The movie came out September 3rd. Thats more like 70 days ?',"2021-10-11", 1, 6),
        (1, 'Before the advent of the MCU who would you say were the A-list, B-list, C-list, and D-list characters of Marvel Comics?',
        "People often point to how Iron Man was an 'obscure' character before the movie, but I don't think that's completely accurate. That said I thought it would be insightful to take a step back through time and determine who the A-listers, B-listers, etc. were before the MCU took lesser-known characters and popularized them.

I admit that I was not into Marvel much until around the first Avengers movie, so what I'm saying is largely based on second-hand experiences and what I can vaguely remember before Iron Man came out. Here is what I generally think the hierarchy of Marvel was:

A-LIST - Spider-Man, X-Men, Fantastic Four, Hulk. Basically all of the heroes who regularly got cartoons, movies, merchandise, etc. and were front and center on posters.

B-LIST - Iron Man, Captain America, Thor, Daredevil, and a few others that weren't as exposed in the public eye but were still very much prevalent in Marvel media, just usually as supporting roles and not the main focus. Though I'd say Cap and Daredevil sort of rode the line between A and B-list.

C-LIST - Ant-Man, Doctor Strange, Black Panther, Captain Marvel, and most of the characters introduced after Phase 1 in the MCU. Fans of comics almost certainly knew who they were but they were mostly obscure in the eyes of the general public.

D-LIST - Once you get to this point it's hard to really determine which characters belong here, but what I generally consider 'D-list' are the characters who even some comic fans didn't know anything about. I would like to say groups like the Guardians of the Galaxy or the Eternals, but I actually think those were too obscure to even justify calling them D-list; they were basically off the radar entirely.

I'm not sure what to call this but there also seemed to be this weird area where Punisher and Blade were where they're pretty well-known to the public but weren't traditionally associated with Marvel heroes. Blade was a massively successful action-horror franchise but even today I have met people who didn't seem to know it was a Marvel movie, and at this point Punisher's skull symbol has taken on a completely new life as a mascot for the 'extreme edge goth punk' crowd, and an unsettling amount of soldiers and police officers, which is kind of scary.

Does this sound about right? If not, who would you rank as A-list, B-list, etc. before the inception of the Marvel Cinematic Universe?",
'2021-10-13',
6,
2),
        (1, "So who all is dead as of right now?", 'I have seen most of the MCU films once but none twice and some never so I am a really casual viewer.

After watching what feels like a dozen movies over the last several years (some out of order) and with the time-travel shenanigans, multiverses, the Snap and Blip, and fact that the films themselves are set in different “time periods” of the MCU, I don’t know which heroes are dead and which aren’t as of “present day” MCU.

Tony Stark, I think… and I remember Captain America getting real old and retiring after time-travel stuff so I guess he is dead too? Anyone else?', '2021-10-13', 20, 6),

        (1, "Adam Warlock vs Captain Marvel", "As you know, it is already known who will be the actor who will give life to the character of Adam, who do you think would win?", "2021-10-14", 1, 2),
        (1, "What were Thor's last words to Loki", "I heard people said It was 'You really are the worst brother', but I don't see him say that in Infinity War or Thor Ragnarok.", '2021-10-14', 11, 68),
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

Good luck', "2021-10-14", 1, 8);

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
        (1, "45 day minimum. They are holding off because it has been successful in theaters. It hasn’t even come to theaters in some areas yet", "2021-10-11", 0, 5, null),
        (2, "I think that’s pretty accurate. I think the MCU not having access to hardly any of your A listers was a good thing for them. They laid down a solid foundation for the MCU with a B list appetizer Now we get our A list main course.", "2021-10-13", 10, 6, null),
        (2, "I think you nailed them pretty perfectly.", "2021-10-13", 7, 2, null),
        (2, "If you go by pre-2008: A-List: Hulk Spider-Man B-List: Captain America Daredevil C-List: Black Panther Doctor Strange Iron Man Thor D-List: Ant Man Captain Marvel", "2021-10-13", 3, 3, 'teir-list'),
        (2, "Where would you put X-Men or Fantastic Four in there?", "2021-10-13", 2, 4, null),
        (2, "X-Men were A-List & GOTG were D-List, but it’s a bit hazy when you go by most teams since there’s gray area. I’d personally say FF (B) & Avengers (C).", "2021-10-13", 2, 5, 'teir-list'),
        (2, "Depends on the era. The FF from 1961 to the late 70s was definitely the premier team book at Marvel until Claremont took over the X-Men. Avengers I'd agree were C-listers for most of their existence until Bendis started writing them in the mid-2000s.", "2021-10-13", 2, 6, null),
        (2, "That run inserted two A-Listers (Spider-Man & Wolverine).", "2021-10-13", 2, 5, null),
        (2, "Yep, that's true, I forgot about that.", "2021-10-13", 1, 2, null),
        (2, "how do you measure iconicness? it has be put down in numbers somehow and sales are a good barometer", "2021-10-13", 1, 2, 'iconicness'),
        (2, "My list is your list.", "2021-10-13", 1, 3, null),
        (3, "Natasha is dead as of End Game as well. Steve isn't dead just retired", "2021-10-13", 2, 4, null),
        (3, "Didn’t Far From Home say that he was dead?", "2021-10-13", 0, 3, null),
	(3, "hmm, im not sure.", "2021-10-13", 0, 5, null),
        (3, "I don't think so. Maybe the general public thinks he could be dead? In Falcon and The Winter Soldier, Torres (I think that's his name, can't remember) asks Sam if Steve is in a base on the moon. So it seems like it's not public knowledge where Steve is. I assume we’ll find out what's going on with him in an upcoming movie or series, especially Captain America 4. I don't think the audience is meant to think he's dead.", "2021-10-13", 1, 2, null),
        (3, "In falcon and winter solider’s museum scene we seen on one of the pillars of words that it says that Steve has “retired”. This means that the public story is that he has simply retired, it makes no mention of him becoming an old man so presumably the public don’t know about that.", "2021-10-13", 0, 3, null),
        (3, "Tony, Cap, Black Widow and Gamora are all deceased. Cap isn’t technically confirmed dead, but it’s heavily implied. There’s a chance Old Man Steve could come back.", "2021-10-13", 7, 4, null),
        (3, "I love that Abraham Lincoln is in there Edit: just so this isn't misinterpreted, I just find it funny he was listed when he hasn't appeared in the MCU (unless I missed something)", "2021-10-13", 2, 5, null),
        (3, "His portrait appeared in Agents of SHIELD.", "2021-10-13", 0, 6, null),
        (3, "Widow, died for the soul stone. Iron man,dead, died from snapping. Steve Rogers, retired. Loki, dead, strangled by thanos. Gamora from Guardians1-2, dead, also died for the soul stone. quicksilver, dead, shot by ultron. Tchalla, written out. Vision, dead? Maria Rambeau,dead.", "2021-10-13", 6, 8, 'helpful'),
        (4, "Honestly for the MCU only it’ll probably be a stalemate", "2021-10-13", 0, 4, null),
        (4, "See at this point they should keep the original premises of Adams origin, but not before they introduce the FF and the High Evolutionary. They really need to bring on the Fantastic Four!", "2021-10-13", 0, 1, null),
        (4, "Adam Warlock is a much much more powerful character than Captain Marvel.", "2021-10-14", 1, 8, null),
        (5, "He says it in Infinity War right after Loki unveils he took the Tesseract. This was before he got metal gagged by Ebony Maw.", "2021-10-14", 0, 5, null),
        (5, "It was in the beginning of Infinity war when Thanos is speaking to Loki.", "2021-10-14", 0, 6, null),
        (5, "You're really the worst, brother", "2021-10-14", 1, 6, null),
        (5, "let me YouTube that for you", "2021-10-14", 0, 7, null),
        (6, "If we’re just picking one then I would say Captain Marvel", "2021-10-14", 7, 10, 'CaptianMarvel'),
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
        (6, "Unbeatable tier

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


--Default sort by newest
SELECT * FROM Comment_tbl;

SELECT * FROM User_tbl;

INSERT INTO User_tbl
(FirstName, LastName, UserName, Password, Email)
VALUES  ('Devin', 'White', 'Devinwhite', 'Password1', 'devin.white1@marist.edu');

INSERT INTO Category_tbl
(CategoryName, CategoryDescription, CategoryVotes)
VALUES('Marvel', 'A community dedicated to Marvel Studios and the Marvel Cinematic Universe!', 2000000);

INSERT INTO UserCategory
(IDUser, IDCategory)
VALUES(6, 1);
