/**
 * portalController.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import express from 'express'
import mongoose from 'mongoose'
import winston from 'winston';
  
// Model
const A = mongoose.model('A');

// Routes
let router = express.Router();

/**
 * Get all
 */
router.get('/', async (req, res) => 
{
    winston.debug('Get all called')

    res.status(200).send("Get all A called successfully")
    /*try
    {
        const aList = await A.find({})
            .skip(re.query.skip)
            .limit(req.query.limit); 

        res.send(aList);
    }
    catch (err) 
    {
        res.status(500).json(err);
    }*/ 
});

/**
 * Get one
 */
router.get('/:id', async (req, res) => 
{
    winston.debug('Get called for id: ' + req.params.id)

    res.status(200).send("Get one A called successfully with id " + req.params.id)
    /*try
    {
        const portal = await Portal.findOne({_id: req.params.id}, {}); 
        
        if (!portal) 
        {
            res.status(404).json('{ message: portal for id ' + req.params.id + ' not found }');
        }
        else
        {
            res.send(portal);
        }
    }
    catch (err) 
    {
        res.status(500).json(err);
    } */
});

/**
 * Delete
 */
router.delete('/:id', async (req, res) =>  
{ 
    winston.debug('Delete called for id: ' + req.params.id)

    res.status(200).send("Delete A called successfully with id " + req.params.id)
    /*try 
    {
        const portal = await Portal.findByIdAndDelete({_id: req.params.id});
        
        if (!portal) 
        {
            res.status(404).json('{ message: portal for id ' + req.params.id + ' not found }');
        }
        else
        {
            res.json('{ message: deleted }')
        }
    }     
    catch (err) 
    {
      if (err.name == 'ValidationError') 
      {
          res.status(400).json(err);
      } 
      else 
      {
          res.status(500).json(err);
      }
    }*/
});

/**
 * Post
 */
router.post('/', async (req, res) =>  
{ 
    winston.debug('Post called with body: ' + req.body)

    res.status(200).send("Post an A called successfully with body: " + req.body)
    /*try 
    {
        const portal = new Portal(req.body);
    
        await portal.save();

        res.send(portal);
    }     
    catch (err) 
    {
      if (err.name == 'ValidationError') 
      {
          res.status(400).json(err);
      } 
      else 
      {
          res.status(500).json(err);
      }
    }*/
})

/**
 * Put
 */
router.put('/', async (req, res) =>
{
    winston.debug('Put called with body: ' + req.body)

    res.status(200).send("Put an A called successfully with body: " + req.body)
    /*try 
    {
        const portal = await Portal.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        
        if (!portal) 
        {
            res.status(404).json('{ message: portal for id ' + req.params.id + ' not found }');
        }
        else
        {
            res.send(portal)
        }

        res.send(portal);
    }     
    catch (err) 
    {
      if (err.name == 'ValidationError') 
      {
          res.status(400).json(err);
      } 
      else 
      {
          res.status(500).json(err);
      }
    }*/
});

module.exports = router;