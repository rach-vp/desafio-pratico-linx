#!/usr/bin/env python
#-*- coding: utf-8 -*-

import os
import json
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['e-commerce']
posts = db['catalog']

# Sweep ../catalog/catalog.json
cur_path = os.path.dirname(__file__)
catalog_path = os.path.join(cur_path, '..', 'catalog\\catalog.json')

with open(catalog_path, 'rb') as catalog:
  for line in catalog:
# Inserting documents into MongoDB
    post = json.loads(line.strip())
    post_id = posts.insert_one(post).inserted_id
