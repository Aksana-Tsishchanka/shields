'use strict'

const { ServiceTester } = require('../tester')
const { isIntegerPercentage } = require('../test-validators')

const t = new ServiceTester({
  id: 'sonarqubecoverage',
  title: 'SonarQubeCoverage',
  pathPrefix: '/sonar',
})
module.exports = t

t.create('Coverage')
  .get(
    '/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/coverage.json'
  )
  .expectBadge({
    label: 'coverage',
    message: isIntegerPercentage,
  })

t.create('Coverage (legacy API supported)')
  .get(
    '/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/coverage.json?version=4.2'
  )
  .expectBadge({
    label: 'coverage',
    message: isIntegerPercentage,
  })
