<?php
// automatically generated by the FlatBuffers compiler, do not modify

namespace ;

use \Google\FlatBuffers\Struct;
use \Google\FlatBuffers\Table;
use \Google\FlatBuffers\ByteBuffer;
use \Google\FlatBuffers\FlatBufferBuilder;

class Rapunzel extends Struct
{
    /**
     * @param int $_i offset
     * @param ByteBuffer $_bb
     * @return Rapunzel
     **/
    public function init($_i, ByteBuffer $_bb)
    {
        $this->bb_pos = $_i;
        $this->bb = $_bb;
        return $this;
    }

    /**
     * @return int
     */
    public function GetHairLength()
    {
        return $this->bb->getInt($this->bb_pos + 0);
    }


    /**
     * @return int offset
     */
    public static function createRapunzel(FlatBufferBuilder $builder, $hairLength)
    {
        $builder->prep(4, 4);
        $builder->putInt($hairLength);
        return $builder->offset();
    }
}
