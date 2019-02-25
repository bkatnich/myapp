/**
 * bController.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import express from 'express'
import mongoose from 'mongoose'
import winston from 'winston';
  
// Model
const B = mongoose.model('B');

// Routes
let router = express.Router();

/**
 * Get all
 */
router.get('/', async (req, res) => 
{
    winston.debug('Get all called')

    res.status(200).send("Get all B called successfully")
    /*try
    {
        const bList = await B.find({})
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

    res.status(200).send("Get one B called successfully with id " + req.params.id)
    /*try
    {
        const b = await B.findOne({_id: req.params.id}, {}); 
        
        if (!b) 
        {
            res.status(404).json('{ message: b for id ' + req.params.id + ' not found }');
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

    res.status(200).send("Delete B called successfully with id " + req.params.id)
    /*try 
    {
        const b = await B.findByIdAndDelete({_id: req.params.id});
        
        if (!b) 
        {
            res.status(404).json('{ message: b for id ' + req.params.id + ' not found }');
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

    res.status(200).send("Post an B called successfully with body: " + req.body)
    /*try 
    {
        const b = new B(req.body);
    
        await b.save();

        res.send(b);
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

    res.status(200).send("Put an B called successfully with body: " + req.body)
    /*try 
    {
        const b = await B.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        
        if (!b) 
        {
            res.status(404).json('{ message: b for id ' + req.params.id + ' not found }');
        }
        else
        {
            res.send(b)
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