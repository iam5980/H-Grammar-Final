import React, { useState } from 'react';

// ============================================================
// Question Bank - All English
// ============================================================

const quizSets = [
  // ─────────── 1. MCQ - Conditionals & Tenses ───────────
  {
    id: 'mcq_conditional',
    title: 'Multiple Choice ・ Conditionals & Tenses',
    subtitle: 'Choose the right answer',
    icon: '🎯',
    color: 'sky',
    questions: [
      { type: 'mcq', q: 'If we come home late, Mom ___ angry.', options: ['was', 'will be', 'will'], answer: 1, hint: 'First Conditional: If + present, will + base verb.' },
      { type: 'mcq', q: 'Peter will be ill if he ___ a lot of chocolate.', options: ['eats', 'will eat', 'eat'], answer: 0, hint: 'After "if", use present tense. "He" is third person singular → add -s.' },
      { type: 'mcq', q: 'He ___ to your party if you don\'t invite him.', options: ['came', 'comes', 'won\'t come'], answer: 2, hint: 'Main clause uses will / won\'t + base verb.' },
      { type: 'mcq', q: 'They won\'t call the ambulance ___ it\'s an emergency.', options: ['need to', 'unless', 'because'], answer: 1, hint: '"Unless" means "if not". Only call if it IS an emergency.' },
      { type: 'mcq', q: 'You ___ study hard to pass the test.', options: ['need to', 'don\'t need to', 'unless'], answer: 0, hint: '"Need to + base verb" means it is necessary.' },
      { type: 'mcq', q: 'If it ___, we\'ll go skiing.', options: ['snow', 'will snow', 'snows'], answer: 2, hint: '"It" is third person singular → snows.' },
      { type: 'mcq', q: 'Pluto ___ in 1930.', options: ['found', 'was found', 'is found'], answer: 1, hint: 'Pluto was discovered. Past passive: was + past participle.' },
      { type: 'mcq', q: 'We ___ a song together last Friday.', options: ['sing', 'were sung', 'sang'], answer: 2, hint: '"Last Friday" = past. Active past: sing → sang.' },
      { type: 'mcq', q: 'What ___ you ___ last night?', options: ['were / eaten', 'did / eat', 'is / eaten'], answer: 1, hint: 'Past question: did + subject + base verb.' },
      { type: 'mcq', q: 'Choose the correct sentence.', options: ['I won\'t go to the beach if it\'s sunny.', 'She won\'t go mountain climbing unless it\'s rainy.', 'He will clean the room if it\'s dirty.'], answer: 2, hint: 'C makes logical sense: clean the room when it is dirty.' },
    ]
  },

  // ─────────── 2. Prepositions of Movement ───────────
  {
    id: 'prepositions',
    title: 'Prepositions of Movement',
    subtitle: 'Choose the right preposition',
    icon: '🚶',
    color: 'emerald',
    questions: [
      { type: 'fill', q: '🔥 The boy is going ___ the fire hoop.', answer: ['through'], hint: '"Through" = from one side to the other side of something.' },
      { type: 'fill', q: '✈️ The plane is flying ___ the desert.', answer: ['over'], hint: '"Over" = above something, crossing it.' },
      { type: 'fill', q: '🌉 The boy walked carefully ___ the bridge.', answer: ['across'], hint: '"Across" = from one side to the other (flat surface).' },
      { type: 'fill', q: '🏠 The girl walked ___ the house.', answer: ['towards', 'toward'], hint: '"Towards" = in the direction of something.' },
      { type: 'fill', q: '🌳 Sam is climbing ___ the tree.', answer: ['up'], hint: '"Up" = going to a higher position.' },
      { type: 'fill', q: '🛤️ The boy walked ___ the path.', answer: ['along'], hint: '"Along" = following the line of something (a road, a path).' },
      { type: 'mcq', q: '⛰️ He is walking ___ the hill. (walking from top to bottom)', options: ['through', 'down'], answer: 1, hint: '"Down" = from higher to lower.' },
      { type: 'mcq', q: '🚶 The children walked ___ the road together. (following the road)', options: ['along', 'over'], answer: 0, hint: '"Along" the road = following the road.' },
    ]
  },

  // ─────────── 3. First Conditional 20 Questions ───────────
  {
    id: 'first_conditional_20',
    title: 'First Conditional ・ 20 Practice',
    subtitle: 'Put the verb into the correct form',
    icon: '⚡',
    color: 'amber',
    questions: [
      { type: 'multifill', q: 'If I ___ (go) out tonight, I ___ (go) to the cinema.', blanks: 2, answer: [['go'], ['will go', 'll go']], hint: 'If + present, will + base verb.' },
      { type: 'multifill', q: 'If you ___ (get) back late, I ___ (be) angry.', blanks: 2, answer: [['get'], ['will be', 'll be']], hint: 'If + present, will be (main clause).' },
      { type: 'multifill', q: 'If we ___ (not / see) each other tomorrow, we ___ (see) each other next week.', blanks: 2, answer: [['don\'t see', 'do not see'], ['will see', 'll see']], hint: 'Negative if-clause: don\'t see. Main: will see.' },
      { type: 'multifill', q: 'If he ___ (come), I ___ (be) surprised.', blanks: 2, answer: [['comes'], ['will be', 'll be']], hint: '"He" is third person singular → comes (add -s).' },
      { type: 'multifill', q: 'If we ___ (wait) here, we ___ (be) late.', blanks: 2, answer: [['wait'], ['will be', 'll be']], hint: '"We" uses base form: wait.' },
      { type: 'multifill', q: 'If we ___ (go) on holiday this summer, we ___ (go) to Spain.', blanks: 2, answer: [['go'], ['will go', 'll go']], hint: 'Same verb "go" but different tense in each clause.' },
      { type: 'multifill', q: 'If the weather ___ (not / improve), we ___ (not / have) a picnic.', blanks: 2, answer: [['doesn\'t improve', 'does not improve'], ['won\'t have', 'will not have']], hint: '"Weather" is singular → doesn\'t. Main: won\'t.' },
      { type: 'multifill', q: 'If I ___ (not / go) to bed early, I ___ (be) tired tomorrow.', blanks: 2, answer: [['don\'t go', 'do not go'], ['will be', 'll be']], hint: '"I" uses don\'t.' },
      { type: 'multifill', q: 'If we ___ (eat) all this cake, we ___ (feel) sick.', blanks: 2, answer: [['eat'], ['will feel', 'll feel']], hint: '"We" uses base form: eat.' },
      { type: 'multifill', q: 'If you ___ (not / want) to go out, I ___ (cook) dinner at home.', blanks: 2, answer: [['don\'t want', 'do not want'], ['will cook', 'll cook']], hint: '"You" uses don\'t.' },
      { type: 'multifill', q: 'I ___ (come) early if you ___ (want).', blanks: 2, answer: [['will come', 'll come'], ['want']], hint: 'Main clause first; if-clause uses present (want).' },
      { type: 'multifill', q: 'They ___ (go) to the party if they ___ (be) invited.', blanks: 2, answer: [['will go', 'll go'], ['are']], hint: 'Passive in if-clause: they ARE invited.' },
      { type: 'multifill', q: 'She ___ (stay) in London if she ___ (get) a job.', blanks: 2, answer: [['will stay', 'll stay'], ['gets']], hint: '"She" is singular → gets.' },
      { type: 'multifill', q: 'He ___ (not / get) a better job if he ___ (not / pass) that exam.', blanks: 2, answer: [['won\'t get', 'will not get'], ['doesn\'t pass', 'does not pass']], hint: '"He" uses doesn\'t. Main clause: won\'t.' },
      { type: 'multifill', q: 'I ___ (buy) a new dress if I ___ (have) enough money.', blanks: 2, answer: [['will buy', 'll buy'], ['have']], hint: '"I have" (base form).' },
      { type: 'multifill', q: 'She ___ (cook) dinner if you ___ (go) to the supermarket.', blanks: 2, answer: [['will cook', 'll cook'], ['go']], hint: '"You go" (base form).' },
      { type: 'multifill', q: 'They ___ (go) on holiday if they ___ (have) time.', blanks: 2, answer: [['will go', 'll go'], ['have']], hint: '"They have" (base form).' },
      { type: 'multifill', q: 'We ___ (be) late if we ___ (not / hurry).', blanks: 2, answer: [['will be', 'll be'], ['don\'t hurry', 'do not hurry']], hint: '"We" uses don\'t.' },
      { type: 'multifill', q: 'She ___ (take) a taxi if it ___ (rain).', blanks: 2, answer: [['will take', 'll take'], ['rains']], hint: '"It" is singular → rains.' },
      { type: 'multifill', q: 'I ___ (not / go) if you ___ (not / come) with me.', blanks: 2, answer: [['won\'t go', 'will not go'], ['don\'t come', 'do not come']], hint: 'Both negative: won\'t go / don\'t come.' },
    ]
  },

  // ─────────── 4. Passive Voice Fill in ───────────
  {
    id: 'passive_fill',
    title: 'Passive Voice ・ Fill in',
    subtitle: 'Change verbs to passive form',
    icon: '🔄',
    color: 'rose',
    questions: [
      { type: 'fill', q: 'The flowers ___ (plant) by Grandpa last Saturday.', answer: ['were planted'], hint: 'Flowers (plural) + past passive: WERE + past participle (planted).' },
      { type: 'fill', q: 'Baseball games ___ (play) every morning.', answer: ['are played'], hint: 'Games (plural) + present passive: ARE + played.' },
      { type: 'fill', q: 'The exam ___ (sign) by my parents last night.', answer: ['was signed'], hint: 'Exam (singular) + past passive: WAS + signed.' },
      { type: 'multifill', q: '___ (be) your books ___ (bring) to school this morning?', blanks: 2, answer: [['Were', 'were'], ['brought']], hint: 'Past passive question: Were + subject + past participle (brought).' },
      { type: 'fill', q: 'We ___ (allow / not) to fish at the dams.', answer: ['are not allowed', 'aren\'t allowed'], hint: 'We (plural) + present passive negative: are not allowed.' },
      { type: 'multifill', q: '___ (be) your homework ___ (do) by you yesterday?', blanks: 2, answer: [['Was', 'was'], ['done']], hint: 'Homework (singular) + past passive question: Was + subject + done.' },
      { type: 'fill', q: 'The book ___ (write) by a famous author last year.', answer: ['was written'], hint: 'Book (singular) + past passive: was + written.' },
      { type: 'fill', q: 'These cookies ___ (make) by my grandma every Sunday.', answer: ['are made'], hint: 'Cookies (plural) + present passive: are + made.' },
      { type: 'fill', q: 'The window ___ (break) by my brother yesterday.', answer: ['was broken'], hint: 'Window (singular) + past passive: was + broken. (break → broke → broken)' },
      { type: 'fill', q: 'English ___ (speak) all over the world.', answer: ['is spoken'], hint: 'English (uncountable) + present passive: is + spoken. (speak → spoke → spoken)' },
    ]
  },

  // ─────────── 5. Find & Fix Mistakes ───────────
  {
    id: 'mistakes',
    title: 'Find & Fix Mistakes',
    subtitle: 'Spot the error and correct it',
    icon: '🔍',
    color: 'orange',
    questions: [
      { type: 'fill', q: '[Fix] Is coffee drink every day?\nWrong word: drink → ?', answer: ['drunk'], hint: 'Passive needs past participle: drink → drank → drunk.' },
      { type: 'fill', q: '[Fix] My dad was fixed the car last Sunday.\nWrong word: was fixed → ?', answer: ['fixed'], hint: 'Dad fixed the car (active). Remove "was".' },
      { type: 'fill', q: '[Fix] If it rainy, I will watch TV at home.\nWrong word: rainy → ?', answer: ['is rainy', 'rains'], hint: 'Need a verb! Use "is rainy" or "rains".' },
      { type: 'fill', q: '[Fix] She will see a dentist unless she has a toothache.\nWrong word: unless → ?', answer: ['if'], hint: 'You see a dentist IF you have a toothache (logical).' },
      { type: 'fill', q: '[Fix] If they is late, the teacher will be angry.\nWrong word: is → ?', answer: ['are'], hint: 'They is plural → be verb is "are".' },
      { type: 'fill', q: '[Fix] The song was write by a famous singer.\nWrong word: write → ?', answer: ['written'], hint: 'Passive needs past participle: write → wrote → written.' },
      { type: 'fill', q: '[Fix] She will goes shopping if she has time.\nWrong word: goes → ?', answer: ['go'], hint: 'After "will" always use BASE form (go, not goes).' },
      { type: 'fill', q: '[Fix] The homework was do by the students.\nWrong word: do → ?', answer: ['done'], hint: 'Passive needs past participle: do → did → done.' },
      { type: 'fill', q: '[Fix] If she go to bed late, she will feel tired.\nWrong word: go → ?', answer: ['goes'], hint: '"She" is third person singular → add -es: goes.' },
    ]
  },

  // ─────────── 6. Rewrite - First Conditional ───────────
  {
    id: 'rewrite_conditional',
    title: 'Rewrite ・ First Conditional',
    subtitle: 'Combine condition and result',
    icon: '✏️',
    color: 'violet',
    questions: [
      { type: 'rewrite', q: 'Condition: We don\'t arrive on time.\nResult: We are late.\nWrite as one sentence using "If":', answer: ['If we don\'t arrive on time, we will be late.', 'If we do not arrive on time, we will be late.'], hint: 'If + present, will + base verb.' },
      { type: 'rewrite', q: 'Condition: You hurt me.\nResult: I cry.\nWrite as one sentence using "If":', answer: ['If you hurt me, I will cry.', 'If you hurt me, I\'ll cry.'], hint: 'If + present, will + base verb.' },
      { type: 'rewrite', q: 'Condition: He doesn\'t take a bus.\nResult: He takes a train.\nWrite as one sentence using "If":', answer: ['If he doesn\'t take a bus, he will take a train.', 'If he does not take a bus, he will take a train.'], hint: 'Negative if-clause: doesn\'t. Main: will take.' },
      { type: 'rewrite', q: 'Condition: People throw trash on the ground.\nResult: The streets aren\'t clean.\nWrite as one sentence using "If":', answer: ['If people throw trash on the ground, the streets won\'t be clean.', 'If people throw trash on the ground, the streets will not be clean.'], hint: 'aren\'t → won\'t be (future).' },
      { type: 'rewrite', q: 'Condition: She doesn\'t take medicine.\nResult: She doesn\'t feel better.\nWrite as one sentence using "If":', answer: ['If she doesn\'t take medicine, she won\'t feel better.', 'If she does not take medicine, she will not feel better.'], hint: 'doesn\'t feel → won\'t feel.' },
      { type: 'rewrite', q: 'Condition: It snows tomorrow.\nResult: We build a snowman.\nWrite as one sentence using "If":', answer: ['If it snows tomorrow, we will build a snowman.', 'If it snows tomorrow, we\'ll build a snowman.'], hint: 'snows (no change); build → will build.' },
      { type: 'rewrite', q: 'Condition: You don\'t wear a coat.\nResult: You catch a cold.\nWrite as one sentence using "If":', answer: ['If you don\'t wear a coat, you will catch a cold.', 'If you do not wear a coat, you will catch a cold.', 'If you don\'t wear a coat, you\'ll catch a cold.'], hint: 'don\'t wear (no change); catch → will catch.' },
      { type: 'rewrite', q: 'Condition: We don\'t hurry.\nResult: We miss the bus.\nWrite as one sentence using "If":', answer: ['If we don\'t hurry, we will miss the bus.', 'If we do not hurry, we will miss the bus.', 'If we don\'t hurry, we\'ll miss the bus.'], hint: 'don\'t hurry (no change); miss → will miss.' },
      { type: 'rewrite', q: 'Condition: It\'s sunny tomorrow.\nResult: We go to the beach.\nWrite as one sentence using "If":', answer: ['If it\'s sunny tomorrow, we will go to the beach.', 'If it is sunny tomorrow, we will go to the beach.', 'If it\'s sunny tomorrow, we\'ll go to the beach.'], hint: 'it\'s (no change); go → will go.' },
      { type: 'rewrite', q: 'Condition: My sister practices the piano every day.\nResult: She plays well.\nWrite as one sentence using "If":', answer: ['If my sister practices the piano every day, she will play well.', 'If my sister practices the piano every day, she\'ll play well.'], hint: 'practices (third person, no change); play → will play.' },
    ]
  },

  // ─────────── 7. Rewrite - Passive Voice ───────────
  {
    id: 'rewrite_passive',
    title: 'Rewrite ・ Passive Voice',
    subtitle: 'Change active to passive',
    icon: '🔁',
    color: 'pink',
    questions: [
      { type: 'rewrite', q: 'Rewrite in passive voice:\nMom bought new shoes last weekend.', answer: ['New shoes were bought by Mom last weekend.'], hint: 'Object becomes subject. Past passive: were + past participle.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nMy friends took a lot of photos last summer.', answer: ['A lot of photos were taken by my friends last summer.', 'Lots of photos were taken by my friends last summer.'], hint: 'Photos (plural) → were taken.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nDad does the laundry every evening.', answer: ['The laundry is done by Dad every evening.'], hint: 'Present passive: is + past participle (done).' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nMy little brother brushes his teeth twice a day.', answer: ['His teeth are brushed by my little brother twice a day.'], hint: 'Teeth (plural) → are brushed.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nTr. Tess will give everyone a gift on Graduation Day.', answer: ['Everyone will be given a gift by Tr. Tess on Graduation Day.', 'A gift will be given to everyone by Tr. Tess on Graduation Day.'], hint: 'Future passive: will be + past participle.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nThe teacher checks the homework every day.', answer: ['The homework is checked by the teacher every day.'], hint: 'Present passive: is + checked.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nThe students cleaned the classroom yesterday.', answer: ['The classroom was cleaned by the students yesterday.'], hint: 'Past passive: was + cleaned.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nThe children planted many trees in the park.', answer: ['Many trees were planted by the children in the park.'], hint: 'Trees (plural) → were planted.' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nGeorge cooks delicious meals every day.', answer: ['Delicious meals are cooked by George every day.'], hint: 'Meals (plural) → are cooked.' },
    ]
  },

  // ─────────── 8. Rewrite using "unless" ───────────
  {
    id: 'rewrite_unless',
    title: 'Rewrite using "unless"',
    subtitle: 'Change "if...not" to "unless"',
    icon: '🚫',
    color: 'teal',
    questions: [
      { type: 'rewrite', q: 'Rewrite using "unless":\nThe cashier won\'t let you take away the dress if you don\'t pay for it.', answer: ['The cashier won\'t let you take away the dress unless you pay for it.', 'Unless you pay for it, the cashier won\'t let you take away the dress.'], hint: '"if...don\'t" = "unless" (remove the "not").' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nNelson can\'t fix the ceiling light if he doesn\'t stand on a ladder.', answer: ['Nelson can\'t fix the ceiling light unless he stands on a ladder.', 'Unless Nelson stands on a ladder, he can\'t fix the ceiling light.'], hint: '⚠️ "He" is singular → STANDS (add -s)!' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nNina won\'t eat cake if it\'s not her birthday cake.', answer: ['Nina won\'t eat cake unless it\'s her birthday cake.', 'Unless it\'s her birthday cake, Nina won\'t eat cake.'], hint: '"isn\'t" → "unless it is".' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nYou won\'t attend a middle school if you don\'t graduate from an elementary school.', answer: ['You won\'t attend a middle school unless you graduate from an elementary school.', 'Unless you graduate from an elementary school, you won\'t attend a middle school.'], hint: '"don\'t graduate" → "unless you graduate".' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nStephen King wouldn\'t win a prize if he didn\'t write horror novels.', answer: ['Stephen King wouldn\'t win a prize unless he wrote horror novels.', 'Unless he wrote horror novels, Stephen King wouldn\'t win a prize.'], hint: '⚠️ "wouldn\'t" = past context → use PAST tense WROTE!' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nTom won\'t pass the test if he doesn\'t study.', answer: ['Tom won\'t pass the test unless he studies.', 'Unless he studies, Tom won\'t pass the test.', 'Unless Tom studies, he won\'t pass the test.'], hint: '⚠️ "He" is singular → STUDIES (add -es)!' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nI won\'t go camping if it doesn\'t stop raining.', answer: ['I won\'t go camping unless it stops raining.', 'Unless it stops raining, I won\'t go camping.'], hint: '⚠️ "It" is singular → STOPS (add -s)!' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nThey won\'t win the game if they don\'t practice hard.', answer: ['They won\'t win the game unless they practice hard.', 'Unless they practice hard, they won\'t win the game.'], hint: '"They" (plural) → practice (no -s).' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nShe can\'t watch TV if she doesn\'t finish her homework.', answer: ['She can\'t watch TV unless she finishes her homework.', 'Unless she finishes her homework, she can\'t watch TV.'], hint: '⚠️ "She" is singular → FINISHES (add -es)!' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nWe won\'t have a picnic if it doesn\'t stop snowing.', answer: ['We won\'t have a picnic unless it stops snowing.', 'Unless it stops snowing, we won\'t have a picnic.'], hint: '⚠️ "It" is singular → STOPS (add -s)!' },
    ]
  },

  // ─────────── 9. if or unless ───────────
  {
    id: 'if_unless',
    title: 'Choose: if or unless',
    subtitle: 'Fill in with "if" or "unless"',
    icon: '🔀',
    color: 'cyan',
    questions: [
      { type: 'mcq', q: '___ you\'re done with your assignments, you can\'t hang out with me.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" = only when assignments are done.' },
      { type: 'mcq', q: '___ we finish our classwork early, we can discuss our class project.', options: ['If', 'Unless'], answer: 0, hint: '"If" we finish → we CAN discuss (positive condition).' },
      { type: 'mcq', q: '___ your mom gives you permission, you can\'t come to my party.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" mom says yes, no party.' },
      { type: 'mcq', q: '___ Wayne writes neatly, his readers will appreciate him more.', options: ['If', 'Unless'], answer: 0, hint: '"If" he writes neatly → good result.' },
      { type: 'mcq', q: '___ Damian pays attention to the instructions, he won\'t lose points.', options: ['If', 'Unless'], answer: 0, hint: '"If" he pays attention → no point loss.' },
      { type: 'mcq', q: '___ you bring your bathing suits, you aren\'t allowed to swim here.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" you bring a swimsuit, no swimming.' },
      { type: 'mcq', q: '___ you eat too much candy, you\'ll get a stomachache.', options: ['If', 'Unless'], answer: 0, hint: '"If" you eat too much → bad result (stomachache).' },
      { type: 'mcq', q: '___ you have an umbrella, you\'ll get wet in the rain.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" you have an umbrella, you\'ll be wet.' },
      { type: 'mcq', q: '___ the doctor gives you medicine, you\'ll feel better soon.', options: ['If', 'Unless'], answer: 0, hint: '"If" doctor gives medicine → good result (feel better).' },
      { type: 'mcq', q: '___ you wash your hands, you might get sick.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" you wash your hands → bad result (sick).' },
      { type: 'mcq', q: '___ Tom finishes his work early, he can play video games.', options: ['If', 'Unless'], answer: 0, hint: '"If" he finishes early → he CAN play (positive).' },
      { type: 'mcq', q: '___ the bus is late, we\'ll be on time for school.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" bus is late, we will be on time. (Bus late = problem.)' },
    ]
  },

  // ─────────── 10. Mother's Day Dinner (Cloze) ───────────
  {
    id: 'mothers_day',
    title: 'Cloze ・ Mother\'s Day Dinner',
    subtitle: 'A full story with verb tenses',
    icon: '🌹',
    color: 'fuchsia',
    questions: [
      { type: 'fill', q: 'Last Sunday, Dad ___ (take) all of us to a fancy restaurant...', answer: ['took'], hint: 'Last Sunday = past. take → took.' },
      { type: 'fill', q: '...to a fancy restaurant to ___ (have) a nice Mother\'s Day dinner.', answer: ['have'], hint: 'After "to" use base verb.' },
      { type: 'fill', q: 'At 4 o\'clock, we ___ (take) turns taking a shower.', answer: ['took'], hint: 'Past tense: took.' },
      { type: 'fill', q: 'Then we ___ (put) on nice clothes.', answer: ['put'], hint: '"Put" past tense is still "put".' },
      { type: 'fill', q: 'I ___ (wear) a pink dress and my brother wore a tuxedo.', answer: ['wore'], hint: 'wear → wore (matches "wore" later).' },
      { type: 'fill', q: 'Our mom ___ (make) sure we comb our hair properly.', answer: ['made'], hint: 'make → made.' },
      { type: 'fill', q: 'We even ___ (wear) some perfume.', answer: ['wore'], hint: 'wear → wore.' },
      { type: 'fill', q: 'At about five thirty, Dad ___ (drive) us to the restaurant.', answer: ['drove'], hint: 'drive → drove.' },
      { type: 'fill', q: 'Although it ___ (take) us a while to find a parking...', answer: ['took'], hint: 'Past: took.' },
      { type: 'fill', q: '...we ___ (be not) late for dinner.', answer: ['were not', 'weren\'t'], hint: 'We + past negative: were not / weren\'t.' },
      { type: 'fill', q: 'As we ___ (sit) down in the restaurant...', answer: ['sat'], hint: 'sit → sat.' },
      { type: 'fill', q: '...a waiter ___ (come) to our table...', answer: ['came'], hint: 'come → came.' },
      { type: 'fill', q: '...and ___ (take) our order.', answer: ['took'], hint: 'take → took.' },
      { type: 'fill', q: 'A set of seafood meal ___ (be) served for my mom...', answer: ['was'], hint: 'Singular + past passive: was served.' },
      { type: 'fill', q: '...as seafood ___ (be) her favorite from that restaurant.', answer: ['was'], hint: 'Singular past: was.' },
      { type: 'fill', q: 'A set of roasted beef meal was ___ (bring) to my dad.', answer: ['brought'], hint: 'Passive: bring → brought (past participle).' },
      { type: 'fill', q: 'Both my brother and I ___ (order) children\'s meals.', answer: ['ordered'], hint: 'Past tense: ordered.' },
      { type: 'fill', q: 'Cheerful music ___ (be) played throughout the dinner time.', answer: ['was'], hint: 'Music (uncountable) + past passive: was played.' },
      { type: 'fill', q: 'We ___ (chat) and laughed when we ate.', answer: ['chatted'], hint: 'chat → chatted (double the "t").' },
      { type: 'fill', q: 'Stories of how mom and dad ___ (meet) were told.', answer: ['met'], hint: 'meet → met.' },
      { type: 'fill', q: 'None of the children\'s issues from the school was ___ (discuss) that evening.', answer: ['discussed'], hint: 'Passive: discussed.' },
      { type: 'fill', q: 'It ___ (be) such a pleasant evening.', answer: ['was'], hint: '"It" + past: was.' },
      { type: 'fill', q: 'I hope every evening can ___ (be) like this Mother\'s Day dinner.', answer: ['be'], hint: 'After "can" use base verb: be.' },
    ]
  },

  // ─────────── 11. Reading - The Lost Puppy ───────────
  {
    id: 'reading_puppy',
    title: 'Reading ・ The Lost Puppy',
    subtitle: 'Read and answer in full sentences',
    icon: '🐕',
    color: 'indigo',
    intro: 'One sunny morning, a puppy was found near the school gate. The puppy was carried to the principal\'s office by a teacher. A soft blanket was given to the puppy, and fresh water was placed beside it. Soon, posters were made and hung around the school. The puppy\'s photo was also shared with parents by email. After a few hours, a little girl ran into the office. She was told that her puppy was safe and happy. The puppy was picked up and hugged tightly by the girl.',
    questions: [
      { type: 'rewrite', q: '1. What was found near the school gate?\n(Answer in a full sentence)', answer: ['A puppy was found near the school gate.'], hint: 'Subject "a puppy" + passive "was found".' },
      { type: 'rewrite', q: '2. Who carried the puppy to the principal\'s office?\n(Answer in a full sentence)', answer: ['A teacher carried the puppy to the principal\'s office.', 'The puppy was carried to the principal\'s office by a teacher.'], hint: 'A teacher (active) OR the puppy was carried by a teacher (passive).' },
      { type: 'rewrite', q: '3. What was made and hung around the school?\n(Answer in a full sentence)', answer: ['Posters were made and hung around the school.'], hint: 'Posters (plural) + were made.' },
    ]
  },

  // ─────────── 12. Reading - Clean-up Event ───────────
  {
    id: 'reading_cleanup',
    title: 'Reading ・ Clean-up Event',
    subtitle: 'Read and answer in full sentences',
    icon: '🌳',
    color: 'lime',
    intro: 'Last Saturday, a school clean-up event was held in the community park. Many students and teachers joined the activity. The students picked up trash and planted flowers around the park. At the end of the day, the park looked much cleaner and more beautiful. Everyone felt proud because they helped the community together.',
    questions: [
      { type: 'rewrite', q: '1. Who joined the activity?\n(Answer in a full sentence)', answer: ['Many students and teachers joined the activity.', 'Students and teachers joined the activity.'], hint: 'Subject: Many students and teachers.' },
      { type: 'rewrite', q: '2. What event was held last Saturday?\n(Answer in a full sentence)', answer: ['A school clean-up event was held last Saturday.', 'A school clean-up event was held in the community park last Saturday.'], hint: 'Use passive: was held.' },
      { type: 'rewrite', q: '3. What did students do at the event?\n(Answer in a full sentence)', answer: ['The students picked up trash and planted flowers around the park.', 'Students picked up trash and planted flowers.', 'They picked up trash and planted flowers.'], hint: 'Active past: picked up + planted.' },
    ]
  },

  // ─────────── 13. Mixed MCQ ───────────
  {
    id: 'mixed_mcq',
    title: 'Mixed Multiple Choice',
    subtitle: 'A mix of grammar points',
    icon: '🎲',
    color: 'red',
    questions: [
      { type: 'mcq', q: 'Choose the correct sentence.', options: ['If I am hungry, I will eats a sandwich.', 'We won\'t go swimming unless the weather is nice.', 'She will be late if she woke up early.'], answer: 1, hint: 'A: "will" + base verb (eat, not eats). C: tenses don\'t match.' },
      { type: 'mcq', q: 'What ___ they ___ yesterday?', options: ['does / do', 'did / do', 'do / did'], answer: 1, hint: 'Past question: did + subject + base verb.' },
      { type: 'mcq', q: 'If he ___ tired, he will go to bed early.', options: ['is', 'was', 'will be'], answer: 0, hint: 'After "if" use present tense.' },
      { type: 'mcq', q: 'The cake ___ by my mother yesterday.', options: ['baked', 'is baked', 'was baked'], answer: 2, hint: 'Cake was made (passive) + yesterday (past) → was baked.' },
      { type: 'mcq', q: 'You can\'t improve your English ___ you practice every day.', options: ['unless', 'because', 'if'], answer: 0, hint: '"Unless" you practice = if you don\'t practice.' },
      { type: 'mcq', q: 'The windows ___ every weekend.', options: ['clean', 'are cleaned', 'cleaned'], answer: 1, hint: 'Windows are cleaned (passive, present).' },
      { type: 'mcq', q: 'If Jenny ___ sick, she will stay home.', options: ['feel', 'felt', 'feels'], answer: 2, hint: 'Jenny is singular + present → feels.' },
      { type: 'mcq', q: 'The letter ___ by John last week.', options: ['wrote', 'was written', 'is written'], answer: 1, hint: 'Past passive: was + past participle (written).' },
      { type: 'mcq', q: 'If you ___ every day, you\'ll get better at English.', options: ['practice', 'will practice', 'practicing'], answer: 0, hint: 'After "if" use present tense: practice.' },
      { type: 'mcq', q: 'The trash ___ every Tuesday.', options: ['collects', 'is collected', 'was collected'], answer: 1, hint: 'Present passive (regular schedule): is + collected.' },
      { type: 'mcq', q: '___ Lisa eats vegetables, she\'ll be healthy.', options: ['If', 'Unless', 'Because'], answer: 0, hint: '"If" she eats veggies → good result (healthy).' },
      { type: 'mcq', q: 'We ___ to the zoo last weekend.', options: ['go', 'went', 'will go'], answer: 1, hint: '"Last weekend" = past tense. go → went.' },
    ]
  },

  // ─────────── 14. Open Questions ───────────
  {
    id: 'open_answer',
    title: 'Open Questions ・ Full Sentence Answers',
    subtitle: 'Give your own answer',
    icon: '💬',
    color: 'yellow',
    questions: [
      { type: 'rewrite', q: 'What do you need to do to stay healthy?\n(Give your own answer in a full sentence)', answer: ['I need to eat healthy food and exercise every day to stay healthy.', 'I need to exercise every day.', 'I need to eat healthy food.', 'I need to sleep well.'], hint: 'Try: "I need to + verb + ..." (eat, exercise, sleep).' },
      { type: 'rewrite', q: 'What will you do if you are tired?\n(Give your own answer in a full sentence)', answer: ['If I am tired, I will take a rest.', 'If I am tired, I will go to bed early.', 'I will take a nap if I am tired.', 'I will sleep if I am tired.'], hint: 'Try: "If I am tired, I will + verb."' },
      { type: 'rewrite', q: 'What will your mom do if your sister doesn\'t take the medicine?\n(Give your own answer in a full sentence)', answer: ['If my sister doesn\'t take the medicine, my mom will be angry.', 'My mom will be worried.', 'My mom will make her take it.'], hint: 'Try: "If ... doesn\'t ..., my mom will ..."' },
      { type: 'rewrite', q: 'How will you feel if you get a gift from your teacher?\n(Give your own answer in a full sentence)', answer: ['I will feel happy if I get a gift from my teacher.', 'I will feel excited.', 'I will be very happy.'], hint: 'Try: "I will feel + feeling word" (happy, excited).' },
      { type: 'rewrite', q: 'What will you do if your friend is sad?\n(Give your own answer in a full sentence)', answer: ['If my friend is sad, I will talk to him.', 'I will cheer my friend up.', 'I will comfort my friend.', 'I will make him laugh.'], hint: 'Try: "If my friend is sad, I will + verb."' },
      { type: 'rewrite', q: 'What do you need to do before going on a trip?\n(Give your own answer in a full sentence)', answer: ['I need to pack my bags before going on a trip.', 'I need to check the weather.', 'I need to prepare my clothes.', 'I need to book a hotel.'], hint: 'Try: "I need to + verb" (pack, check, prepare).' },
    ]
  },

  // ─────────── 15. Pathway 5 U4&U5 Review ───────────
  {
    id: 'review_test_5',
    title: 'Pathway 5 U4 & U5 Review',
    subtitle: 'Full review test (16 questions)',
    icon: '📋',
    color: 'sky',
    questions: [
      { type: 'multifill', q: '___ your dad\'s car ___ (wash) last week?', blanks: 2, answer: [['Was', 'was'], ['washed']], hint: 'Past passive question: Was + subject + past participle.' },
      { type: 'fill', q: 'We ___ (allow / not) to shout at animals.', answer: ['aren\'t allowed', 'are not allowed'], hint: 'Plural + present passive negative: aren\'t allowed.' },
      { type: 'fill', q: 'Vocabulary quizzes ___ (take) by students every day.', answer: ['are taken'], hint: 'Quizzes (plural) + present passive: are + taken.' },
      { type: 'fill', q: 'The 40-foot container ___ (ship) from TW to LAX last month.', answer: ['was shipped'], hint: 'Singular + past passive: was shipped.' },
      { type: 'fill', q: 'The apples ___ (pick) by the workers yesterday.', answer: ['were picked'], hint: 'Apples (plural) + past passive: were picked.' },
      { type: 'mcq', q: '___ Benjamin has extra sugar, he will bring it to school.', options: ['If', 'Unless'], answer: 0, hint: '"If" he has extra → he WILL bring it (positive).' },
      { type: 'mcq', q: '___ you know your textbook contents well, you won\'t be able to answer the true/false questions correctly.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" you know it = if you don\'t know.' },
      { type: 'mcq', q: '___ your trash is taken out, the kitchen will smell bad.', options: ['If', 'Unless'], answer: 1, hint: '"Unless" you take it out → kitchen will stink.' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nTina won\'t drink milk if it\'s not fresh.', answer: ['Tina won\'t drink milk unless it\'s fresh.', 'Tina won\'t drink milk unless it is fresh.', 'Unless it\'s fresh, Tina won\'t drink milk.'], hint: '"if...not" → "unless" (remove "not").' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nCalvin shouldn\'t ride his bike in the park if he doesn\'t finish his chores.', answer: ['Calvin shouldn\'t ride his bike in the park unless he finishes his chores.', 'Unless he finishes his chores, Calvin shouldn\'t ride his bike in the park.'], hint: '⚠️ Singular subject: he FINISHES (add -es)!' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nYou won\'t get good grades if you don\'t answer correctly.', answer: ['You won\'t get good grades unless you answer correctly.', 'Unless you answer correctly, you won\'t get good grades.'], hint: '"don\'t answer" → "unless you answer".' },
      { type: 'rewrite', q: 'Write a first conditional sentence:\nCondition: Zachary doesn\'t focus on his task.\nResult: He doesn\'t know what to do.', answer: ['If Zachary doesn\'t focus on his task, he won\'t know what to do.', 'If Zachary does not focus on his task, he will not know what to do.'], hint: 'doesn\'t know → won\'t know.' },
      { type: 'rewrite', q: 'Write a first conditional sentence:\nCondition: People eat lots of sugar.\nResult: They increase their risk of developing Type 2 diabetes.', answer: ['If people eat lots of sugar, they will increase their risk of developing Type 2 diabetes.', 'If people eat lots of sugar, they\'ll increase their risk of developing Type 2 diabetes.'], hint: 'eat (no change); increase → will increase.' },
      { type: 'rewrite', q: 'Write a first conditional sentence:\nCondition: Alexander doesn\'t write neatly.\nResult: People can\'t understand his writing.', answer: ['If Alexander doesn\'t write neatly, people won\'t understand his writing.', 'If Alexander does not write neatly, people will not understand his writing.'], hint: 'can\'t → won\'t.' },
      { type: 'rewrite', q: 'Write a first conditional sentence:\nCondition: It\'s rainy tomorrow.\nResult: My mom doesn\'t do the laundry.', answer: ['If it\'s rainy tomorrow, my mom won\'t do the laundry.', 'If it is rainy tomorrow, my mom will not do the laundry.'], hint: 'doesn\'t do → won\'t do.' },
      { type: 'rewrite', q: 'Write a first conditional sentence:\nCondition: You study at home.\nResult: You learn well.', answer: ['If you study at home, you will learn well.', 'If you study at home, you\'ll learn well.'], hint: 'study (no change); learn → will learn.' },
    ]
  },

  // ─────────── 16. Focus Practice ───────────
  {
    id: 'focus_practice',
    title: 'Focus Practice ・ Common Mistakes',
    subtitle: 'Irregular verbs / Subject-verb / -ed endings',
    icon: '⭐',
    color: 'amber',
    questions: [
      { type: 'fill', q: '[Verb form] What is the PAST TENSE of "write"?', answer: ['wrote'], hint: 'write → wrote (past) → written (past participle).' },
      { type: 'fill', q: '[Verb form] What is the PAST PARTICIPLE of "write"?', answer: ['written'], hint: 'Used in passive: "The song was WRITTEN by..."' },
      { type: 'fill', q: '[Verb form] What is the PAST TENSE of "meet"?', answer: ['met'], hint: 'meet → met → met.' },
      { type: 'fill', q: '[Verb form] What is the PAST PARTICIPLE of "drink"?', answer: ['drunk'], hint: 'drink → drank → drunk (used in passive).' },
      { type: 'fill', q: '[Verb form] What is the PAST PARTICIPLE of "do"?', answer: ['done'], hint: 'do → did → done. "The homework was DONE."' },
      { type: 'fill', q: '[Verb form] What is the PAST PARTICIPLE of "take"?', answer: ['taken'], hint: 'take → took → taken. "Photos were TAKEN."' },
      { type: 'fill', q: '[Verb form] What is the PAST PARTICIPLE of "bring"?', answer: ['brought'], hint: 'bring → brought → brought.' },
      { type: 'fill', q: '[Verb form] What is the PAST PARTICIPLE of "tell"?', answer: ['told'], hint: 'tell → told → told. "She was TOLD..."' },
      { type: 'rewrite', q: '[Subject-verb] Rewrite using "unless" (watch the verb!):\nNelson can\'t fix the light if he doesn\'t stand on a ladder.', answer: ['Nelson can\'t fix the light unless he stands on a ladder.'], hint: '⚠️ "He STANDS" (third person singular adds -s)!' },
      { type: 'rewrite', q: '[Past tense] Rewrite using "unless":\nStephen King wouldn\'t win a prize if he didn\'t write horror novels.', answer: ['Stephen King wouldn\'t win a prize unless he wrote horror novels.'], hint: '⚠️ "wouldn\'t" = past context → use WROTE (past tense)!' },
      { type: 'rewrite', q: '[Past tense] Rewrite using "unless":\nBella wouldn\'t marry the Beast if she didn\'t meet Gaston.', answer: ['Bella wouldn\'t marry the Beast unless she met Gaston.'], hint: '⚠️ "wouldn\'t" = past context → use MET (past tense)!' },
      { type: 'fill', q: '[Passive -ed] The flowers ___ (plant) by Grandpa last Saturday.\nDon\'t forget the -ed!', answer: ['were planted'], hint: '⚠️ Passive needs past participle "planted" (with -ed)!' },
      { type: 'fill', q: '[Passive -ed] The classroom ___ (clean) by the students yesterday.', answer: ['was cleaned'], hint: '⚠️ "cleaned" (with -ed)! Singular + past passive: was cleaned.' },
      { type: 'fill', q: '[Passive -ed] Many trees ___ (plant) in the park.', answer: ['were planted', 'are planted'], hint: '⚠️ "planted" (not plant)! Plural → were/are planted.' },
      { type: 'mcq', q: '[Subject-verb] If they ___ late, the teacher will be angry.', options: ['is', 'are', 'was'], answer: 1, hint: '"They" (plural) → "are".' },
      { type: 'mcq', q: '[Subject-verb] If she ___ to bed late, she will feel tired.', options: ['go', 'goes', 'went'], answer: 1, hint: '"She" (singular) + present → goes (add -es).' },
      { type: 'mcq', q: '[After "will"] She will ___ shopping if she has time.', options: ['goes', 'go', 'going'], answer: 1, hint: 'After "will" always use BASE form: go.' },
    ]
  },

  // ─────────── 17. Irregular Verbs Drill ───────────
  {
    id: 'irregular_verbs',
    title: 'Irregular Verbs ・ Three Forms',
    subtitle: 'Base / Past / Past Participle drill',
    icon: '🔠',
    color: 'violet',
    questions: [
      { type: 'fill', q: 'Past TENSE of "break"?', answer: ['broke'], hint: 'break → broke → broken' },
      { type: 'fill', q: 'Past PARTICIPLE of "break"?', answer: ['broken'], hint: 'Used in passive: "The cup was BROKEN."' },
      { type: 'fill', q: 'Past TENSE of "eat"?', answer: ['ate'], hint: 'eat → ate → eaten' },
      { type: 'fill', q: 'Past PARTICIPLE of "eat"?', answer: ['eaten'], hint: 'Used in passive: "The cake was EATEN."' },
      { type: 'fill', q: 'Past TENSE of "give"?', answer: ['gave'], hint: 'give → gave → given' },
      { type: 'fill', q: 'Past PARTICIPLE of "give"?', answer: ['given'], hint: 'Used in passive: "A gift was GIVEN to me."' },
      { type: 'fill', q: 'Past TENSE of "see"?', answer: ['saw'], hint: 'see → saw → seen' },
      { type: 'fill', q: 'Past PARTICIPLE of "see"?', answer: ['seen'], hint: 'Used in passive: "He was SEEN at the park."' },
      { type: 'fill', q: 'Past TENSE of "speak"?', answer: ['spoke'], hint: 'speak → spoke → spoken' },
      { type: 'fill', q: 'Past PARTICIPLE of "speak"?', answer: ['spoken'], hint: 'Used in passive: "English is SPOKEN here."' },
      { type: 'fill', q: 'Past TENSE of "sing"?', answer: ['sang'], hint: 'sing → sang → sung' },
      { type: 'fill', q: 'Past PARTICIPLE of "sing"?', answer: ['sung'], hint: 'Used in passive: "The song was SUNG by her."' },
      { type: 'fill', q: 'Past TENSE of "catch"?', answer: ['caught'], hint: 'catch → caught → caught (no change in PP)' },
      { type: 'fill', q: 'Past TENSE of "teach"?', answer: ['taught'], hint: 'teach → taught → taught' },
      { type: 'fill', q: 'Past TENSE of "think"?', answer: ['thought'], hint: 'think → thought → thought' },
      // Application questions
      { type: 'fill', q: 'The cup ___ (break) by my brother yesterday.', answer: ['was broken'], hint: '⚠️ Past passive: was + BROKEN (past participle).' },
      { type: 'fill', q: 'The song ___ (sing) by the famous singer last night.', answer: ['was sung'], hint: '⚠️ Past passive: was + SUNG (past participle).' },
      { type: 'fill', q: 'A speech ___ (give) by the principal yesterday.', answer: ['was given'], hint: '⚠️ Past passive: was + GIVEN (past participle).' },
      { type: 'fill', q: 'The cake ___ (eat) by everyone at the party.', answer: ['was eaten'], hint: '⚠️ Past passive: was + EATEN (past participle).' },
      { type: 'fill', q: 'Spanish ___ (speak) in many countries.', answer: ['is spoken'], hint: '⚠️ Present passive: is + SPOKEN (past participle).' },
    ]
  },

  // ─────────── 18. Final Exam Simulation ───────────
  {
    id: 'final_exam',
    title: 'Final Exam Simulation',
    subtitle: 'Mixed practice ・ Exam-level difficulty',
    icon: '🎓',
    color: 'red',
    questions: [
      // MCQ - 5
      { type: 'mcq', q: 'The Mona Lisa ___ by Leonardo da Vinci.', options: ['painted', 'was painted', 'is painting'], answer: 1, hint: 'Famous artwork = past passive: was painted.' },
      { type: 'mcq', q: 'Choose the correct sentence.', options: ['She will goes home if she is tired.', 'She will go home unless she is tired.', 'She will go home if she is tired.'], answer: 2, hint: 'A: will + base verb (go, not goes). B: logic wrong (unless = if not).' },
      { type: 'mcq', q: 'Tom can\'t fix his bike ___ his dad helps him.', options: ['if', 'unless', 'because'], answer: 1, hint: '"Unless" his dad helps = if his dad does not help.' },
      { type: 'mcq', q: 'If we ___ to the airport on time, we ___ the plane.', options: ['don\'t arrive / will miss', 'arrive / will miss', 'don\'t arrive / won\'t miss'], answer: 0, hint: 'Don\'t arrive on time → consequence: miss the plane.' },
      { type: 'mcq', q: 'The classroom ___ by the students every Friday.', options: ['cleans', 'is cleaned', 'was cleaned'], answer: 1, hint: 'Every Friday = present passive: is cleaned.' },

      // Fill - 5
      { type: 'fill', q: 'The window ___ (clean) by the workers tomorrow.', answer: ['will be cleaned'], hint: 'Future passive: WILL BE + past participle (cleaned).' },
      { type: 'fill', q: '___ you study hard, you\'ll fail the exam.', answer: ['Unless'], hint: '"Unless" you study = if you don\'t study → fail.' },
      { type: 'multifill', q: 'I ___ (not / go) to school if it ___ (snow) heavily.', blanks: 2, answer: [['won\'t go', 'will not go'], ['snows']], hint: 'Main: won\'t go. If-clause: snows (it is singular).' },
      { type: 'fill', q: 'The room ___ (clean) every morning by the cleaner.', answer: ['is cleaned'], hint: 'Every morning + passive: is + cleaned.' },
      { type: 'multifill', q: 'If she ___ (study) hard, she ___ (pass) the exam.', blanks: 2, answer: [['studies'], ['will pass', 'will']], hint: 'She studies (third person singular adds -es); will pass (main clause).' },

      // Rewrite - 5
      { type: 'rewrite', q: 'Combine into one sentence:\nMom doesn\'t wake me up.\nI\'m late for school.', answer: ['If Mom doesn\'t wake me up, I will be late for school.', 'If Mom does not wake me up, I will be late for school.', 'If Mom doesn\'t wake me up, I\'ll be late for school.'], hint: '"am late" → "will be late" (future result).' },
      { type: 'rewrite', q: 'Rewrite using "unless":\nI won\'t go swimming if the water isn\'t warm.', answer: ['I won\'t go swimming unless the water is warm.', 'Unless the water is warm, I won\'t go swimming.'], hint: '"isn\'t" → "unless... is".' },
      { type: 'rewrite', q: 'Rewrite in passive voice:\nMany people use English every day.', answer: ['English is used by many people every day.'], hint: 'Object "English" becomes subject. Present passive: is used.' },
      { type: 'rewrite', q: 'Rewrite in passive voice (future):\nMy brother will eat the cake.', answer: ['The cake will be eaten by my brother.'], hint: 'Future passive: WILL BE + past participle (eaten).' },
      { type: 'rewrite', q: 'Answer in a full sentence:\nWhat will you do if you find a wallet on the street?', answer: ['If I find a wallet on the street, I will give it to the police.', 'I will give it to the police.', 'I will take it to the police station.', 'If I find a wallet, I will return it.'], hint: 'Format: If I find..., I will + verb. (Return / give it / call the owner)' },
    ]
  },
];

