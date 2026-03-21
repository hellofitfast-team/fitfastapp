import { internalMutation } from "./_generated/server";

// ---------------------------------------------------------------------------
// Cardio exercises
// ---------------------------------------------------------------------------

const CARDIO_EXERCISES = [
  {
    name: "Running (Treadmill)",
    nameAr: "جري على جهاز المشي",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["quads", "hamstrings", "calves"],
    secondaryMuscles: ["glutes", "core"],
    equipment: ["treadmill"],
    difficulty: "beginner" as const,
    instructions:
      "Set treadmill to desired speed and incline. Maintain upright posture with arms swinging naturally. Start with a warm-up pace and gradually increase.",
    instructionsAr:
      "اضبط جهاز المشي على السرعة والانحدار المطلوبين. حافظ على وضعية مستقيمة مع تأرجح الذراعين بشكل طبيعي. ابدأ بسرعة إحماء ثم زد تدريجياً.",
    contraindications: ["knee", "ankle", "shin splints"],
    defaultSets: 1,
    defaultRepsMin: 20,
    defaultRepsMax: 40,
    defaultRestSeconds: 60,
    sortOrder: 200,
  },
  {
    name: "Stationary Bike",
    nameAr: "دراجة ثابتة",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["quads", "hamstrings"],
    secondaryMuscles: ["calves", "glutes"],
    equipment: ["stationary bike"],
    difficulty: "beginner" as const,
    instructions:
      "Adjust seat height so leg is slightly bent at the bottom of the pedal stroke. Maintain steady cadence. Increase resistance for more intensity.",
    instructionsAr:
      "اضبط ارتفاع المقعد بحيث تكون الساق منثنية قليلاً في أسفل دورة الدواسة. حافظ على إيقاع ثابت. زد المقاومة لمزيد من الشدة.",
    contraindications: ["knee"],
    defaultSets: 1,
    defaultRepsMin: 20,
    defaultRepsMax: 40,
    defaultRestSeconds: 60,
    sortOrder: 201,
  },
  {
    name: "Rowing Machine",
    nameAr: "جهاز التجديف",
    category: "cardio" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back", "hamstrings"],
    secondaryMuscles: ["biceps", "core", "quads"],
    equipment: ["rowing machine"],
    difficulty: "beginner" as const,
    instructions:
      "Push with legs first, then lean back slightly and pull handle to lower chest. Return in reverse order: arms, body, then legs. Keep core engaged throughout.",
    instructionsAr:
      "ادفع بالساقين أولاً، ثم مِل للخلف قليلاً واسحب المقبض لأسفل الصدر. ارجع بترتيب عكسي: الذراعين ثم الجسم ثم الساقين. حافظ على شد البطن.",
    contraindications: ["lower back", "knee"],
    defaultSets: 1,
    defaultRepsMin: 15,
    defaultRepsMax: 30,
    defaultRestSeconds: 60,
    sortOrder: 202,
  },
  {
    name: "Jump Rope",
    nameAr: "نط الحبل",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["calves"],
    secondaryMuscles: ["quads", "shoulders", "core"],
    equipment: ["jump rope"],
    difficulty: "beginner" as const,
    instructions:
      "Hold rope handles at hip height. Rotate wrists to swing rope overhead. Jump just high enough to clear the rope, landing softly on balls of feet.",
    instructionsAr:
      "امسك مقابض الحبل عند مستوى الورك. أدر المعصمين لتأرجح الحبل فوق الرأس. اقفز بارتفاع كافٍ لتجاوز الحبل مع الهبوط برفق على مقدمة القدمين.",
    contraindications: ["knee", "ankle", "shin splints"],
    defaultSets: 3,
    defaultRepsMin: 30,
    defaultRepsMax: 60,
    defaultRestSeconds: 45,
    sortOrder: 203,
  },
  {
    name: "Battle Ropes",
    nameAr: "حبال المعركة",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["shoulders", "core"],
    secondaryMuscles: ["arms", "back", "legs"],
    equipment: ["battle ropes"],
    difficulty: "intermediate" as const,
    instructions:
      "Hold one end of rope in each hand. Create waves by alternating arms up and down rapidly. Keep knees slightly bent and core engaged.",
    instructionsAr:
      "امسك طرف حبل في كل يد. اصنع موجات بتحريك الذراعين للأعلى والأسفل بالتناوب بسرعة. أبقِ الركبتين منثنيتين قليلاً وشد البطن.",
    contraindications: ["shoulder", "wrist"],
    defaultSets: 3,
    defaultRepsMin: 20,
    defaultRepsMax: 30,
    defaultRestSeconds: 45,
    sortOrder: 204,
  },
  {
    name: "Box Jumps",
    nameAr: "قفز على الصندوق",
    category: "cardio" as const,
    movementPattern: "squat" as const,
    primaryMuscles: ["quads", "glutes"],
    secondaryMuscles: ["calves", "hamstrings", "core"],
    equipment: ["plyo box"],
    difficulty: "intermediate" as const,
    instructions:
      "Stand facing box with feet shoulder-width apart. Swing arms and jump onto box, landing softly with both feet. Stand fully, then step down carefully.",
    instructionsAr:
      "قف أمام الصندوق بعرض الكتفين. أرجح الذراعين واقفز على الصندوق مع الهبوط برفق بكلتا القدمين. قف بالكامل ثم انزل بحذر.",
    contraindications: ["knee", "ankle", "achilles"],
    defaultSets: 3,
    defaultRepsMin: 8,
    defaultRepsMax: 12,
    defaultRestSeconds: 60,
    sortOrder: 205,
  },
  {
    name: "Burpees",
    nameAr: "بيربي",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["chest", "quads", "core"],
    secondaryMuscles: ["shoulders", "triceps", "hamstrings"],
    equipment: ["bodyweight"],
    difficulty: "intermediate" as const,
    instructions:
      "From standing, drop into a squat and place hands on floor. Jump feet back to plank, perform a push-up, jump feet forward, then explosively jump up with arms overhead.",
    instructionsAr:
      "من الوقوف، انزل إلى وضع القرفصاء وضع يديك على الأرض. اقفز بقدميك للخلف إلى وضع البلانك، أدِّ ضغطة، اقفز بقدميك للأمام، ثم اقفز بقوة للأعلى.",
    contraindications: ["shoulder", "wrist", "knee", "lower back"],
    defaultSets: 3,
    defaultRepsMin: 8,
    defaultRepsMax: 15,
    defaultRestSeconds: 60,
    sortOrder: 206,
  },
  {
    name: "Mountain Climbers",
    nameAr: "متسلق الجبال",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["core", "quads"],
    secondaryMuscles: ["shoulders", "hip flexors", "hamstrings"],
    equipment: ["bodyweight"],
    difficulty: "beginner" as const,
    instructions:
      "Start in plank position. Drive one knee toward chest, then quickly switch legs in a running motion. Keep hips level and core tight throughout.",
    instructionsAr:
      "ابدأ بوضعية البلانك. ادفع ركبة واحدة نحو الصدر ثم بدّل الساقين بسرعة بحركة جري. حافظ على استواء الوركين وشد البطن.",
    contraindications: ["wrist", "shoulder"],
    defaultSets: 3,
    defaultRepsMin: 20,
    defaultRepsMax: 30,
    defaultRestSeconds: 30,
    sortOrder: 207,
  },
  {
    name: "Stair Climber",
    nameAr: "جهاز صعود الدرج",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["quads", "glutes", "calves"],
    secondaryMuscles: ["hamstrings", "core"],
    equipment: ["stair climber"],
    difficulty: "beginner" as const,
    instructions:
      "Step onto machine and set desired level. Climb at a steady pace without leaning heavily on handrails. Keep posture upright and drive through each step.",
    instructionsAr:
      "اصعد على الجهاز واضبط المستوى المطلوب. اصعد بوتيرة ثابتة دون الاتكاء بشدة على الدرابزين. حافظ على وضعية مستقيمة وادفع في كل خطوة.",
    contraindications: ["knee", "ankle"],
    defaultSets: 1,
    defaultRepsMin: 15,
    defaultRepsMax: 30,
    defaultRestSeconds: 60,
    sortOrder: 208,
  },
  {
    name: "Assault Bike",
    nameAr: "دراجة الأسولت",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["quads", "hamstrings"],
    secondaryMuscles: ["shoulders", "core", "arms"],
    equipment: ["assault bike"],
    difficulty: "intermediate" as const,
    instructions:
      "Sit on bike and grip handles. Push and pull arms while pedaling legs simultaneously. The harder you push, the greater the resistance. Maintain steady breathing.",
    instructionsAr:
      "اجلس على الدراجة وامسك المقابض. ادفع واسحب الذراعين مع تحريك الساقين بالتزامن. كلما دفعت أقوى زادت المقاومة. حافظ على التنفس المنتظم.",
    contraindications: ["knee", "shoulder"],
    defaultSets: 1,
    defaultRepsMin: 15,
    defaultRepsMax: 30,
    defaultRestSeconds: 60,
    sortOrder: 209,
  },
  {
    name: "Kettlebell Swings",
    nameAr: "تأرجح الكيتل بيل",
    category: "cardio" as const,
    movementPattern: "hinge" as const,
    primaryMuscles: ["glutes", "hamstrings"],
    secondaryMuscles: ["core", "shoulders", "back"],
    equipment: ["kettlebell"],
    difficulty: "intermediate" as const,
    instructions:
      "Stand with feet wider than shoulder-width. Hinge at hips, swing kettlebell between legs, then drive hips forward to swing it to chest height. Control the descent.",
    instructionsAr:
      "قف بقدمين أوسع من عرض الكتفين. انحنِ من الورك وأرجح الكيتل بيل بين الساقين ثم ادفع الوركين للأمام لرفعه لمستوى الصدر. تحكم في النزول.",
    contraindications: ["lower back", "shoulder"],
    defaultSets: 3,
    defaultRepsMin: 12,
    defaultRepsMax: 20,
    defaultRestSeconds: 45,
    sortOrder: 210,
  },
  {
    name: "High Knees",
    nameAr: "رفع الركبتين",
    category: "cardio" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["hip flexors", "quads"],
    secondaryMuscles: ["core", "calves"],
    equipment: ["bodyweight"],
    difficulty: "beginner" as const,
    instructions:
      "Stand tall and run in place, driving knees up to hip height. Pump arms opposite to legs. Land on balls of feet and maintain a fast pace.",
    instructionsAr:
      "قف بشكل مستقيم واجرِ في مكانك مع رفع الركبتين لمستوى الورك. حرك الذراعين بعكس الساقين. انزل على مقدمة القدمين وحافظ على سرعة عالية.",
    contraindications: ["knee", "hip"],
    defaultSets: 3,
    defaultRepsMin: 20,
    defaultRepsMax: 30,
    defaultRestSeconds: 30,
    sortOrder: 211,
  },
  {
    name: "Sled Push",
    nameAr: "دفع الزلاجة",
    category: "cardio" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["quads", "glutes"],
    secondaryMuscles: ["calves", "core", "shoulders"],
    equipment: ["sled"],
    difficulty: "intermediate" as const,
    instructions:
      "Grip sled handles at chest height. Lean forward at 45 degrees and drive through legs, pushing sled forward with powerful steps. Keep core braced throughout.",
    instructionsAr:
      "امسك مقابض الزلاجة عند مستوى الصدر. مِل للأمام بزاوية 45 درجة وادفع بالساقين لدفع الزلاجة للأمام بخطوات قوية. حافظ على شد البطن.",
    contraindications: ["knee", "ankle", "shoulder"],
    defaultSets: 3,
    defaultRepsMin: 1,
    defaultRepsMax: 3,
    defaultRestSeconds: 90,
    sortOrder: 212,
  },
];

