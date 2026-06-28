import type { Trick } from '../types';

export const quantTricks: Trick[] = [
    {
        "dateAdded": "2026-01-01T12:02:00.000Z",
        "section": "Quant",
        "title": "Algebraic Substitution & Extreme Cases",
        "tags": [
            "Algebraic Shortcuts"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "Substituting abstract algebraic variables with small, concrete numbers to solve expressions instantly, and using mathematical edge cases (like 0, 1, -1, or fractions) to test and disprove general multiple-choice statements.",
        "whereToUse": "Use on Multiple Choice Questions (MCQs) containing algebraic expressions, inequalities, or variables in the answer choices.",
        "logic": "1. <strong>Substitution</strong>: If a statement holds true for all numbers in a range, it must hold true for specific values in that range. Pick small, distinct integers to calculate option values.<br>2. <strong>Extreme Cases</strong>: Test general claims with boundary numbers: <strong>0</strong> (collapses products), <strong>1</strong> (masks powers), <strong>negatives</strong> (flips inequality signs), and <strong>fractions between 0 and 1</strong> (shrink when squared instead of growing).",
        "formula": null,
        "example": "<strong>CAT-Style:</strong> 'Which is always true for \\( x > 0 \\)?'<br>&bull; Option A: \\( x^2 > x \\). Stress test with \\( x = 0.5 \\rightarrow 0.25 > 0.5 \\)? <strong>FALSE.</strong> Eliminated.<br>&bull; Option B: \\( x + 1 > x \\). Try \\( x = 0.5 \\rightarrow 1.5 > 0.5 \\)? TRUE. Try \\( x = 100 \\rightarrow 101 > 100 \\)? TRUE. <strong>Answer: B.</strong>",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:03:00.000Z",
        "section": "Quant",
        "title": "Factorial Exponents & Bottlenecks",
        "tags": [
            "Prime Factors"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "A systematic technique to find the highest power (exponent \\( k \\)) of any divisor \\( X \\) (whether \\( X \\) is prime, a prime power, or composite) that divides a factorial \\( N! \\) without remainder.",
        "whereToUse": "Use when finding the highest power \\( k \\) such that \\( X^k \\) divides \\( N! \\) (written as \\( X^k \\mid N! \\)), or when counting trailing zeros in \\( N! \\) (which is the highest power of 10).",
        "logic": "1. <strong>Successive Division (Legendre's Formula)</strong>: To count a prime factor \\( p \\) in \\( N! \\), divide \\( N \\) by \\( p \\), then the quotient by \\( p \\), and sum all quotients.<br>2. <strong>Batching</strong>: If the divisor is \\( p^a \\) (like \\( 8 = 2^3 \\)), count total \\( p \\) and divide by \\( a \\) to form complete groups.<br>3. <strong>Bottlenecking</strong>: If the divisor is composite \\( p^a q^b \\) (like \\( 12 = 2^2 \\times 3 \\)), compute the count for each prime component. The component with the smallest count is your bottleneck.<br>4. <strong>Speed Hack</strong>: For simple composites like \\( 15 = 3 \\times 5 \\), only check the larger prime \\( 5 \\) because it runs out first.",
        "formula": "Exponent of prime \\( p \\) in \\( N! \\): \\( E_p(N!) = \\sum_{k=1}^{\\infty} \\lfloor \\frac{N}{p^k} \\rfloor \\)<br>Exponent of composite \\( p^a q^b \\): \\( \\min\\left( \\lfloor \\frac{E_p(N!)}{a} \\rfloor, \\lfloor \\frac{E_q(N!)}{b} \\rfloor \\right) \\)",
        "example": "<strong>Q: Highest power of 12 that divides 50!</strong><br>\\( 12 = 2^2 \\times 3 \\). Need batches of two 2s AND one 3.<br>&bull; <strong>Count 2s:</strong> 25+12+6+3+1 = 47. Batches of 2 &rarr; \\( 47 \\div 2 = 23 \\).<br>&bull; <strong>Count 3s:</strong> 16+5+1 = 22. Batches of 1 &rarr; 22.<br>&bull; <strong>Bottleneck:</strong> min(23, 22) = <strong>22</strong>. So \\( 12^{22} \\mid 50! \\).<br><br><strong>Speed Hack:</strong> Highest power of 15 in 40!? \\( 15 = 3 \\times 5 \\). Larger prime = 5. Count 5s: 8+1 = 9. Answer: <strong>9</strong>.",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:04:00.000Z",
        "section": "Quant",
        "title": "Integer Constraint Lock-In",
        "tags": [
            "Equations & Roots"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "Solving exponent equations or number theory systems by leveraging integer boundaries. When variables are constrained to integers, the set of possible solutions is extremely small.",
        "whereToUse": "Use on equations where variables are explicitly restricted to integers, natural numbers, or whole numbers, especially in exponential equations or Diophantine-like algebra.",
        "logic": "If an equation like \\( x^n = K \\) has integer constraints, try \\( x=1 \\) first (only works if \\( K=1 \\)), then \\( x=2 \\), etc. Because powers grow exponentially, options are highly limited. You can guess and verify in seconds instead of solving algebraically.",
        "formula": null,
        "example": "<strong>Q:</strong> If \\( 2^{2x+1} = 32 \\) and \\( x \\) is a positive integer, find \\( x ).<br>&bull; \\( 32 = 2^5 \\), so \\( 2x+1 = 5 \\rightarrow x = 2 \\). <strong>Done in 5 seconds.</strong><br>&bull; No quadratic formula, no logs &mdash; just match the powers because you know \\( x \\) must be an integer.",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:05:00.000Z",
        "section": "Quant",
        "title": "Fractions Shift (Dilute vs. Concentrate)",
        "tags": [
            "Fractions & Decimals"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "A rule to instantly compare two fractions or understand how a fraction changes when the same positive constant is added or subtracted from both the numerator and denominator.",
        "whereToUse": "Use to compare fraction sizes, verify inequality shifts, or determine the direction of a ratio change when equal amounts are added/subtracted.",
        "logic": "1. <strong>Dilution (Adding)</strong>: Adding a constant \\( c > 0 \\) to both terms of a top-heavy fraction \\( a/b > 1 \\) pulls its value <strong>down</strong> toward 1.<br>2. <strong>Concentration (Subtracting)</strong>: Subtracting a constant \\( c > 0 \\) from both terms of a top-heavy fraction \\( a/b > 1 \\) pushes its value <strong>up</strong> away from 1.<br>(Think of juice: adding water/juice to a concentrated cup dilutes the taste; removing ingredients concentrates it.)",
        "formula": "\\( \\frac{a+c}{b+c} < \\frac{a}{b} < \\frac{a-c}{b-c} \\) &nbsp; (when \\( a > b > 0 \\) and \\( c > 0 \\))",
        "example": "<strong>Q: Arrange in order:</strong> \\( \\frac{4}{3},\\; \\frac{3}{2},\\; \\frac{2}{1} \\)<br>&bull; Start from \\( 3/2 \\). Add 1 to both &rarr; \\( 4/3 \\) (diluted, smaller). Subtract 1 from both &rarr; \\( 2/1 \\) (concentrated, larger).<br>&bull; Order: \\( 4/3 < 3/2 < 2/1 \\). <strong>No cross-multiplication needed.</strong>",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:06:00.000Z",
        "section": "Quant",
        "title": "Prime Sum Ratio Check",
        "tags": [
            "Ratios & Proportions"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "A rapid shortcut to identify valid ratios representing divisions of a prime total. Because a prime total \\( P \\) cannot be divided into non-trivial equal integer groups, the sum of the ratio terms must divide the total directly (usually meaning the ratio sum itself must equal the prime).",
        "whereToUse": "Use on ratio word problems where the total population/quantity is explicitly stated to be a <strong>prime number</strong>.",
        "logic": "A ratio of \\( a:b \\) implies the total count is \\( k \\times (a+b) \\) for some positive integer \\( k \\). If the total count is a prime number \\( P \\), then the only integer factors of the total are 1 and \\( P \\). Since \\( a+b > 1 \\), \\( k \\) must be 1, which forces the ratio sum \\( a+b \\) to equal \\( P \\).",
        "formula": null,
        "example": "<strong>Q:</strong> A company has a prime number of employees. The male-to-female ratio is either 87:100 or 97:84. Which is valid?<br>&bull; Option A: \\( 87 + 100 = 187 = 11 \\times 17 \\). NOT prime. ❌<br>&bull; Option B: \\( 97 + 84 = 181 \\). Is 181 prime? Not divisible by 2, 3, 5, 7, 11, 13 &mdash; yes, <strong>181 is prime ✓</strong>.<br>&bull; <strong>Answer: B.</strong> Solved in 15 seconds by just adding two numbers.",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:07:00.000Z",
        "section": "Quant",
        "title": "Digit Reversal & the 9s Rule",
        "tags": [
            "Integers"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "A divisibility rule showing that the difference between any two-digit number and its digit-reversed counterpart is always a multiple of 9, and the quotient after dividing by 9 is the exact gap between the digits.",
        "whereToUse": "Use on two-digit number problems where digits are reversed and the difference is given (e.g., 'reversed number increases/decreases by \\( X \\)').",
        "logic": "A two-digit number is \\( 10A + B \\). Its reverse is \\( 10B + A \\). The absolute difference is \\( |(10A + B) - (10B + A)| = 9|A - B| \\). Dividing the difference by 9 gives the exact difference between the two digits, \\( |A-B| \\), instantly.",
        "formula": "\\( \\frac{|\\text{Difference}|}{9} = |A - B| \\text{ (Digit Gap)} \\)",
        "example": "<strong>Q:</strong> A two-digit number increases by 27 when its digits are reversed. Find the digit gap and list possible numbers.<br>&bull; \\( 27 \\div 9 = 3 \\). The digits are exactly <strong>3 apart</strong>.<br>&bull; Since the number increases when reversed, the tens digit is smaller. Possible: <strong>14, 25, 36, 47, 58, 69</strong>.<br>&bull; If a second condition says 'digits sum to 7', then \\( 25 \\) is the answer. (2+5=7, gap=3 ✓)",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:08:00.000Z",
        "section": "Quant",
        "title": "Power Towers vs. Nested Radicals",
        "tags": [
            "Indices & Surds"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "Clarifying rules for exponent towers vs bracketed powers, and nested root simplification.",
        "whereToUse": "Use when simplifying multi-level indices (with or without parentheses) or nested root structures in expressions.",
        "logic": "1. <strong>Parentheses</strong>: Exponents inside/outside brackets multiply: \\( (x^A)^B = x^{A \\times B} \\).<br>2. <strong>Power Tower</strong>: Exponents without brackets are solved top-down: \\( x^{A^B} = x^{(A^B)} \\). This grows extremely fast.<br>3. <strong>Nested Radicals</strong>: Nested roots can be combined into a single root by multiplying their indices: \\( \\sqrt[A]{\\sqrt[B]{x}} = \\sqrt[A \\times B]{x} \\).",
        "formula": "\\( (x^A)^B = x^{A \\times B} \\quad \\text{vs.} \\quad x^{A^B} \\)<br>\\( \\sqrt[A]{\\sqrt[B]{x}} = \\sqrt[A \\times B]{x} \\)",
        "example": "<strong>Spot the Trap:</strong><br>&bull; \\( (2^3)^2 = 2^{3 \\times 2} = 2^6 = 64 \\). (Brackets &rarr; multiply.)<br>&bull; \\( 2^{3^2} = 2^9 = 512 \\). (Tower &rarr; top-down. 512 is <strong>8&times; bigger!</strong>)<br><br><strong>Nested Roots:</strong> \\( \\sqrt[3]{\\sqrt[4]{x}} = \\sqrt[12]{x} \\). Just multiply \\( 3 \\times 4 = 12 \\).",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    },
    {
        "dateAdded": "2026-01-01T12:09:00.000Z",
        "section": "Quant",
        "title": "Micro-Modeling for Sequences",
        "tags": [
            "Sequences & Series"
        ],
        "module": "Module 1",
        "topic": "Properties of Nos",
        "whatItIs": "Reducing a complex, large-scale sequence or series down to a small, hand-calculable size (e.g., \\( N=2 \\) or \\( N=3 \\)) to test and match algebraic options.",
        "whereToUse": "Use on sequence, series, or progression questions with algebraic formulas in the multiple-choice options.",
        "logic": "If a mathematical formula holds true for \\( N = 1000 \\) terms, it must also hold true for \\( N = 2 \\) or \\( N = 3 \\). Calculate the sum manually for \\( N=3 \\), then substitute \\( N=3 \\) into the options. The correct option will yield the exact same value.",
        "formula": null,
        "example": "<strong>Q:</strong> Find the sum \\( 1 \\cdot 2 + 2 \\cdot 3 + 3 \\cdot 4 + \\cdots \\) up to \\( N \\) terms.<br>&bull; <strong>Shrink:</strong> Set \\( N = 3 \\). Manual sum = \\( 2 + 6 + 12 = 20 \\).<br>&bull; <strong>Test options with N=3:</strong><br>&nbsp;&nbsp;A) \\( N(N+1)/2 = 6 \\). ❌<br>&nbsp;&nbsp;B) \\( N(N+1)(N+2)/3 = 20 \\). ✅<br>&nbsp;&nbsp;C) \\( N^2(N+1)/2 = 18 \\). ❌<br>&bull; <strong>Answer: B.</strong> Solved a scary sum without any algebra.",
        "icon1": "🔍",
        "icon2": "🎯",
        "icon3": "🧠",
        "icon4": "📐",
        "icon5": "💡"
    }
];
