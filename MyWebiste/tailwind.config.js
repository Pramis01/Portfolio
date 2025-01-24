// Tailwind CSS Configuration
tailwind.config = {
 theme:{
     // Custom theme settings
    gridTenplateColumns:{
         // 
            // Adds a custom grid column configuration.
            // 'auto': Defines a grid with columns that automatically fit the available space.
            // Each column will have a minimum width of 200px and grow up to 1 fraction of the remaining space (1fr).
            //
        'auto': 'repeat( auto-fit, minmax(200px, 1fr))'
    },
    fontFamily:{
        // 
            // Adds custom font families.
            // 'Outfit': Specifies the "Outfit" font with a fallback to "sans-serif".
            // Used for modern and clean typography.
            //
        Outfit: ["Outfit", "sans-serif"],

            // 
            // 'Ovo': Specifies the "Ovo" font with a fallback to "serif".
            // Used for elegant and classic typography.
            //
        Ovo: ["Ovo", "serif"]
    }
 }
}

