                             # PASSWORD GENERATOR #
 A responsive, accessible, mobile-first password generator built with HTML, CSS and JavaScript.
 Users can generate secure passwords based on selected criteria, copy them to clipboard, and see a visual
 strength indicator.

                             # Features
  - Generate password based on selected options:
            - Uppercase letters
            - Lowercase letters
            - Numbers
            - Symbols
  - Adjustable password length(4-20 characters)
  - Copy password to clipboard
  - Animated strength indicator
  - Accessibility support (ARIA attributes, focus states)
  - Mobile-first responsive layout
  - Hover & focus interactive states

                            #Screenshot
   ![Preview](Знімок%20екрана%202026-02-25%20103829.png)

                            # Responsive Design
    This project follows a mobile-first approach.
        - Base styles optimized for mobile devices
        - Desktop improvements using media queries
        - Adaptive layout depending on screen size

                              #Password Strength Logic
    Password strength is calculated based on:
 1. Number of selected character types
 2. Password length(bonus if >= 12 chatacters)
    Strength levels:
 -  Types Selected                Lenth < 12            Length >=12
 - 1-2 types                     WEAK                  STRONG
 - 3-4 types                     MEDIUM                VERY STRONG
--- The strength is visuale displayed using animated bars and text

                            #Animations
    - Smooth password update transition
    - Animated strength bars
    - Button press effect
    - Copy confirmation

                            #Technologies Used
    - HTML5
    - CSS3(Mobile-first, Flexbox)
    - Vanilla JavaScript(ES6+)
    - Clipboard API

                            #How to Use
      1. Select desired character types
      2. Adjust password length
      3. Click Generate
      4. Click the copy icon to save the password to clipboard
    
    
             
