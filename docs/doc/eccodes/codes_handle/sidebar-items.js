initSidebarItems({"enum":[["KeyType","Enum to represent and contain all possible types of keys inside `KeyedMessage`."],["KeysIteratorFlags","Flags to specify the subset of keys to iterate over by `FallibleIterator` in `KeyedMessage`. The flags can be used together."],["ProductKind","Enum representing the kind of product (file type) inside handled file. Used to indicate to ecCodes how it should decode/encode messages."]],"struct":[["CodesHandle","Main structure used to operate on the GRIB file. It takes a full ownership of the accessed file. It can be constructed either using a file or a memory buffer."],["Key","Structure representing a single key from the `KeyedMessage`."],["KeyedMessage","Structure used to access keys inside the GRIB file message. All data (including data values) contained by the file can only be accessed through the message and keys."],["NearestGridpoint","The structure returned by [`KeyedMessage::find_nearest()`]. Should always be analysed in relation to the coordinates request in `find_nearest()`."]]});