// ============================================================
// Loose match for answer comparison
// Handles contractions, quotes, punctuation, whitespace
// ============================================================
const normalize = (s) => {
  if (!s) return '';
  let result = s.toLowerCase().trim();

  // Unify smart quotes
  result = result
    .replace(/[\u2018\u2019`]/g, "'")
    .replace(/[\u201C\u201D]/g, '"');

  // Expand contractions (so 'll = will, n't = not, etc.)
  result = result
    .replace(/won't/g, 'will not')
    .replace(/can't/g, 'cannot')
    .replace(/shan't/g, 'shall not')
    .replace(/it's/g, 'it is')
    .replace(/that's/g, 'that is')
    .replace(/there's/g, 'there is')
    .replace(/he's/g, 'he is')
    .replace(/she's/g, 'she is')
    .replace(/what's/g, 'what is')
    .replace(/who's/g, 'who is')
    .replace(/where's/g, 'where is')
    .replace(/let's/g, 'let us')
    .replace(/n't/g, ' not')
    .replace(/'ll/g, ' will')
    .replace(/'d /g, ' would ')
    .replace(/'re/g, ' are')
    .replace(/'ve/g, ' have')
    .replace(/'m/g, ' am');

  // Remove punctuation
  result = result.replace(/[.,!?;:]/g, '');

  // Collapse whitespace
  result = result.replace(/\s+/g, ' ').trim();

  return result;
};

const isMatch = (userAnswer, correctAnswers) => {
  const u = normalize(userAnswer);
  const candidates = Array.isArray(correctAnswers) ? correctAnswers : [correctAnswers];
  return candidates.some(c => normalize(c) === u);
};

// ============================================================
// Main App
// ============================================================
export default function App() {
  const [view, setView] = useState('home');
  const [currentSet, setCurrentSet] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userMultiAnswers, setUserMultiAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);
  const [showHint, setShowHint] = useState(false);

  const startQuiz = (set) => {
    setCurrentSet(set);
    setQIndex(0);
    setUserAnswer('');
    setUserMultiAnswers(Array(set.questions[0]?.blanks || 0).fill(''));
    setSubmitted(false);
    setResults([]);
    setShowHint(false);
    setView('quiz');
  };

  const submitAnswer = () => {
    const q = currentSet.questions[qIndex];
    let isCorrect = false;
    let userInput = '';

    if (q.type === 'mcq') {
      isCorrect = parseInt(userAnswer) === q.answer;
      userInput = q.options[parseInt(userAnswer)] || '(no answer)';
    } else if (q.type === 'fill' || q.type === 'rewrite') {
      userInput = userAnswer;
      isCorrect = isMatch(userAnswer, q.answer);
    } else if (q.type === 'multifill') {
      userInput = userMultiAnswers.join(' | ');
      isCorrect = userMultiAnswers.every((ans, i) => isMatch(ans, q.answer[i]));
    }

    const newResults = [...results, {
      qIndex,
      question: q.q,
      userInput,
      isCorrect,
      type: q.type,
      hint: q.hint,
    }];
    setResults(newResults);
    setSubmitted(true);
  };

  const nextQuestion = () => {
    if (qIndex < currentSet.questions.length - 1) {
      setQIndex(qIndex + 1);
      setUserAnswer('');
      setUserMultiAnswers(Array(currentSet.questions[qIndex + 1]?.blanks || 0).fill(''));
      setSubmitted(false);
      setShowHint(false);
    } else {
      setView('results');
    }
  };

  if (view === 'home') {
    return <HomePage onStart={startQuiz} />;
  }

  if (view === 'results') {
    return (
      <ResultsPage
        results={results}
        setTitle={currentSet.title}
        questions={currentSet.questions}
        onRetry={() => startQuiz(currentSet)}
        onHome={() => setView('home')}
        onRetryWrong={() => {
          const wrongQs = results
            .filter(r => !r.isCorrect)
            .map(r => currentSet.questions[r.qIndex]);
          if (wrongQs.length === 0) {
            alert('🎉 All correct! No wrong answers to review.');
            return;
          }
          startQuiz({ ...currentSet, title: 'Wrong Review ・ ' + currentSet.title, questions: wrongQs });
        }}
      />
    );
  }

  const q = currentSet.questions[qIndex];
  const lastResult = results[results.length - 1];
  const progress = ((qIndex + (submitted ? 1 : 0)) / currentSet.questions.length) * 100;

  const typeLabels = {
    mcq: 'Multiple Choice',
    fill: 'Fill in the Blank',
    multifill: 'Multiple Blanks',
    rewrite: 'Rewrite the Sentence',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFF8E7', fontFamily: '"Nunito", system-ui, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
        body { margin: 0; }
        @keyframes pop { 0% { transform: scale(0.8); opacity: 0; } 50% { transform: scale(1.05); } 100% { transform: scale(1); opacity: 1; } }
        @keyframes bounceIn { 0% { transform: scale(0.3); opacity: 0; } 50% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }
        .pop { animation: pop 0.4s ease-out; }
        .bounceIn { animation: bounceIn 0.5s ease-out; }
      `}</style>

      {/* Top progress bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#FFF8E7', borderBottom: '2px dashed #FFD79A', padding: '12px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <button
            onClick={() => { if (confirm('Exit this practice? Your progress will not be saved.')) setView('home'); }}
            style={{ background: 'none', border: 'none', fontSize: 14, color: '#666', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            ← Back to Home
          </button>
          <span style={{ fontFamily: '"Fredoka", sans-serif', fontWeight: 600, fontSize: 15, color: '#444' }}>
            {qIndex + 1} / {currentSet.questions.length}
          </span>
        </div>
        <div style={{ height: 8, backgroundColor: '#FFEAC1', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#FF8C42', transition: 'width 0.4s ease', borderRadius: 4 }} />
        </div>
        <div style={{ fontSize: 12, color: '#888', marginTop: 6, textAlign: 'center', fontFamily: '"Fredoka", sans-serif', fontWeight: 500 }}>
          {currentSet.icon} {currentSet.title}
        </div>
      </div>

      {/* Question content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '20px 16px 120px' }}>
        {currentSet.intro && qIndex === 0 && (
          <div style={{ backgroundColor: '#FFF', padding: '16px 18px', borderRadius: 16, marginBottom: 16, border: '2px solid #FFD79A', boxShadow: '0 4px 12px rgba(255,140,66,0.08)' }}>
            <div style={{ fontSize: 13, color: '#FF8C42', fontWeight: 700, marginBottom: 8, fontFamily: '"Fredoka", sans-serif' }}>📖 READING PASSAGE</div>
            <div style={{ fontSize: 15, lineHeight: 1.7, color: '#333' }}>{currentSet.intro}</div>
          </div>
        )}
        {currentSet.intro && qIndex > 0 && (
          <div style={{ backgroundColor: '#FFF6E0', padding: '8px 12px', borderRadius: 10, marginBottom: 12, fontSize: 12, color: '#A0703D' }}>
            💡 Scroll up to read the passage again if needed.
          </div>
        )}

        {/* Question card */}
        <div className="pop" style={{ backgroundColor: '#FFF', padding: '24px 22px', borderRadius: 20, boxShadow: '0 6px 20px rgba(0,0,0,0.06)', border: '3px solid #FFE4B5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ backgroundColor: '#FF8C42', color: '#FFF', padding: '4px 12px', borderRadius: 20, fontSize: 13, fontWeight: 700, fontFamily: '"Fredoka", sans-serif' }}>Q{qIndex + 1}</span>
            <span style={{ fontSize: 12, color: '#999', fontWeight: 600 }}>・ {typeLabels[q.type]}</span>
          </div>

          <div style={{ fontSize: 17, lineHeight: 1.7, color: '#222', whiteSpace: 'pre-wrap', marginBottom: 20, fontWeight: 500 }}>
            {q.q}
          </div>

          {q.type === 'mcq' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map((opt, i) => {
                const isSelected = userAnswer === String(i);
                const isCorrectChoice = submitted && i === q.answer;
                const isWrongChoice = submitted && isSelected && i !== q.answer;
                return (
                  <button
                    key={i}
                    onClick={() => !submitted && setUserAnswer(String(i))}
                    disabled={submitted}
                    style={{
                      textAlign: 'left',
                      padding: '14px 16px',
                      borderRadius: 14,
                      border: `2.5px solid ${
                        isCorrectChoice ? '#6BCB77'
                          : isWrongChoice ? '#FF6B6B'
                          : isSelected ? '#FF8C42'
                          : '#E5E5E5'
                      }`,
                      backgroundColor: isCorrectChoice ? '#E8F8E8'
                        : isWrongChoice ? '#FFE4E4'
                        : isSelected ? '#FFF1E0'
                        : '#FFF',
                      cursor: submitted ? 'default' : 'pointer',
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#333',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      backgroundColor: isCorrectChoice ? '#6BCB77' : isWrongChoice ? '#FF6B6B' : isSelected ? '#FF8C42' : '#F0F0F0',
                      color: (isCorrectChoice || isWrongChoice || isSelected) ? '#FFF' : '#999',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: 13, flexShrink: 0,
                      fontFamily: '"Fredoka", sans-serif',
                    }}>
                      {isCorrectChoice ? '✓' : isWrongChoice ? '✗' : String.fromCharCode(65 + i)}
                    </span>
                    <span style={{ flex: 1 }}>{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {(q.type === 'fill') && (
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={submitted}
              placeholder="Type your answer here..."
              autoFocus
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: '14px 16px', fontSize: 17,
                border: `2.5px solid ${submitted ? (lastResult.isCorrect ? '#6BCB77' : '#FF6B6B') : '#FFD79A'}`,
                borderRadius: 14,
                backgroundColor: submitted ? (lastResult.isCorrect ? '#E8F8E8' : '#FFE4E4') : '#FFFEF8',
                fontFamily: 'inherit', outline: 'none',
                color: '#333', fontWeight: 600,
              }}
            />
          )}

          {q.type === 'multifill' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {Array.from({ length: q.blanks }).map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 13, color: '#FF8C42', fontWeight: 700, minWidth: 64, fontFamily: '"Fredoka", sans-serif' }}>Blank {i + 1}:</span>
                  <input
                    type="text"
                    value={userMultiAnswers[i] || ''}
                    onChange={(e) => {
                      const newArr = [...userMultiAnswers];
                      newArr[i] = e.target.value;
                      setUserMultiAnswers(newArr);
                    }}
                    disabled={submitted}
                    autoFocus={i === 0}
                    placeholder={`Answer ${i + 1}`}
                    style={{
                      flex: 1, padding: '12px 14px', fontSize: 16,
                      border: `2.5px solid ${
                        submitted ? (isMatch(userMultiAnswers[i] || '', q.answer[i]) ? '#6BCB77' : '#FF6B6B') : '#FFD79A'
                      }`,
                      borderRadius: 12,
                      backgroundColor: submitted ? (isMatch(userMultiAnswers[i] || '', q.answer[i]) ? '#E8F8E8' : '#FFE4E4') : '#FFFEF8',
                      fontFamily: 'inherit', outline: 'none',
                      color: '#333', fontWeight: 600,
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {q.type === 'rewrite' && (
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={submitted}
              placeholder="Type the full sentence here..."
              autoFocus
              rows={3}
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: '14px 16px', fontSize: 16,
                border: `2.5px solid ${submitted ? (lastResult.isCorrect ? '#6BCB77' : '#FF6B6B') : '#FFD79A'}`,
                borderRadius: 14, resize: 'vertical',
                backgroundColor: submitted ? (lastResult.isCorrect ? '#E8F8E8' : '#FFE4E4') : '#FFFEF8',
                fontFamily: 'inherit', outline: 'none',
                color: '#333', fontWeight: 500, lineHeight: 1.5,
              }}
            />
          )}

          {!submitted && q.hint && (
            <div style={{ marginTop: 14 }}>
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  style={{
                    backgroundColor: '#FFF6E0', color: '#A0703D',
                    border: '2px dashed #FFD79A', padding: '8px 14px',
                    borderRadius: 20, fontSize: 13, fontWeight: 700,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  💡 Show Hint
                </button>
              ) : (
                <div style={{ backgroundColor: '#FFF6E0', padding: '10px 14px', borderRadius: 12, fontSize: 13.5, color: '#A0703D', borderLeft: '4px solid #FFB84D' }}>
                  💡 {q.hint}
                </div>
              )}
            </div>
          )}

          {submitted && (
            <div className="bounceIn" style={{ marginTop: 18, padding: '14px 16px', borderRadius: 14, backgroundColor: lastResult.isCorrect ? '#E8F8E8' : '#FFE4E4', borderLeft: `5px solid ${lastResult.isCorrect ? '#6BCB77' : '#FF6B6B'}` }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: lastResult.isCorrect ? '#3A9B47' : '#D14848', marginBottom: 8, fontFamily: '"Fredoka", sans-serif' }}>
                {lastResult.isCorrect ? '🎉 Correct! Great job!' : '😅 Not quite — let\'s learn it!'}
              </div>
              {!lastResult.isCorrect && (
                <div style={{ fontSize: 14, color: '#444', lineHeight: 1.7 }}>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ color: '#888' }}>Your answer: </span>
                    <span style={{ color: '#D14848', fontWeight: 700 }}>{lastResult.userInput || '(blank)'}</span>
                  </div>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ color: '#888' }}>Correct answer: </span>
                    <span style={{ color: '#3A9B47', fontWeight: 700 }}>
                      {q.type === 'mcq' ? q.options[q.answer]
                        : q.type === 'multifill' ? q.answer.map(a => a[0]).join(' / ')
                        : Array.isArray(q.answer) ? q.answer[0] : q.answer}
                    </span>
                  </div>
                  {q.hint && (
                    <div style={{ marginTop: 8, padding: '8px 12px', backgroundColor: '#FFF', borderRadius: 10, fontSize: 13, color: '#666' }}>
                      💡 {q.hint}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom buttons */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: 16, backgroundColor: 'rgba(255,248,231,0.95)', borderTop: '2px solid #FFE4B5', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {!submitted ? (
            <button
              onClick={submitAnswer}
              disabled={
                (q.type === 'mcq' && userAnswer === '') ||
                (q.type === 'fill' && !userAnswer.trim()) ||
                (q.type === 'rewrite' && !userAnswer.trim()) ||
                (q.type === 'multifill' && userMultiAnswers.some(a => !a || !a.trim()))
              }
              style={{
                width: '100%', padding: '16px',
                backgroundColor: '#FF8C42', color: '#FFF',
                border: 'none', borderRadius: 16, fontSize: 17,
                fontWeight: 800, cursor: 'pointer',
                fontFamily: '"Fredoka", sans-serif',
                boxShadow: '0 4px 14px rgba(255,140,66,0.4)',
                opacity: ((q.type === 'mcq' && userAnswer === '') ||
                  (q.type === 'fill' && !userAnswer.trim()) ||
                  (q.type === 'rewrite' && !userAnswer.trim()) ||
                  (q.type === 'multifill' && userMultiAnswers.some(a => !a || !a.trim()))) ? 0.4 : 1,
              }}
            >
              ✓ Submit Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              style={{
                width: '100%', padding: '16px',
                backgroundColor: '#5EBEC4', color: '#FFF',
                border: 'none', borderRadius: 16, fontSize: 17,
                fontWeight: 800, cursor: 'pointer',
                fontFamily: '"Fredoka", sans-serif',
                boxShadow: '0 4px 14px rgba(94,190,196,0.4)',
              }}
            >
              {qIndex < currentSet.questions.length - 1 ? 'Next Question →' : 'Finish ・ See Results 🏆'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Home Page
// ============================================================
function HomePage({ onStart }) {
  const colorMap = {
    sky: { bg: '#E0F4FF', border: '#4DA8DA', text: '#0E5C8A' },
    emerald: { bg: '#D6F5E8', border: '#4DC892', text: '#0B5C40' },
    amber: { bg: '#FFF1CC', border: '#F5B742', text: '#7A5410' },
    rose: { bg: '#FFE0E8', border: '#E66A88', text: '#8B2440' },
    orange: { bg: '#FFE4D1', border: '#FF8C42', text: '#8B4513' },
    violet: { bg: '#EBE0FF', border: '#9B72E0', text: '#4A2D80' },
    pink: { bg: '#FFE0F0', border: '#E670B0', text: '#7A2D5A' },
    teal: { bg: '#D0F0EE', border: '#5EBEC4', text: '#0F5C5C' },
    cyan: { bg: '#D6F2F7', border: '#5DBED4', text: '#0E5C6F' },
    fuchsia: { bg: '#FAD7F0', border: '#D459A9', text: '#7A1A56' },
    indigo: { bg: '#DDD6F5', border: '#7A6FCE', text: '#2F2675' },
    lime: { bg: '#E8F5C7', border: '#9FC73E', text: '#4A5C10' },
    red: { bg: '#FFD7D7', border: '#F26666', text: '#8B1F1F' },
    yellow: { bg: '#FFF1B8', border: '#F0C920', text: '#806010' },
  };

  const totalQuestions = quizSets.reduce((sum, s) => sum + s.questions.length, 0);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFF8E7', fontFamily: '"Nunito", system-ui, sans-serif', paddingBottom: 40 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
        body { margin: 0; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 10px 24px rgba(0,0,0,0.1); }
      `}</style>

      <div style={{
        background: 'linear-gradient(135deg, #FF8C42 0%, #FFB84D 100%)',
        padding: '32px 20px 40px',
        borderRadius: '0 0 32px 32px',
        textAlign: 'center',
        color: '#FFF',
        boxShadow: '0 4px 20px rgba(255,140,66,0.25)',
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>🌟📚🌟</div>
        <h1 style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 28, fontWeight: 700, margin: 0, marginBottom: 6 }}>
          Grammar 5 Final Practice
        </h1>
        <div style={{ fontSize: 14, opacity: 0.95, fontWeight: 600 }}>
          Pathway 5 ・ Unit 4 & 5 ・ Full Question Bank
        </div>
        <div style={{ marginTop: 16, display: 'inline-flex', gap: 12, fontSize: 13, backgroundColor: 'rgba(255,255,255,0.2)', padding: '8px 18px', borderRadius: 20, fontWeight: 700 }}>
          <span>📝 {quizSets.length} Sets</span>
          <span>・</span>
          <span>💯 {totalQuestions} Questions</span>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '20px auto 0', padding: '0 16px' }}>
        <div style={{ backgroundColor: '#FFF', padding: '14px 16px', borderRadius: 16, border: '2px dashed #FFD79A', fontSize: 13.5, color: '#666', lineHeight: 1.7 }}>
          <div style={{ fontWeight: 700, color: '#FF8C42', marginBottom: 6, fontFamily: '"Fredoka", sans-serif' }}>📖 How to use</div>
          Pick a set → answer → submit → see score → retry wrong answers!
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '20px auto 0', padding: '0 16px', display: 'grid', gap: 14 }}>
        {quizSets.map((set) => {
          const c = colorMap[set.color];
          return (
            <button
              key={set.id}
              onClick={() => onStart(set)}
              className="card-hover"
              style={{
                backgroundColor: '#FFF',
                border: `3px solid ${c.border}`,
                borderRadius: 18,
                padding: '16px 18px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                boxShadow: '0 3px 10px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                backgroundColor: c.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, flexShrink: 0,
              }}>{set.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 16, fontWeight: 700, color: c.text, marginBottom: 2 }}>
                  {set.title}
                </div>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 4 }}>{set.subtitle}</div>
                <div style={{ fontSize: 12, color: c.border, fontWeight: 700 }}>
                  📌 {set.questions.length} questions ・ Tap to start
                </div>
              </div>
              <div style={{ color: c.border, fontSize: 22, flexShrink: 0 }}>→</div>
            </button>
          );
        })}
      </div>

      <div style={{ maxWidth: 720, margin: '24px auto 0', padding: '0 16px' }}>
        <div style={{ backgroundColor: '#FFF6E0', borderRadius: 16, padding: '16px', textAlign: 'center', fontSize: 13, color: '#A0703D', fontWeight: 600 }}>
          💪 A little every day, and you will ace the final exam!
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Results Page
// ============================================================
function ResultsPage({ results, setTitle, questions, onRetry, onHome, onRetryWrong }) {
  const correct = results.filter(r => r.isCorrect).length;
  const total = results.length;
  const pct = Math.round((correct / total) * 100);
  const wrongResults = results.filter(r => !r.isCorrect);

  let emoji, msg, color;
  if (pct === 100) { emoji = '🏆'; msg = 'Perfect score! Amazing!'; color = '#FFB400'; }
  else if (pct >= 90) { emoji = '🌟'; msg = 'Excellent! Keep it up!'; color = '#6BCB77'; }
  else if (pct >= 70) { emoji = '👍'; msg = 'Good job! Keep going!'; color = '#5EBEC4'; }
  else if (pct >= 50) { emoji = '💪'; msg = 'Keep practicing!'; color = '#FF8C42'; }
  else { emoji = '📚'; msg = 'Practice makes perfect!'; color = '#FF6B6B'; }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFF8E7', fontFamily: '"Nunito", system-ui, sans-serif', paddingBottom: 40 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap');
        body { margin: 0; }
        @keyframes celebrate { 0% { transform: scale(0) rotate(0deg); opacity: 0; } 50% { transform: scale(1.2) rotate(180deg); } 100% { transform: scale(1) rotate(360deg); opacity: 1; } }
        .celebrate { animation: celebrate 0.8s ease-out; }
      `}</style>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 16px' }}>
        <div style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}DD 100%)`,
          borderRadius: 24, padding: '32px 24px',
          textAlign: 'center', color: '#FFF',
          boxShadow: `0 8px 24px ${color}44`,
        }}>
          <div className="celebrate" style={{ fontSize: 72, marginBottom: 8 }}>{emoji}</div>
          <div style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            {msg}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, opacity: 0.9, fontWeight: 700 }}>Score</div>
              <div style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{pct}</div>
              <div style={{ fontSize: 14, opacity: 0.9 }}>pts</div>
            </div>
            <div style={{ width: 2, backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.9, fontWeight: 700 }}>Correct</div>
              <div style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{correct}</div>
              <div style={{ fontSize: 14, opacity: 0.9 }}>/ {total} questions</div>
            </div>
          </div>
          <div style={{ fontSize: 13, opacity: 0.9, fontWeight: 600 }}>{setTitle}</div>
        </div>

        <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
          {wrongResults.length > 0 && (
            <button
              onClick={onRetryWrong}
              style={{
                padding: '14px', backgroundColor: '#FF6B6B', color: '#FFF',
                border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 800,
                cursor: 'pointer', fontFamily: '"Fredoka", sans-serif',
                boxShadow: '0 4px 14px rgba(255,107,107,0.3)',
              }}
            >
              🔄 Practice Wrong Only ({wrongResults.length} questions)
            </button>
          )}
          <button
            onClick={onRetry}
            style={{
              padding: '14px', backgroundColor: '#5EBEC4', color: '#FFF',
              border: 'none', borderRadius: 14, fontSize: 16, fontWeight: 800,
              cursor: 'pointer', fontFamily: '"Fredoka", sans-serif',
              boxShadow: '0 4px 14px rgba(94,190,196,0.3)',
            }}
          >
            🔁 Retry All
          </button>
          <button
            onClick={onHome}
            style={{
              padding: '14px', backgroundColor: '#FFF', color: '#666',
              border: '2px solid #DDD', borderRadius: 14, fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            🏠 Back to Home
          </button>
        </div>

        {wrongResults.length > 0 && (
          <div style={{ marginTop: 28 }}>
            <h2 style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 20, color: '#D14848', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              📝 Wrong Answers Review ({wrongResults.length})
            </h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {wrongResults.map((r, idx) => {
                const q = questions[r.qIndex];
                return (
                  <div key={idx} style={{ backgroundColor: '#FFF', padding: '16px 18px', borderRadius: 16, border: '2px solid #FFD0D0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <div style={{ fontSize: 12, color: '#FF6B6B', fontWeight: 800, marginBottom: 6, fontFamily: '"Fredoka", sans-serif' }}>
                      Q{r.qIndex + 1}
                    </div>
                    <div style={{ fontSize: 15, color: '#333', marginBottom: 10, whiteSpace: 'pre-wrap', lineHeight: 1.6, fontWeight: 500 }}>
                      {r.question}
                    </div>
                    <div style={{ backgroundColor: '#FFE4E4', padding: '8px 12px', borderRadius: 10, marginBottom: 6, fontSize: 13.5 }}>
                      <span style={{ color: '#888', fontWeight: 700 }}>Your answer: </span>
                      <span style={{ color: '#D14848', fontWeight: 700 }}>{r.userInput || '(blank)'}</span>
                    </div>
                    <div style={{ backgroundColor: '#E8F8E8', padding: '8px 12px', borderRadius: 10, fontSize: 13.5, marginBottom: r.hint ? 6 : 0 }}>
                      <span style={{ color: '#888', fontWeight: 700 }}>Correct: </span>
                      <span style={{ color: '#3A9B47', fontWeight: 700 }}>
                        {q.type === 'mcq' ? q.options[q.answer]
                          : q.type === 'multifill' ? q.answer.map(a => a[0]).join(' / ')
                          : Array.isArray(q.answer) ? q.answer.join('  OR  ') : q.answer}
                      </span>
                    </div>
                    {r.hint && (
                      <div style={{ fontSize: 12.5, color: '#888', marginTop: 6, paddingLeft: 4 }}>
                        💡 {r.hint}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {wrongResults.length === 0 && (
          <div style={{ marginTop: 28, textAlign: 'center', padding: '40px 20px', backgroundColor: '#FFF', borderRadius: 20, border: '3px dashed #6BCB77' }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>🎊🎉🎊</div>
            <div style={{ fontFamily: '"Fredoka", sans-serif', fontSize: 22, color: '#3A9B47', fontWeight: 700 }}>
              All correct! Amazing!
            </div>
            <div style={{ color: '#666', marginTop: 8 }}>No wrong answers to review. Try another set!</div>
          </div>
        )}
      </div>
    </div>
  );
}
