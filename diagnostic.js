#!/usr/bin/env node

// Simple diagnostic script to check server and file status
const fs = require('fs');
const path = require('path');

console.log('🔧 Geriatrics Dashboard Diagnostic Tool');
console.log('=====================================\n');

// Check if files exist
const filesToCheck = [
    'index.html',
    'patient-dashboard.html',
    'patient-dashboard-fixed.html',
    'dashboard/index.html',
    'debug-dashboard.html',
    'simple-dashboard.html',
    'comprehensive-debug.html'
];

console.log('📁 File Status:');
filesToCheck.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`✅ ${file} - ${stats.size} bytes - ${stats.mtime.toISOString()}`);
    } else {
        console.log(`❌ ${file} - NOT FOUND`);
    }
});

console.log('\n🌐 Server Status:');
console.log('Checking if server is running on port 8888...');

// Simple HTTP check
const http = require('http');
const options = {
    hostname: 'localhost',
    port: 8888,
    path: '/',
    method: 'GET',
    timeout: 5000
};

const req = http.request(options, (res) => {
    console.log(`✅ Server is running - Status: ${res.statusCode}`);
    console.log(`✅ Content-Type: ${res.headers['content-type']}`);
    
    // Test dashboard endpoint
    const dashboardReq = http.request({
        hostname: 'localhost',
        port: 8888,
        path: '/dashboard',
        method: 'GET',
        timeout: 5000
    }, (dashboardRes) => {
        console.log(`✅ Dashboard endpoint - Status: ${dashboardRes.statusCode}`);
        
        // Test fixed dashboard endpoint
        const fixedReq = http.request({
            hostname: 'localhost',
            port: 8888,
            path: '/patient-dashboard-fixed',
            method: 'GET',
            timeout: 5000
        }, (fixedRes) => {
            console.log(`✅ Fixed dashboard endpoint - Status: ${fixedRes.statusCode}`);
            console.log('\n🎉 All systems operational!');
        });
        
        fixedReq.on('error', (err) => {
            console.log(`❌ Fixed dashboard endpoint error: ${err.message}`);
        });
        
        fixedReq.end();
    });
    
    dashboardReq.on('error', (err) => {
        console.log(`❌ Dashboard endpoint error: ${err.message}`);
    });
    
    dashboardReq.end();
});

req.on('error', (err) => {
    console.log(`❌ Server not running - ${err.message}`);
    console.log('💡 Try running: npx serve . -p 8888');
});

req.on('timeout', () => {
    console.log('❌ Server request timed out');
});

req.end();

console.log('\n📊 Quick File Analysis:');
const patientDashboardPath = path.join(__dirname, 'patient-dashboard-fixed.html');
if (fs.existsSync(patientDashboardPath)) {
    const content = fs.readFileSync(patientDashboardPath, 'utf8');
    
    // Check for key elements
    const checks = [
        { name: 'HTML structure', test: content.includes('<!DOCTYPE html>') },
        { name: 'Tailwind CSS', test: content.includes('tailwindcss.com') },
        { name: 'JavaScript functions', test: content.includes('function addNewPatient()') },
        { name: 'Event listeners', test: content.includes('addEventListener') },
        { name: 'LocalStorage usage', test: content.includes('localStorage') },
        { name: 'Console logging', test: content.includes('console.log') },
        { name: 'Modal functionality', test: content.includes('addPatientModal') },
        { name: 'Form handling', test: content.includes('addPatientForm') }
    ];
    
    checks.forEach(check => {
        console.log(`${check.test ? '✅' : '❌'} ${check.name}`);
    });
    
    // Count functions
    const functionMatches = content.match(/function\s+\w+\s*\(/g);
    console.log(`\n📈 Statistics:`);
    console.log(`   Functions defined: ${functionMatches ? functionMatches.length : 0}`);
    console.log(`   File size: ${content.length} characters`);
    console.log(`   Lines of code: ${content.split('\n').length}`);
}