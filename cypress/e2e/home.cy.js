describe('react Calendar', () => {
    before(() => {
        cy.visit('/')
    })

    it('loads successfully', () => {
        cy.getDataTestId('reactCalendar').should('exist').and('have.text', 'reactcalendar')
    })

    it('loads with a 9-5 schedule', () => {
        cy.getDataTestId('Monday-9-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-10-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-11-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-12-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-13-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-14-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-15-cell').should('have.class', 'selected')
        cy.getDataTestId('Monday-16-cell').should('have.class', 'selected')
    })

    it('remove times in schedule', () => {
        cy.getDataTestId('Tuesday-9-cell').should('have.class', 'selected')
        cy.getDataTestId('Tuesday-9-cell').trigger('mousedown')
        cy.getDataTestId('Tuesday-9-cell').trigger('mouseup')
        cy.getDataTestId('Tuesday-9-cell').should('not.have.class', 'selected')

        cy.getDataTestId('Wednesday-12-cell').should('have.class', 'selected')
        cy.getDataTestId('Wednesday-12-cell').trigger('mousedown')
        cy.getDataTestId('Wednesday-12-cell').trigger('mouseup')
        cy.getDataTestId('Wednesday-12-cell').should('not.have.class', 'selected')
    })

    it('add times to schedule', () => {
        cy.getDataTestId('Saturday-15-cell').should('not.have.class', 'selected')
        cy.getDataTestId('Saturday-15-cell').trigger('mousedown')
        cy.getDataTestId('Saturday-15-cell').trigger('mouseup')
        cy.getDataTestId('Saturday-15-cell').should('have.class', 'selected')

        cy.getDataTestId('Wednesday-17-cell').should('not.have.class', 'selected')
        cy.getDataTestId('Wednesday-17-cell').trigger('mousedown')
        cy.getDataTestId('Wednesday-17-cell').trigger('mouseup')
        cy.getDataTestId('Wednesday-17-cell').should('have.class', 'selected')
    })

    it('drag to remove chunks of times from schedule', () => {
        cy.getDataTestId('Friday-12-cell').trigger('mousedown')
        cy.getDataTestId('Friday-16-cell').trigger('mouseup')
        cy.getDataTestId('Friday-12-cell').should('not.have.class', 'selected')
        cy.getDataTestId('Friday-13-cell').should('not.have.class', 'selected')
        cy.getDataTestId('Friday-14-cell').should('not.have.class', 'selected')
        cy.getDataTestId('Friday-15-cell').should('not.have.class', 'selected')
        cy.getDataTestId('Friday-16-cell').should('not.have.class', 'selected')
    })

    it('drag to add chunks of times to schedule', () => {
        cy.getDataTestId('Tuesday-6-cell').trigger('mousedown')
        cy.getDataTestId('Tuesday-8-cell').trigger('mouseup')
        cy.getDataTestId('Tuesday-6-cell').should('have.class', 'selected')
        cy.getDataTestId('Tuesday-7-cell').should('have.class', 'selected')
        cy.getDataTestId('Tuesday-8-cell').should('have.class', 'selected')
    })
})