// ---------------------------------------------------------------------------
// Advanced exercises
// ---------------------------------------------------------------------------

const ADVANCED_EXERCISES = [
  {
    name: "Muscle Up",
    nameAr: "ماسل أب",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back", "chest"],
    secondaryMuscles: ["biceps", "triceps", "shoulders", "core"],
    equipment: ["pull-up bar"],
    difficulty: "advanced" as const,
    instructions:
      "Hang from bar with false grip. Pull explosively while swinging slightly, transition over the bar, then press to full lockout above the bar.",
    instructionsAr:
      "تعلق من العارضة بقبضة كاذبة. اسحب بقوة مع تأرجح خفيف، انتقل فوق العارضة ثم ادفع للأعلى حتى استقامة الذراعين فوق العارضة.",
    contraindications: ["shoulder", "wrist", "elbow"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 6,
    defaultRestSeconds: 180,
    sortOrder: 300,
  },
  {
    name: "Pistol Squat",
    nameAr: "سكوات بساق واحدة",
    category: "compound" as const,
    movementPattern: "squat" as const,
    primaryMuscles: ["quads", "glutes"],
    secondaryMuscles: ["hamstrings", "core", "calves"],
    equipment: ["bodyweight"],
    difficulty: "advanced" as const,
    instructions:
      "Stand on one leg with the other extended forward. Lower into a deep squat on the standing leg while keeping the extended leg off the ground. Drive back up to standing.",
    instructionsAr:
      "قف على ساق واحدة مع مد الأخرى للأمام. انزل إلى سكوات عميق على الساق الواقفة مع إبقاء الساق الممدودة مرتفعة عن الأرض. ادفع للأعلى للوقوف.",
    contraindications: ["knee", "ankle", "hip"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 6,
    defaultRestSeconds: 120,
    sortOrder: 301,
  },
  {
    name: "Dragon Flag",
    nameAr: "علم التنين",
    category: "isolation" as const,
    movementPattern: "other" as const,
    primaryMuscles: ["core"],
    secondaryMuscles: ["hip flexors", "lower back"],
    equipment: ["bench"],
    difficulty: "advanced" as const,
    instructions:
      "Lie on bench and grip behind head. Raise entire body to vertical, keeping rigid. Lower body in a straight line under control, stopping before hips touch the bench.",
    instructionsAr:
      "استلقِ على البنش وامسك خلف الرأس. ارفع جسمك بالكامل عمودياً مع الحفاظ على الصلابة. أنزل الجسم بخط مستقيم بتحكم قبل أن يلمس الورك البنش.",
    contraindications: ["lower back", "neck", "shoulder"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 8,
    defaultRestSeconds: 120,
    sortOrder: 302,
  },
  {
    name: "Planche Push-Up",
    nameAr: "ضغط بلانش",
    category: "compound" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["chest", "shoulders"],
    secondaryMuscles: ["triceps", "core", "wrist flexors"],
    equipment: ["bodyweight"],
    difficulty: "advanced" as const,
    instructions:
      "Lean forward in a planche position with hands by hips and feet off the ground. Lower chest toward floor maintaining the lean, then press back up.",
    instructionsAr:
      "مِل للأمام في وضعية البلانش مع وضع اليدين بجانب الوركين والقدمين مرفوعتين. أنزل الصدر نحو الأرض مع الحفاظ على الميل ثم ادفع للأعلى.",
    contraindications: ["wrist", "shoulder", "elbow"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 5,
    defaultRestSeconds: 180,
    sortOrder: 303,
  },
  {
    name: "Handstand Push-Up",
    nameAr: "ضغط الوقوف على اليدين",
    category: "compound" as const,
    movementPattern: "push" as const,
    primaryMuscles: ["shoulders"],
    secondaryMuscles: ["triceps", "core", "traps"],
    equipment: ["bodyweight"],
    difficulty: "advanced" as const,
    instructions:
      "Kick up to a handstand against a wall. Lower head toward the floor by bending elbows. Press back up to full lockout. Keep core tight and body straight.",
    instructionsAr:
      "اركل للأعلى إلى وضعية الوقوف على اليدين ضد الحائط. أنزل الرأس نحو الأرض بثني المرفقين. ادفع للأعلى حتى الاستقامة الكاملة. شد البطن وحافظ على استقامة الجسم.",
    contraindications: ["shoulder", "wrist", "neck", "high blood pressure"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 8,
    defaultRestSeconds: 150,
    sortOrder: 304,
  },
  {
    name: "Barbell Snatch",
    nameAr: "سناتش بالبار",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["quads", "glutes", "shoulders"],
    secondaryMuscles: ["hamstrings", "back", "traps", "core"],
    equipment: ["barbell"],
    difficulty: "advanced" as const,
    instructions:
      "Start with bar on floor, wide grip. Pull bar explosively from floor, extend hips and shrug, then drop under bar catching it overhead with arms locked. Stand to finish.",
    instructionsAr:
      "ابدأ بالبار على الأرض بقبضة واسعة. اسحب البار بقوة من الأرض، مد الوركين وارفع الكتفين، ثم انزل تحت البار والتقطه فوق الرأس مع استقامة الذراعين. قف لإنهاء الحركة.",
    contraindications: ["shoulder", "wrist", "lower back", "knee"],
    defaultSets: 4,
    defaultRepsMin: 2,
    defaultRepsMax: 5,
    defaultRestSeconds: 180,
    sortOrder: 305,
  },
  {
    name: "Clean and Jerk",
    nameAr: "كلين أند جيرك",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["quads", "glutes", "shoulders"],
    secondaryMuscles: ["hamstrings", "back", "traps", "core", "triceps"],
    equipment: ["barbell"],
    difficulty: "advanced" as const,
    instructions:
      "Pull bar from floor to shoulders in one explosive movement (clean). Dip knees and drive bar overhead to lockout (jerk). Control the descent back to shoulders.",
    instructionsAr:
      "اسحب البار من الأرض إلى الكتفين بحركة انفجارية واحدة (كلين). اثنِ الركبتين وادفع البار فوق الرأس حتى الاستقامة (جيرك). تحكم في النزول للكتفين.",
    contraindications: ["shoulder", "wrist", "lower back", "knee"],
    defaultSets: 4,
    defaultRepsMin: 2,
    defaultRepsMax: 5,
    defaultRestSeconds: 180,
    sortOrder: 306,
  },
  {
    name: "Front Lever",
    nameAr: "رافعة أمامية",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back", "core"],
    secondaryMuscles: ["biceps", "shoulders", "rear_delts"],
    equipment: ["pull-up bar"],
    difficulty: "advanced" as const,
    instructions:
      "Hang from bar and raise body to horizontal position, keeping arms straight and body rigid. Hold the position with lats and core engaged. Lower with control.",
    instructionsAr:
      "تعلق من العارضة وارفع جسمك لوضعية أفقية مع إبقاء الذراعين مستقيمتين والجسم صلباً. ثبّت الوضعية بشد عضلات الظهر والبطن. انزل بتحكم.",
    contraindications: ["shoulder", "elbow", "lower back"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 5,
    defaultRestSeconds: 150,
    sortOrder: 307,
  },
  {
    name: "Weighted Pull-Up",
    nameAr: "عقلة بأوزان إضافية",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back"],
    secondaryMuscles: ["biceps", "rear_delts", "core"],
    equipment: ["pull-up bar", "weight belt"],
    difficulty: "advanced" as const,
    instructions:
      "Attach weight plate to dip belt. Hang from bar with full arm extension. Pull chin above bar, squeeze back at top, then lower with control.",
    instructionsAr:
      "ثبّت قرص وزن بحزام الغطس. تعلق من العارضة بامتداد كامل للذراعين. اسحب الذقن فوق العارضة واضغط الظهر في الأعلى ثم انزل بتحكم.",
    contraindications: ["shoulder", "elbow", "wrist"],
    defaultSets: 4,
    defaultRepsMin: 4,
    defaultRepsMax: 8,
    defaultRestSeconds: 150,
    sortOrder: 308,
  },
  {
    name: "Deficit Deadlift",
    nameAr: "ديدلفت بعجز",
    category: "compound" as const,
    movementPattern: "hinge" as const,
    primaryMuscles: ["hamstrings", "glutes", "back"],
    secondaryMuscles: ["quads", "core", "grip"],
    equipment: ["barbell", "platform"],
    difficulty: "advanced" as const,
    instructions:
      "Stand on a 2-4 inch platform. Perform a deadlift with the extended range of motion. Keep back flat and drive through heels. The deficit increases lower-body engagement.",
    instructionsAr:
      "قف على منصة بارتفاع 5-10 سم. أدِّ ديدلفت بنطاق حركة ممتد. حافظ على استقامة الظهر وادفع بالكعبين. العجز يزيد من مشاركة الجزء السفلي.",
    contraindications: ["lower back", "hamstring", "herniated disc"],
    defaultSets: 4,
    defaultRepsMin: 4,
    defaultRepsMax: 6,
    defaultRestSeconds: 150,
    sortOrder: 309,
  },
  {
    name: "Pause Squat",
    nameAr: "سكوات مع توقف",
    category: "compound" as const,
    movementPattern: "squat" as const,
    primaryMuscles: ["quads", "glutes"],
    secondaryMuscles: ["hamstrings", "core"],
    equipment: ["barbell", "squat rack"],
    difficulty: "advanced" as const,
    instructions:
      "Perform a back squat but pause for 2-3 seconds at the bottom position. Maintain tension throughout the pause, then drive up explosively. Use lighter weight than regular squats.",
    instructionsAr:
      "أدِّ سكوات خلفي لكن توقف لمدة 2-3 ثوانٍ في الوضعية السفلية. حافظ على الشد طوال التوقف ثم ادفع للأعلى بقوة. استخدم وزناً أخف من السكوات العادي.",
    contraindications: ["knee", "lower back"],
    defaultSets: 4,
    defaultRepsMin: 4,
    defaultRepsMax: 6,
    defaultRestSeconds: 150,
    sortOrder: 310,
  },
  {
    name: "Zercher Squat",
    nameAr: "سكوات زيرشر",
    category: "compound" as const,
    movementPattern: "squat" as const,
    primaryMuscles: ["quads", "glutes", "core"],
    secondaryMuscles: ["biceps", "upper back"],
    equipment: ["barbell", "squat rack"],
    difficulty: "advanced" as const,
    instructions:
      "Hold barbell in the crook of your elbows against your chest. Squat to below parallel while keeping torso upright. Drive up through heels. Great for core and upper back strength.",
    instructionsAr:
      "احمل البار في ثنية المرفقين عند الصدر. انزل بالسكوات تحت الموازي مع إبقاء الجذع مستقيماً. ادفع للأعلى بالكعبين. ممتاز لقوة البطن وأعلى الظهر.",
    contraindications: ["elbow", "lower back", "knee"],
    defaultSets: 3,
    defaultRepsMin: 5,
    defaultRepsMax: 8,
    defaultRestSeconds: 120,
    sortOrder: 311,
  },
  {
    name: "Pendlay Row",
    nameAr: "تجديف بندلاي",
    category: "compound" as const,
    movementPattern: "pull" as const,
    primaryMuscles: ["back"],
    secondaryMuscles: ["biceps", "rear_delts", "core"],
    equipment: ["barbell"],
    difficulty: "advanced" as const,
    instructions:
      "Bend over with torso parallel to floor. Pull bar explosively from floor to lower chest, then lower it back to the floor completely each rep. Reset between reps.",
    instructionsAr:
      "انحنِ بحيث يكون الجذع موازياً للأرض. اسحب البار بقوة من الأرض لأسفل الصدر ثم أنزله بالكامل للأرض في كل تكرار. أعد الضبط بين التكرارات.",
    contraindications: ["lower back", "hamstring"],
    defaultSets: 4,
    defaultRepsMin: 5,
    defaultRepsMax: 8,
    defaultRestSeconds: 120,
    sortOrder: 312,
  },
  {
    name: "Nordic Hamstring Curl",
    nameAr: "تمرين الهامسترينج النوردي",
    category: "isolation" as const,
    movementPattern: "hinge" as const,
    primaryMuscles: ["hamstrings"],
    secondaryMuscles: ["glutes", "calves"],
    equipment: ["bodyweight"],
    difficulty: "advanced" as const,
    instructions:
      "Kneel with ankles secured under a pad or partner. Slowly lower your body forward by extending at the knees, resisting gravity with your hamstrings. Catch yourself and push back up.",
    instructionsAr:
      "اركع مع تثبيت الكاحلين تحت وسادة أو بمساعدة شريك. أنزل جسمك للأمام ببطء بمد الركبتين مقاوماً الجاذبية بعضلات الهامسترينج. التقط نفسك وادفع للأعلى.",
    contraindications: ["knee", "hamstring"],
    defaultSets: 3,
    defaultRepsMin: 3,
    defaultRepsMax: 8,
    defaultRestSeconds: 120,
    sortOrder: 313,
  },
];

// ---------------------------------------------------------------------------
// Idempotent seed function — checks by name before inserting
// ---------------------------------------------------------------------------

export const seedExercises = internalMutation({
  args: {},
  handler: async (ctx) => {
    const allExercises = [...CARDIO_EXERCISES, ...ADVANCED_EXERCISES];

    // Get existing exercise names for dedup
    const existing = await ctx.db.query("exerciseDatabase").collect();
    const existingNames = new Set(existing.map((e) => e.name));

    const now = Date.now();
    let inserted = 0;
    let skipped = 0;

    for (const exercise of allExercises) {
      if (existingNames.has(exercise.name)) {
        skipped++;
        continue;
      }

      await ctx.db.insert("exerciseDatabase", {
        ...exercise,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      });
      inserted++;
    }

    return { inserted, skipped, total: allExercises.length };
  },
});
