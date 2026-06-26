const tricks = [
            {
                section: "Vocab",
                module: "Vocabulary",
                topic: "Word Meanings",
                tags: ["adjective", "biology"],
                title: "Nocturnal",
                whatItIs: "Active or occurring during the night.",
                howToUseIt: "Use this to describe animals, habits, or events that happen at night.",
                example: "Owls are nocturnal creatures that hunt in the dark.",
                similarTricks: ["Diurnal", "Crepuscular"]
            },
            {
                section: "Quant",
                title: "Algebraic Substitution & Extreme Cases",
                tags: ["Algebraic Shortcuts"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "Substituting abstract algebraic variables with small, concrete numbers to solve expressions instantly, and using mathematical edge cases (like 0, 1, -1, or fractions) to test and disprove general multiple-choice statements.",
                whereToUse: "Use on Multiple Choice Questions (MCQs) containing algebraic expressions, inequalities, or variables in the answer choices.",
                logic: "1. <strong>Substitution</strong>: If a statement holds true for all numbers in a range, it must hold true for specific values in that range. Pick small, distinct integers to calculate option values.<br>2. <strong>Extreme Cases</strong>: Test general claims with boundary numbers: <strong>0</strong> (collapses products), <strong>1</strong> (masks powers), <strong>negatives</strong> (flips inequality signs), and <strong>fractions between 0 and 1</strong> (shrink when squared instead of growing).",
                formula: null,
                example: "<strong>CAT-Style:</strong> 'Which is always true for \\( x > 0 \\)?'<br>&bull; Option A: \\( x^2 > x \\). Stress test with \\( x = 0.5 \\rightarrow 0.25 > 0.5 \\)? <strong>FALSE.</strong> Eliminated.<br>&bull; Option B: \\( x + 1 > x \\). Try \\( x = 0.5 \\rightarrow 1.5 > 0.5 \\)? TRUE. Try \\( x = 100 \\rightarrow 101 > 100 \\)? TRUE. <strong>Answer: B.</strong>",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Factorial Exponents & Bottlenecks",
                tags: ["Prime Factors"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "A systematic technique to find the highest power (exponent \\( k \\)) of any divisor \\( X \\) (whether \\( X \\) is prime, a prime power, or composite) that divides a factorial \\( N! \\) without remainder.",
                whereToUse: "Use when finding the highest power \\( k \\) such that \\( X^k \\) divides \\( N! \\) (written as \\( X^k \\mid N! \\)), or when counting trailing zeros in \\( N! \\) (which is the highest power of 10).",
                logic: "1. <strong>Successive Division (Legendre's Formula)</strong>: To count a prime factor \\( p \\) in \\( N! \\), divide \\( N \\) by \\( p \\), then the quotient by \\( p \\), and sum all quotients.<br>2. <strong>Batching</strong>: If the divisor is \\( p^a \\) (like \\( 8 = 2^3 \\)), count total \\( p \\) and divide by \\( a \\) to form complete groups.<br>3. <strong>Bottlenecking</strong>: If the divisor is composite \\( p^a q^b \\) (like \\( 12 = 2^2 \\times 3 \\)), compute the count for each prime component. The component with the smallest count is your bottleneck.<br>4. <strong>Speed Hack</strong>: For simple composites like \\( 15 = 3 \\times 5 \\), only check the larger prime \\( 5 \\) because it runs out first.",
                formula: "Exponent of prime \\( p \\) in \\( N! \\): \\( E_p(N!) = \\sum_{k=1}^{\\infty} \\lfloor \\frac{N}{p^k} \\rfloor \\)<br>Exponent of composite \\( p^a q^b \\): \\( \\min\\left( \\lfloor \\frac{E_p(N!)}{a} \\rfloor, \\lfloor \\frac{E_q(N!)}{b} \\rfloor \\right) \\)",
                example: "<strong>Q: Highest power of 12 that divides 50!</strong><br>\\( 12 = 2^2 \\times 3 \\). Need batches of two 2s AND one 3.<br>&bull; <strong>Count 2s:</strong> 25+12+6+3+1 = 47. Batches of 2 &rarr; \\( 47 \\div 2 = 23 \\).<br>&bull; <strong>Count 3s:</strong> 16+5+1 = 22. Batches of 1 &rarr; 22.<br>&bull; <strong>Bottleneck:</strong> min(23, 22) = <strong>22</strong>. So \\( 12^{22} \\mid 50! \\).<br><br><strong>Speed Hack:</strong> Highest power of 15 in 40!? \\( 15 = 3 \\times 5 \\). Larger prime = 5. Count 5s: 8+1 = 9. Answer: <strong>9</strong>.",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Integer Constraint Lock-In",
                tags: ["Equations & Roots"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "Solving exponent equations or number theory systems by leveraging integer boundaries. When variables are constrained to integers, the set of possible solutions is extremely small.",
                whereToUse: "Use on equations where variables are explicitly restricted to integers, natural numbers, or whole numbers, especially in exponential equations or Diophantine-like algebra.",
                logic: "If an equation like \\( x^n = K \\) has integer constraints, try \\( x=1 \\) first (only works if \\( K=1 \\)), then \\( x=2 \\), etc. Because powers grow exponentially, options are highly limited. You can guess and verify in seconds instead of solving algebraically.",
                formula: null,
                example: "<strong>Q:</strong> If \\( 2^{2x+1} = 32 \\) and \\( x \\) is a positive integer, find \\( x \).<br>&bull; \\( 32 = 2^5 \\), so \\( 2x+1 = 5 \\rightarrow x = 2 \\). <strong>Done in 5 seconds.</strong><br>&bull; No quadratic formula, no logs &mdash; just match the powers because you know \\( x \\) must be an integer.",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Fractions Shift (Dilute vs. Concentrate)",
                tags: ["Fractions & Decimals"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "A rule to instantly compare two fractions or understand how a fraction changes when the same positive constant is added or subtracted from both the numerator and denominator.",
                whereToUse: "Use to compare fraction sizes, verify inequality shifts, or determine the direction of a ratio change when equal amounts are added/subtracted.",
                logic: "1. <strong>Dilution (Adding)</strong>: Adding a constant \\( c > 0 \\) to both terms of a top-heavy fraction \\( a/b > 1 \\) pulls its value <strong>down</strong> toward 1.<br>2. <strong>Concentration (Subtracting)</strong>: Subtracting a constant \\( c > 0 \\) from both terms of a top-heavy fraction \\( a/b > 1 \\) pushes its value <strong>up</strong> away from 1.<br>(Think of juice: adding water/juice to a concentrated cup dilutes the taste; removing ingredients concentrates it.)",
                formula: "\\( \\frac{a+c}{b+c} < \\frac{a}{b} < \\frac{a-c}{b-c} \\) &nbsp; (when \\( a > b > 0 \\) and \\( c > 0 \\))",
                example: "<strong>Q: Arrange in order:</strong> \\( \\frac{4}{3},\\; \\frac{3}{2},\\; \\frac{2}{1} \\)<br>&bull; Start from \\( 3/2 \\). Add 1 to both &rarr; \\( 4/3 \\) (diluted, smaller). Subtract 1 from both &rarr; \\( 2/1 \\) (concentrated, larger).<br>&bull; Order: \\( 4/3 < 3/2 < 2/1 \\). <strong>No cross-multiplication needed.</strong>",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Prime Sum Ratio Check",
                tags: ["Ratios & Proportions"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "A rapid shortcut to identify valid ratios representing divisions of a prime total. Because a prime total \\( P \\) cannot be divided into non-trivial equal integer groups, the sum of the ratio terms must divide the total directly (usually meaning the ratio sum itself must equal the prime).",
                whereToUse: "Use on ratio word problems where the total population/quantity is explicitly stated to be a <strong>prime number</strong>.",
                logic: "A ratio of \\( a:b \\) implies the total count is \\( k \\times (a+b) \\) for some positive integer \\( k \\). If the total count is a prime number \\( P \\), then the only integer factors of the total are 1 and \\( P \\). Since \\( a+b > 1 \\), \\( k \\) must be 1, which forces the ratio sum \\( a+b \\) to equal \\( P \\).",
                formula: null,
                example: "<strong>Q:</strong> A company has a prime number of employees. The male-to-female ratio is either 87:100 or 97:84. Which is valid?<br>&bull; Option A: \\( 87 + 100 = 187 = 11 \\times 17 \\). NOT prime. ❌<br>&bull; Option B: \\( 97 + 84 = 181 \\). Is 181 prime? Not divisible by 2, 3, 5, 7, 11, 13 &mdash; yes, <strong>181 is prime ✓</strong>.<br>&bull; <strong>Answer: B.</strong> Solved in 15 seconds by just adding two numbers.",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Digit Reversal & the 9s Rule",
                tags: ["Integers"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "A divisibility rule showing that the difference between any two-digit number and its digit-reversed counterpart is always a multiple of 9, and the quotient after dividing by 9 is the exact gap between the digits.",
                whereToUse: "Use on two-digit number problems where digits are reversed and the difference is given (e.g., 'reversed number increases/decreases by \\( X \\)').",
                logic: "A two-digit number is \\( 10A + B \\). Its reverse is \\( 10B + A \\). The absolute difference is \\( |(10A + B) - (10B + A)| = 9|A - B| \\). Dividing the difference by 9 gives the exact difference between the two digits, \\( |A-B| \\), instantly.",
                formula: "\\( \\frac{|\\text{Difference}|}{9} = |A - B| \\text{ (Digit Gap)} \\)",
                example: "<strong>Q:</strong> A two-digit number increases by 27 when its digits are reversed. Find the digit gap and list possible numbers.<br>&bull; \\( 27 \\div 9 = 3 \\). The digits are exactly <strong>3 apart</strong>.<br>&bull; Since the number increases when reversed, the tens digit is smaller. Possible: <strong>14, 25, 36, 47, 58, 69</strong>.<br>&bull; If a second condition says 'digits sum to 7', then \\( 25 \\) is the answer. (2+5=7, gap=3 ✓)",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Power Towers vs. Nested Radicals",
                tags: ["Indices & Surds"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "Clarifying rules for exponent towers vs bracketed powers, and nested root simplification.",
                whereToUse: "Use when simplifying multi-level indices (with or without parentheses) or nested root structures in expressions.",
                logic: "1. <strong>Parentheses</strong>: Exponents inside/outside brackets multiply: \\( (x^A)^B = x^{A \\times B} \\).<br>2. <strong>Power Tower</strong>: Exponents without brackets are solved top-down: \\( x^{A^B} = x^{(A^B)} \\). This grows extremely fast.<br>3. <strong>Nested Radicals</strong>: Nested roots can be combined into a single root by multiplying their indices: \\( \\sqrt[A]{\\sqrt[B]{x}} = \\sqrt[A \\times B]{x} \\).",
                formula: "\\( (x^A)^B = x^{A \\times B} \\quad \\text{vs.} \\quad x^{A^B} \\)<br>\\( \\sqrt[A]{\\sqrt[B]{x}} = \\sqrt[A \\times B]{x} \\)",
                example: "<strong>Spot the Trap:</strong><br>&bull; \\( (2^3)^2 = 2^{3 \\times 2} = 2^6 = 64 \\). (Brackets &rarr; multiply.)<br>&bull; \\( 2^{3^2} = 2^9 = 512 \\). (Tower &rarr; top-down. 512 is <strong>8&times; bigger!</strong>)<br><br><strong>Nested Roots:</strong> \\( \\sqrt[3]{\\sqrt[4]{x}} = \\sqrt[12]{x} \\). Just multiply \\( 3 \\times 4 = 12 \\).",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Quant",
                title: "Micro-Modeling for Sequences",
                tags: ["Sequences & Series"],
                module: "Module 1",
                topic: "Properties of Nos",
                whatItIs: "Reducing a complex, large-scale sequence or series down to a small, hand-calculable size (e.g., \\( N=2 \\) or \\( N=3 \\)) to test and match algebraic options.",
                whereToUse: "Use on sequence, series, or progression questions with algebraic formulas in the multiple-choice options.",
                logic: "If a mathematical formula holds true for \\( N = 1000 \\) terms, it must also hold true for \\( N = 2 \\) or \\( N = 3 \\). Calculate the sum manually for \\( N=3 \\), then substitute \\( N=3 \\) into the options. The correct option will yield the exact same value.",
                formula: null,
                example: "<strong>Q:</strong> Find the sum \\( 1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\cdots \\) up to \\( N \\) terms.<br>&bull; <strong>Shrink:</strong> Set \\( N = 3 \\). Manual sum = \\( 2 + 6 + 12 = 20 \\).<br>&bull; <strong>Test options with N=3:</strong><br>&nbsp;&nbsp;A) \\( N(N+1)/2 = 6 \\). ❌<br>&nbsp;&nbsp;B) \\( N(N+1)(N+2)/3 = 20 \\). ✅<br>&nbsp;&nbsp;C) \\( N^2(N+1)/2 = 18 \\). ❌<br>&bull; <strong>Answer: B.</strong> Solved a scary sum without any algebra.",
                icon1: "🔍", icon2: "🎯", icon3: "🧠", icon4: "📐", icon5: "💡"
            },
            {
                section: "Vocab",
                title: "Endowment",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "A natural gift, ability, or quality.",
                whereToUse: "en-DOW-ment",
                logic: "<strong>Origin:</strong> From Old French 'endouer' (to provide with a dowry).<br><strong>Memory Trick:</strong> Think of being 'endowed' with a huge pile of money or talent.",
                formula: "Gift, Talent",
                example: "His physical endowment made him a natural athlete.<br><strong>Swap test:</strong> His physical <em>talent</em> made him a natural athlete.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: En- / Em- (In/Make)"
            },
            {
                section: "Vocab",
                title: "Congenital",
                tags: ["Adjectives", "Roots"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "A disease or physical abnormality present from birth.",
                whereToUse: "kun-JEN-uh-tul",
                logic: "<strong>Origin:</strong> Latin 'congenitus' (born with).<br><strong>Memory Trick:</strong> 'Con' (with) + 'genital' (genes/birth).",
                formula: "Inborn, Inherited",
                example: "He had a congenital heart defect.<br><strong>Swap test:</strong> He had an <em>inborn</em> heart defect.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Con- / Com- (With/Together)"
            },
            {
                section: "Vocab",
                title: "Pedagogy",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "The method and practice of teaching.",
                whereToUse: "PED-uh-go-jee",
                logic: "<strong>Origin:</strong> Greek 'paidagōgia' (office of a child's tutor).<br><strong>Memory Trick:</strong> 'Ped' (child) + 'gogy' (leading).",
                formula: "Teaching, Education",
                example: "Her progressive pedagogy improved student engagement.<br><strong>Swap test:</strong> Her progressive <em>teaching</em> improved student engagement.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Ped- (Greek: Child)"
            },
            {
                section: "Vocab",
                title: "Confer",
                tags: ["Verbs"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Grant or bestow a title, degree, benefit, or right.",
                whereToUse: "kun-FUR",
                logic: "<strong>Origin:</strong> Latin 'conferre' (bring together).<br><strong>Memory Trick:</strong> You confer in a conference.",
                formula: "Grant, Consult",
                example: "The university will confer an honorary doctorate upon him.<br><strong>Swap test:</strong> The university will <em>grant</em> an honorary doctorate upon him.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Con- / Com- (With/Together)"
            },
            {
                section: "Vocab",
                title: "Incongruous",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Not in harmony or keeping with the surroundings.",
                whereToUse: "in-KONG-groo-us",
                logic: "<strong>Origin:</strong> Latin 'incongruus'.<br><strong>Memory Trick:</strong> 'In' (not) + 'congruous' (like congruent math shapes that match).",
                formula: "Out of place, Unsuited",
                example: "The modern glass building looked incongruous next to the historic church.<br><strong>Swap test:</strong> The modern glass building looked <em>out of place</em> next to the historic church.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: In- / Im- (Latin: Not)"
            },
            {
                section: "Vocab",
                title: "Bewail",
                tags: ["Verbs"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Express great regret, disappointment, or bitterness.",
                whereToUse: "bih-WAYL",
                logic: "<strong>Origin:</strong> Middle English.<br><strong>Memory Trick:</strong> Think of someone 'wailing' in sadness.",
                formula: "Lament, Mourn",
                example: "They bewail the fact that they didn't invest earlier.<br><strong>Swap test:</strong> They <em>lament</em> the fact that they didn't invest earlier.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Be- (Make/Thoroughly)"
            },
            {
                section: "Vocab",
                title: "Kennels",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "A small shelter for a dog.",
                whereToUse: "KEN-ulz",
                logic: "<strong>Origin:</strong> Old French 'chenil' (from chien 'dog').<br><strong>Memory Trick:</strong> Where Ken puts his dogs.",
                formula: "Doghouse, Shelter",
                example: "We left our dogs in the kennels while on vacation.<br><strong>Swap test:</strong> We left our dogs in the <em>doghouse</em> while on vacation.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Can- (Latin: Dog)"
            },
            {
                section: "Vocab",
                title: "Loom / Looms",
                tags: ["Verbs"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "A stressful or important event that is about to happen very soon.",
                whereToUse: "LOOMZ",
                logic: "<strong>Origin:</strong> Old sailing terms for a ship appearing through fog.<br><strong>Memory Trick:</strong> A giant 'loom' casting a scary shadow over you.",
                formula: "Hovers, Approaches, Threatens, Impends",
                example: "As November gets closer, the pressure of the upcoming CAT exam looms over all the serious students.<br><strong>Swap test:</strong> As November gets closer, the pressure of the upcoming CAT exam <em>hovers</em> over all the serious students.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Middle English / Germanic"
            },
            {
                section: "Vocab",
                title: "Coming of age",
                tags: ["Idioms"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "The time when a person officially or emotionally becomes an adult.",
                whereToUse: "KUM-ing uv AYJ",
                logic: "<strong>Origin:</strong> A literal phrase dating back centuries.<br><strong>Memory Trick:</strong> You are coming into your final age.",
                formula: "Reaching adulthood, Maturing",
                example: "Taking on the project was a true coming of age experience for the young developer.<br><strong>Swap test:</strong> Taking on the project was a true <em>maturing</em> experience for the young developer.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Phrases & Idioms"
            },
            {
                section: "Vocab",
                title: "Holistic",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "Dealing with or treating the whole of something or someone and not just a part.",
                whereToUse: "ho-lis-tik",
                logic: "<strong>Origin:</strong> From Greek holos meaning 'whole'.<br><strong>Memory Trick:</strong> 'Whole-istic' &mdash; focusing on the whole picture.",
                formula: "Comprehensive, All-inclusive",
                example: "The doctor took a holistic approach to her patient's health.<br><strong>Swap test:</strong> The doctor took a <em>comprehensive</em> approach to her patient's health.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Hol- (Greek: Whole)"
            },
            {
                section: "Vocab",
                title: "Multitiered",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Having many levels, layers, or ranks.",
                whereToUse: "muhl-tee-teerd",
                logic: "<strong>Origin:</strong> Prefix multi- + tier (Old French tire meaning 'row' or 'rank').<br><strong>Memory Trick:</strong> Imagine a giant wedding cake with multiple tiers.",
                formula: "Multi-layered, Stratified",
                example: "The company launched a multitiered marketing campaign.<br><strong>Swap test:</strong> The company launched a <em>multi-layered</em> marketing campaign.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Multi- (Latin: Many)"
            },
            {
                section: "Vocab",
                title: "Doting",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Extremely and uncritically fond of someone.",
                whereToUse: "doh-ting",
                logic: "<strong>Origin:</strong> From Middle English doten, meaning 'to behave foolishly.'<br><strong>Memory Trick:</strong> A doting parent leaves little dots of love everywhere.",
                formula: "Adoring, Devoted",
                example: "The doting grandmother bought gifts for the baby every week.<br><strong>Swap test:</strong> The <em>adoring</em> grandmother bought gifts for the baby every week.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Middle English / Germanic"
            },
            {
                section: "Vocab",
                title: "Profoundly",
                tags: ["Adverbs"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "To a very great or intense extent.",
                whereToUse: "pruh-found-lee",
                logic: "<strong>Origin:</strong> From Latin profundus, meaning 'deep.'<br><strong>Memory Trick:</strong> If something is profound, you found a pro deep inside.",
                formula: "Deeply, Immensely",
                example: "I was profoundly moved by the film's conclusion.<br><strong>Swap test:</strong> I was <em>deeply</em> moved by the film's conclusion.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Pro- (Latin: Forward/For)"
            },
            {
                section: "Vocab",
                title: "Precipitous",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Dangerously high or steep; done suddenly without careful consideration.",
                whereToUse: "pri-sip-i-tuhs",
                logic: "<strong>Origin:</strong> From Latin praeceps, meaning 'headlong.'<br><strong>Memory Trick:</strong> Think of precipice &mdash; falling abruptly off a cliff.",
                formula: "Steep, Abrupt",
                example: "There was a precipitous drop in stock prices.<br><strong>Swap test:</strong> There was an <em>abrupt</em> drop in stock prices.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Pre- (Latin: Before)"
            },
            {
                section: "Vocab",
                title: "Intricate",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Very complicated or detailed.",
                whereToUse: "in-tri-kit",
                logic: "<strong>Origin:</strong> From Latin intricare, meaning 'to entangle.'<br><strong>Memory Trick:</strong> In a trick, there are many complicated steps.",
                formula: "Complex, Elaborate",
                example: "The watch mechanism was full of intricate gears.<br><strong>Swap test:</strong> The watch mechanism was full of <em>complex</em> gears.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: In- / Im- (Latin: Not)"
            },
            {
                section: "Vocab",
                title: "Culling",
                tags: ["Nouns", "Verbs"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Selecting from a large quantity, often by reducing the population of a wild animal.",
                whereToUse: "kuhl-ing",
                logic: "<strong>Origin:</strong> From Latin colligere, meaning 'to gather together.'<br><strong>Memory Trick:</strong> Culling is like picking the cool ones out of the group.",
                formula: "Selecting, Thinning",
                example: "He spent the afternoon culling the best photos from the trip.<br><strong>Swap test:</strong> He spent the afternoon <em>selecting</em> the best photos from the trip.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Con- / Com- (With/Together)"
            },
            {
                section: "Vocab",
                title: "Suburbs",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "Residential areas near a city.",
                whereToUse: "suhb-urbs",
                logic: "<strong>Origin:</strong> Latin sub 'near' + urbs 'city'.<br><strong>Memory Trick:</strong> The subway takes you from the urbs (city) out to the suburbs.",
                formula: "Outskirts, Environs",
                example: "They moved to the suburbs to have a larger yard.<br><strong>Swap test:</strong> They moved to the <em>outskirts</em> to have a larger yard.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Sub- (Latin: Under/Near)"
            },
            {
                section: "Vocab",
                title: "Sheepish",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "Feeling embarrassed or shy after a mistake.",
                whereToUse: "shee-pish",
                logic: "<strong>Origin:</strong> Middle English sheep &mdash; representing the meek nature of a sheep.<br><strong>Memory Trick:</strong> Imagine hiding your face behind a fluffy sheep because you're embarrassed.",
                formula: "Bashful, Ashamed",
                example: "He gave a sheepish grin after tripping on the stairs.<br><strong>Swap test:</strong> He gave a <em>bashful</em> grin after tripping on the stairs.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Animal Metaphors"
            },
            {
                section: "Vocab",
                title: "Influxes",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Large amounts of people or things arriving at once.",
                whereToUse: "in-fluhk-siz",
                logic: "<strong>Origin:</strong> Latin influere 'to flow into'.<br><strong>Memory Trick:</strong> An in-flux is when things flow in fast.",
                formula: "Sudden arrivals, Invasions",
                example: "The city struggled to handle the sudden influxes of tourists.<br><strong>Swap test:</strong> The city struggled to handle the <em>sudden arrivals</em> of tourists.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: In- / Im- (Latin: Not)"
            },
            {
                section: "Vocab",
                title: "Thriftiness",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "The habit of managing money carefully and avoiding waste.",
                whereToUse: "thrif-tee-nis",
                logic: "<strong>Origin:</strong> Old Norse thrif 'success or thriving'.<br><strong>Memory Trick:</strong> Shopping at a thrift store shows thriftiness.",
                formula: "Frugality, Economy",
                example: "Her thriftiness allowed her to save for a new car.<br><strong>Swap test:</strong> Her <em>frugality</em> allowed her to save for a new car.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Old Norse / Germanic"
            },
            {
                section: "Vocab",
                title: "Stoic",
                tags: ["Adjectives", "Nouns"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "Enduring stress or difficulty without complaining or showing emotion.",
                whereToUse: "stoh-ik",
                logic: "<strong>Origin:</strong> Greek stoa 'porch,' where ancient philosophers lectured.<br><strong>Memory Trick:</strong> A stoic stands still like a stone no matter what hits them.",
                formula: "Unflappable, Patient",
                example: "He remained completely stoic during the intense interrogation.<br><strong>Swap test:</strong> He remained completely <em>unflappable</em> during the intense interrogation.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Greek Philosophy"
            },
            {
                section: "Vocab",
                title: "Scandalise",
                tags: ["Verbs"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "To deeply shock or offend someone by breaking a social rule.",
                whereToUse: "skan-dl-ahyz",
                logic: "<strong>Origin:</strong> Greek skandalon 'stumbling block'.<br><strong>Memory Trick:</strong> To cause a scandal right before their eyes.",
                formula: "Offend, Outrage",
                example: "The politician's behavior managed to scandalise the entire town.<br><strong>Swap test:</strong> The politician's behavior managed to <em>offend</em> the entire town.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Greek Philosophy"
            },
            {
                section: "Vocab",
                title: "Endeavour",
                tags: ["Nouns", "Verbs"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "A serious effort or attempt to achieve a goal.",
                whereToUse: "in-dev-er",
                logic: "<strong>Origin:</strong> Middle English en 'in' + devoir 'duty'.<br><strong>Memory Trick:</strong> It takes great effort to end-ever (endeavour) a tough journey.",
                formula: "Undertaking, Enterprise",
                example: "Climbing the mountain was a dangerous endeavour.<br><strong>Swap test:</strong> Climbing the mountain was a dangerous <em>undertaking</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: En- / Em- (In/Make)"
            },
            {
                section: "Vocab",
                title: "Backgammon",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "A board game for two players played with dice and flat round pieces.",
                whereToUse: "bak-gam-uhn",
                logic: "<strong>Origin:</strong> Middle English baek 'back' + gamen 'game'.<br><strong>Memory Trick:</strong> You play it on the back of the gammon (board).",
                formula: "Tabletop game, Board game",
                example: "We played backgammon all afternoon.<br><strong>Swap test:</strong> We played a <em>tabletop game</em> all afternoon.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Germanic / Old English"
            },
            {
                section: "Vocab",
                title: "Craned",
                tags: ["Verbs"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Stretched out your neck to see or hear something better.",
                whereToUse: "kraynd",
                logic: "<strong>Origin:</strong> Named after the Crane bird, known for its long neck.<br><strong>Memory Trick:</strong> Stretching your neck like a crane bird.",
                formula: "Elongated, Stretched",
                example: "She craned her neck to see over the crowd.<br><strong>Swap test:</strong> She <em>elongated</em> her neck to see over the crowd.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Animal Metaphors"
            },
            {
                section: "Vocab",
                title: "Eulogy",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "Good words, usually given as a speech in praise of someone.",
                whereToUse: "YOO-luh-jee",
                logic: "<strong>Origin:</strong> Derived from the Greek root \"eu-\" meaning good and \"logos\" meaning study/words.<br><strong>Memory Trick:</strong> Think of it as <strong>you</strong> giving a <strong>logy</strong> (speech) to say genuinely good things about a person's life.",
                formula: "Tribute, commendation",
                example: "The brother of the deceased delivered a moving eulogy (good words; tribute) that brought the room to tears.<br><strong>Swap test:</strong> The brother of the deceased delivered a moving <em>tribute</em> that brought the room to tears.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Eu- (Greek: Good/Well)"
            },
            {
                section: "Vocab",
                title: "Euthanasia",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "A good death or mercy killing.",
                whereToUse: "yoo-thuh-NAY-zhuh",
                logic: "<strong>Origin:</strong> Derived from the Greek root \"eu-\" meaning good and \"thanatos\" meaning death.<br><strong>Memory Trick:</strong> The word sounds a bit like \"Youth in Asia,\" but focus on the root <em>eu</em> (good) to remember it as a medical procedure intended to provide a \"good\" or painless end to suffering.",
                formula: "Assisted suicide, mercy killing",
                example: "The country recently updated its legal framework regarding the practice of euthanasia (mercy killing; assisted suicide) for terminally ill patients.<br><strong>Swap test:</strong> The country recently updated its legal framework regarding the practice of <em>assisted suicide</em> for terminally ill patients.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Eu- (Greek: Good/Well)"
            },
            {
                section: "Vocab",
                title: "Euphony",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "A good sound.",
                whereToUse: "YOO-fuh-nee",
                logic: "<strong>Origin:</strong> Derived from the Greek root \"eu-\" meaning good and \"phone\" meaning sound.<br><strong>Memory Trick:</strong> If a sym<strong>phony</strong> is a collection of sounds played together, a <strong>euphony</strong> is specifically a sound that is incredibly pleasing or \"good\" to listen to.",
                formula: "Harmony, melody",
                example: "The poet was famous for the beautiful euphony (good sound; harmony) of her verses when read aloud.<br><strong>Swap test:</strong> The poet was famous for the beautiful <em>harmony</em> of her verses when read aloud.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Eu- (Greek: Good/Well)"
            },
            {
                section: "Vocab",
                title: "Euphoria",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "A good bearing or feeling, typically presenting as extreme happiness.",
                whereToUse: "yoo-FOR-ee-uh",
                logic: "<strong>Origin:</strong> Derived from the Greek root \"eu-\" meaning good and \"-pherein\" meaning bear, carry.<br><strong>Memory Trick:</strong> When you experience euphoria, you are so incredibly happy that it feels like you are floating in a <strong>UFO</strong> (<strong>eupho</strong>).",
                formula: "Elation, ecstasy",
                example: "Winning the world championship brought a wave of euphoria (extreme happiness; elation) to the entire city.<br><strong>Swap test:</strong> Winning the world championship brought a wave of <em>elation</em> to the entire city.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Eu- (Greek: Good/Well)"
            },
            {
                section: "Vocab",
                title: "Euphemism",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "A mild, polite word used instead of one that sounds too harsh or blunt.",
                whereToUse: "yoo-fuh-miz-uhm",
                logic: "<strong>Origin:</strong> Greek eu- 'good' + pheme 'speaking'.<br><strong>Memory Trick:</strong> Using a soft/polite way of speaking to sound nice.",
                formula: "Polite term, Substitute",
                example: "'Passed away' is a common euphemism for dying.<br><strong>Swap test:</strong> 'Passed away' is a common <em>polite term</em> for dying.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Eu- (Greek: Good/Well)"
            },
            {
                section: "Vocab",
                title: "Scant",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "Barely sufficient or adequate.",
                whereToUse: "skant",
                logic: "<strong>Origin:</strong> Derived from the Old Norse word skammr, meaning 'short.'<br><strong>Memory Trick:</strong> Remove 'sc' and you get 'ant'. Just as an ant is tiny, a scant amount is barely sufficient.",
                formula: "Sparse, meager",
                example: "The training data for that specific style was scant.<br><strong>Swap test:</strong> The training data for that specific style was <em>sparse</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Old Norse / Germanic"
            },
            {
                section: "Vocab",
                title: "Gusto",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "Enjoyment and enthusiasm in doing something.",
                whereToUse: "gus-toh",
                logic: "<strong>Origin:</strong> Italian gusto, meaning taste.<br><strong>Memory Trick:</strong> Think of a gust of wind pushing you forward with intense energy and excitement.",
                formula: "zeal, relish",
                example: "You tackle the new deep learning architectures with sheer gusto.<br><strong>Swap test:</strong> You tackle the new deep learning architectures with sheer <em>zeal</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Gust- (Latin: Taste)"
            },
            {
                section: "Vocab",
                title: "Eccentricities",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "Strange or unusual behaviors or habits.",
                whereToUse: "ek-sen-tris-uh-teez",
                logic: "<strong>Origin:</strong> Greek ekkentros, meaning out of the center.<br><strong>Memory Trick:</strong> An 'ex-center' circle is off-center, just like eccentric behavior is off the normal center.",
                formula: "peculiarities, quirks",
                example: "Developing the database schema exposed some of the eccentricities of the legacy workflow system.<br><strong>Swap test:</strong> Developing the database schema exposed some of the <em>quirks</em> of the legacy workflow system.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Ex- / Ec- (Greek/Latin: Out of)"
            },
            {
                section: "Vocab",
                title: "Unenviable",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "Difficult, undesirable, or unpleasant.",
                whereToUse: "un-en-vee-uh-bul",
                logic: "<strong>Origin:</strong> Prefix un- (not) + enviable (worthy of envy).<br><strong>Memory Trick:</strong> Something you absolutely do not envy someone else for having to do.",
                formula: "disagreeable, thankless",
                example: "Debugging the backend infrastructure was an unenviable task.<br><strong>Swap test:</strong> Debugging the backend infrastructure was a <em>thankless</em> task.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Un- (Not)"
            },
            {
                section: "Vocab",
                title: "Philology",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "The love or study of languages.",
                whereToUse: "fi-LOL-uh-jee",
                logic: "<strong>Origin:</strong> Derived from the Greek root \"philein\" meaning love and \"logos\" meaning study, science/words.<br><strong>Memory Trick:</strong> Someone named <strong>Phil</strong> who loves <strong>ology</strong> (studying words) is literally practicing philology.",
                formula: "Linguistics, language study",
                example: "Her fascination with translating ancient Latin texts naturally led her to a degree in philology (study of languages; linguistics).<br><strong>Swap test:</strong> Her fascination with translating ancient Latin texts naturally led her to a degree in <em>linguistics</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Phil- (Greek: Love)"
            },
            {
                section: "Vocab",
                title: "Misogynist",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Someone who hates women.",
                whereToUse: "mi-SOJ-uh-nist",
                logic: "<strong>Origin:</strong> Derived from the Greek roots <em>misein</em>, meaning \"hate,\" and <em>gynae</em>, meaning \"female\".<br><strong>Memory Trick:</strong> Think of a <strong>mis</strong>ogynist as someone who <strong>misses</strong> out on the brilliance of women because of their prejudice. Alternatively, connect <em>gynae</em> to gynecologist (a doctor for women).",
                formula: "Woman-hater, sexist",
                example: "His constant, dismissive remarks towards his female colleagues made it clear he was a misogynist (someone who hates women; woman-hater).<br><strong>Swap test:</strong> His constant, dismissive remarks towards his female colleagues made it clear he was a <em>woman-hater</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Miso- (Greek: Hate)"
            },
            {
                section: "Vocab",
                title: "Misandrist",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Someone who hates men.",
                whereToUse: "mi-SAN-drist",
                logic: "<strong>Origin:</strong> Derived from the Greek roots <em>misein</em>, meaning \"hate,\" and <em>Andros</em>, meaning \"male\".<br><strong>Memory Trick:</strong> <strong>Andr</strong>os sounds like the common male name <strong>Andr</strong>ew. A mis<strong>andr</strong>ist is someone who hates Andrew (and all other men).",
                formula: "Man-hater",
                example: "The fictional villain was a bitter misandrist (someone who hates men; man-hater) who banished all males from her enchanted kingdom.<br><strong>Swap test:</strong> The fictional villain was a bitter <em>man-hater</em> who banished all males from her enchanted kingdom.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Miso- (Greek: Hate)"
            },
            {
                section: "Vocab",
                title: "Misanthrope",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Someone who hates mankind.",
                whereToUse: "MIS-un-throhp",
                logic: "<strong>Origin:</strong> Derived from the Greek roots <em>misein</em>, meaning \"hate,\" and <em>anthropos</em>, meaning \"mankind\".<br><strong>Memory Trick:</strong> <strong>Anthrop</strong>ology is the study of humans. A mis<strong>anthrop</strong>e simply hates the very subject of that study—everyone!",
                formula: "Cynic, hater of humanity",
                example: "The grumpy neighbor who yelled at anyone walking past his house was known as the local misanthrope (someone who hates mankind; cynic).<br><strong>Swap test:</strong> The grumpy neighbor who yelled at anyone walking past his house was known as the local <em>cynic</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Miso- (Greek: Hate)"
            },
            {
                section: "Vocab",
                title: "Misogamist",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Someone who hates marriages.",
                whereToUse: "mi-SOG-uh-mist",
                logic: "<strong>Origin:</strong> Derived from the Greek roots <em>misein</em>, meaning \"hate,\" and <em>gamos</em>, meaning \"marriage\".<br><strong>Memory Trick:</strong> A miso<strong>gam</strong>ist completely hates playing the \"**gam**e\" of marriage. You can also link it to mono<strong>gam</strong>y (being married to one person).",
                formula: "Marriage-hater",
                example: "As a proud misogamist (someone who hates marriages; marriage-hater), he respectfully declined all wedding invitations and vowed to remain a lifelong bachelor.<br><strong>Swap test:</strong> As a proud <em>marriage-hater</em>, he respectfully declined all wedding invitations and vowed to remain a lifelong bachelor.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Miso- (Greek: Hate)"
            },
            {
                section: "Vocab",
                title: "Confluent",
                tags: ["Adjectives", "Roots"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Flowing together or merging into one.",
                whereToUse: "KON-floo-uhnt",
                logic: "<strong>Origin:</strong> Derived from the Latin root <em>confluere</em>, from <em>con-</em> (together) and <em>fluere</em> (to flow).<br><strong>Memory Trick:</strong> Think of two separate rivers flowing continuously until they are <strong>con</strong>nected and <strong>fluent</strong>ly moving as one body of water.",
                formula: "Merging, converging",
                example: "The two rivers are confluent (flowing together; merging) just outside the city limits, creating a massive single waterway.<br><strong>Swap test:</strong> The two rivers are <em>merging</em> just outside the city limits, creating a massive single waterway.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: Con- (Latin: With/Together)"
            },
            {
                section: "Vocab",
                title: "Engender",
                tags: ["Verbs"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "To cause or give rise to a feeling, situation, or condition.",
                whereToUse: "en-JEN-der",
                logic: "<strong>Origin:</strong> Derived from the Old French word <em>engendrer</em>, originating from the Latin <em>ingenerare</em> (to beget or create).<br><strong>Memory Trick:</strong> Look at the word \"<strong>gender</strong>\" inside it, which shares the same root as <strong>gener</strong>ate. To en<strong>gender</strong> is simply to <strong>generate</strong> a reaction or feeling.",
                formula: "Produce, provoke",
                example: "The politician's controversial speech was guaranteed to engender (cause or give rise to; provoke) a lot of anger among the citizens.<br><strong>Swap test:</strong> The politician's controversial speech was guaranteed to <em>provoke</em> a lot of anger among the citizens.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: En- / Em- (In/Make)"
            },
            {
                section: "Vocab",
                title: "Immaculate",
                tags: ["Adjectives", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Perfectly clean, neat, or entirely free from flaws.",
                whereToUse: "ih-MAK-yuh-lit",
                logic: "<strong>Origin:</strong> Derived from the Latin word <em>immaculatus</em>, where <em>in-</em> means \"not\" and <em>macula</em> means \"spot\" or \"stain.\"<br><strong>Memory Trick:</strong> Imagine a <strong>Mac</strong> computer completely covered in fingerprints and smudges. If it is <strong>im</strong>maculate (no mac/stains), it has been polished perfectly clean.",
                formula: "Spotless, flawless",
                example: "After hours of deep cleaning, the apartment was completely immaculate (perfectly clean; spotless) before the guests arrived.<br><strong>Swap test:</strong> After hours of deep cleaning, the apartment was completely <em>spotless</em> before the guests arrived.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Prefix: In- / Im- (Latin: Not)"
            },
            {
                section: "Vocab",
                title: "Paucity",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "The presence of something in small or insufficient quantities.",
                whereToUse: "PAW-si-tee",
                logic: "<strong>Origin:</strong> Derived from the Latin word <em>paucitas</em>, which comes from <em>paucus</em>, meaning \"few.\"<br><strong>Memory Trick:</strong> Imagine a <strong>poor city</strong> (<strong>pau</strong>-<strong>city</strong>) where there is a massive shortage of food, water, and basic resources.",
                formula: "Scarcity, shortage",
                example: "The detectives had to completely drop the investigation due to a paucity (insufficient quantity; scarcity) of reliable evidence.<br><strong>Swap test:</strong> The detectives had to completely drop the investigation due to a <em>scarcity</em> of reliable evidence.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Pauc- (Latin: Few)"
            },
            {
                section: "Vocab",
                title: "Equanimity",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "E-H",
                whatItIs: "Balance of mind and composure.",
                whereToUse: "ee-kwuh-NIM-i-tee",
                logic: "<strong>Origin:</strong> Derived from the Latin roots <em>aequus</em>, meaning \"same, even, equal\", and <em>animus</em>, meaning \"mind\".<br><strong>Memory Trick:</strong> When things get chaotic, you maintain an <strong>equa</strong>l <strong>mind</strong> (equanimity)—staying perfectly balanced and unflappable.",
                formula: "Calmness, level-headedness",
                example: "Even during the most stressful parts of the exam, the student maintained her equanimity (balance of mind; calmness) and finished on time.<br><strong>Swap test:</strong> Even during the most stressful parts of the exam, the student maintained her <em>calmness</em> and finished on time.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Anim- (Latin: Mind/Soul)"
            },
            {
                section: "Vocab",
                title: "Magnanimous",
                tags: ["Adjectives", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Being large-hearted and generous.",
                whereToUse: "mag-NAN-uh-mus",
                logic: "<strong>Origin:</strong> Derived from the Latin roots <em>magnus</em>, meaning \"big\", and <em>animus</em>, meaning \"mind\".<br><strong>Memory Trick:</strong> A <strong>magn</strong>ifying glass makes things look huge; a <strong>magn</strong>animous person has a huge, generous heart and easily forgives others.",
                formula: "Forgiving, charitable",
                example: "In a truly magnanimous (large-hearted; forgiving) gesture, the winner praised her fiercest competitor during the acceptance speech.<br><strong>Swap test:</strong> In a truly <em>forgiving</em> gesture, the winner praised her fiercest competitor during the acceptance speech.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Anim- (Latin: Mind/Soul)"
            },
            {
                section: "Vocab",
                title: "Animosity",
                tags: ["Nouns", "Roots"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "A feeling of strong enmity or hatred.",
                whereToUse: "an-uh-MOS-i-tee",
                logic: "<strong>Origin:</strong> Derived from the Latin root <em>animus</em>, meaning \"mind\".<br><strong>Memory Trick:</strong> Think of two wild <strong>animals</strong> fighting over food—that intense, aggressive feeling of hatred is <strong>animosity</strong>.",
                formula: "Hostility, bitterness",
                example: "Despite their messy business separation, there was no animosity (hatred; hostility) between the two former partners.<br><strong>Swap test:</strong> Despite their messy business separation, there was no <em>hostility</em> between the two former partners.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Anim- (Latin: Mind/Soul)"
            },
            {
                section: "Vocab",
                title: "Pusillanimous",
                tags: ["Adjectives", "Roots"],
                module: "Vocab",
                topic: "I-P",
                whatItIs: "Being small-hearted and cowardly.",
                whereToUse: "pyoo-suh-LAN-uh-mus",
                logic: "<strong>Origin:</strong> Derived from the Latin roots <em>pusilla</em>, meaning \"small, weak\", and <em>animus</em>, meaning \"mind\".<br><strong>Memory Trick:</strong> The word sounds a bit like \"pussycat.\" If you act like a scared little cat instead of a brave lion, you are being pusillanimous.",
                formula: "Timid, fearful",
                example: "The manager's pusillanimous (cowardly; timid) refusal to stand up to the angry client left the employees feeling unsupported.<br><strong>Swap test:</strong> The manager's <em>timid</em> refusal to stand up to the angry client left the employees feeling unsupported.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Anim- (Latin: Mind/Soul)"
            },
            {
                section: "Vocab",
                title: "Frigid",
                tags: ["Adjectives"],
                module: "Vocab",
                whatItIs: "Very cold in temperature, or lacking friendly warmth.",
                whereToUse: "frij-id",
                logic: "<strong>Origin:</strong> Latin frigidus, meaning cold.<br><strong>Memory Trick:</strong> Sounds like 'fridge' &mdash; the place where things get extremely cold.",
                formula: "freezing, icy",
                example: "The frigid wind cut right through your linen shirt during the evening walk.<br><strong>Swap test:</strong> The <em>freezing</em> wind cut right through your linen shirt during the evening walk.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝"
            },
            {
                section: "Vocab",
                title: "Unfathomable",
                tags: ["Adjectives"],
                module: "Vocab",
                topic: "Q-Z",
                whatItIs: "Impossible to fully understand or measure; incomprehensible.",
                whereToUse: "uhn-fath-uh-muh-buhl",
                logic: "<strong>Origin:</strong> From <em>un-</em> (not) + <em>fathom</em> (to measure depth, from Old English for outstretched arms) + <em>-able</em>.<br><strong>Memory Trick:</strong> Picture looking down into the deep, dark ocean. If it's too deep to measure (fathom) or comprehend, it is <em>unfathomable</em>.",
                formula: "Incomprehensible, immeasurable, inscrutable",
                example: "The cosmos contains vast, unfathomable mysteries that scientists are only beginning to decode.<br><strong>Swap test:</strong> The cosmos contains vast, <em>incomprehensible</em> mysteries that scientists are only beginning to decode.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Root: Fath- (Old English: Outstretched Arms)"
            },
            {
                section: "Vocab",
                title: "Baloney",
                tags: ["Nouns"],
                module: "Vocab",
                topic: "A-D",
                whatItIs: "Nonsense, foolish talk, or deceptive talk.",
                whereToUse: "buh-LOH-nee",
                logic: "<strong>Origin:</strong> Derived from 'bologna' (the popular, cheap, processed sausage containing filler meats). Historically associated with cheap quality, deception, and nonsense.<br><strong>Memory Trick:</strong> Think of a cheap bologna sausage—it's mostly processed filler rather than genuine prime meat. When someone feeds you a fake story, they are feeding you 'baloney'.",
                formula: "Nonsense, humbug, hogwash",
                example: "His claim that he could complete the entire project overnight was absolute baloney.<br><strong>Swap test:</strong> His claim that he could complete the entire project overnight was absolute <em>nonsense</em>.",
                icon1: "📖", icon2: "🗣️", icon3: "🧠", icon4: "📚", icon5: "📝",
                rootGroup: "Slang / Colloquialisms"
            }
        ];

        const container = document.getElementById('grid-container');
        const tabs = document.querySelectorAll('.tab');
        
        // Load saved order from localStorage
        const savedOrder = localStorage.getItem('quantTricksOrder');
        if (savedOrder) {
            try {
                const orderArray = JSON.parse(savedOrder);
                tricks.sort((a, b) => {
                    const idxA = orderArray.indexOf(a.title);
                    const idxB = orderArray.indexOf(b.title);
                    if (idxA === -1 && idxB === -1) return 0;
                    if (idxA === -1) return 1;
                    if (idxB === -1) return -1;
                    return idxA - idxB;
                });
            } catch(e) {}
        }

        let draggedItem = null;
        let activeTags = [];
        let activeTopics = [];
        let activeSort = 'default';
        let activeGroup = 'none';

        // TTS Pronunciation speak utility
        function speakWord(word, event) {
            if (event) {
                event.stopPropagation();
            }
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.rate = 0.85;
                utterance.pitch = 1.0;
                const voices = window.speechSynthesis.getVoices();
                const englishVoice = voices.find(v => v.lang.startsWith('en-'));
                if (englishVoice) {
                    utterance.voice = englishVoice;
                }
                window.speechSynthesis.speak(utterance);
            } else {
                alert("Text-to-speech is not supported in your browser.");
            }
        }

        // Word of the Day Logic
        function getWordOfTheDay() {
            const vocabWords = tricks.filter(t => t.section === 'Vocab');
            if (vocabWords.length === 0) return null;
            
            // Deterministic calculation based on calendar days since a fixed date (Jan 1, 2026)
            const now = new Date();
            const startOfEpoch = new Date(2026, 0, 1);
            const diffInMs = now - startOfEpoch;
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
            
            const index = Math.abs(diffInDays) % vocabWords.length;
            return vocabWords[index];
        }

        function renderWordOfTheDay() {
            const container = document.getElementById('word-of-the-day-container');
            if (!container) return;
            
            const wod = getWordOfTheDay();
            if (!wod) {
                container.style.display = 'none';
                return;
            }
            
            const today = new Date();
            const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            container.innerHTML = `
                <div class="wod-card">
                    <div class="wod-header">
                        <div class="wod-badge">
                            <span class="wod-badge-glow"></span>
                            🏆 Word of the Day
                        </div>
                        <div class="wod-date">${dateStr}</div>
                    </div>
                    <div class="wod-body">
                        <div class="wod-main-info">
                            <h2 class="wod-title">
                                ${wod.title}
                                <button class="speaker-btn" onclick="speakWord('${wod.title.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation" style="vertical-align: middle; margin-left: 8px;">🗣️</button>
                            </h2>
                            <div class="wod-pronunciation">/${wod.whereToUse}/</div>
                        </div>
                        
                        <div class="wod-definition">
                            <div class="wod-label">Meaning</div>
                            <div class="wod-text">${wod.whatItIs}</div>
                        </div>
                        
                        <button class="wod-expand-btn" id="wod-expand-btn" onclick="toggleWodDetails()">
                            <span>Show Details (Origin, Memory, Examples)</span>
                            <svg class="wod-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease; vertical-align: middle;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        
                        <div class="wod-details" id="wod-details">
                            <div class="wod-details-inner">
                                <div class="wod-divider"></div>
                                
                                <div class="wod-detail-row">
                                    <div class="wod-detail-col">
                                        <div class="wod-label">Origin & Memory Anchor</div>
                                        <div class="wod-text" style="line-height: 1.6;">${wod.logic}</div>
                                    </div>
                                    <div class="wod-detail-col">
                                        <div class="wod-label">Synonyms / Classification</div>
                                        <div class="wod-text" style="display: flex; flex-direction: column; gap: 8px;">
                                            <div><strong>Synonyms:</strong> ${wod.formula || 'N/A'}</div>
                                            <div><strong>Category:</strong> ${wod.tags ? wod.tags.join(', ') : 'N/A'} (${wod.topic || 'N/A'})</div>
                                            <div><strong>Root Group:</strong> ${wod.rootGroup || 'N/A'}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="wod-detail-row" style="margin-bottom: 0;">
                                    <div class="wod-detail-col" style="grid-column: span 2;">
                                        <div class="wod-label">Example & Contextual Swap Test</div>
                                        <div class="wod-text example-box" style="background: rgba(255, 214, 10, 0.04); border-left: 3px solid var(--accent-1); padding: 0.85rem 1rem; border-radius: 0 12px 12px 0; margin-top: 0.25rem; font-size: 0.95rem; line-height: 1.6;">
                                            ${wod.example}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            if (window.MathJax) {
                MathJax.typesetPromise().catch(err => console.log(err));
            }
        }

        function toggleWodDetails() {
            const details = document.getElementById('wod-details');
            const btn = document.getElementById('wod-expand-btn');
            if (!details || !btn) return;
            
            const isExpanded = details.classList.contains('expanded');
            if (!isExpanded) {
                details.classList.add('expanded');
                btn.querySelector('span').textContent = 'Hide Details';
                btn.querySelector('.wod-chevron').style.transform = 'rotate(180deg)';
                
                // Smoothly scroll the container into view
                setTimeout(() => {
                    const container = document.getElementById('word-of-the-day-container');
                    if (container) {
                        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 150);
            } else {
                details.classList.remove('expanded');
                btn.querySelector('span').textContent = 'Show Details (Origin, Memory, Examples)';
                btn.querySelector('.wod-chevron').style.transform = 'rotate(0deg)';
            }
        }

        // Handle Sort Change
        function handleSortChange() {
            activeSort = document.getElementById('sort-select').value;
            const activeTab = document.querySelector('.tab.active');
            const section = activeTab ? activeTab.dataset.section : 'Quant';
            renderTricks(section);
        }

        // Handle Group Change
        function handleGroupChange() {
            activeGroup = document.getElementById('group-select').value;
            const activeTab = document.querySelector('.tab.active');
            const section = activeTab ? activeTab.dataset.section : 'Quant';
            renderTricks(section);
        }

        // Update dropdown group options based on current section
        function updateGroupSelectorOptions(section) {
            const groupSelect = document.getElementById('group-select');
            if (!groupSelect) return;
            
            const isVocab = section === 'Vocab';
            groupSelect.innerHTML = '';
            
            const options = [
                { value: 'none', text: 'None (Flat Grid)' },
                { value: 'topic', text: isVocab ? 'Alphabet Range' : 'Module & Topic' }
            ];
            
            if (isVocab) {
                options.push({ value: 'root', text: 'Root / Prefix Origin' });
                options.push({ value: 'pos', text: 'Word Type (POS)' });
            }
            
            options.forEach(opt => {
                const el = document.createElement('option');
                el.value = opt.value;
                el.textContent = opt.text;
                groupSelect.appendChild(el);
            });
            
            if (!isVocab && (activeGroup === 'root' || activeGroup === 'pos')) {
                activeGroup = 'none';
            }
            groupSelect.value = activeGroup;

            // Sync the custom dropdown
            syncCustomSelect('group-select');
        }

        // Custom Select Dropdowns
        function initializeCustomSelect(selectId) {
            const selectEl = document.getElementById(selectId);
            if (!selectEl) return;
            
            // Hide native select
            selectEl.style.display = 'none';
            
            // Remove existing custom select if already present
            const existingCustom = document.getElementById(`custom-select-${selectId}`);
            if (existingCustom) {
                existingCustom.remove();
            }
            
            // Create container
            const container = document.createElement('div');
            container.className = 'custom-select-container';
            container.id = `custom-select-${selectId}`;
            
            // Create trigger
            const trigger = document.createElement('button');
            trigger.className = 'custom-select-trigger';
            trigger.type = 'button';
            trigger.innerHTML = `
                <span class="custom-select-text"></span>
                <svg class="custom-select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
            
            // Create dropdown list container
            const dropdown = document.createElement('div');
            dropdown.className = 'custom-select-dropdown';
            
            container.appendChild(trigger);
            container.appendChild(dropdown);
            selectEl.parentNode.insertBefore(container, selectEl.nextSibling);
            
            // Toggle dropdown expansion
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close other custom dropdowns
                document.querySelectorAll('.custom-select-container').forEach(c => {
                    if (c !== container) {
                        c.classList.remove('active');
                        const otherSortBar = c.closest('.sort-group-bar');
                        if (otherSortBar) otherSortBar.style.marginBottom = '';
                    }
                });
                
                const isActive = container.classList.toggle('active');
                
                // Dynamically adjust the sort-group-bar margin to match the exact dropdown height
                const sortBar = container.closest('.sort-group-bar');
                updateSortBarMargin(sortBar);
            });
            
            // Close dropdown when clicking elsewhere
            document.addEventListener('click', () => {
                if (container.classList.contains('active')) {
                    container.classList.remove('active');
                    const sortBar = container.closest('.sort-group-bar');
                    updateSortBarMargin(sortBar);
                }
            });
            
            // Initial options synchronization
            syncCustomSelect(selectId);
        }

        function syncCustomSelect(selectId) {
            const selectEl = document.getElementById(selectId);
            const container = document.getElementById(`custom-select-${selectId}`);
            if (!selectEl || !container) return;
            
            const triggerText = container.querySelector('.custom-select-text');
            const dropdown = container.querySelector('.custom-select-dropdown');
            if (!triggerText || !dropdown) return;
            
            const selectedOpt = selectEl.options[selectEl.selectedIndex];
            triggerText.textContent = selectedOpt ? selectedOpt.textContent : '';
            
            dropdown.innerHTML = '';
            Array.from(selectEl.options).forEach((opt, idx) => {
                const optDiv = document.createElement('div');
                optDiv.className = 'custom-select-option';
                optDiv.dataset.value = opt.value;
                
                if (opt.selected) {
                    optDiv.classList.add('selected');
                    optDiv.innerHTML = `
                        <span>${opt.textContent}</span>
                        <svg class="custom-select-checkmark" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    `;
                } else {
                    optDiv.innerHTML = `<span>${opt.textContent}</span>`;
                }
                
                optDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectEl.selectedIndex = idx;
                    
                    // Dispatch change event to trigger native onchange handlers
                    selectEl.dispatchEvent(new Event('change'));
                    
                    // Sync options to update classes and checkmarks
                    syncCustomSelect(selectId);
                    
                    container.classList.remove('active');
                    
                    const sortBar = container.closest('.sort-group-bar');
                    updateSortBarMargin(sortBar);
                });
                
                dropdown.appendChild(optDiv);
            });
        }

        function updateSortBarMargin(sortBar) {
            if (!sortBar) return;
            let maxMargin = 0;
            
            // Check custom selects
            sortBar.querySelectorAll('.custom-select-container.active').forEach(c => {
                const drop = c.querySelector('.custom-select-dropdown');
                if (drop) maxMargin = Math.max(maxMargin, drop.scrollHeight - 20);
            });
            
            // Check search suggestions
            const search = sortBar.querySelector('.search-suggestions.active');
            if (search) maxMargin = Math.max(maxMargin, search.scrollHeight + 10);
            
            if (maxMargin > 0) {
                sortBar.style.marginBottom = maxMargin + 'px';
            } else {
                sortBar.style.marginBottom = '';
            }
        }

        // Dynamic Filter Pill rendering (Two flat rows: Topics/Alphabet and Tags/Word Types)
        function renderFilters(section) {
            const filterBar = document.getElementById('filter-bar');
            if (!filterBar) return;
            filterBar.innerHTML = '';
            
            // Get tricks of the current section
            const sectionTricks = tricks.filter(t => t.section === section);
            
            // Get unique topics and tags for this section
            const topicsSet = new Set();
            const tagsSet = new Set();
            
            sectionTricks.forEach(t => {
                if (t.topic) topicsSet.add(t.topic);
                if (t.tags && Array.isArray(t.tags)) {
                    t.tags.forEach(tag => tagsSet.add(tag));
                }
            });
            
            if (topicsSet.size === 0 && tagsSet.size === 0) {
                filterBar.style.display = 'none';
                return;
            }
            
            filterBar.style.display = 'flex';
            
            // Reset filters button row
            const allRow = document.createElement('div');
            allRow.className = 'filter-modules-row';
            allRow.style.alignItems = 'center';
            allRow.style.marginBottom = '0.4rem';
            
            const allPill = document.createElement('button');
            const isAllActive = activeTags.length === 0 && activeTopics.length === 0;
            allPill.className = `filter-pill ${isAllActive ? 'active' : ''}`;
            allPill.innerHTML = `<span class="filter-pill-dot"></span>Reset Filters`;
            allPill.addEventListener('click', () => {
                activeTags = [];
                activeTopics = [];
                renderFilters(section);
                renderTricks(section);
            });
            allRow.appendChild(allPill);
            filterBar.appendChild(allRow);
            
            const isVocab = section === 'Vocab';
            const topicsLabelText = isVocab ? 'Alphabet' : 'Topics';
            const tagsLabelText = isVocab ? 'Word Types' : 'Tags';
            
            // Row 1: Topics (Categories)
            if (topicsSet.size > 0) {
                const topicsGroup = document.createElement('div');
                topicsGroup.className = 'module-filter-group';
                topicsGroup.style.width = '100%';
                
                const label = document.createElement('span');
                label.className = 'module-filter-label';
                label.textContent = topicsLabelText;
                topicsGroup.appendChild(label);
                
                const topicsDiv = document.createElement('div');
                topicsDiv.className = 'module-filter-topics';
                
                const sortedTopics = Array.from(topicsSet).sort();
                sortedTopics.forEach(topic => {
                    const btn = document.createElement('button');
                    const isBtnActive = activeTopics.includes(topic);
                    btn.className = `filter-pill ${isBtnActive ? 'active' : ''}`;
                    btn.innerHTML = `<span class="filter-pill-dot"></span>${topic}`;
                    btn.addEventListener('click', () => {
                        if (activeTopics.includes(topic)) {
                            activeTopics = activeTopics.filter(t => t !== topic);
                        } else {
                            activeTopics.push(topic);
                        }
                        renderFilters(section);
                        renderTricks(section);
                    });
                    topicsDiv.appendChild(btn);
                });
                
                topicsGroup.appendChild(topicsDiv);
                filterBar.appendChild(topicsGroup);
            }
            
            // Row 2: Tags (Focus Areas)
            if (tagsSet.size > 0) {
                const tagsGroup = document.createElement('div');
                tagsGroup.className = 'module-filter-group';
                tagsGroup.style.width = '100%';
                tagsGroup.style.marginTop = '0.4rem';
                
                const label = document.createElement('span');
                label.className = 'module-filter-label';
                label.textContent = tagsLabelText;
                tagsGroup.appendChild(label);
                
                const tagsDiv = document.createElement('div');
                tagsDiv.className = 'module-filter-topics';
                
                const sortedTags = Array.from(tagsSet).sort();
                sortedTags.forEach(tag => {
                    const btn = document.createElement('button');
                    const isBtnActive = activeTags.includes(tag);
                    btn.className = `filter-pill ${isBtnActive ? 'active' : ''}`;
                    btn.innerHTML = `<span class="filter-pill-dot"></span>${tag}`;
                    btn.addEventListener('click', () => {
                        if (activeTags.includes(tag)) {
                            activeTags = activeTags.filter(t => t !== tag);
                        } else {
                            activeTags.push(tag);
                        }
                        renderFilters(section);
                        renderTricks(section);
                    });
                    tagsDiv.appendChild(btn);
                });
                
                tagsGroup.appendChild(tagsDiv);
                filterBar.appendChild(tagsGroup);
            }
        }
        
        // FLIP animation helper for smooth drag and drop shifting
        function animateShift(draggedNode, targetNode, isAfter) {
            if (draggedNode.nextSibling === targetNode && !isAfter) return;
            if (draggedNode.previousSibling === targetNode && isAfter) return;
            
            const parent = targetNode.parentNode;
            const children = Array.from(parent.children);
            
            // Record initial positions
            const firstStates = new Map();
            children.forEach(child => firstStates.set(child, child.getBoundingClientRect()));
            
            // Move DOM node
            if (isAfter) targetNode.after(draggedNode);
            else targetNode.before(draggedNode);
            
            // FLIP Animation
            children.forEach(child => {
                if (child === draggedNode) return;
                const first = firstStates.get(child);
                const last = child.getBoundingClientRect();
                const dx = first.left - last.left;
                const dy = first.top - last.top;
                
                if (dx !== 0 || dy !== 0) {
                    child.style.transition = 'none';
                    child.style.transform = `translate(${dx}px, ${dy}px)`;
                    
                    requestAnimationFrame(() => {
                        child.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
                        child.style.transform = '';
                    });
                }
            });
        }

        // Helper to construct a single card node
        function createCardElement(trick, index, section) {
            const card = document.createElement('div');
            card.className = 'card';
            
            const canDrag = activeSort === 'default' && activeGroup === 'none';
            card.draggable = canDrag;
            card.dataset.globalIndex = tricks.indexOf(trick);
            card.style.animationDelay = `${index * 0.05}s`;
            
            const isVocab = trick.section === 'Vocab' || trick.section === 'VARC';
            const label1 = isVocab ? 'Meaning' : 'What it is';
            const label2 = isVocab ? 'Pronunciation' : 'Where to Use';
            const label3 = isVocab ? 'Origin & Memory' : 'The Logic';
            const label4 = isVocab ? 'Synonyms' : 'Formula / Rule';
            const label5 = isVocab ? 'Example & Swap Test' : 'Example';
            
            const icon1 = trick.icon1 || (isVocab ? '📖' : '🔍');
            const icon2 = trick.icon2 || (isVocab ? '🗣️' : '🎯');
            const icon3 = trick.icon3 || (isVocab ? '🧠' : '🧠');
            const icon4 = trick.icon4 || (isVocab ? '📚' : '📐');
            const icon5 = trick.icon5 || (isVocab ? '📝' : '💡');

            let formulaHtml = trick.formula ? `
                <div class="info-section">
                    <span class="info-label">${icon4} ${label4}</span>
                    <div class="info-content formula-box">${trick.formula}</div>
                </div>` : '';

            // Build tags badges HTML
            let tagsHtml = '';
            if (trick.tags && Array.isArray(trick.tags)) {
                tagsHtml = `
                    <div class="card-tags">
                        ${trick.tags.map(tag => `
                            <span class="card-topic">
                                <span class="card-topic-dot"></span>
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="card-breadcrumb">${trick.module} &bull; ${trick.topic}</div>
                        ${tagsHtml}
                        <span class="card-number">${(index + 1).toString().padStart(2, '0')}</span>
                        <h2>
                            ${trick.title}
                            ${isVocab ? `<button class="speaker-btn" onclick="speakWord('${trick.title.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation">🗣️</button>` : ''}
                        </h2>
                        <span class="tap-hint">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                            Hover to reveal
                        </span>
                    </div>

                    <div class="card-back">
                        <h3>${isVocab ? 'Vocabulary Breakdown' : 'Trick Breakdown'}</h3>
                        
                        <div class="info-section">
                            <span class="info-label">${icon1} ${label1}</span>
                            <div class="info-content">${trick.whatItIs}</div>
                        </div>

                        <div class="info-section">
                            <span class="info-label">${icon2} ${label2}</span>
                            <div class="info-content"${isVocab ? ' style="display: flex; align-items: center; gap: 8px;"' : ''}>
                                ${isVocab ? `<span>${trick.whereToUse}</span>` : trick.whereToUse}
                                ${isVocab ? `<button class="speaker-btn mini" onclick="speakWord('${trick.title.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation">🗣️</button>` : ''}
                            </div>
                        </div>

                        <div class="info-section">
                            <span class="info-label">${icon3} ${label3}</span>
                            <div class="info-content">${trick.logic}</div>
                        </div>
                        
                        ${formulaHtml}

                        <div class="info-section">
                            <span class="info-label">${icon5} ${label5}</span>
                            <div class="info-content example-box">${trick.example}</div>
                        </div>
                    </div>
                </div>
            `;

            if (canDrag) {
                card.addEventListener('dragstart', function(e) {
                    draggedItem = this;
                    setTimeout(() => this.classList.add('dragging'), 0);
                    e.dataTransfer.effectAllowed = 'move';
                });

                card.addEventListener('dragend', function(e) {
                    this.classList.remove('dragging');
                    
                    if (draggedItem) {
                        // 1. Get all tricks of the current section
                        const sectionTricks = tricks.filter(t => t.section === section);

                        // 2. Identify which of these are currently visible matching the active filter
                        const visibleIndices = [];
                        sectionTricks.forEach((t, idx) => {
                            const matchTopic = activeTopics.length === 0 || activeTopics.includes(t.topic);
                            const matchTag = activeTags.length === 0 || (t.tags && t.tags.some(tag => activeTags.includes(tag)));
                            if (matchTopic && matchTag) {
                                visibleIndices.push(idx);
                            }
                        });

                        // 3. Get the new reordered array of visible tricks from the DOM order
                        const cardChildren = Array.from(container.children).filter(c => c.classList.contains('card'));
                        const reorderedVisible = cardChildren.map(c => tricks[parseInt(c.dataset.globalIndex)]);

                        // 4. Construct the new array for this section by inserting reordered visible items at their original indices
                        const newSectionTricks = [...sectionTricks];
                        visibleIndices.forEach((originalIdx, i) => {
                            newSectionTricks[originalIdx] = reorderedVisible[i];
                        });

                        // 5. Update the global tricks array in-place
                        let sectionTricksIdx = 0;
                        tricks.forEach((t, i) => {
                            if (t.section === section) {
                                tricks[i] = newSectionTricks[sectionTricksIdx++];
                            }
                        });
                        
                        // 6. Save the new order to localStorage
                        const newOrderTitles = tricks.map(t => t.title);
                        localStorage.setItem('quantTricksOrder', JSON.stringify(newOrderTitles));
                        
                        // 7. Update the numbers and global indices in-place to avoid flicker
                        cardChildren.forEach((cardEl, idx) => {
                            const numEl = cardEl.querySelector('.card-number');
                            if (numEl) {
                                numEl.textContent = (idx + 1).toString().padStart(2, '0');
                            }
                            const tObj = reorderedVisible[idx];
                            cardEl.dataset.globalIndex = tricks.indexOf(tObj);
                        });
                    }
                    draggedItem = null;
                });

                card.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                    
                    if (draggedItem && this !== draggedItem) {
                        const bounding = this.getBoundingClientRect();
                        const offsetX = e.clientX - bounding.left;
                        
                        // Live shifting: if past the halfway point horizontally, insert after
                        const isAfter = offsetX > bounding.width / 2;
                        animateShift(draggedItem, this, isAfter);
                    }
                    return false;
                });
            }

            return card;
        }

        // renderTricks with Sort & Group handling
        function renderTricks(section) {
            container.innerHTML = '';
            
            // Toggle Word of the Day
            const wodContainer = document.getElementById('word-of-the-day-container');
            if (wodContainer) {
                if (section === 'Vocab') {
                    renderWordOfTheDay();
                    wodContainer.style.display = 'block';
                } else {
                    wodContainer.style.display = 'none';
                }
            }
            
            // Filter first
            let filteredTricks = tricks.filter(trick => {
                const matchesSection = trick.section === section;
                const matchesTopic = activeTopics.length === 0 || activeTopics.includes(trick.topic);
                const matchesTag = activeTags.length === 0 || (trick.tags && trick.tags.some(t => activeTags.includes(t)));
                
                let matchesSearch = true;
                if (searchQuery) {
                    const titleText = (trick.title || '').toLowerCase();
                    const whatItIsText = (trick.whatItIs || '').toLowerCase();
                    const tagsText = (trick.tags || []).join(' ').toLowerCase();
                    const logicText = (trick.logic || '').toLowerCase();
                    const formulaText = (trick.formula || '').toLowerCase();
                    
                    matchesSearch = titleText.includes(searchQuery) || 
                                    whatItIsText.includes(searchQuery) || 
                                    tagsText.includes(searchQuery) ||
                                    logicText.includes(searchQuery) ||
                                    formulaText.includes(searchQuery);
                }
                
                return matchesSection && matchesTopic && matchesTag && matchesSearch;
            });
            
            if (filteredTricks.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <h2>No Matching Tricks Found</h2>
                        <p>Try refining your search or filters.</p>
                    </div>
                `;
                return;
            }

            // Sort next
            if (activeSort === 'alphabetical-az') {
                filteredTricks.sort((a, b) => a.title.localeCompare(b.title));
            } else if (activeSort === 'alphabetical-za') {
                filteredTricks.sort((a, b) => b.title.localeCompare(a.title));
            } else if (activeSort === 'length') {
                filteredTricks.sort((a, b) => a.title.length - b.title.length);
            }

            // Render Drag Notice at the top of the container
            if (activeSort !== 'default' || activeGroup !== 'none') {
                const notice = document.createElement('div');
                notice.className = 'drag-notice';
                notice.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; opacity: 0.85;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <span>Drag-and-drop reordering is only available when Sort is set to "Default" and Group is set to "None".</span>
                `;
                container.appendChild(notice);
            }

            // Grouping logic
            if (activeGroup === 'none') {
                // Render as flat list
                filteredTricks.forEach((trick, index) => {
                    const card = createCardElement(trick, index, section);
                    container.appendChild(card);
                });
            } else {
                // Grouping is active
                const groups = {};
                filteredTricks.forEach(trick => {
                    let key = 'Uncategorized';
                    if (activeGroup === 'topic') {
                        key = trick.topic || 'Uncategorized';
                    } else if (activeGroup === 'root') {
                        key = trick.rootGroup || 'Other Origins';
                    } else if (activeGroup === 'pos') {
                        key = (trick.tags && trick.tags[0]) || 'Other Types';
                    }
                    if (!groups[key]) groups[key] = [];
                    groups[key].push(trick);
                });

                // Get keys in sorted order
                const sortedKeys = Object.keys(groups).sort();
                
                let overallIndex = 0;
                sortedKeys.forEach(key => {
                    const groupTricks = groups[key];
                    
                    // Create group header
                    const header = document.createElement('div');
                    header.className = 'group-header';
                    header.innerHTML = `
                        <span>${key}</span>
                        <span class="group-header-count">${groupTricks.length} ${groupTricks.length === 1 ? 'card' : 'cards'}</span>
                    `;
                    container.appendChild(header);

                    // Render group cards
                    groupTricks.forEach(trick => {
                        const card = createCardElement(trick, overallIndex++, section);
                        container.appendChild(card);
                    });
                });
            }
            
            if (window.MathJax) {
                MathJax.typesetPromise().catch(err => console.log(err));
            }
        }

        const slider = document.getElementById('tab-slider');

        function updateSlider(tab) {
            slider.style.width = tab.offsetWidth + 'px';
            slider.style.transform = `translateX(${tab.offsetLeft}px)`;
        }

        let searchQuery = '';

        function handleSearchInput() {
            searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
            const activeTab = document.querySelector('.tab.active');
            const section = activeTab ? activeTab.dataset.section : 'Quant';
            renderTricks(section);
            showSearchSuggestions();
        }

        function showSearchSuggestions() {
            const input = document.getElementById('search-input');
            const suggestionsContainer = document.getElementById('search-suggestions');
            if (!input || !suggestionsContainer) return;
            
            const activeTab = document.querySelector('.tab.active');
            const section = activeTab ? activeTab.dataset.section : 'Quant';
            const value = input.value.trim().toLowerCase();
            
            // Get tricks of current section
            const sectionTricks = tricks.filter(t => t.section === section);
            
            let html = '';
            
            if (!value) {
                // Show up to 5 top tags/topics as quick suggestions
                const suggestions = [];
                sectionTricks.forEach(t => {
                    if (t.tags && t.tags[0] && !suggestions.some(s => s.text === t.tags[0])) {
                        suggestions.push({ type: 'tag', text: t.tags[0] });
                    }
                    if (t.topic && !suggestions.some(s => s.text === t.topic)) {
                        suggestions.push({ type: 'topic', text: t.topic });
                    }
                });
                
                const slice = suggestions.slice(0, 5);
                if (slice.length > 0) {
                    html = `<div style="font-size: 0.75rem; color: var(--text-muted); padding: 4px 12px; font-weight: 600; opacity: 0.6; letter-spacing: 0.05em;">QUICK FILTERS</div>`;
                    slice.forEach(item => {
                        const icon = item.type === 'tag' ? '🏷️' : '📁';
                        html += `
                            <div class="search-suggestion-item" data-value="${item.text}">
                                <span>${icon} ${item.text}</span>
                            </div>
                        `;
                    });
                }
            } else {
                // Show matching card titles
                const matches = sectionTricks.filter(t => 
                    t.title.toLowerCase().includes(value)
                ).slice(0, 5);
                
                if (matches.length > 0) {
                    html = `<div style="font-size: 0.75rem; color: var(--text-muted); padding: 4px 12px; font-weight: 600; opacity: 0.6; letter-spacing: 0.05em;">MATCHING CARDS</div>`;
                    matches.forEach(t => {
                        html += `
                            <div class="search-suggestion-item" data-value="${t.title}">
                                <span>🔍 ${t.title}</span>
                            </div>
                        `;
                    });
                } else {
                    html = `<div style="font-size: 0.8rem; color: var(--text-muted); padding: 8px 12px; text-align: center;">No matches found</div>`;
                }
            }
            
            const group = input.closest('.search-group');
            const sortBar = input.closest('.sort-group-bar');
            
            if (html) {
                suggestionsContainer.innerHTML = html;
                suggestionsContainer.classList.add('active');
                if (group) group.classList.add('active');
                
                if (sortBar) updateSortBarMargin(sortBar);
                
                // Add click listener to suggestions
                suggestionsContainer.querySelectorAll('.search-suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const val = item.dataset.value;
                        input.value = val;
                        handleSearchInput();
                        suggestionsContainer.classList.remove('active');
                        if (group) group.classList.remove('active');
                        if (sortBar) updateSortBarMargin(sortBar);
                    });
                });
            } else {
                suggestionsContainer.classList.remove('active');
                if (group) group.classList.remove('active');
                if (sortBar) updateSortBarMargin(sortBar);
            }
        }
        
        let suggestionsTimeout;
        function hideSearchSuggestionsDeferred() {
            // Delay closing so that the click listener on the item can fire first
            suggestionsTimeout = setTimeout(() => {
                const suggestionsContainer = document.getElementById('search-suggestions');
                if (suggestionsContainer) {
                    suggestionsContainer.classList.remove('active');
                    const group = suggestionsContainer.closest('.search-group');
                    if (group) group.classList.remove('active');
                    
                    const sortBar = suggestionsContainer.closest('.sort-group-bar');
                    updateSortBarMargin(sortBar);
                }
            }, 200);
        }

        function selectTab(tab) {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const section = tab.dataset.section;
            document.body.setAttribute('data-theme', section);
            updateSlider(tab);
            activeTags = []; // Reset filter when switching tabs
            activeTopics = []; // Reset topic filter when switching tabs
            
            // Clear search input and hide suggestions on tab change
            searchQuery = '';
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = '';
            const suggestionsContainer = document.getElementById('search-suggestions');
            if (suggestionsContainer) {
                suggestionsContainer.classList.remove('active');
                const group = suggestionsContainer.closest('.search-group');
                if (group) group.classList.remove('active');
                
                const sortBar = suggestionsContainer.closest('.sort-group-bar');
                updateSortBarMargin(sortBar);
            }
            
            updateGroupSelectorOptions(section);
            renderFilters(section);
            renderTricks(section);
        }

        let hasDragged = false;
        let isPointerDown = false;

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                // If this was a drag event, ignore the click
                if (hasDragged) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                selectTab(tab);
            });
        });

        // Tab Drag Logic
        const tabsContainer = document.querySelector('.tabs');
        let isDragging = false;
        let startX;
        let sliderStartX;
        
        tabsContainer.addEventListener('pointerdown', (e) => {
            isPointerDown = true;
            hasDragged = false;
            isDragging = false;
            startX = e.clientX;
            const transform = slider.style.transform;
            sliderStartX = transform && transform.includes('translateX') ? parseFloat(transform.match(/translateX\(([-\d.]+)px\)/)[1]) : tabs[0].offsetLeft;
            // DO NOT set pointer capture yet; we only capture when drag starts.
        });

        tabsContainer.addEventListener('pointermove', (e) => {
            if (!isPointerDown) return;
            const dx = e.clientX - startX;
            
            // Start dragging only after moving past the 5px threshold
            if (!isDragging && Math.abs(dx) > 5) {
                isDragging = true;
                hasDragged = true;
                try {
                    tabsContainer.setPointerCapture(e.pointerId);
                } catch(err) {}
                slider.style.transition = 'background 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), border-color 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
            }
            
            if (isDragging) {
                let newX = sliderStartX + dx;
                
                // Constrain limits to the first and last tab
                const minX = tabs[0].offsetLeft;
                const maxX = tabs[tabs.length - 1].offsetLeft;
                if (newX < minX) newX = minX;
                if (newX > maxX) newX = maxX;
                
                slider.style.transform = `translateX(${newX}px)`;

                // Dynamically change theme mid-drag
                let closestTab = tabs[0];
                let minDiff = Infinity;
                
                tabs.forEach(tab => {
                    const diff = Math.abs(newX - tab.offsetLeft);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closestTab = tab;
                    }
                });
                
                // If we dragged past the halfway point to a new tab, switch instantly
                if (!closestTab.classList.contains('active')) {
                    tabs.forEach(t => t.classList.remove('active'));
                    closestTab.classList.add('active');
                    const section = closestTab.dataset.section;
                    document.body.setAttribute('data-theme', section);
                    activeTags = []; // Reset filter when switching tabs via drag
                    activeTopics = [];
                    updateGroupSelectorOptions(section);
                    renderFilters(section);
                    renderTricks(section); // Swap the cards instantly!
                }
            }
        });

        tabsContainer.addEventListener('pointerup', (e) => {
            if (!isPointerDown) return;
            isPointerDown = false;
            
            if (isDragging) {
                try {
                    tabsContainer.releasePointerCapture(e.pointerId);
                } catch(err) {}
                isDragging = false;
                slider.style.transition = ''; 
                
                // Snap the slider to the active tab
                const activeTab = document.querySelector('.tab.active');
                if (activeTab) updateSlider(activeTab);
            }
        });

        tabsContainer.addEventListener('pointercancel', (e) => {
            if (!isPointerDown) return;
            isPointerDown = false;
            
            if (isDragging) {
                try {
                    tabsContainer.releasePointerCapture(e.pointerId);
                } catch(err) {}
                isDragging = false;
                slider.style.transition = '';
                const activeTab = document.querySelector('.tab.active');
                if (activeTab) updateSlider(activeTab);
            }
        });

        // Initialize slider position
        window.addEventListener('load', () => {
            const activeTab = document.querySelector('.tab.active');
            if (activeTab) updateSlider(activeTab);
        });
        
        window.addEventListener('resize', () => {
            const activeTab = document.querySelector('.tab.active');
            if (activeTab) updateSlider(activeTab);
        });

        // Theme Toggle Logic — Hearthstone-style coin flip
        const themeToggle = document.getElementById('theme-toggle');
        let isLightMode = false;
        let coinRotation = 0;
        let isAnimating = false;

        themeToggle.addEventListener('click', () => {
            if (isAnimating) return;
            isAnimating = true;

            const isGoingLight = !isLightMode;
            const from = coinRotation;
            const to = coinRotation + 180;
            const dur = 900;

            // THE WHOLE COIN flips — circle, glass, icon, everything
            themeToggle.animate([
                { transform: `perspective(800px) rotateY(${from}deg) translateY(0px) scale(1)`, offset: 0 },
                { transform: `perspective(800px) rotateY(${from + 45}deg) translateY(-18px) scale(1.08)`, offset: 0.15 },
                { transform: `perspective(800px) rotateY(${from + 90}deg) translateY(-25px) scale(1.12)`, offset: 0.35 },
                { transform: `perspective(800px) rotateY(${from + 135}deg) translateY(-12px) scale(1.08)`, offset: 0.55 },
                { transform: `perspective(800px) rotateY(${to}deg) translateY(4px) scale(1.18)`, offset: 0.7 },
                { transform: `perspective(800px) rotateY(${to}deg) translateY(-2px) scale(0.92)`, offset: 0.82 },
                { transform: `perspective(800px) rotateY(${to}deg) translateY(1px) scale(1.04)`, offset: 0.92 },
                { transform: `perspective(800px) rotateY(${to}deg) translateY(0px) scale(1)`, offset: 1 }
            ], {
                duration: dur,
                easing: 'linear',
                fill: 'forwards'
            });

            // Energy burst glow at the slam-down moment
            setTimeout(() => {
                const glowColor = isGoingLight 
                    ? '0 0 35px 14px rgba(255, 183, 3, 0.8), 0 0 80px 30px rgba(255, 183, 3, 0.3)'
                    : '0 0 35px 14px rgba(160, 196, 255, 0.8), 0 0 80px 30px rgba(160, 196, 255, 0.3)';
                themeToggle.animate([
                    { boxShadow: '0 4px 15px rgba(0,0,0,0.1)' },
                    { boxShadow: glowColor },
                    { boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }
                ], { duration: 500, easing: 'ease-out' });
            }, dur * 0.6);

            // Change theme at the midpoint when coin is edge-on
            setTimeout(() => {
                isLightMode = isGoingLight;
                if (document.startViewTransition) {
                    document.startViewTransition(() => {
                        if (isLightMode) {
                            document.body.setAttribute('data-color-scheme', 'light');
                        } else {
                            document.body.removeAttribute('data-color-scheme');
                        }
                        if (typeof updateGlassEffect === 'function') {
                            updateGlassEffect(currentPercent);
                        }
                    });
                } else {
                    if (isLightMode) {
                        document.body.setAttribute('data-color-scheme', 'light');
                    } else {
                        document.body.removeAttribute('data-color-scheme');
                    }
                    if (typeof updateGlassEffect === 'function') {
                        updateGlassEffect(currentPercent);
                    }
                }
            }, dur * 0.35);

            coinRotation = to;
            
            setTimeout(() => {
                isAnimating = false;
            }, dur);
        });

        // Initial render
        initializeCustomSelect('sort-select');
        initializeCustomSelect('group-select');
        updateGroupSelectorOptions('Quant');
        renderFilters('Quant');
        renderTricks('Quant');
        
        setTimeout(() => {
            const activeTab = document.querySelector('.tab.active');
            if (activeTab) updateSlider(activeTab);
        }, 0);

        // Inject slide animations for quiz card transitions
        const styleEl = document.createElement('style');
        styleEl.textContent = `
            .quiz-card-slide-left {
                transform: translateX(-150%) rotate(-15deg) !important;
                opacity: 0 !important;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            .quiz-card-slide-right {
                transform: translateX(150%) rotate(15deg) !important;
                opacity: 0 !important;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
        `;
        document.head.appendChild(styleEl);

        // Quiz and Analytics State
        let quizQueue = [];
        let currentQuizIndex = 0;
        let quizResults = { remembered: [], forgotten: [] };
        let activeQuizSection = 'Quant';
        
        let quizBoardInitialized = false;
        let activeDragCard = null;
        let dragStartX = 0;
        let dragStartY = 0;

        function startQuiz() {
            const activeTab = document.querySelector('.tab.active');
            const section = activeTab ? activeTab.dataset.section : 'Quant';
            
            // Get filtered cards matching the active tab and active tags/topics
            const filteredTricks = tricks.filter(trick => 
                trick.section === section && 
                (activeTopics.length === 0 || activeTopics.includes(trick.topic)) &&
                (activeTags.length === 0 || (trick.tags && trick.tags.some(t => activeTags.includes(t))))
            );
            
            if (filteredTricks.length === 0) {
                alert(`No tricks found in the current tab/filters to study!`);
                switchView('cards');
                return;
            }

            activeQuizSection = section;
            // Shuffle tricks for quiz variety
            quizQueue = [...filteredTricks].sort(() => Math.random() - 0.5);
            currentQuizIndex = 0;
            quizResults = { remembered: [], forgotten: [] };
            quizBoardInitialized = false;

            // Transition UI views
            document.getElementById('grid-container').style.display = 'none';
            document.getElementById('analytics-view').style.display = 'none';
            
            // Sync Segmented Control if not already active
            const quizBtn = document.getElementById('view-quiz-btn');
            if (quizBtn && !quizBtn.classList.contains('active')) {
                document.querySelectorAll('.view-toggle-btn').forEach(btn => btn.classList.remove('active'));
                quizBtn.classList.add('active');
                const slider = document.getElementById('view-toggle-slider');
                if (slider) {
                    slider.style.width = quizBtn.offsetWidth + 'px';
                    slider.style.transform = `translateX(${quizBtn.offsetLeft}px)`;
                }
            }

            // Show Quiz View
            const quizView = document.getElementById('quiz-view');
            quizView.style.display = 'flex';
            
            renderQuizCard();
        }

        function renderQuizCard() {
            const quizView = document.getElementById('quiz-view');
            
            if (currentQuizIndex >= quizQueue.length) {
                // Let the final drop animation finish before showing analytics
                setTimeout(saveAndShowAnalytics, 600);
                return;
            }

            if (!quizBoardInitialized) {
                quizView.innerHTML = '';
                
                // Progress bar
                const progressContainer = document.createElement('div');
                progressContainer.className = 'quiz-progress-container';
                progressContainer.innerHTML = `
                    <div class="quiz-progress-text">
                        <span id="quiz-progress-label">Card ${currentQuizIndex + 1} of ${quizQueue.length}</span>
                        <span id="quiz-progress-percent">0% Complete</span>
                    </div>
                    <div class="quiz-progress-bar-track">
                        <div class="quiz-progress-bar-fill" id="quiz-progress-bar" style="width: 0%;"></div>
                    </div>
                `;
                quizView.appendChild(progressContainer);

                // Spatial Board
                const board = document.createElement('div');
                board.className = 'quiz-board';
                board.id = 'quiz-board';
                
                const leftSlot = document.createElement('div');
                leftSlot.className = 'quiz-slot left';
                leftSlot.innerHTML = `<div class="quiz-slot-content">I Forgot</div>`;
                leftSlot.addEventListener('click', () => {
                    if (currentQuizIndex < quizQueue.length) flingTopCard(false);
                });
                
                const rightSlot = document.createElement('div');
                rightSlot.className = 'quiz-slot right';
                rightSlot.innerHTML = `<div class="quiz-slot-content">I Remember</div>`;
                rightSlot.addEventListener('click', () => {
                    if (currentQuizIndex < quizQueue.length) flingTopCard(true);
                });
                
                board.appendChild(leftSlot);
                board.appendChild(rightSlot);
                
                // Render ALL cards in the queue, reverse order (so 0 is highest z-index naturally)
                for (let i = quizQueue.length - 1; i >= 0; i--) {
                    const trick = quizQueue[i];
                    const isVocab = trick.section === 'Vocab' || trick.section === 'VARC';
                    
                    const label1 = isVocab ? 'Meaning' : 'What it is';
                    const label2 = isVocab ? 'Pronunciation' : 'Where to Use';
                    const label3 = isVocab ? 'Origin & Memory' : 'The Logic';
                    const label4 = isVocab ? 'Synonyms' : 'Formula / Rule';
                    const label5 = isVocab ? 'Example & Swap Test' : 'Example';
                    
                    const icon1 = trick.icon1 || (isVocab ? '📖' : '🔍');
                    const icon2 = trick.icon2 || (isVocab ? '🗣️' : '🎯');
                    const icon3 = trick.icon3 || (isVocab ? '🧠' : '🧠');
                    const icon4 = trick.icon4 || (isVocab ? '📚' : '📐');
                    const icon5 = trick.icon5 || (isVocab ? '📝' : '💡');

                    let formulaHtml = trick.formula ? `
                        <div class="info-section">
                            <span class="info-label">${icon4} ${label4}</span>
                            <div class="info-content formula-box">${trick.formula}</div>
                        </div>` : '';

                    let tagsHtml = '';
                    if (trick.tags && Array.isArray(trick.tags)) {
                        tagsHtml = `
                            <div class="card-tags">
                                ${trick.tags.map(tag => `
                                    <span class="card-topic">
                                        <span class="card-topic-dot"></span>
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                        `;
                    }

                    const cardWrapper = document.createElement('div');
                    cardWrapper.className = 'card';
                    cardWrapper.id = `quiz-card-${i}`;
                    
                    cardWrapper.innerHTML = `
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="card-breadcrumb">${trick.module} &bull; ${trick.topic}</div>
                                ${tagsHtml}
                                <span class="card-number">${(i + 1).toString().padStart(2, '0')}</span>
                                <h2>
                                    ${trick.title}
                                    ${isVocab ? `<button class="speaker-btn" onclick="speakWord('${trick.title.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation">🗣️</button>` : ''}
                                </h2>
                                <span class="tap-hint">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                                    Tap to flip manually
                                </span>
                            </div>
                            <div class="card-back">
                                <h3>${isVocab ? 'Vocabulary Breakdown' : 'Trick Breakdown'}</h3>
                                <div class="info-section"><span class="info-label">${icon1} ${label1}</span><div class="info-content">${trick.whatItIs}</div></div>
                                <div class="info-section"><span class="info-label">${icon2} ${label2}</span><div class="info-content"${isVocab ? ' style="display: flex; align-items: center; gap: 8px;"' : ''}>${isVocab ? `<span>${trick.whereToUse}</span>` : trick.whereToUse}${isVocab ? `<button class="speaker-btn mini" onclick="speakWord('${trick.title.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation">🗣️</button>` : ''}</div></div>
                                <div class="info-section"><span class="info-label">${icon3} ${label3}</span><div class="info-content">${trick.logic}</div></div>
                                ${formulaHtml}
                                <div class="info-section"><span class="info-label">${icon5} ${label5}</span><div class="info-content example-box">${trick.example}</div></div>
                            </div>
                        </div>
                    `;
                    
                    cardWrapper.addEventListener('click', (e) => {
                        // Prevent flip if we were dragging, or if we clicked the speaker button
                        if (e.target.closest('.speaker-btn')) return;
                        if (!cardWrapper.hasAttribute('data-dragging')) {
                            cardWrapper.classList.toggle('is-flipped');
                        }
                    });
                    
                    board.appendChild(cardWrapper);
                }
                
                quizView.appendChild(board);
                
                const quitBtn = document.createElement('button');
                quitBtn.className = 'study-btn';
                quitBtn.style.marginTop = '1.5rem';
                quitBtn.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
                    Quit Session
                `;
                quitBtn.addEventListener('click', () => exitStudyMode());
                quizView.appendChild(quitBtn);
                
                quizBoardInitialized = true;
                
                if (window.MathJax) {
                    MathJax.typesetPromise().catch(err => console.log(err));
                }
            }
            
            updateDeckVisuals();
        }

        function updateDeckVisuals() {
            // Update progress
            const progressPercent = Math.round((currentQuizIndex / quizQueue.length) * 100);
            const label = document.getElementById('quiz-progress-label');
            const percent = document.getElementById('quiz-progress-percent');
            const bar = document.getElementById('quiz-progress-bar');
            
            if (label) label.textContent = `Card ${Math.min(currentQuizIndex + 1, quizQueue.length)} of ${quizQueue.length}`;
            if (percent) percent.textContent = `${progressPercent}% Complete`;
            if (bar) bar.style.width = `${progressPercent}%`;

            // Update cards
            for (let i = 0; i < quizQueue.length; i++) {
                const card = document.getElementById(`quiz-card-${i}`);
                if (!card) continue;
                
                // If it's already flung into a pile, leave its transform alone!
                if (card.classList.contains('in-pile')) continue;
                
                const offset = i - currentQuizIndex;
                
                if (offset < 0) {
                    card.style.display = 'none';
                } else if (offset === 0) {
                    card.style.display = 'block';
                    card.style.zIndex = 100;
                    card.style.transform = 'scale(1) translateY(0px)';
                    card.style.opacity = '1';
                    card.style.pointerEvents = 'auto';
                    attachDragEvents(card);
                } else if (offset === 1) {
                    card.style.display = 'block';
                    card.style.zIndex = 99;
                    card.style.transform = 'scale(0.95) translateY(16px)';
                    card.style.opacity = '0.9';
                    card.style.pointerEvents = 'none';
                    detachDragEvents(card);
                } else if (offset === 2) {
                    card.style.display = 'block';
                    card.style.zIndex = 98;
                    card.style.transform = 'scale(0.90) translateY(32px)';
                    card.style.opacity = '0.6';
                    card.style.pointerEvents = 'none';
                    detachDragEvents(card);
                } else {
                    card.style.display = 'none';
                    detachDragEvents(card);
                }
            }
        }

        // --- Drag Engine ---
        function attachDragEvents(card) {
            if (card.dataset.dragAttached) return;
            card.dataset.dragAttached = 'true';
            card.addEventListener('pointerdown', handleDragStart);
        }
        
        function detachDragEvents(card) {
            card.dataset.dragAttached = '';
            card.removeEventListener('pointerdown', handleDragStart);
        }

        function handleDragStart(e) {
            if (e.target.closest('.speaker-btn')) return;
            
            activeDragCard = e.currentTarget;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            
            activeDragCard.classList.add('is-dragging');
            activeDragCard.setPointerCapture(e.pointerId);
            
            activeDragCard.addEventListener('pointermove', handleDragMove);
            activeDragCard.addEventListener('pointerup', handleDragEnd);
            activeDragCard.addEventListener('pointercancel', handleDragEnd);
            
            activeDragCard.removeAttribute('data-dragging');
        }

        function handleDragMove(e) {
            if (!activeDragCard) return;
            
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;
            
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                activeDragCard.setAttribute('data-dragging', 'true');
            }
            
            const rotate = dx * 0.04;
            
            const board = document.getElementById('quiz-board');
            if (board) {
                const leftSlot = board.querySelector('.quiz-slot.left');
                const rightSlot = board.querySelector('.quiz-slot.right');
                
                if (dx < -100) {
                    leftSlot.classList.add('drag-over');
                    rightSlot.classList.remove('drag-over');
                } else if (dx > 100) {
                    rightSlot.classList.add('drag-over');
                    leftSlot.classList.remove('drag-over');
                } else {
                    leftSlot.classList.remove('drag-over');
                    rightSlot.classList.remove('drag-over');
                }
            }
            
            activeDragCard.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
        }

        function handleDragEnd(e) {
            if (!activeDragCard) return;
            
            activeDragCard.removeEventListener('pointermove', handleDragMove);
            activeDragCard.removeEventListener('pointerup', handleDragEnd);
            activeDragCard.removeEventListener('pointercancel', handleDragEnd);
            activeDragCard.classList.remove('is-dragging');
            
            const dx = e.clientX - dragStartX;
            
            const board = document.getElementById('quiz-board');
            if (board) {
                const left = board.querySelector('.quiz-slot.left');
                const right = board.querySelector('.quiz-slot.right');
                if (left) left.classList.remove('drag-over');
                if (right) right.classList.remove('drag-over');
            }
            
            if (dx < -100) {
                flingTopCard(false);
            } else if (dx > 100) {
                flingTopCard(true);
            } else {
                activeDragCard.style.transform = 'scale(1) translateY(0px)';
            }
            
                if (activeDragCard) activeDragCard.removeAttribute('data-dragging');
                activeDragCard = null;
            }, 50);
        }

        function flingTopCard(remembered) {
            if (currentQuizIndex >= quizQueue.length) return;
            const card = document.getElementById(`quiz-card-${currentQuizIndex}`);
            if (!card) return;
            
            const trick = quizQueue[currentQuizIndex];
            
            card.classList.add('in-pile');
            card.classList.remove('is-dragging');
            
            // Randomize position in the pile heavily so previous cards are visible beneath
            const randomRotation = (Math.random() * 24) - 12; // -12 to +12 degrees
            const randomY = (Math.random() * 40) - 20; // -20 to +20 px
            const randomXOffset = (Math.random() * 40) - 20; // -20 to +20 px
            
            const slotWidthOffset = window.innerWidth <= 768 ? (window.innerWidth / 2) - 40 : (Math.min(900, window.innerWidth) / 2) - 70;
            
            if (remembered) {
                quizResults.remembered.push(trick.title);
                card.style.transform = `translate(${slotWidthOffset + randomXOffset}px, ${randomY}px) rotate(${randomRotation}deg) scale(0.85)`;
            } else {
                quizResults.forgotten.push(trick.title);
                card.classList.add('is-flipped');
                card.style.transform = `translate(-${slotWidthOffset + randomXOffset}px, ${randomY}px) rotate(${randomRotation}deg) scale(0.85)`;
            }
            
            // Keep it visually on top of the deck while flying!
            card.style.zIndex = 999;
            
            // After flying, push it to the bottom of the pile stack
            const pileZIndex = currentQuizIndex + 10;
                if (card) card.style.zIndex = pileZIndex;
            }, 600);
            
            currentQuizIndex++;
            renderQuizCard(); 
        }

        function saveAndShowAnalytics() {
            const session = {
                timestamp: new Date().toLocaleString(),
                total: quizQueue.length,
                rememberedCount: quizResults.remembered.length,
                forgottenCount: quizResults.forgotten.length,
                remembered: [...quizResults.remembered],
                forgotten: [...quizResults.forgotten],
                section: activeQuizSection
            };

            let history = [];
            const saved = localStorage.getItem('quantTricksAnalytics');
            if (saved) {
                try {
                    history = JSON.parse(saved);
                } catch(e) {}
            }
            if (!Array.isArray(history)) history = [];
            history.push(session);
            localStorage.setItem('quantTricksAnalytics', JSON.stringify(history));

            switchView('analytics');
        }

        function showAnalyticsView(viewLastOnly = false) {
            // Hide other views
            document.getElementById('grid-container').style.display = 'none';
            document.getElementById('quiz-view').style.display = 'none';
            
            // Sync Segmented Control if not already active
            const analyticsBtn = document.getElementById('view-analytics-btn');
            if (analyticsBtn && !analyticsBtn.classList.contains('active')) {
                document.querySelectorAll('.view-toggle-btn').forEach(btn => btn.classList.remove('active'));
                analyticsBtn.classList.add('active');
                const slider = document.getElementById('view-toggle-slider');
                if (slider) {
                    slider.style.width = analyticsBtn.offsetWidth + 'px';
                    slider.style.transform = `translateX(${analyticsBtn.offsetLeft}px)`;
                }
            }

            const analyticsView = document.getElementById('analytics-view');
            analyticsView.style.display = 'flex';
            analyticsView.innerHTML = '';

            let history = [];
            const saved = localStorage.getItem('quantTricksAnalytics');
            if (saved) {
                try {
                    history = JSON.parse(saved);
                } catch(e) {}
            }

            if (history.length === 0) {
                analyticsView.innerHTML = `
                    <div class="analytics-header">
                        <span class="analytics-title">Study Analytics</span>
                    </div>
                    <div class="analytics-card" style="align-items: center; padding: 3rem; text-align: center;">
                        <span style="font-size: 3rem;">📊</span>
                        <h3 style="font-family: 'Outfit', sans-serif; margin-top: 1rem;">No Quiz History Found</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.5rem; max-width: 320px;">Complete your first Study Quiz session to generate performance analytics!</p>
                        <button class="study-btn primary-btn" style="margin-top: 1.5rem;" onclick="switchView('quiz');">
                            Start First Quiz
                        </button>
                      </div>
                `;
                return;
            }

            const lastSession = history[history.length - 1];
            const masteryRate = Math.round((lastSession.rememberedCount / lastSession.total) * 100);

            // Compute long-term statistics for tags
            const tagStats = {};
            history.forEach(session => {
                session.remembered.forEach(title => {
                    const trick = tricks.find(t => t.title === title);
                    if (trick && trick.tags) {
                        trick.tags.forEach(tag => {
                            if (!tagStats[tag]) tagStats[tag] = { remembered: 0, total: 0 };
                            tagStats[tag].remembered++;
                            tagStats[tag].total++;
                        });
                    }
                });
                session.forgotten.forEach(title => {
                    const trick = tricks.find(t => t.title === title);
                    if (trick && trick.tags) {
                        trick.tags.forEach(tag => {
                            if (!tagStats[tag]) tagStats[tag] = { remembered: 0, total: 0 };
                            tagStats[tag].total++;
                        });
                    }
                });
            });

            // Header HTML
            const headerDiv = document.createElement('div');
            headerDiv.className = 'analytics-header';
            headerDiv.innerHTML = `
                <span class="analytics-title">Study Dashboard</span>
            `;
            analyticsView.appendChild(headerDiv);

            // Analytics Grid
            const gridDiv = document.createElement('div');
            gridDiv.className = 'analytics-grid';

            // Card 1: Last Mastery Rate
            const card1 = document.createElement('div');
            card1.className = 'analytics-card';
            card1.innerHTML = `
                <span class="analytics-stat-label">Last Session Score</span>
                <div class="analytics-stat-value">${masteryRate}%</div>
                <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
                    Remembered ${lastSession.rememberedCount} of ${lastSession.total} cards in ${lastSession.section}
                </span>
            `;
            gridDiv.appendChild(card1);

            // Card 2: Total Sessions
            const card2 = document.createElement('div');
            card2.className = 'analytics-card';
            card2.innerHTML = `
                <span class="analytics-stat-label">Total Quizzes</span>
                <div class="analytics-stat-value">${history.length}</div>
                <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
                    Completed study quiz runs saved in history
                </span>
            `;
            gridDiv.appendChild(card2);

            // Card 3: Tag mastery listing
            const card3 = document.createElement('div');
            card3.className = 'analytics-card';
            card3.style.gridColumn = 'span 1';
            
            let tagsHtml = '<div class="tag-mastery-list">';
            const sortedTags = Object.keys(tagStats).sort();
            sortedTags.forEach(tag => {
                const rate = Math.round((tagStats[tag].remembered / tagStats[tag].total) * 100);
                let speedClass = 'high';
                if (rate < 50) speedClass = 'low';
                else if (rate < 80) speedClass = 'medium';

                tagsHtml += `
                    <div class="tag-mastery-item">
                        <div class="tag-mastery-header">
                            <span>${tag}</span>
                            <span>${rate}%</span>
                        </div>
                        <div class="tag-mastery-bar-track">
                            <div class="tag-mastery-bar-fill ${speedClass}" style="width: ${rate}%;"></div>
                        </div>
                    </div>
                `;
            });
            tagsHtml += '</div>';

            card3.innerHTML = `
                <span class="analytics-stat-label">Cumulative Tag Strength</span>
                ${tagsHtml}
            `;
            gridDiv.appendChild(card3);
            analyticsView.appendChild(gridDiv);

            // Forgotten cards review deck
            const reviewSection = document.createElement('div');
            reviewSection.className = 'review-deck-section';

            if (lastSession.forgotten.length === 0) {
                reviewSection.innerHTML = `
                    <div class="review-deck-title" style="color: #32D74B;">
                        🎉 Perfect Recall Session!
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">
                        Awesome! You remembered all ${lastSession.total} cards in your last study session. Keep practicing to retain mastery!
                    </p>
                `;
            } else {
                let deckHtml = '<div class="review-deck-list">';
                lastSession.forgotten.forEach(title => {
                    const trick = tricks.find(t => t.title === title);
                    if (trick) {
                        deckHtml += `
                            <div class="review-mini-card" onclick="studySingleTrick('${title.replace(/'/g, "\\'")}')">
                                <span>${trick.tags.join(', ')}</span>
                                <h4>${trick.title}</h4>
                                <span style="color: var(--accent-1); margin-top: 0.25rem;">Study Trick &rarr;</span>
                            </div>
                        `;
                    }
                });
                deckHtml += '</div>';

                reviewSection.innerHTML = `
                    <div class="review-deck-title">
                        📚 Focus Review Deck (${lastSession.forgotten.length})
                    </div>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.5rem;">
                        These cards were forgotten in the last session. Click any card below to return and focus-study it.
                    </p>
                    ${deckHtml}
                `;
            }
            analyticsView.appendChild(reviewSection);

            // Reset Button
            const footerActions = document.createElement('div');
            footerActions.style.width = '100%';
            footerActions.style.display = 'flex';
            footerActions.style.justifyContent = 'flex-end';
            footerActions.style.marginTop = '0.5rem';

            const resetBtn = document.createElement('button');
            resetBtn.className = 'study-btn';
            resetBtn.style.color = '#FF453A';
            resetBtn.style.borderColor = 'rgba(255, 69, 58, 0.2)';
            resetBtn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                Clear History Data
            `;
            resetBtn.addEventListener('click', () => {
                if (confirm("Are you sure you want to clear your study analytics history? This cannot be undone.")) {
                    localStorage.removeItem('quantTricksAnalytics');
                    showAnalyticsView(viewLastOnly);
                }
            });
            footerActions.appendChild(resetBtn);
            analyticsView.appendChild(footerActions);
        }

        function studySingleTrick(title) {
            exitStudyMode();
            // Find the trick tab and switch
            const trick = tricks.find(t => t.title === title);
            if (trick) {
                const section = trick.section;
                const tabEl = Array.from(tabs).find(t => t.dataset.section === section);
                if (tabEl) {
                    selectTab(tabEl);
                }
                
                // Set tag and topic filter to this trick's info
                if (trick.tags && trick.tags.length > 0) {
                    activeTags = [trick.tags[0]];
                }
                activeTopics = [trick.topic];
                renderFilters(section);
                renderTricks(section);
                
                // Scroll to the card
                setTimeout(() => {
                    const cards = document.querySelectorAll('.card');
                    cards.forEach(cardEl => {
                        const h2 = cardEl.querySelector('h2');
                        if (h2 && h2.textContent === title) {
                            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            // Apply a temporary border pulse to draw attention
                            cardEl.animate([
                                { boxShadow: '0 0 0 transparent' },
                                { boxShadow: '0 0 30px var(--accent-1)' },
                                { boxShadow: '0 0 0 transparent' }
                            ], { duration: 1500, iterations: 2 });
                        }
                    });
                }, 500);
            }
        }

        function exitStudyMode() {
            switchView('cards');
        }

        function switchViewVisibilityOnly(viewName) {
            const gridContainer = document.getElementById('grid-container');
            const quizView = document.getElementById('quiz-view');
            const analyticsView = document.getElementById('analytics-view');
            const filterBar = document.getElementById('filter-bar');
            const sortGroupBar = document.getElementById('sort-group-bar');
            const wodContainer = document.getElementById('word-of-the-day-container');
            
            if (viewName === 'cards') {
                if (gridContainer) gridContainer.style.display = 'grid';
                if (quizView) quizView.style.display = 'none';
                if (analyticsView) analyticsView.style.display = 'none';
                
                // Show filtering and search bar
                if (filterBar) filterBar.style.display = 'flex';
                if (sortGroupBar) sortGroupBar.style.display = 'flex';
                
                const activeTab = document.querySelector('.tab.active');
                const section = activeTab ? activeTab.dataset.section : 'Quant';
                if (wodContainer) {
                    wodContainer.style.display = section === 'Vocab' ? 'block' : 'none';
                }
                
                // Force a slider update to fix layout changes
                setTimeout(() => {
                    if (activeTab) updateSlider(activeTab);
                }, 50);
            } else if (viewName === 'quiz') {
                if (gridContainer) gridContainer.style.display = 'none';
                if (analyticsView) analyticsView.style.display = 'none';
                if (filterBar) filterBar.style.display = 'none';
                if (sortGroupBar) sortGroupBar.style.display = 'none';
                if (wodContainer) wodContainer.style.display = 'none';
                
                startQuiz();
            } else if (viewName === 'analytics') {
                if (gridContainer) gridContainer.style.display = 'none';
                if (quizView) quizView.style.display = 'none';
                if (filterBar) filterBar.style.display = 'none';
                if (sortGroupBar) sortGroupBar.style.display = 'none';
                if (wodContainer) wodContainer.style.display = 'none';
                
                showAnalyticsView(false);
            }
        }

        // View toggle (switchView) logic
        function switchView(viewName) {
            const cardsBtn = document.getElementById('view-cards-btn');
            const quizBtn = document.getElementById('view-quiz-btn');
            const analyticsBtn = document.getElementById('view-analytics-btn');
            const slider = document.getElementById('view-toggle-slider');
            
            let activeBtn = cardsBtn;
            if (viewName === 'quiz') activeBtn = quizBtn;
            if (viewName === 'analytics') activeBtn = analyticsBtn;
            
            if (cardsBtn && quizBtn && analyticsBtn) {
                document.querySelectorAll('.view-toggle-btn').forEach(btn => btn.classList.remove('active'));
                activeBtn.classList.add('active');
                
                if (slider) {
                    slider.style.width = activeBtn.offsetWidth + 'px';
                    slider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
                }
            }
            
            switchViewVisibilityOnly(viewName);
        }

        // View Toggle Drag Logic
        const viewToggleContainer = document.getElementById('view-toggle');
        const viewToggleSlider = document.getElementById('view-toggle-slider');
        const viewToggleBtns = Array.from(document.querySelectorAll('.view-toggle-btn'));
        
        let isPointerDownView = false;
        let isDraggingView = false;
        let startXView;
        let sliderStartXView;
        let hasDraggedView = false;

        viewToggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (hasDraggedView) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                const viewName = btn.id === 'view-cards-btn' ? 'cards' : (btn.id === 'view-quiz-btn' ? 'quiz' : 'analytics');
                switchView(viewName);
            });
        });

        if (viewToggleContainer) {
            viewToggleContainer.addEventListener('pointerdown', (e) => {
                isPointerDownView = true;
                hasDraggedView = false;
                isDraggingView = false;
                startXView = e.clientX;
                const transform = viewToggleSlider.style.transform;
                sliderStartXView = transform && transform.includes('translateX') 
                    ? parseFloat(transform.match(/translateX\(([-\d.]+)px\)/)[1]) 
                    : viewToggleBtns[0].offsetLeft;
            });

            viewToggleContainer.addEventListener('pointermove', (e) => {
                if (!isPointerDownView) return;
                const dx = e.clientX - startXView;
                
                if (!isDraggingView && Math.abs(dx) > 5) {
                    isDraggingView = true;
                    hasDraggedView = true;
                    try {
                        viewToggleContainer.setPointerCapture(e.pointerId);
                    } catch(err) {}
                    if (viewToggleSlider) {
                        viewToggleSlider.style.transition = 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease';
                    }
                }
                
                if (isDraggingView && viewToggleSlider) {
                    let newX = sliderStartXView + dx;
                    
                    const minX = viewToggleBtns[0].offsetLeft;
                    const maxX = viewToggleBtns[viewToggleBtns.length - 1].offsetLeft;
                    if (newX < minX) newX = minX;
                    if (newX > maxX) newX = maxX;
                    
                    viewToggleSlider.style.transform = `translateX(${newX}px)`;

                    let closestBtn = viewToggleBtns[0];
                    let minDiff = Infinity;
                    
                    viewToggleBtns.forEach(btn => {
                        const diff = Math.abs(newX - btn.offsetLeft);
                        if (diff < minDiff) {
                            minDiff = diff;
                            closestBtn = btn;
                        }
                    });
                    
                    if (!closestBtn.classList.contains('active')) {
                        viewToggleBtns.forEach(b => b.classList.remove('active'));
                        closestBtn.classList.add('active');
                        
                        const viewName = closestBtn.id === 'view-cards-btn' ? 'cards' : (closestBtn.id === 'view-quiz-btn' ? 'quiz' : 'analytics');
                        switchViewVisibilityOnly(viewName);
                    }
                }
            });

            viewToggleContainer.addEventListener('pointerup', (e) => {
                if (!isPointerDownView) return;
                isPointerDownView = false;
                
                if (isDraggingView) {
                    try {
                        viewToggleContainer.releasePointerCapture(e.pointerId);
                    } catch(err) {}
                    isDraggingView = false;
                    if (viewToggleSlider) {
                        viewToggleSlider.style.transition = '';
                        const activeBtn = document.querySelector('.view-toggle-btn.active');
                        if (activeBtn) {
                            viewToggleSlider.style.width = activeBtn.offsetWidth + 'px';
                            viewToggleSlider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
                        }
                    }
                }
                setTimeout(() => { hasDraggedView = false; }, 50);
            });

            viewToggleContainer.addEventListener('pointercancel', (e) => {
                if (!isPointerDownView) return;
                isPointerDownView = false;
                
                if (isDraggingView) {
                    try {
                        viewToggleContainer.releasePointerCapture(e.pointerId);
                    } catch(err) {}
                    isDraggingView = false;
                    if (viewToggleSlider) {
                        viewToggleSlider.style.transition = '';
                        const activeBtn = document.querySelector('.view-toggle-btn.active');
                        if (activeBtn) {
                            viewToggleSlider.style.width = activeBtn.offsetWidth + 'px';
                            viewToggleSlider.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
                        }
                    }
                }
                setTimeout(() => { hasDraggedView = false; }, 50);
            });
        }

        // Interactive Glass Slider Logic
        const track = document.getElementById('glass-slider-track');
        const handle = document.getElementById('glass-slider-handle');
        const labelVal = document.getElementById('glass-slider-val-label');
        
        let isDraggingSlider = false;
        let currentPercent = 0.5; // Default starts at Balanced (50%)

        function updateGlassEffect(percent) {
            currentPercent = percent;
            if (handle) {
                const handlePercent = percent * 100;
                handle.style.left = `${handlePercent}%`;
            }
            
            const isLight = document.body.getAttribute('data-color-scheme') === 'light';
            
            // Map percent to effect variables
            // Blur: 0.5px (at 0% Clear) to 45px (at 100% Frosted)
            const blurRadius = percent * 45;
            const saturateVal = 100 + percent * 120;
            
            // Glass opacity (navbar, dropdowns):
            // Light mode: 0.15 to 0.85
            // Dark mode: 0.35 to 0.80
            const glassOpacity = isLight 
                ? 0.15 + percent * 0.70 
                : 0.35 + percent * 0.45;
                 
            // Card opacity:
            // Light mode: 0.05 to 0.85
            // Dark mode: 0.01 to 0.18 (frosted white overlay)
            const cardOpacity = isLight 
                ? 0.05 + percent * 0.80 
                : 0.01 + percent * 0.17;
                
            // Borders:
            // Light mode: 0.04 to 0.16
            // Dark mode: 0.03 to 0.25
            const borderOpacity = isLight
                ? 0.04 + percent * 0.12
                : 0.03 + percent * 0.22;
             
            const glassBg = isLight 
                ? `rgba(255, 255, 255, ${glassOpacity})` 
                : `rgba(15, 15, 22, ${glassOpacity})`;
                 
            const cardBg = isLight 
                ? `rgba(255, 255, 255, ${cardOpacity})` 
                : `rgba(255, 255, 255, ${cardOpacity})`;
                
            const cardBorder = isLight
                ? `rgba(0, 0, 0, ${borderOpacity})`
                : `rgba(255, 255, 255, ${borderOpacity})`;
                
            // Inner Highlight / Outer Shadow Transition
            const cardShadow = isLight
                ? `inset 0 1px 1px rgba(255, 255, 255, ${0.2 + percent * 0.65}), 0 ${4 + percent * 10}px ${10 + percent * 24}px rgba(0, 0, 0, ${0.03 + percent * 0.1})`
                : `inset 0 1px 1px rgba(255, 255, 255, ${0.02 + percent * 0.15}), 0 ${4 + percent * 8}px ${10 + percent * 20}px rgba(0, 0, 0, ${0.15 + percent * 0.25})`;
             
            const glassBlur = `blur(${blurRadius}px) saturate(${saturateVal}%)`;
             
            // Apply properties directly to body style
            document.body.style.setProperty('--glass-bg', glassBg);
            document.body.style.setProperty('--card-bg', cardBg);
            document.body.style.setProperty('--card-border', cardBorder);
            document.body.style.setProperty('--glass-blur', glassBlur);
            document.body.style.setProperty('--card-shadow', cardShadow);
            
            // Update Label Text and Color based on percent
            if (labelVal) {
                if (percent < 0.3) {
                    labelVal.textContent = "Clear";
                    labelVal.style.color = "var(--accent-1)";
                } else if (percent > 0.7) {
                    labelVal.textContent = "Frosted";
                    labelVal.style.color = "var(--accent-2)";
                } else {
                    labelVal.textContent = "Balanced";
                    labelVal.style.color = "var(--accent-3)";
                }
            }
            
            // Save slider position
            localStorage.setItem('quantGlassSliderPercent', percent);
        }

        function handleSliderMove(clientX) {
            if (!track) return;
            const rect = track.getBoundingClientRect();
            let x = clientX - rect.left;
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            
            const percent = x / rect.width;
            updateGlassEffect(percent);
        }

        if (track) {
            track.addEventListener('pointerdown', (e) => {
                isDraggingSlider = true;
                track.setPointerCapture(e.pointerId);
                handleSliderMove(e.clientX);
            });

            track.addEventListener('pointermove', (e) => {
                if (!isDraggingSlider) return;
                handleSliderMove(e.clientX);
            });

            track.addEventListener('pointerup', (e) => {
                if (isDraggingSlider) {
                    track.releasePointerCapture(e.pointerId);
                    isDraggingSlider = false;
                }
            });
        }

        // Initialize view sliders on load and resize
        window.addEventListener('load', () => {
            const activeViewBtn = document.querySelector('.view-toggle-btn.active');
            if (activeViewBtn) {
                const slider = document.getElementById('view-toggle-slider');
                if (slider) {
                    slider.style.width = activeViewBtn.offsetWidth + 'px';
                    slider.style.transform = `translateX(${activeViewBtn.offsetLeft}px)`;
                }
            }
            // Load saved glass effect or default to 0.5 (Balanced)
            const savedPercent = localStorage.getItem('quantGlassSliderPercent');
            if (savedPercent !== null) {
                updateGlassEffect(parseFloat(savedPercent));
            } else {
                updateGlassEffect(0.5); // Default to Balanced
            }
        });

        window.addEventListener('resize', () => {
            const activeViewBtn = document.querySelector('.view-toggle-btn.active');
            if (activeViewBtn) {
                const slider = document.getElementById('view-toggle-slider');
                if (slider) {
                    slider.style.width = activeViewBtn.offsetWidth + 'px';
                    slider.style.transform = `translateX(${activeViewBtn.offsetLeft}px)`;
                }
            }
        });

        // Flashlight Cursor Glow
        const cursorGlow = document.getElementById('cursor-glow');
        if (cursorGlow) {
            document.addEventListener('mousemove', function(e) {
                // e.clientX/Y are viewport coordinates, which matches position: fixed perfectly (even when scrolled)
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            });
        }
            
            

