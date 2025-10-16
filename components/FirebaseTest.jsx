// Simple Firebase test component to debug submission issues
"use client"
import { useState } from 'react'
import { db, isConfigured } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function FirebaseTest() {
  const [testResult, setTestResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const testFirebase = async () => {
    setIsLoading(true)
    setTestResult('Testing Firebase connection...')

    try {
      // Test basic connection
      console.log('Firebase configured:', isConfigured)
      console.log('Database instance:', db)

      // Test document creation
      const testDoc = {
        test: true,
        message: 'Firebase test',
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString()
      }

      console.log('Attempting to write test document:', testDoc)
      
      const docRef = await addDoc(collection(db, 'test_submissions'), testDoc)
      
      console.log('Document written with ID:', docRef.id)
      setTestResult(`✅ Success! Document ID: ${docRef.id}`)
      
    } catch (error) {
      console.error('Firebase test error:', error)
      setTestResult(`❌ Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg border">
      <h3 className="font-bold mb-2">Firebase Debug</h3>
      <button 
        onClick={testFirebase}
        disabled={isLoading}
        className="bg-blue-600 px-3 py-1 rounded mr-2 disabled:opacity-50"
      >
        {isLoading ? 'Testing...' : 'Test Firebase'}
      </button>
      <div className="mt-2 text-sm">
        <div>Configured: {isConfigured ? '✅' : '❌'}</div>
        <div className="mt-1">{testResult}</div>
      </div>
    </div>
  )
}
