// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum
 */
var Character = {
  NONE: 0,
  MuLan: 1,
  Rapunzel: 2,
  Belle: 3,
  BookFan: 4,
  Other: 5,
  Unused: 6
};

/**
 * @constructor
 */
function Attacker() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
}

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Attacker}
 */
Attacker.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Attacker=} obj
 * @returns {Attacker}
 */
Attacker.getRootAsAttacker = function(bb, obj) {
  return (obj || new Attacker).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Attacker.prototype.swordAttackDamage = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
Attacker.prototype.mutate_sword_attack_damage = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Attacker.startAttacker = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} swordAttackDamage
 */
Attacker.addSwordAttackDamage = function(builder, swordAttackDamage) {
  builder.addFieldInt32(0, swordAttackDamage, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Attacker.endAttacker = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
function Rapunzel() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
}

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Rapunzel}
 */
Rapunzel.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
Rapunzel.prototype.hairLength = function() {
  return this.bb.readInt32(this.bb_pos);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
Rapunzel.prototype.mutate_hair_length = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 0);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} hair_length
 * @returns {flatbuffers.Offset}
 */
Rapunzel.createRapunzel = function(builder, hair_length) {
  builder.prep(4, 4);
  builder.writeInt32(hair_length);
  return builder.offset();
};

/**
 * @constructor
 */
function BookReader() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
}

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {BookReader}
 */
BookReader.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
BookReader.prototype.booksRead = function() {
  return this.bb.readInt32(this.bb_pos);
};

/**
 * @param {number} value
 * @returns {boolean}
 */
BookReader.prototype.mutate_books_read = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 0);

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} books_read
 * @returns {flatbuffers.Offset}
 */
BookReader.createBookReader = function(builder, books_read) {
  builder.prep(4, 4);
  builder.writeInt32(books_read);
  return builder.offset();
};

/**
 * @constructor
 */
function Movie() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
}

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Movie}
 */
Movie.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Movie=} obj
 * @returns {Movie}
 */
Movie.getRootAsMovie = function(bb, obj) {
  return (obj || new Movie).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {boolean}
 */
Movie.bufferHasIdentifier = function(bb) {
  return bb.__has_identifier('MOVI');
};

/**
 * @returns {Character}
 */
Movie.prototype.mainCharacterType = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {Character} */ (this.bb.readUint8(this.bb_pos + offset)) : Character.NONE;
};

/**
 * @param {Character} value
 * @returns {boolean}
 */
Movie.prototype.mutate_main_character_type = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb.writeUint8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
Movie.prototype.mainCharacter = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {number} index
 * @returns {Character}
 */
Movie.prototype.charactersType = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? /** @type {Character} */ (this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index)) : /** @type {Character} */ (0);
};

/**
 * @returns {number}
 */
Movie.prototype.charactersTypeLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Movie.prototype.charactersTypeArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @param {flatbuffers.Table=} obj
 * @returns {?flatbuffers.Table}
 */
Movie.prototype.characters = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__union(obj, this.bb.__vector(this.bb_pos + offset) + index * 4) : null;
};

/**
 * @returns {number}
 */
Movie.prototype.charactersLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Movie.startMovie = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Character} mainCharacterType
 */
Movie.addMainCharacterType = function(builder, mainCharacterType) {
  builder.addFieldInt8(0, mainCharacterType, Character.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mainCharacterOffset
 */
Movie.addMainCharacter = function(builder, mainCharacterOffset) {
  builder.addFieldOffset(1, mainCharacterOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} charactersTypeOffset
 */
Movie.addCharactersType = function(builder, charactersTypeOffset) {
  builder.addFieldOffset(2, charactersTypeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<Character>} data
 * @returns {flatbuffers.Offset}
 */
Movie.createCharactersTypeVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Movie.startCharactersTypeVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} charactersOffset
 */
Movie.addCharacters = function(builder, charactersOffset) {
  builder.addFieldOffset(3, charactersOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Movie.createCharactersVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Movie.startCharactersVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Movie.endMovie = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Movie.finishMovieBuffer = function(builder, offset) {
  builder.finish(offset, 'MOVI');
};

// Exports for Node.js and RequireJS
this.Character = Character;
this.Attacker = Attacker;
this.Rapunzel = Rapunzel;
this.BookReader = BookReader;
this.Movie = Movie;
