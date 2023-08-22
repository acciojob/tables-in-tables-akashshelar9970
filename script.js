describe("Nested Table and List Test", () => {
    it("Should verify the nested tables and lists", () => {
        cy.visit("your-page-url"); // Replace with the URL of your page

        // Verify Nested Table 2
        cy.get("table")
            .eq(0) // Select the first table (index 0) containing Nested Table 2
            .find("th")
            .should("contain", "Nested Table 2");

        // Verify List in one of the tables
        cy.get("table")
            .eq(1) // Select the second table (index 1) containing the list
            .find("li")
            .should("have.length", 3) // Check for three list items
            .each((listItem) => {
                expect(listItem).to.contain("List item");
            });

        // Verify Nested Table 3
        cy.get("table")
            .eq(2) // Select the third table (index 2) containing Nested Table 3
            .find("th")
            .should("contain", "Nested Table 3");

        // Verify Nested Table 4 and background color
        cy.get("table")
            .eq(3) // Select the fourth table (index 3) containing Nested Table 4
            .find("th")
            .should("contain", "Nested Table 4");
        
        cy.get("table")
            .eq(3)
            .find("td.black-cell")
            .should("contain", "HTML")
            .should("have.css", "background-color", "rgb(0, 0, 0)");
    });
});
