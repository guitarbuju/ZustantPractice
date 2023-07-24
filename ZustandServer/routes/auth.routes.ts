
import express from 'express'
import { loginHandler,profileHandler } from '../controllers/auth.controller'
import{ requireAuth} from '../middleware/requireAuth'
import {Router} from 'express'

const router= Router()

router.post('/login',loginHandler)

router.get('/profile',requireAuth, profileHandler)



export default router